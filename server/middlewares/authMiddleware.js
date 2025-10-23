import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const protect = async (req, res, next) => {
    let token;
    
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
            message: 'Access denied. No token provided.',
            code: 'NO_TOKEN' 
        });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Check if user still exists
        const user = await User.findById(decoded.userId).select('-password');
        if (!user) {
            return res.status(401).json({ 
                message: 'Token is valid but user no longer exists.',
                code: 'USER_NOT_FOUND' 
            });
        }

        // Add user info to request
        req.userId = decoded.userId;
        req.user = user;
        next();
    } catch (error) {
        let message = 'Invalid token';
        let code = 'INVALID_TOKEN';

        if (error.name === 'TokenExpiredError') {
            message = 'Token has expired';
            code = 'TOKEN_EXPIRED';
        } else if (error.name === 'JsonWebTokenError') {
            message = 'Invalid token format';
            code = 'MALFORMED_TOKEN';
        }

        return res.status(401).json({ 
            message,
            code,
            timestamp: new Date().toISOString()
        });
    }
}

export default protect;