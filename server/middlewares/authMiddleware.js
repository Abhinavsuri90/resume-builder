import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const protect = async (req, res, next) => {
    let token;
    
    try {
        // Extract token from Authorization header (Bearer token format)
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        } else if (req.headers.authorization) {
            // Fallback for direct token (backward compatibility)
            token = req.headers.authorization;
        }

        // Check if token exists
        if (!token) {
            return res.status(401).json({ 
                success: false,
                message: 'Access denied. No token provided.',
                code: 'NO_TOKEN' 
            });
        }

        // Verify JWT_SECRET exists
        if (!process.env.JWT_SECRET) {
            console.error('CRITICAL: JWT_SECRET is not configured');
            return res.status(500).json({ 
                success: false,
                message: 'Server configuration error',
                code: 'SERVER_CONFIG_ERROR' 
            });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Validate decoded token structure
        if (!decoded || !decoded.userId) {
            return res.status(401).json({ 
                success: false,
                message: 'Invalid token structure',
                code: 'MALFORMED_TOKEN' 
            });
        }
        
        // Check if user still exists
        const user = await User.findById(decoded.userId).select('-password');
        if (!user) {
            return res.status(401).json({ 
                success: false,
                message: 'User not found. Please login again.',
                code: 'USER_NOT_FOUND' 
            });
        }

        // Add user info to request
        req.userId = decoded.userId;
        req.user = user;
        next();
    } catch (error) {
        console.error('Auth middleware error:', error.message);
        
        let message = 'Authentication failed';
        let code = 'INVALID_TOKEN';
        let statusCode = 401;

        if (error.name === 'TokenExpiredError') {
            message = 'Your session has expired. Please login again.';
            code = 'TOKEN_EXPIRED';
        } else if (error.name === 'JsonWebTokenError') {
            message = 'Invalid or malformed token. Please login again.';
            code = 'MALFORMED_TOKEN';
        } else if (error.name === 'NotBeforeError') {
            message = 'Token not active yet';
            code = 'TOKEN_NOT_ACTIVE';
        } else if (error.message.includes('jwt')) {
            message = 'Token verification failed';
            code = 'TOKEN_VERIFICATION_FAILED';
        }

        return res.status(statusCode).json({ 
            success: false,
            message,
            code,
            timestamp: new Date().toISOString()
        });
    }
}

export default protect;