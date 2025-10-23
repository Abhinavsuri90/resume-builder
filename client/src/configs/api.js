import axios from 'axios'

// Force production URL for deployment
const baseURL = "https://resume-builder-xw2z.onrender.com"

const api = axios.create({
    baseURL: baseURL,
    timeout: 30000, // 30 second timeout for cold starts
    headers: {
        'Content-Type': 'application/json',
    }
})

// Request interceptor to add auth token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            // Always use Bearer format for consistency
            config.headers.Authorization = `Bearer ${token}`
        }
        
        // Add request timestamp for debugging
        config.headers['X-Request-Time'] = new Date().toISOString()
        
        return config
    },
    (error) => {
        console.error('Request interceptor error:', error)
        return Promise.reject(error)
    }
)

// Global retry configuration
let isRefreshing = false
let failedQueue = []

const processQueue = (error, token = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error)
        } else {
            prom.resolve(token)
        }
    })
    
    failedQueue = []
}

// Response interceptor for better error handling
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config

        // Handle common errors
        if (error.code === 'ECONNABORTED') {
            error.message = 'Server is starting up, please wait and try again...'
        } else if (error.response?.status === 401) {
            const errorCode = error.response?.data?.code

            // Handle different types of 401 errors
            if (errorCode === 'TOKEN_EXPIRED' && !originalRequest._retry) {
                if (isRefreshing) {
                    // If already refreshing, queue the request
                    return new Promise((resolve, reject) => {
                        failedQueue.push({ resolve, reject })
                    }).then(() => {
                        return api(originalRequest)
                    }).catch(err => {
                        return Promise.reject(err)
                    })
                }

                originalRequest._retry = true
                isRefreshing = true

                try {
                    // Clear expired token
                    localStorage.removeItem('token')
                    
                    // Process queue with error (logout user)
                    processQueue(error, null)
                    
                    // Redirect to login
                    if (window.location.pathname !== '/app') {
                        window.location.href = '/app?state=login&reason=expired'
                    }
                    
                    return Promise.reject(error)
                } catch (refreshError) {
                    processQueue(refreshError, null)
                    localStorage.removeItem('token')
                    if (window.location.pathname !== '/app') {
                        window.location.href = '/app?state=login&reason=error'
                    }
                    return Promise.reject(refreshError)
                } finally {
                    isRefreshing = false
                }
            } else {
                // Invalid token or user not found
                localStorage.removeItem('token')
                if (window.location.pathname !== '/app' && errorCode !== 'NO_TOKEN') {
                    window.location.href = '/app?state=login&reason=invalid'
                }
            }
        } else if (error.response?.status >= 500) {
            error.message = 'Server error. Please try again later.'
        } else if (error.code === 'NETWORK_ERROR' || !error.response) {
            error.message = 'Network error. Please check your connection.'
        }
        
        return Promise.reject(error)
    }
)

export default api