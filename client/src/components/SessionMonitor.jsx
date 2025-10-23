import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, checkTokenExpiry, setAuthError } from '../app/features/authSlice'
import { validateSession, performLogout } from '../utils/authUtils'
import toast from 'react-hot-toast'

/**
 * SessionMonitor - Handles automatic session validation and cleanup
 * This component should be rendered once in the app to monitor authentication
 */
const SessionMonitor = () => {
    const dispatch = useDispatch()
    const { token, isAuthenticated, tokenExpiry } = useSelector(state => state.auth)

    // Validate session with server
    const validateUserSession = useCallback(async () => {
        if (!token || !isAuthenticated) return

        try {
            const result = await validateSession()
            
            if (!result.valid) {
                const errorMessage = result.error === 'TOKEN_EXPIRED' 
                    ? 'Your session has expired. Please login again.'
                    : 'Authentication failed. Please login again.'
                
                toast.error(errorMessage)
                performLogout(dispatch, result.error)
            }
        } catch (error) {
            // Only logout on authentication errors, not network errors
            if (error.response?.status === 401) {
                performLogout(dispatch, 'Authentication failed')
            }
        }
    }, [token, isAuthenticated, dispatch])

    // Check token expiry every minute
    useEffect(() => {
        if (!isAuthenticated) return

        const interval = setInterval(() => {
            dispatch(checkTokenExpiry())
        }, 60 * 1000) // Check every minute

        return () => clearInterval(interval)
    }, [isAuthenticated, dispatch])

    // Validate session when token changes
    useEffect(() => {
        if (token && isAuthenticated) {
            validateUserSession()
        }
    }, [token, validateUserSession])

    // Handle browser tab visibility changes
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (!document.hidden && isAuthenticated) {
                // Check token when tab becomes active
                dispatch(checkTokenExpiry())
                validateUserSession()
            }
        }

        document.addEventListener('visibilitychange', handleVisibilityChange)
        return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
    }, [isAuthenticated, dispatch, validateUserSession])

    // Handle beforeunload to save state
    useEffect(() => {
        const handleBeforeUnload = () => {
            if (tokenExpiry) {
                sessionStorage.setItem('tokenExpiry', tokenExpiry.toString())
            }
        }

        window.addEventListener('beforeunload', handleBeforeUnload)
        return () => window.removeEventListener('beforeunload', handleBeforeUnload)
    }, [tokenExpiry])

    // Check for expired sessions on mount
    useEffect(() => {
        const savedExpiry = sessionStorage.getItem('tokenExpiry')
        if (savedExpiry && Date.now() > parseInt(savedExpiry)) {
            performLogout(dispatch, 'Session expired')
            sessionStorage.removeItem('tokenExpiry')
        }
    }, [dispatch])

    // This component doesn't render anything
    return null
}

export default SessionMonitor