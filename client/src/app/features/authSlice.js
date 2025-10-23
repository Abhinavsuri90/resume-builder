import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token') || null,
        user: null,
        loading: true,
        isAuthenticated: false
    },
    reducers: {
        login: (state, action)=>{
            state.token = action.payload.token
            state.user = action.payload.user
            state.isAuthenticated = true
            state.loading = false
        },
        logout: (state)=>{
            state.token = null,
            state.user = null,
            state.isAuthenticated = false
            localStorage.removeItem('token')
        },
        setLoading: (state, action)=>{
            state.loading = action.payload
        },
        setUser: (state, action)=>{
            state.user = action.payload
            state.isAuthenticated = true
            state.loading = false
        }
    }
})

export const {login, logout, setLoading, setUser} = authSlice.actions

export default authSlice.reducer