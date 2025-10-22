import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon, UsersIcon, TargetIcon, AwardIcon } from 'lucide-react'

const About = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link to='/' className='inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all mb-4'>
            <ArrowLeftIcon className="size-4"/> Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
          <p className="text-gray-600 mt-2">Empowering careers through intelligent resume building</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe everyone deserves a chance to showcase their potential. Our mission is to democratize career opportunities by providing powerful, AI-driven tools that help job seekers create compelling resumes that get noticed.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2024, Resume Builder was born from a simple observation: too many talented individuals were being overlooked because their resumes didn't effectively communicate their value.
              </p>
              <p>
                Our founders, experienced recruiters and technologists, recognized that traditional resume builders were outdated and didn't leverage the power of modern AI to help job seekers succeed.
              </p>
              <p>
                Today, we're proud to have helped thousands of professionals land their dream jobs with resumes that truly represent their capabilities and potential.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-8">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900">50K+</div>
                <div className="text-gray-600">Resumes Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">4.8/5</div>
                <div className="text-gray-600">User Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <UsersIcon className="size-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">User-Centric</h4>
              <p className="text-gray-600">Every feature we build is designed with our users' success in mind. We listen, learn, and iterate based on your feedback.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TargetIcon className="size-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-gray-600">We leverage cutting-edge AI technology to provide intelligent suggestions and personalized experiences.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AwardIcon className="size-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h4>
              <p className="text-gray-600">We're committed to delivering the highest quality templates and tools that meet professional standards.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=60" alt="CEO" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h4 className="text-lg font-semibold text-gray-900">Abhinav Suri</h4>
              <p className="text-green-600 mb-2">Founder & CEO</p>
              <p className="text-sm text-gray-600">Former tech recruiter with 10+ years of experience</p>
            </div>

            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&auto=format&fit=crop&q=60" alt="CTO" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h4 className="text-lg font-semibold text-gray-900">Priya Sharma</h4>
              <p className="text-green-600 mb-2">Chief Technology Officer</p>
              <p className="text-sm text-gray-600">AI expert and former Google engineer</p>
            </div>

            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=60" alt="Head of Design" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h4 className="text-lg font-semibold text-gray-900">Raj Patel</h4>
              <p className="text-green-600 mb-2">Head of Design</p>
              <p className="text-sm text-gray-600">UX designer with expertise in career tools</p>
            </div>

            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=60" alt="Head of Marketing" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h4 className="text-lg font-semibold text-gray-900">Anita Singh</h4>
              <p className="text-green-600 mb-2">Head of Marketing</p>
              <p className="text-sm text-gray-600">Career coach and content strategist</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Build Your Perfect Resume?</h3>
          <p className="text-xl mb-8 opacity-90">Join thousands of successful job seekers who've landed their dream jobs with our platform.</p>
          <Link to="/app?state=register" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About