# 🚀 Resume Builder - Full Stack Application

A modern, responsive resume builder application built with React, Node.js, and MongoDB. Create professional resumes with multiple templates, AI-powered content suggestions, and real-time preview.

## 🌐 Live Demo

### Live Application
- **Frontend**: [https://resume-builder-git-main-abhinav-suris-projects.vercel.app](https://resume-builder-git-main-abhinav-suris-projects.vercel.app)
- **Backend API**: [https://resume-builder-xw2z.onrender.com](https://resume-builder-xw2z.onrender.com)
- **GitHub Repository**: [https://github.com/Abhinavsuri90/resume-builder](https://github.com/Abhinavsuri90/resume-builder)

## ✨ Features

- **Multiple Resume Templates**: Choose from Classic, Modern, Minimal designs
- **AI-Powered Content**: Get intelligent suggestions for resume content
- **Real-time Preview**: See changes instantly as you type
- **User Authentication**: Secure login and registration
- **Cloud Storage**: Save and manage multiple resumes
- **Image Upload**: Add profile pictures with ImageKit integration
- **Responsive Design**: Works perfectly on all devices
- **PDF Export**: Download resumes as PDF files

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **Vite** - Lightning fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Hot Toast** - Beautiful notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **Multer** - File upload handling
- **ImageKit** - Image optimization and delivery

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB
- ImageKit account (for image uploads)
- OpenAI/Gemini API key (for AI features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhinavsuri90/resume-builder.git
   cd resume-builder
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**
   
   **Server (.env):**
   ```bash
   cd ../server
   cp .env.example .env
   # Edit .env with your actual values
   ```
   
   **Client (.env):**
   ```bash
   cd ../client
   cp .env.example .env
   # Edit .env with your backend URL
   ```

5. **Start the development servers**
   
   **Backend (Terminal 1):**
   ```bash
   cd server
   npm run server
   ```
   
   **Frontend (Terminal 2):**
   ```bash
   cd client
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## 📁 Project Structure

```
resume-builder/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── assets/        # Static assets
│   │   ├── app/           # Redux store
│   │   └── configs/       # Configuration files
├── server/                # Node.js backend
│   ├── configs/          # Database and service configs
│   ├── controllers/      # Route controllers
│   ├── middlewares/      # Custom middlewares
│   ├── models/           # Database models
│   └── routes/           # API routes
└── README.md
```

## 🔐 Environment Variables

### Server Variables
- `JWT_SECRET` - Secret for JWT token generation
- `MONGODB_URI` - MongoDB connection string
- `IMAGEKIT_PRIVATE_KEY` - ImageKit private key
- `OPENAI_API_KEY` - OpenAI/Gemini API key
- `OPENAI_BASE_URL` - API base URL
- `PORT` - Server port (default: 3000)

### Client Variables
- `VITE_BASE_URL` - Backend API URL

## 📦 Available Scripts

### Server
- `npm start` - Start production server
- `npm run server` - Start development server with nodemon

### Client
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🚀 Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Backend (Railway/Render)
1. Connect GitHub repository
2. Set environment variables
3. Deploy with automatic builds

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

**Abhinav Suri**
- GitHub: [@Abhinavsuri90](https://github.com/Abhinavsuri90)

## 🙏 Acknowledgments

- React team for the amazing framework
- MongoDB for the flexible database
- All open source contributors

---
Built with ❤️ by Abhinav Suri