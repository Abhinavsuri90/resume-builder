import User from "../models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Resume from "../models/Resume.js";


const generateToken = (userId) => {
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
    }
    const token = jwt.sign(
        { userId }, 
        process.env.JWT_SECRET, 
        { 
            expiresIn: '30d', // Extended to 30 days for better UX
            issuer: 'resume-builder',
            audience: 'resume-builder-users'
        }
    );
    return token;
}

// controller for user registration
// POST: /api/users/register
export const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        // check if required fields are present
        if(!name || !email || !password){
            return res.status(400).json({
                success: false,
                message: 'All fields are required (name, email, password)',
                code: 'MISSING_FIELDS'
            })
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({
                success: false,
                message: 'Invalid email format',
                code: 'INVALID_EMAIL'
            })
        }

        // Validate password length
        if(password.length < 6){
            return res.status(400).json({
                success: false,
                message: 'Password must be at least 6 characters',
                code: 'WEAK_PASSWORD'
            })
        }

        // check if user already exists
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(409).json({
                success: false,
                message: 'User with this email already exists',
                code: 'USER_EXISTS'
            })
        }

        // create new user
         const hashedPassword = await bcrypt.hash(password, 10)
         const newUser = await User.create({
            name, 
            email, 
            password: hashedPassword
         })

         // Generate token
         const token = generateToken(newUser._id)
         
         // Prepare user response
         const userResponse = {
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            createdAt: newUser.createdAt
         }

         return res.status(201).json({
            success: true,
            message: 'User registered successfully', 
            token, 
            user: userResponse
        })

    } catch (error) {
        console.error('Registration error:', error);
        return res.status(500).json({
            success: false,
            message: 'Registration failed. Please try again.',
            code: 'REGISTRATION_ERROR'
        })
    }
}

// controller for user login
// POST: /api/users/login
export const loginUser = async (req, res) => {
    try {
        const { email, password} = req.body;

        // Validate input
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: 'Email and password are required',
                code: 'MISSING_CREDENTIALS'
            })
        }

        // check if user exists
        const user = await User.findOne({email})
        if(!user){
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password',
                code: 'INVALID_CREDENTIALS'
            })
        }

        // check if password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password',
                code: 'INVALID_CREDENTIALS'
            })
        }

        // return success message
         const token = generateToken(user._id)
         
         // Remove password from response
         const userResponse = {
            _id: user._id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt
         }

         return res.status(200).json({
            success: true,
            message: 'Login successful', 
            token, 
            user: userResponse
        })

    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({
            success: false,
            message: 'Login failed. Please try again.',
            code: 'LOGIN_ERROR'
        })
    }
}

// controller for getting user by id
// GET: /api/users/data
export const getUserById = async (req, res) => {
    try {
        const userId = req.userId;

        // Validate userId
        if(!userId){
            return res.status(400).json({
                success: false,
                message: 'User ID not found in request',
                code: 'MISSING_USER_ID'
            })
        }

        // check if user exists
        const user = await User.findById(userId).select('-password')
        if(!user){
            return res.status(404).json({
                success: false,
                message: 'User not found',
                code: 'USER_NOT_FOUND'
            })
        }
        
        // return user
        return res.status(200).json({
            success: true,
            user
        })

    } catch (error) {
        console.error('Get user error:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to fetch user data',
            code: 'FETCH_USER_ERROR'
        })
    }
}

// controller for getting user resumes
// GET: /api/users/resumes
export const getUserResumes = async (req, res) => {
    try {
        const userId = req.userId;

        // return user resumes
        const resumes = await Resume.find({userId})
        return res.status(200).json({resumes})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}