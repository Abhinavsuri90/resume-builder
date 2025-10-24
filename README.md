# 🚀 Resume Builder - Full Stack Application

A modern, responsive resume builder application built with React, Node.js, and MongoDB. Create professional resumes with multiple templates, AI-powered content suggestions, and real-time preview.

## 🌐 Live Demo

### Live Application
- **Frontend**: [https://resume-builder-zeta-woad.vercel.app](https://resume-builder-zeta-woad.vercel.app)
- **Backend API**: [https://resume-builder-xw2z.onrender.com](https://resume-builder-xw2z.onrender.com)
- **GitHub Repository**: [https://github.com/Abhinavsuri90/resume-builder](https://github.com/Abhinavsuri90/resume-builder)

## ✨ Features

### 🎯 Core Resume Building
- **Multiple Resume Templates**: Choose from Classic, Modern, Minimal designs
- **AI-Powered Content**: Get intelligent suggestions for resume content with Gemini AI
- **Real-time Preview**: See changes instantly as you type
- **PDF Export**: Download professional resumes as PDF files
- **Image Upload**: Add profile pictures with ImageKit integration
- **Template Customization**: Personalize colors and layouts

### 🚀 Interactive Demo Experience  
- **Try Demo Button**: Interactive 6-step walkthrough without signup
- **Live Preview Panel**: Real-time resume building simulation
- **AI Content Generation**: Typing animation showing AI in action  
- **Auto-Play Mode**: Automated demo with pause/resume controls
- **Template Showcase**: Live template switching demonstration
- **Confetti Animation**: Celebration effects on completion

### 💼 Professional Website Features
- **Complete Footer Pages**: 6 comprehensive professional pages
  - **Company**: Mission, vision, team, values, and statistics
  - **Blogs**: Career insights with featured articles and newsletter
  - **Community**: Member features, success stories, and events  
  - **Careers**: Job openings with hiring process and benefits
  - **Affiliate**: Partner program with commission structure
  - **Terms**: Comprehensive legal terms and conditions
- **Enhanced Footer**: Newsletter signup, social media, back-to-top button
- **Professional Branding**: Consistent design and Indian market focus

### 🔐 User Management & Security
- **User Authentication**: Secure JWT-based login and registration
- **Cloud Storage**: Save and manage multiple resumes securely
- **Resume Privacy**: Public/private resume sharing controls
- **Data Protection**: Encrypted user data and secure file handling

### 📱 User Experience
- **Responsive Design**: Perfect on desktop, tablet, and mobile
- **Smooth Animations**: Professional transitions and hover effects
- **Intuitive Navigation**: Easy-to-use interface with clear workflows
- **Toast Notifications**: Beautiful success/error messages
- **Loading States**: Proper feedback during operations

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
├── client/                     # React frontend application
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── home/          # Homepage components (Hero, Footer, etc.)
│   │   │   ├── templates/     # Resume template components
│   │   │   ├── DemoModal.jsx  # Interactive demo modal
│   │   │   └── ...
│   │   ├── pages/             # Page components
│   │   │   ├── About.jsx      # About us page
│   │   │   ├── Blogs.jsx      # Blog listing page
│   │   │   ├── Careers.jsx    # Careers page
│   │   │   ├── Community.jsx  # Community page
│   │   │   ├── Company.jsx    # Company information
│   │   │   ├── Terms.jsx      # Terms of service
│   │   │   ├── Affiliate.jsx  # Affiliate program
│   │   │   ├── Dashboard.jsx  # User dashboard
│   │   │   ├── ResumeBuilder.jsx # Resume editing interface
│   │   │   └── ...
│   │   ├── assets/            # Static assets and templates
│   │   ├── app/               # Redux store and slices
│   │   └── configs/           # API and configuration files
├── server/                    # Node.js backend application
│   ├── configs/              # Database and service configurations
│   │   ├── db.js            # MongoDB connection
│   │   ├── ai.js            # AI service (Gemini) config
│   │   ├── imageKit.js      # ImageKit configuration
│   │   └── multer.js        # File upload configuration
│   ├── controllers/          # API route controllers
│   │   ├── userController.js # User management
│   │   ├── resumeController.js # Resume operations
│   │   └── aiController.js   # AI content generation
│   ├── middlewares/          # Custom middleware functions
│   ├── models/               # Database models
│   │   ├── User.js          # User schema
│   │   └── Resume.js        # Resume schema
│   ├── routes/               # API route definitions
│   └── server.js             # Express server entry point
├── DEPLOYMENT.md             # Deployment documentation
├── README.md                 # Project documentation
└── package.json              # Project dependencies
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
3. Set build settings:
   - Framework: Vite
   - Root Directory: `client`
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy automatically on every push

### Backend (Render)
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

##  Acknowledgments

- **React Team** for the amazing framework and ecosystem
- **MongoDB** for the flexible and scalable database solution
- **Google AI** for Gemini API integration capabilities
- **Tailwind CSS** for the utility-first styling approach
- **Netlify & Render** for reliable hosting platforms
- **Open Source Community** for incredible tools and libraries

---

### 📞 Contact & Support

- **Developer**: Abhinav Suri
- Contact through GitHub profile


**🌟 If this project helped you, please give it a star on GitHub!**

---
**Built with ❤️ in India 🇮🇳 **