import axios from 'axios'

// Force production URL for deployment
const baseURL = "https://resume-builder-xw2z.onrender.com"

const api = axios.create({
    baseURL: baseURL,
    timeout: 10000, // 10 second timeout
    headers: {
        'Content-Type': 'application/json',
    }
})

// Request interceptor to add auth token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// Response interceptor for better error handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle common errors
        if (error.code === 'ECONNABORTED') {
            error.message = 'Request timeout. Please check your connection.'
        } else if (error.response?.status === 401) {
            // Clear invalid token
            localStorage.removeItem('token')
            window.location.href = '/app?state=login'
        } else if (error.response?.status >= 500) {
            error.message = 'Server error. Please try again later.'
        }
        return Promise.reject(error)
    }
)

export default api