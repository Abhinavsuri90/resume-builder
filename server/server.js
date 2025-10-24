import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection
await connectDB()

app.use(express.json())
app.use(cors({
    origin: [
        "http://localhost:5173", 
        "http://localhost:5174", 
        "https://resume-maker-ai-app.netlify.app",
        "https://resume-builder-zeta-woad.vercel.app"
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-Time']
}))

// Health check endpoint
app.get('/', (req, res)=> {
    res.status(200).json({
        success: true,
        message: 'Resume Builder API is running',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    })
})

// API routes
app.use('/api/users', userRouter)
app.use('/api/resumes', resumeRouter)
app.use('/api/ai', aiRouter)

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
        path: req.originalUrl
    })
})

// Global error handler
app.use((err, req, res, next) => {
    console.error('Global error:', err);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal server error',
        code: err.code || 'SERVER_ERROR'
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    
});