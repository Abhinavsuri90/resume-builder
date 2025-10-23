import { Lock, Mail, User2Icon, Loader2 } from 'lucide-react'
import React from 'react'
import api from '../configs/api'
import { useDispatch } from 'react-redux'
import { login } from '../app/features/authSlice'
import toast from 'react-hot-toast'

const Login = () => {

    const dispatch = useDispatch()
  const query = new URLSearchParams(window.location.search)
  const urlState = query.get('state')
  const [state, setState] = React.useState(urlState || "login")
  const [isLoading, setIsLoading] = React.useState(false)
  const [errors, setErrors] = React.useState({})

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    // Validate form before submission
    const validateForm = () => {
        const newErrors = {}
        
        if (state !== "login" && !formData.name.trim()) {
            newErrors.name = "Name is required"
        }
        
        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid"
        }
        
        if (!formData.password.trim()) {
            newErrors.password = "Password is required"
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters"
        }
        
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        // Prevent multiple submissions
        if (isLoading) return
        
        // Validate form
        if (!validateForm()) return
        
        setIsLoading(true)
        setErrors({})
        
        try {
            const { data } = await api.post(`/api/users/${state}`, formData)
            dispatch(login(data))
            localStorage.setItem('token', data.token)
            toast.success(data.message)
        } catch (error) {
            const errorMessage = error?.response?.data?.message || 
                               error.code === 'ECONNABORTED' ? 'Request timeout. Please try again.' :
                               error.message || 'Something went wrong. Please try again.'
            toast.error(errorMessage)
        } finally {
            setIsLoading(false)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
      <form onSubmit={handleSubmit} className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white">
                <h1 className="text-gray-900 text-3xl mt-10 font-medium">{state === "login" ? "Login" : "Sign up"}</h1>
                <p className="text-gray-500 text-sm mt-2">Please {state} to continue</p>
                {state !== "login" && (
                    <div className="mt-6">
                        <div className={`flex items-center w-full bg-white border h-12 rounded-full overflow-hidden pl-6 gap-2 ${errors.name ? 'border-red-400' : 'border-gray-300/80'}`}>
                            <User2Icon size={16} color='#6B7280'/>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Name" 
                                className="border-none outline-none ring-0 w-full pr-4" 
                                value={formData.name} 
                                onChange={handleChange} 
                                disabled={isLoading}
                            />
                        </div>
                        {errors.name && <p className="text-red-500 text-xs mt-1 text-left pl-4">{errors.name}</p>}
                    </div>
                )}
                <div className="mt-4">
                    <div className={`flex items-center w-full bg-white border h-12 rounded-full overflow-hidden pl-6 gap-2 ${errors.email ? 'border-red-400' : 'border-gray-300/80'}`}>
                        <Mail size={13} color="#6B7280" />
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email id" 
                            className="border-none outline-none ring-0 w-full pr-4" 
                            value={formData.email} 
                            onChange={handleChange} 
                            disabled={isLoading}
                        />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1 text-left pl-4">{errors.email}</p>}
                </div>
                <div className="mt-4">
                    <div className={`flex items-center w-full bg-white border h-12 rounded-full overflow-hidden pl-6 gap-2 ${errors.password ? 'border-red-400' : 'border-gray-300/80'}`}>
                        <Lock size={13} color="#6B7280"/>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            className="border-none outline-none ring-0 w-full pr-4" 
                            value={formData.password} 
                            onChange={handleChange} 
                            disabled={isLoading}
                        />
                    </div>
                    {errors.password && <p className="text-red-500 text-xs mt-1 text-left pl-4">{errors.password}</p>}
                </div>
                <div className="mt-4 text-left text-green-500">
                    <button className="text-sm hover:underline" type="button" disabled={isLoading}>Forget password?</button>
                </div>
                <button 
                    type="submit" 
                    disabled={isLoading}
                    className="mt-2 w-full h-11 rounded-full text-white bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                    {isLoading && <Loader2 size={16} className="animate-spin" />}
                    {isLoading ? 'Please wait...' : (state === "login" ? "Login" : "Sign up")}
                </button>
                <p className={`text-gray-500 text-sm mt-3 mb-11 ${isLoading ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`}>
                    {state === "login" ? "Don't have an account?" : "Already have an account?"} 
                    <a 
                        onClick={() => !isLoading && setState(prev => prev === "login" ? "register" : "login")} 
                        className="text-green-500 hover:underline ml-1 cursor-pointer"
                    >
                        click here
                    </a>
                </p>
            </form>
    </div>
  )
}

export default Login
