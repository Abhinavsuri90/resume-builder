import React from 'react'
import { Link } from 'react-router-dom'

const Community = () => {
  const communityStats = [
    { number: "25K+", label: "Active Members" },
    { number: "500+", label: "Success Stories" },
    { number: "100+", label: "Weekly Discussions" },
    { number: "50+", label: "Industry Experts" }
  ]

  const successStories = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      image: "👩‍💻",
      story: "The AI-powered suggestions helped me highlight my technical skills perfectly. Got 3 interviews in my first week!"
    },
    {
      name: "Rajesh Kumar",
      role: "Marketing Manager at Microsoft",
      image: "👨‍💼",
      story: "The community feedback on my resume was invaluable. Landed my dream job within a month of using the platform."
    },
    {
      name: "Sneha Patel",
      role: "Data Scientist at Amazon",
      image: "👩‍🔬",
      story: "From career pivot to dream role - the community support and resume templates made all the difference."
    }
  ]

  const communityFeatures = [
    {
      icon: "💬",
      title: "Discussion Forums",
      description: "Connect with peers, share experiences, and get advice on resume writing and career development."
    },
    {
      icon: "🎯",
      title: "Resume Reviews",
      description: "Get your resume reviewed by industry experts and experienced professionals in your field."
    },
    {
      icon: "📚",
      title: "Resource Library",
      description: "Access exclusive guides, templates, and resources shared by successful job seekers."
    },
    {
      icon: "🚀",
      title: "Career Mentorship",
      description: "Connect with mentors who can guide you through your career journey and job search process."
    },
    {
      icon: "🎉",
      title: "Success Celebrations",
      description: "Share your wins, celebrate achievements, and inspire others in their career journeys."
    },
    {
      icon: "📈",
      title: "Industry Insights",
      description: "Stay updated with the latest hiring trends, salary insights, and industry-specific advice."
    }
  ]

  const upcomingEvents = [
    {
      date: "Dec 20",
      title: "Resume Writing Workshop",
      time: "6:00 PM IST",
      attendees: "150+ registered"
    },
    {
      date: "Dec 22",
      title: "Tech Industry Panel Discussion",
      time: "7:00 PM IST",
      attendees: "200+ registered"
    },
    {
      date: "Dec 25",
      title: "Year-End Career Planning Session",
      time: "5:00 PM IST",
      attendees: "100+ registered"
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
          <h1 className="text-4xl font-bold mb-4">Join Our Thriving Community</h1>
          <p className="text-xl text-green-100 mb-8">
            Connect with like-minded professionals, share experiences, and accelerate your career growth together
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Join Community
          </button>
        </div>
      </div>

      {/* Community Stats */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {communityStats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Community Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Community Offers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Success Stories from Our Community
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{story.image}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-green-600">{story.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{story.story}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Upcoming Community Events
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                <div className="text-green-600 font-semibold mb-2">{event.date}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{event.time}</p>
                <p className="text-sm text-green-600">{event.attendees}</p>
                <button className="mt-4 w-full bg-green-50 text-green-600 py-2 rounded-lg hover:bg-green-100 transition-colors">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Community Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">✅ Do's</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Be respectful and professional</li>
                <li>• Share constructive feedback</li>
                <li>• Help others when possible</li>
                <li>• Stay on-topic in discussions</li>
                <li>• Celebrate others' successes</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">❌ Don'ts</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Share spam or promotional content</li>
                <li>• Use inappropriate language</li>
                <li>• Share personal information publicly</li>
                <li>• Engage in arguments or harassment</li>
                <li>• Post off-topic content</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Join CTA */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-gray-600 mb-6">
            Start connecting with professionals, sharing experiences, and accelerating your career growth today.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Join Now - It's Free
            </button>
            <Link to="/app" className="border border-green-500 text-green-600 hover:bg-green-50 px-8 py-3 rounded-full font-medium transition-colors">
              Create Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community