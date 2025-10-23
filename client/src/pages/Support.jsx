import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon, MailIcon } from 'lucide-react'

const Support = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link to='/' className='inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all mb-4'>
            <ArrowLeftIcon className="size-4"/> Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Support Center</h1>
          <p className="text-gray-600 mt-2">Get help directly from the creator - I'm here to assist you personally!</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="font-semibold text-gray-900 mb-2">How do I create my first resume?</h3>
                <p className="text-gray-600">Click "Get Started" on our homepage, sign up for an account, and follow our step-by-step resume builder. You can choose from multiple professional templates and fill in your information.</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Can I download my resume in different formats?</h3>
                <p className="text-gray-600">Yes! You can download your resume as a PDF file. We're working on adding more formats like Word and plain text in future updates.</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="font-semibold text-gray-900 mb-2">How does the AI content suggestion work?</h3>
                <p className="text-gray-600">Our AI analyzes your job title and experience to suggest relevant skills, responsibilities, and achievements. It helps you write more compelling content for your resume.</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Is my personal information secure?</h3>
                <p className="text-gray-600">Absolutely! As the sole developer, I take data security very seriously. I use industry-standard encryption to protect your data and personally ensure your information is never shared with third parties.</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Can I create multiple resumes?</h3>
                <p className="text-gray-600">Yes! You can create and manage multiple resumes for different job applications. Each resume can be customized with different templates and content.</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="font-semibold text-gray-900 mb-2">How do I edit an existing resume?</h3>
                <p className="text-gray-600">Go to your dashboard, find the resume you want to edit, and click on it. You'll be taken to the resume builder where you can make changes and save them.</p>
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <MailIcon className="size-6 text-green-600" />
                </div>
                <h4 className="font-medium text-gray-900 text-lg mb-2">Email Us</h4>
                <p className="text-gray-600 mb-4">Have questions or need help? I personally respond to all emails and would love to hear from you!</p>
                <a 
                  href="mailto:abhinavsuri27@gmail.com" 
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
                >
                  <MailIcon className="size-4" />
                  abhinavsuri27@gmail.com
                </a>
                <p className="text-sm text-gray-500 mt-3">I typically respond within 24 hours</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Support