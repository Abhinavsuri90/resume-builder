import React from 'react'
import { Link } from 'react-router-dom'

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote / Bangalore",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["React", "TypeScript", "Node.js", "AWS"]
    },
    {
      title: "AI/ML Engineer",
      department: "Engineering",
      location: "Remote / Mumbai",
      type: "Full-time", 
      experience: "2-4 years",
      skills: ["Python", "TensorFlow", "NLP", "APIs"]
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / Delhi",
      type: "Full-time",
      experience: "4-6 years",
      skills: ["Product Strategy", "Analytics", "Agile", "User Research"]
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote / Pune",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"]
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Hyderabad",
      type: "Full-time",
      experience: "3-6 years",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD"]
    },
    {
      title: "Content Marketing Specialist",
      department: "Marketing",
      location: "Remote / Chennai",
      type: "Full-time",
      experience: "2-4 years",
      skills: ["SEO", "Content Strategy", "Analytics", "Social Media"]
    }
  ]

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "Market-leading compensation with equity options and performance bonuses"
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs"
    },
    {
      icon: "🏠",
      title: "Remote First",
      description: "Work from anywhere with flexible hours and home office setup allowance"
    },
    {
      icon: "📚",
      title: "Learning & Growth",
      description: "Annual learning budget, conference attendance, and skill development programs"
    },
    {
      icon: "🌴",
      title: "Time Off",
      description: "Unlimited PTO policy, paid parental leave, and company-wide wellness days"
    },
    {
      icon: "🎉",
      title: "Company Culture",
      description: "Regular team events, inclusive environment, and strong work-life balance"
    }
  ]

  const departments = ["All", "Engineering", "Product", "Design", "Marketing", "Operations", "Sales"]

  const companyValues = [
    {
      title: "Innovation First",
      description: "We push boundaries and embrace new technologies to solve real problems"
    },
    {
      title: "User-Centric",
      description: "Every decision is made with our users' success and satisfaction in mind"
    },
    {
      title: "Transparency",
      description: "Open communication, honest feedback, and transparent decision-making"
    },
    {
      title: "Growth Mindset",
      description: "Continuous learning, experimentation, and embracing challenges"
    }
  ]

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

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Join Our Amazing Team</h1>
          <p className="text-xl text-green-100 mb-8">
            Help us build the future of career development and make a meaningful impact on millions of lives
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            View Open Positions
          </button>
        </div>
      </div>

      {/* Company Stats */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">15</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Employee Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">2X</div>
              <div className="text-gray-600">YoY Growth</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Why Join Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Work With Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Open Positions
          </h2>
          
          {/* Department Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {departments.map((dept, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 
                      ? 'bg-green-500 text-white' 
                      : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {openPositions.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">{job.department}</span>
                      <span>📍 {job.location}</span>
                      <span>⏰ {job.type}</span>
                      <span>📊 {job.experience}</span>
                    </div>
                  </div>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    Apply Now
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Employee Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Team Says
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 italic mb-4">
                "Amazing work culture and growth opportunities. The team is incredibly supportive and innovative."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-semibold">AK</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Ankit Kumar</div>
                  <div className="text-sm text-gray-600">Senior Developer</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 italic mb-4">
                "The remote-first culture and flexible work environment make this the best job I've ever had."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-semibold">SP</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sophia Patel</div>
                  <div className="text-sm text-gray-600">Product Manager</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 italic mb-4">
                "Learning and development opportunities are endless here. The company truly invests in its people."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-semibold">RS</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Rohit Singh</div>
                  <div className="text-sm text-gray-600">UX Designer</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Our Hiring Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-semibold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Apply</h3>
              <p className="text-gray-600 text-sm">Submit your application and resume</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-semibold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Screen</h3>
              <p className="text-gray-600 text-sm">Initial screening call with HR</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-semibold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-gray-600 text-sm">Technical and culture fit interviews</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-semibold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Offer</h3>
              <p className="text-gray-600 text-sm">Final decision and offer discussion</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Don't See Your Role?
          </h2>
          <p className="text-gray-600 mb-6">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Send Resume
            </button>
            <Link to="/app" className="border border-green-500 text-green-600 hover:bg-green-50 px-8 py-3 rounded-full font-medium transition-colors">
              Create Your Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Careers