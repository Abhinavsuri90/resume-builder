import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Resume Mistakes That Are Costing You Job Interviews",
      excerpt: "Learn about the most common resume mistakes and how to avoid them to increase your chances of landing interviews.",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Resume Tips",
      image: "📝"
    },
    {
      id: 2,
      title: "How AI is Revolutionizing Resume Creation in 2024",
      excerpt: "Discover how artificial intelligence is transforming the way we create and optimize resumes for better results.",
      date: "December 12, 2024",
      readTime: "7 min read",
      category: "Technology",
      image: "🤖"
    },
    {
      id: 3,
      title: "The Psychology Behind Effective Resume Design",
      excerpt: "Understanding how hiring managers read resumes and designing yours to capture their attention in seconds.",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Design",
      image: "🎨"
    },
    {
      id: 4,
      title: "Remote Work Resume: How to Showcase Virtual Skills",
      excerpt: "Essential tips for highlighting remote work experience and digital collaboration skills on your resume.",
      date: "December 8, 2024",
      readTime: "4 min read",
      category: "Remote Work",
      image: "🏠"
    },
    {
      id: 5,
      title: "Industry-Specific Resume Templates: Which One to Choose",
      excerpt: "A comprehensive guide to selecting the right resume template based on your industry and career level.",
      date: "December 5, 2024",
      readTime: "8 min read",
      category: "Templates",
      image: "📋"
    },
    {
      id: 6,
      title: "Crafting the Perfect Professional Summary",
      excerpt: "Master the art of writing compelling professional summaries that grab recruiters' attention immediately.",
      date: "December 3, 2024",
      readTime: "5 min read",
      category: "Writing Tips",
      image: "✍️"
    }
  ]

  const categories = ["All", "Resume Tips", "Technology", "Design", "Remote Work", "Templates", "Writing Tips"]

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
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Career Insights & Tips</h1>
          <p className="text-xl text-green-100">
            Expert advice, industry insights, and practical tips to accelerate your career growth
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-green-500 text-white' 
                    : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <span className="text-6xl">📝</span>
            </div>
            <div className="md:w-2/3 p-8">
              <div className="text-sm text-green-600 font-medium mb-2">FEATURED POST</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                10 Resume Mistakes That Are Costing You Job Interviews
              </h2>
              <p className="text-gray-600 mb-4">
                Learn about the most common resume mistakes and how to avoid them to increase your chances of landing interviews. This comprehensive guide covers everything from formatting errors to content optimization.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>December 15, 2024</span>
                <span className="mx-2">•</span>
                <span>5 min read</span>
                <span className="mx-2">•</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Resume Tips</span>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-4xl">{post.image}</span>
              </div>
              <div className="p-6">
                <div className="text-xs text-green-600 font-medium mb-2">{post.category}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white rounded-lg shadow-sm p-8 mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Stay Updated with Career Tips
          </h3>
          <p className="text-gray-600 mb-6">
            Get the latest resume tips, career advice, and industry insights delivered to your inbox weekly.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Popular Tags */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Tags</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'Resume Writing', 'Interview Tips', 'Career Change', 'Remote Work', 
              'AI Tools', 'Professional Development', 'Job Search', 'LinkedIn', 
              'Cover Letters', 'Networking', 'Salary Negotiation', 'ATS Optimization'
            ].map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-green-50 hover:text-green-600 cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs