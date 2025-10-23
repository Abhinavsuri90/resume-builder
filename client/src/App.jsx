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
import { useDispatch } from 'react-redux'
import api from './configs/api'
import { login, setLoading, logout } from './app/features/authSlice'
import { Toaster } from 'react-hot-toast'

const App = () => {

  const dispatch = useDispatch()

  const getUserData = async () => {
    const storedToken = localStorage.getItem('token')
    
    try {
      if (storedToken) {
        // Get user data from server
        const { data } = await api.get('/api/users/data')
        
        if (data.user) {
          dispatch(login({
            token: storedToken,
            user: data.user
          }))
        }
      }
    } catch (error) {
      console.error('Auth error:', error)
      // Only clear token if it's actually invalid
      if (error.response?.status === 401) {
        localStorage.removeItem('token')
        dispatch(logout())
      }
    } finally {
      dispatch(setLoading(false))
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <>
      <Toaster />
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
