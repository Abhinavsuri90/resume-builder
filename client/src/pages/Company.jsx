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
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Company</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-12 text-center">
            Building the future of professional resume creation with cutting-edge AI technology.
          </p>

          {/* Mission Section */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg">
              To democratize access to professional resume creation tools and help every job seeker present their best self to potential employers through AI-powered assistance and beautiful design.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 text-lg">
              A world where career opportunities are accessible to everyone, regardless of their design skills or writing expertise. We envision a future where AI empowers individuals to showcase their unique value propositions effectively.
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

          {/* Team Section */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold text-gray-900">Alex Johnson</h3>
                <p className="text-green-600">CEO & Founder</p>
                <p className="text-sm text-gray-600 mt-2">Former VP at LinkedIn, passionate about career development</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold text-gray-900">Sarah Chen</h3>
                <p className="text-green-600">CTO</p>
                <p className="text-sm text-gray-600 mt-2">AI/ML expert with 10+ years at Google and Microsoft</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold text-gray-900">Marcus Rivera</h3>
                <p className="text-green-600">Head of Design</p>
                <p className="text-sm text-gray-600 mt-2">Former design lead at Airbnb, UX/UI specialist</p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🎯 User-Centric</h3>
                <p className="text-gray-600">Every decision we make is guided by what's best for our users and their career success.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🚀 Innovation</h3>
                <p className="text-gray-600">We continuously push the boundaries of what's possible with AI and design technology.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🤝 Accessibility</h3>
                <p className="text-gray-600">Professional resume tools should be available to everyone, regardless of background or budget.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">💡 Excellence</h3>
                <p className="text-gray-600">We maintain the highest standards in product quality, security, and customer support.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-green-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Mission</h2>
            <p className="text-gray-600 mb-6">Ready to take your career to the next level?</p>
            <div className="flex justify-center gap-4">
              <Link to="/app" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
                Get Started
              </Link>
              <Link to="/careers" className="border border-green-500 text-green-600 hover:bg-green-50 px-8 py-3 rounded-full font-medium transition-colors">
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Company