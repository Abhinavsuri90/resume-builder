import { logout, checkTokenExpiry } from '../app/features/authSlice'
import api from '../configs/api'

/**
 * Token validation utility functions
 */
export const tokenUtils = {
    // Check if token is valid format
    isValidToken: (token) => {
        if (!token) return false
        try {
            // Basic JWT format check (3 parts separated by dots)
            const parts = token.split('.')
            return parts.length === 3
        } catch {
            return false
        }
    },

    // Get token expiry from JWT payload (without verification)
    getTokenExpiry: (token) => {
        try {
            const payload = JSON.parse(atob(token.split('.')[1]))
            return payload.exp ? payload.exp * 1000 : null // Convert to milliseconds
        } catch {
            return null
        }
    },

    // Check if token is expired
    isTokenExpired: (token) => {
        const expiry = tokenUtils.getTokenExpiry(token)
        return expiry ? Date.now() > expiry : false
    }
}

/**
 * Authentication middleware for checking user session
 */
export const authMiddleware = (store) => (next) => (action) => {
    const result = next(action)
    
    // Check token expiry after each action
    const state = store.getState()
    if (state.auth.token && tokenUtils.isTokenExpired(state.auth.token)) {
        store.dispatch(logout({ reason: 'Token expired' }))
    }
    
    return result
}

/**
 * Setup periodic token validation
 */
export const setupTokenValidation = (dispatch) => {
    // Check token every 5 minutes
    const interval = setInterval(() => {
        dispatch(checkTokenExpiry())
    }, 5 * 60 * 1000)
    
    return () => clearInterval(interval)
}

/**
 * Validate user session with server
 */
export const validateSession = async () => {
    try {
        const response = await api.get('/api/users/profile')
        return { valid: true, user: response.data.user }
    } catch (error) {
        return { 
            valid: false, 
            error: error.response?.data?.code || 'VALIDATION_FAILED' 
        }
    }
}

/**
 * Enhanced logout with cleanup
 */
export const performLogout = (dispatch, reason = null) => {
    // Clear all auth data
    localStorage.removeItem('token')
    
    // Dispatch logout action
    dispatch(logout({ reason }))
    
    // Clear any cached user data
    sessionStorage.clear()
}