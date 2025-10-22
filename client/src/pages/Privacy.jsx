import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from 'lucide-react'

const Privacy = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link to='/' className='inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all mb-4'>
            <ArrowLeftIcon className="size-4"/> Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="text-gray-600 mt-2">Last updated: October 22, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <div className="prose prose-gray max-w-none">
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 mb-4">
                At Resume Builder, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our resume building platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">Personal Information</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Professional information (job titles, work experience, education)</li>
                <li>Resume content and personal details you provide</li>
                <li>Profile pictures and other uploaded files</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">Usage Information</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Device information and browser type</li>
                <li>IP address and location data</li>
                <li>Usage patterns and feature interactions</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>To provide and improve our resume building services</li>
                <li>To create and customize your resumes</li>
                <li>To provide AI-powered content suggestions</li>
                <li>To communicate with you about your account and our services</li>
                <li>To provide customer support and technical assistance</li>
                <li>To analyze usage patterns and improve our platform</li>
                <li>To comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>With your explicit consent</li>
                <li>With service providers who assist in operating our platform</li>
                <li>When required by law or to protect our legal rights</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure data centers with physical access controls</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Employee training on data protection best practices</li>
                <li>Multi-factor authentication for account access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
                <li><strong>Objection:</strong> Object to processing of your personal data</li>
                <li><strong>Restriction:</strong> Request limitation of data processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
              <p className="text-gray-600 mb-4">
                We use cookies and similar technologies to enhance your experience on our platform. You can control cookie settings through your browser preferences.
              </p>
              <p className="text-gray-600">
                Our cookies help us remember your preferences, analyze site traffic, and provide personalized content recommendations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
              <p className="text-gray-600">
                We retain your personal data only as long as necessary to provide our services and comply with legal obligations. You can delete your account and associated data at any time through your account settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-600">
                Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-600">
                We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this privacy policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@resumebuilder.com</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (800) RESUME</p>
                <p className="text-gray-700"><strong>Address:</strong> 123 Career Street, Job City, JC 12345</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy