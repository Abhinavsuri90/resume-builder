import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token') || null,
        user: null,
        loading: true,
        isAuthenticated: !!localStorage.getItem('token'),
        tokenExpiry: null,
        authErrors: null
    },
    reducers: {
        login: (state, action)=>{
            state.token = action.payload.token
            state.user = action.payload.user
            state.isAuthenticated = true
            state.loading = false
            state.tokenExpiry = action.payload.expiresIn ? Date.now() + (action.payload.expiresIn * 1000) : null
            state.authErrors = null
            localStorage.setItem('token', action.payload.token)
        },
        logout: (state, action)=>{
            state.token = null
            state.user = null
            state.isAuthenticated = false
            state.tokenExpiry = null
            state.loading = false
            state.authErrors = action.payload?.reason || null
            localStorage.removeItem('token')
        },
        setLoading: (state, action)=>{
            state.loading = action.payload
        },
        setUser: (state, action)=>{
            state.user = action.payload
            state.isAuthenticated = true
            state.loading = false
            state.authErrors = null
        },
        setAuthError: (state, action)=>{
            state.authErrors = action.payload
            state.loading = false
        },
        clearAuthError: (state)=>{
            state.authErrors = null
        },
        refreshToken: (state, action)=>{
            state.token = action.payload.token
            state.tokenExpiry = action.payload.expiresIn ? Date.now() + (action.payload.expiresIn * 1000) : null
            localStorage.setItem('token', action.payload.token)
        },
        checkTokenExpiry: (state)=>{
            if (state.tokenExpiry && Date.now() > state.tokenExpiry) {
                state.token = null
                state.user = null
                state.isAuthenticated = false
                state.tokenExpiry = null
                state.authErrors = 'Token expired'
                localStorage.removeItem('token')
            }
        }
    }
})

export const {login, logout, setLoading, setUser, setAuthError, clearAuthError, refreshToken, checkTokenExpiry} = authSlice.actions

export default authSlice.reducer