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
    async (error) => {
        // Handle common errors
        if (error.code === 'ECONNABORTED') {
            error.message = 'Server is starting up, please wait and try again...'
        } else if (error.response?.status === 401) {
            // Clear invalid token
            localStorage.removeItem('token')
            // Don't auto-redirect, let user try again
        } else if (error.response?.status >= 500) {
            error.message = 'Server error. Please try again later.'
        } else if (error.code === 'NETWORK_ERROR' || !error.response) {
            error.message = 'Network error. Please check your connection.'
        }
        return Promise.reject(error)
    }
)

export default api