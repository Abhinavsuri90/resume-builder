import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/authSlice'
import { authMiddleware } from '../utils/authUtils'

export const store = configureStore({
    reducer: {
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }).concat(authMiddleware),
})