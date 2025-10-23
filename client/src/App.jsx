import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import ResumeBuilder from './pages/ResumeBuilder'
import Preview from './pages/Preview'
import Login from './pages/Login'
import About from './pages/About'
import Support from './pages/Support'
import Pricing from './pages/Pricing'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Company from './pages/Company'
import Blogs from './pages/Blogs'
import Affiliate from './pages/Affiliate'
import { useDispatch, useSelector } from 'react-redux'
import api from './configs/api'
import { login, setLoading, logout, checkTokenExpiry } from './app/features/authSlice'
import { Toaster } from 'react-hot-toast'
import { setupTokenValidation, tokenUtils, performLogout } from './utils/authUtils'
import SessionMonitor from './components/SessionMonitor'

const App = () => {

  const dispatch = useDispatch()
  const { token, isAuthenticated } = useSelector(state => state.auth)

  const getUserData = async () => {
    const storedToken = localStorage.getItem('token')
    
    try {
      if (storedToken) {
        // Validate token format first
        if (!tokenUtils.isValidToken(storedToken)) {
          console.warn('Invalid token format, clearing storage')
          performLogout(dispatch, 'Invalid token format')
          return
        }

        // Check if token is expired
        if (tokenUtils.isTokenExpired(storedToken)) {
          console.warn('Token expired, clearing storage')
          performLogout(dispatch, 'Token expired')
          return
        }

        // Validate with server
        const { data } = await api.get('/api/users/data')
        
        if (data.user) {
          const loginData = {
            token: storedToken,
            user: data.user,
            expiresIn: 30 * 24 * 60 * 60 // 30 days
          }
          dispatch(login(loginData))
        }
      }
    } catch (error) {
      console.error('Auth validation error:', error)
      
      // Handle specific error codes
      if (error.response?.data?.code === 'TOKEN_EXPIRED') {
        performLogout(dispatch, 'Session expired')
      } else if (error.response?.data?.code === 'USER_NOT_FOUND') {
        performLogout(dispatch, 'User not found')
      } else if (error.response?.status === 401) {
        performLogout(dispatch, 'Authentication failed')
      } else {
        // Network or other errors - don't log out user immediately
        console.warn('Network error during auth validation')
      }
    } finally {
      dispatch(setLoading(false))
    }
  }

  // Setup authentication monitoring
  useEffect(() => {
    getUserData()
    
    // Setup periodic token validation
    const cleanupTokenValidation = setupTokenValidation(dispatch)
    
    // Setup visibility change handler to check auth when tab becomes active
    const handleVisibilityChange = () => {
      if (!document.hidden && isAuthenticated) {
        dispatch(checkTokenExpiry())
      }
    }
    
    document.addEventListener('visibilitychange', handleVisibilityChange)
    
    return () => {
      cleanupTokenValidation()
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  // Monitor token changes and validate
  useEffect(() => {
    if (token && tokenUtils.isTokenExpired(token)) {
      performLogout(dispatch, 'Token expired')
    }
  }, [token, dispatch])

  return (
    <>
      <Toaster />
      <SessionMonitor />
      <Routes>
        <Route path='/' element={<Home />}/>

        <Route path='app' element={<Layout />}>
          <Route index element={<Dashboard />}/>
          <Route path='builder/:resumeId' element={<ResumeBuilder />}/>
        </Route>

        <Route path='view/:resumeId' element={<Preview />}/>
        
        {/* Footer Pages */}
        <Route path='about' element={<About />}/>
        <Route path='support' element={<Support />}/>
        <Route path='pricing' element={<Pricing />}/>
        <Route path='privacy' element={<Privacy />}/>
        <Route path='terms' element={<Terms />}/>
        <Route path='company' element={<Company />}/>
        <Route path='blogs' element={<Blogs />}/>
        <Route path='affiliate' element={<Affiliate />}/>

      </Routes>
    </>
  )
}

export default App
