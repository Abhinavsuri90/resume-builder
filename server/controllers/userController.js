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

        // Simple validation - just check if fields exist
        if(!name || !email || !password){
            return res.status(400).json({
                message: 'Name, email and password are required'
            })
        }

        // check if user already exists
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({
                message: 'User already exists'
            })
        }

        // create new user with hashed password
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({
            name, 
            email, 
            password: hashedPassword
        })

        // Generate token
        const token = generateToken(newUser._id)
         
        // Send success response
        return res.status(201).json({
            message: 'Registration successful', 
            token, 
            user: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        })

    } catch (error) {
        console.error('Registration error:', error);
        return res.status(500).json({
            message: 'Registration failed'
        })
    }
}

// controller for user login
// POST: /api/users/login
export const loginUser = async (req, res) => {
    try {
        const { email, password} = req.body;

        // Simple validation
        if(!email || !password){
            return res.status(400).json({
                message: 'Email and password are required'
            })
        }

        // Find user by email
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                message: 'Invalid credentials'
            })
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(400).json({
                message: 'Invalid credentials'
            })
        }

        // Generate token and send success response
        const token = generateToken(user._id)

        return res.status(200).json({
            message: 'Login successful', 
            token, 
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })

    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({
            message: 'Login failed'
        })
    }
}

// controller for getting user by id
// GET: /api/users/data
export const getUserById = async (req, res) => {
    try {
        const userId = req.userId;

        // Find user by ID
        const user = await User.findById(userId).select('-password')
        if(!user){
            return res.status(404).json({
                message: 'User not found'
            })
        }
        
        // Return user data
        return res.status(200).json({
            user
        })

    } catch (error) {
        console.error('Get user error:', error);
        return res.status(500).json({
            message: 'Failed to fetch user'
        })
    }
}

// controller for getting user resumes
// GET: /api/users/resumes
export const getUserResumes = async (req, res) => {
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

        // return user resumes
        const resumes = await Resume.find({userId}).sort({ updatedAt: -1 })
        return res.status(200).json({
            success: true,
            resumes,
            count: resumes.length
        })
    } catch (error) {
        console.error('Get resumes error:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to fetch resumes',
            code: 'FETCH_RESUMES_ERROR'
        })
    }
}