import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon, CheckIcon, StarIcon } from 'lucide-react'

const Pricing = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link to='/' className='inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all mb-4'>
            <ArrowLeftIcon className="size-4"/> Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Pricing Plans</h1>
          <p className="text-gray-600 mt-2">Choose the perfect plan for your career needs</p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Free Plan */}
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">Free</h3>
              <div className="mt-4 flex items-baseline justify-center">
                <span className="text-5xl font-bold text-gray-900">$0</span>
                <span className="text-xl text-gray-500 ml-1">/month</span>
              </div>
              <p className="text-gray-600 mt-4">Perfect for getting started</p>
            </div>
            
            <ul className="mt-8 space-y-4">
              <li className="flex items-center">
                <CheckIcon className="size-5 text-green-600 mr-3" />
                <span className="text-gray-700">1 Resume</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="size-5 text-green-600 mr-3" />
                <span className="text-gray-700">3 Template Options</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="size-5 text-green-600 mr-3" />
                <span className="text-gray-700">PDF Download</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="size-5 text-green-600 mr-3" />
                <span className="text-gray-700">Basic Support</span>
              </li>
            </ul>
            
            <Link to="/app?state=register" className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition mt-8 block text-center">
              Get Started Free
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-lg shadow-lg border-2 border-green-500 p-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <StarIcon className="size-4" /> Most Popular
              </span>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">Pro</h3>
              <div className="mt-4 flex items-baseline justify-center">
                <span className="text-5xl font-bold text-gray-900">$9</span>
                <span className="text-xl text-gray-500 ml-1">/month</span>
              </div>
              <p className="text-gray-600 mt-4">Best for job seekers</p>
            </div>
            
            <ul className="mt-8 space-y-4">
              <li className="flex items-center">
                <CheckIcon className="size-5 text-green-600 mr-3" />
                <span className="text-gray-700">Unlimited Resumes</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="size-5 text-green-600 mr-3" />
                <span className="text-gray-700">All Template Designs</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="size-5 text-green-600 mr-3" />
                <span className="text-gray-700">AI Content Suggestions</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="size-5 text-green-600 mr-3" />
                <span className="text-gray-700">Cover Letter Builder</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="size-5 text-green-600 mr-3" />
                <span className="text-gray-700">Priority Support</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="size-5 text-green-600 mr-3" />
                <span className="text-gray-700">No Watermarks</span>
              </li>
            </ul>
            
            <Link to="/app?state=register" className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition mt-8 block text-center">
              Start Pro Trial
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
              <div className="mt-4 flex items-baseline justify-center">
                <span className="text-5xl font-bold text-gray-900">$29</span>
                <span className="text-xl text-gray-500 ml-1">/month</span>
              </div>
              <p className="text-gray-600 mt-4">For teams and organizations</p>
            </div>
            
            <ul className="mt-8 space-y-4">
              <li className="flex items-center">
                <CheckIcon className="size-5 text-green-600 mr-3" />
                <span className="text-gray-700">Everything in Pro</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="size-5 text-green-600 mr-3" />
                <span className="text-gray-700">Team Management</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="size-5 text-green-600 mr-3" />
                <span className="text-gray-700">Custom Branding</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="size-5 text-green-600 mr-3" />
                <span className="text-gray-700">Analytics Dashboard</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="size-5 text-green-600 mr-3" />
                <span className="text-gray-700">24/7 Dedicated Support</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="size-5 text-green-600 mr-3" />
                <span className="text-gray-700">API Access</span>
              </li>
            </ul>
            
            <button className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition mt-8">
              Contact Sales
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Can I cancel my subscription anytime?</h3>
              <p className="text-gray-600">Yes, you can cancel your subscription at any time. You'll continue to have access to Pro features until the end of your billing period.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600">We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team for a full refund.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. All payments are processed securely.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing