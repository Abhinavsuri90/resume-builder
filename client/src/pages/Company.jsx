import React from 'react'
import { Link } from 'react-router-dom'

const Company = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="Resume Builder" className="h-10 w-auto" />
            <span className="ml-2 text-xl font-semibold">Resume Builder</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About the Creator</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-12 text-center">
            A solo developer's journey to revolutionize professional resume creation with cutting-edge AI technology.
          </p>

          {/* Mission Section */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">My Mission</h2>
            <p className="text-gray-600 text-lg">
              As a solo developer, I'm dedicated to democratizing access to professional resume creation tools. My goal is to help every job seeker present their best self to potential employers through AI-powered assistance and beautiful, modern design - all crafted with personal attention to detail.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">My Vision</h2>
            <p className="text-gray-600 text-lg">
              I envision a world where career opportunities are accessible to everyone, regardless of their design skills or writing expertise. Through this platform, I'm creating a future where AI empowers individuals to showcase their unique value propositions effectively, making professional resume creation simple and accessible to all.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 my-12">
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">10K+</div>
              <div className="text-gray-600">Resumes Created</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">User Satisfaction</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>

          {/* Founder Section */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">The One-Man Army Behind Resume Builder</h2>
            <div className="flex flex-col items-center max-w-2xl mx-auto text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">AS</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Abhinav Suri</h3>
              <p className="text-green-600 font-medium text-lg mb-4">Founder, Developer & Visionary</p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  A passionate full-stack developer and entrepreneur who single-handedly built this entire platform from the ground up. 
                  With expertise in modern web technologies and AI integration, Abhinav has created a comprehensive resume building solution 
                  that empowers job seekers worldwide. From the initial concept to the final deployment, every line of code, every design element, 
                  and every feature has been crafted with dedication and attention to detail.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-6 w-full">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-1">Full-Stack Development</h4>
                  <p className="text-sm text-green-600">React, Node.js, MongoDB, AI Integration</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-1">UI/UX Design</h4>
                  <p className="text-sm text-blue-600">Modern, Responsive, User-Centric</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-1">Product Strategy</h4>
                  <p className="text-sm text-purple-600">Innovation, Quality, User Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Core Values I Stand By</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🎯 User-Centric Development</h3>
                <p className="text-gray-600">Every line of code I write is guided by what's best for users and their career success. Your feedback directly shapes the platform.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🚀 Continuous Innovation</h3>
                <p className="text-gray-600">I'm constantly pushing boundaries, implementing the latest AI technologies and design trends to stay ahead of the curve.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🤝 Universal Accessibility</h3>
                <p className="text-gray-600">Professional resume tools should be available to everyone. I believe quality shouldn't be limited by background or budget.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">💡 Uncompromising Excellence</h3>
                <p className="text-gray-600">Being a solo developer means I have complete control over quality. Every feature meets the highest standards of performance and security.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-green-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Build Your Perfect Resume?</h2>
            <p className="text-gray-600 mb-6">Join thousands of professionals who trust our AI-powered platform to create standout resumes.</p>
            <div className="flex justify-center gap-4">
              <Link to="/app" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
                Start Building Now
              </Link>
              <button 
                onClick={() => window.open('mailto:contact@resumebuilder.com', '_blank')}
                className="border border-green-500 text-green-600 hover:bg-green-50 px-8 py-3 rounded-full font-medium transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Company