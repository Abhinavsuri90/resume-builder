import React, { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Sparkles, Download, Eye, Play, Pause } from 'lucide-react'

const DemoModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [demoData, setDemoData] = useState({
    personal_info: {
      full_name: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      portfolio: ''
    },
    professional_summary: '',
    experience: [],
    education: [],
    skills: [],
    projects: []
  })
  const [isTyping, setIsTyping] = useState(false)
  const [currentTemplate, setCurrentTemplate] = useState('modern')
  const [showConfetti, setShowConfetti] = useState(false)

  const templates = {
    modern: {
      name: 'Modern',
      color: 'bg-blue-500',
      preview: 'Modern clean design'
    },
    classic: {
      name: 'Classic',
      color: 'bg-gray-700',
      preview: 'Traditional professional'
    },
    minimal: {
      name: 'Minimal',
      color: 'bg-green-500',
      preview: 'Clean minimalist'
    }
  }

  const demoSteps = [
    {
      title: 'Welcome to Resume Builder AI',
      description: 'Let\'s create a professional resume in minutes!',
      component: 'welcome'
    },
    {
      title: 'Personal Information',
      description: 'Add your basic details',
      component: 'personal'
    },
    {
      title: 'AI-Powered Summary',
      description: 'Watch AI generate your professional summary',
      component: 'summary'
    },
    {
      title: 'Work Experience',
      description: 'Add your work history with AI assistance',
      component: 'experience'
    },
    {
      title: 'Choose Template',
      description: 'Select from beautiful templates',
      component: 'templates'
    },
    {
      title: 'Your Resume is Ready!',
      description: 'Download or share your professional resume',
      component: 'final'
    }
  ]

  const sampleData = {
    personal_info: {
      full_name: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+91 98765 43210',
      location: 'Mumbai, India',
      linkedin: 'linkedin.com/in/priyasharma',
      portfolio: 'priyasharma.dev'
    },
    professional_summary: 'Experienced Software Engineer with 5+ years in full-stack development. Proven track record of building scalable web applications using React, Node.js, and cloud technologies. Passionate about creating user-centric solutions and mentoring junior developers.',
    experience: [
      {
        company: 'Tech Solutions Inc.',
        position: 'Senior Software Engineer',
        duration: '2022 - Present',
        description: 'Led development of microservices architecture serving 1M+ users daily'
      }
    ],
    skills: ['React', 'Node.js', 'Python', 'AWS', 'MongoDB', 'TypeScript']
  }

  const typeWriter = (text, callback) => {
    setIsTyping(true)
    let index = 0
    const interval = setInterval(() => {
      if (index <= text.length) {
        callback(text.slice(0, index))
        index++
      } else {
        clearInterval(interval)
        setIsTyping(false)
      }
    }, 50)
  }

  const handleAIGeneration = () => {
    typeWriter(sampleData.professional_summary, (text) => {
      setDemoData(prev => ({
        ...prev,
        professional_summary: text
      }))
    })
  }

  const nextStep = () => {
    if (currentStep < demoSteps.length - 1) {
      setCurrentStep(currentStep + 1)
      if (currentStep + 1 === demoSteps.length - 1) {
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 3000)
      }
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const startAutoPlay = () => {
    setIsAutoPlaying(true)
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < demoSteps.length - 1) {
          return prev + 1
        } else {
          setIsAutoPlaying(false)
          clearInterval(interval)
          return prev
        }
      })
    }, 3000)
  }

  const stopAutoPlay = () => {
    setIsAutoPlaying(false)
  }

  const fillPersonalInfo = () => {
    setDemoData(prev => ({
      ...prev,
      personal_info: sampleData.personal_info
    }))
  }

  const addExperience = () => {
    setDemoData(prev => ({
      ...prev,
      experience: sampleData.experience
    }))
  }

  const addSkills = () => {
    setDemoData(prev => ({
      ...prev,
      skills: sampleData.skills
    }))
  }

  useEffect(() => {
    if (currentStep === 1) {
      setTimeout(fillPersonalInfo, 1000)
    } else if (currentStep === 3) {
      setTimeout(addExperience, 1000)
      setTimeout(addSkills, 2000)
    }
  }, [currentStep])

  if (!isOpen) return null

  return (
    <>
      {showConfetti && (
        <div className="fixed inset-0 z-60 pointer-events-none">
          <div className="confetti">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="confetti-piece"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  backgroundColor: ['#10B981', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6'][Math.floor(Math.random() * 5)]
                }}
              />
            ))}
          </div>
        </div>
      )}
      
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] overflow-hidden animate-modal-enter">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="flex items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {demoSteps[currentStep].title}
              </h2>
              <p className="text-gray-600 mt-1">
                {demoSteps[currentStep].description}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={isAutoPlaying ? stopAutoPlay : startAutoPlay}
              className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isAutoPlaying ? 'Pause' : 'Auto Play'}
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-3 bg-gray-50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Step {currentStep + 1} of {demoSteps.length}</span>
            <span className="text-sm text-gray-600">{Math.round(((currentStep + 1) / demoSteps.length) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / demoSteps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex h-full">
          {/* Left Panel - Form */}
          <div className="w-1/2 p-6 overflow-y-auto">
            {currentStep === 0 && (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Experience the Future of Resume Building
                </h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  This interactive demo will show you how our AI-powered resume builder 
                  creates professional resumes in minutes, not hours.
                </p>
                <div className="grid grid-cols-2 gap-4 text-left mb-8">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">AI Content Generation</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">Multiple Templates</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">Real-time Preview</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-semibold text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">PDF Export</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>💡 Tip:</strong> This demo uses sample data to showcase features. 
                    Your actual resume builder will be personalized to your information!
                  </p>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={demoData.personal_info.full_name}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={demoData.personal_info.email}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="text"
                      value={demoData.personal_info.phone}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <input
                      type="text"
                      value={demoData.personal_info.location}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      readOnly
                    />
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-green-800 text-sm">
                    ✨ <strong>Demo Mode:</strong> Information is being auto-filled to show the process
                  </p>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">AI-Generated Professional Summary</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Professional Summary</label>
                  <textarea
                    value={demoData.professional_summary}
                    rows="6"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    readOnly
                  />
                  {isTyping && (
                    <div className="flex items-center mt-2 text-green-600">
                      <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                      <span className="text-sm">AI is generating your summary...</span>
                    </div>
                  )}
                </div>
                <button
                  onClick={handleAIGeneration}
                  disabled={isTyping}
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  {isTyping ? 'Generating...' : 'Generate with AI'}
                </button>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Work Experience & Skills</h3>
                
                {demoData.experience.length > 0 && (
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900">{demoData.experience[0].position}</h4>
                    <p className="text-green-600">{demoData.experience[0].company}</p>
                    <p className="text-sm text-gray-600">{demoData.experience[0].duration}</p>
                    <p className="text-gray-700 mt-2">{demoData.experience[0].description}</p>
                  </div>
                )}

                {demoData.skills.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {demoData.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    💡 <strong>AI Tip:</strong> Experience and skills are being added automatically in this demo
                  </p>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Choose Your Template</h3>
                <div className="grid grid-cols-1 gap-4">
                  {Object.entries(templates).map(([key, template]) => (
                    <div
                      key={key}
                      onClick={() => setCurrentTemplate(key)}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        currentTemplate === key 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full ${template.color}`} />
                        <div>
                          <h4 className="font-semibold text-gray-900">{template.name}</h4>
                          <p className="text-gray-600 text-sm">{template.preview}</p>
                        </div>
                        {currentTemplate === key && (
                          <div className="ml-auto text-green-500">✓</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎉</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Your Resume is Ready!
                </h3>
                <p className="text-gray-600 mb-8">
                  Congratulations! Your professional resume has been created successfully.
                </p>
                <div className="flex justify-center gap-4">
                  <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Download PDF
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Preview
                  </button>
                </div>
                <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Ready to create your own resume?</h4>
                    <p className="text-gray-600 mb-4">Join thousands of professionals who've landed their dream jobs!</p>
                    <div className="flex justify-center gap-3">
                      <button 
                        onClick={onClose}
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Sign Up Free
                      </button>
                      <button 
                        onClick={() => {
                          setCurrentStep(0)
                          setDemoData({
                            personal_info: { full_name: '', email: '', phone: '', location: '', linkedin: '', portfolio: '' },
                            professional_summary: '',
                            experience: [],
                            skills: []
                          })
                        }}
                        className="border border-green-500 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Restart Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Panel - Preview */}
          <div className="w-1/2 bg-gray-50 p-6 border-l border-gray-200">
            <div className="bg-white rounded-lg shadow-lg p-6 h-full overflow-y-auto">
              <div className="text-center mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Live Preview</h4>
                <p className="text-gray-600 text-sm">See your resume update in real-time</p>
              </div>

              {/* Resume Preview */}
              <div className="border border-gray-200 rounded-lg p-6 bg-white min-h-[600px]">
                {/* Header */}
                <div className="border-b border-gray-200 pb-4 mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">
                    {demoData.personal_info.full_name || 'Your Name'}
                  </h1>
                  <div className="text-gray-600 text-sm mt-2 space-y-1">
                    {demoData.personal_info.email && (
                      <div>{demoData.personal_info.email}</div>
                    )}
                    {demoData.personal_info.phone && (
                      <div>{demoData.personal_info.phone}</div>
                    )}
                    {demoData.personal_info.location && (
                      <div>{demoData.personal_info.location}</div>
                    )}
                  </div>
                </div>

                {/* Professional Summary */}
                {demoData.professional_summary && (
                  <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-3">Professional Summary</h2>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {demoData.professional_summary}
                    </p>
                  </div>
                )}

                {/* Experience */}
                {demoData.experience.length > 0 && (
                  <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-3">Experience</h2>
                    {demoData.experience.map((exp, index) => (
                      <div key={index} className="mb-4">
                        <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                        <p className="text-green-600 text-sm">{exp.company}</p>
                        <p className="text-gray-600 text-xs">{exp.duration}</p>
                        <p className="text-gray-700 text-sm mt-1">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Skills */}
                {demoData.skills.length > 0 && (
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-3">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                      {demoData.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          <div className="flex gap-2">
            {demoSteps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index <= currentStep ? 'bg-green-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextStep}
            disabled={currentStep === demoSteps.length - 1}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes modal-enter {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-modal-enter {
          animation: modal-enter 0.3s ease-out;
        }
        
        .confetti {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .confetti-piece {
          position: absolute;
          width: 10px;
          height: 10px;
          animation: confetti-fall 3s linear infinite;
        }
        
        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
    </>
  )
}

export default DemoModal