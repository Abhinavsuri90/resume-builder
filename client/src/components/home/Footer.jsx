import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
    {/* Newsletter Section */}
    <div className="bg-gradient-to-r from-green-600 to-green-700 py-12 px-6 md:px-16 lg:px-24 xl:px-32 mt-20">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Career Tips</h3>
        <p className="text-green-100 mb-6 text-lg">Get the latest resume tips, career advice, and industry insights delivered weekly</p>
        <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <button
            type="submit"
            className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {isSubscribed ? '✓ Subscribed!' : 'Subscribe'}
          </button>
        </form>
      </div>
    </div>

<footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-gradient-to-r from-white via-green-200/60 to-white">
        <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
            <div className="flex flex-col">
                <Link to="/" onClick={scrollToTop}>
                    <img src="/logo.svg" alt="Resume Builder Logo" className="h-11 w-auto mb-4" />
                </Link>
                <p className="text-gray-600 max-w-xs leading-relaxed">
                    Build professional resumes with AI-powered assistance and beautiful templates. Land your dream job faster.
                </p>
            </div>
            <div>
                <p className="text-slate-800 font-semibold mb-3">Product</p>
                <ul className="space-y-3">
                    <li><Link to="/" className="hover:text-green-600 transition-colors duration-200 flex items-center">🏠 Home</Link></li>
                    <li><Link to="/support" className="hover:text-green-600 transition-colors duration-200 flex items-center">🛠️ Support</Link></li>
                    <li><Link to="/pricing" className="hover:text-green-600 transition-colors duration-200 flex items-center">💰 Pricing</Link></li>
                    <li><Link to="/affiliate" className="hover:text-green-600 transition-colors duration-200 flex items-center">🤝 Affiliate Program</Link></li>
                </ul>
            </div>
            <div>
                <p className="text-slate-800 font-semibold mb-3">Resources</p>
                <ul className="space-y-3">
                    <li><Link to="/company" className="hover:text-green-600 transition-colors duration-200 flex items-center">🏢 Company</Link></li>
                    <li><Link to="/blogs" className="hover:text-green-600 transition-colors duration-200 flex items-center">📝 Blogs</Link></li>
                    <li><Link to="/community" className="hover:text-green-600 transition-colors duration-200 flex items-center">👥 Community</Link></li>
                    <li><Link to="/careers" className="hover:text-green-600 transition-colors duration-200 flex items-center">🚀 Careers<span className="text-xs text-white bg-green-600 rounded-md ml-2 px-2 py-1 animate-pulse">We're hiring!</span></Link></li>
                    <li><Link to="/about" className="hover:text-green-600 transition-colors duration-200 flex items-center">ℹ️ About</Link></li>
                </ul>
            </div>
            <div>
                <p className="text-slate-800 font-semibold mb-3">Legal</p>
                <ul className="space-y-3">
                    <li><Link to="/privacy" className="hover:text-green-600 transition-colors duration-200 flex items-center">🔒 Privacy Policy</Link></li>
                    <li><Link to="/terms" className="hover:text-green-600 transition-colors duration-200 flex items-center">📄 Terms of Service</Link></li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col max-md:items-center max-md:text-center gap-4 items-end">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-green-100">
                <p className="max-w-60 text-gray-700 font-medium mb-3">Connect with us for updates and tips!</p>
                <div className="flex items-center gap-3">
                    <a href="https://dribbble.com/" target="_blank" rel="noreferrer" 
                       className="p-2 bg-pink-50 text-pink-600 rounded-full hover:bg-pink-100 transition-all duration-200 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
                            <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
                            <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/resume-builder-ai" target="_blank" rel="noreferrer"
                       className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-all duration-200 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect width="4" height="12" x="2" y="9"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                    <a href="https://x.com/resumebuilderai" target="_blank" rel="noreferrer"
                       className="p-2 bg-gray-50 text-gray-600 rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/@resumebuilder" target="_blank" rel="noreferrer"
                       className="p-2 bg-red-50 text-red-600 rounded-full hover:bg-red-100 transition-all duration-200 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                            <path d="m10 15 5-3-5-3z"></path>
                        </svg>
                    </a>
                </div>
            </div>
            
            {/* Back to Top Button */}
            <button 
                onClick={scrollToTop}
                className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-all duration-200 hover:scale-110 shadow-lg"
                title="Back to top"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m18 15-6-6-6 6"/>
                </svg>
            </button>
            
            <div className="text-center mt-4">
                <p className="text-gray-600">© 2025 Resume Builder AI. All rights reserved.</p>
                <p className="text-xs text-gray-500 mt-1">Made with ❤️ in India</p>
            </div>
        </div>
    </footer>

       <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
        * {
            font-family: 'Poppins', sans-serif;
        }
    `}</style>
    </>
  )
}

export default Footer
