import React from 'react'
import { Link } from 'react-router-dom'

const Affiliate = () => {
  const programBenefits = [
    {
      icon: "💰",
      title: "Generous Commissions",
      description: "Earn up to 30% commission on every successful referral with lifetime earnings potential"
    },
    {
      icon: "📈",
      title: "Real-time Analytics",
      description: "Track your performance with detailed analytics dashboard and conversion metrics"
    },
    {
      icon: "🎯",
      title: "Marketing Resources",
      description: "Access professional banners, email templates, and promotional materials"
    },
    {
      icon: "💳",
      title: "Monthly Payouts",
      description: "Reliable monthly payments via bank transfer, PayPal, or UPI"
    },
    {
      icon: "🤝",
      title: "Dedicated Support",
      description: "Personal affiliate manager to help optimize your earning potential"
    },
    {
      icon: "🏆",
      title: "Performance Bonuses",
      description: "Additional bonuses for top performers and milestone achievements"
    }
  ]

  const commissionTiers = [
    {
      tier: "Starter",
      referrals: "1-10",
      commission: "20%",
      features: ["Basic dashboard", "Email support", "Standard resources"]
    },
    {
      tier: "Growth",
      referrals: "11-50",
      commission: "25%",
      features: ["Advanced analytics", "Priority support", "Custom creatives"]
    },
    {
      tier: "Pro",
      referrals: "51+",
      commission: "30%",
      features: ["Personal manager", "API access", "Exclusive bonuses"]
    }
  ]

  const faqs = [
    {
      question: "How do I join the affiliate program?",
      answer: "Simply sign up using the form below. We'll review your application and get back to you within 24-48 hours with your unique affiliate links."
    },
    {
      question: "When do I get paid?",
      answer: "Commissions are paid monthly, typically by the 15th of each month. Minimum payout threshold is ₹1,000 (or $15 USD)."
    },
    {
      question: "What marketing materials do you provide?",
      answer: "We provide banners, email templates, social media posts, landing page copy, and product screenshots. All materials are professionally designed and tested."
    },
    {
      question: "How long do cookies last?",
      answer: "Our cookies last for 60 days, giving you ample time to earn commissions from users who click your links."
    },
    {
      question: "Can I promote on social media?",
      answer: "Absolutely! We encourage promotion on social media, blogs, YouTube, email lists, and other ethical marketing channels."
    },
    {
      question: "Are there any restrictions?",
      answer: "We don't allow paid search on brand terms, spam, or misleading advertising. Full terms are provided upon acceptance to the program."
    }
  ]

  const testimonials = [
    {
      name: "Priya Mehta",
      role: "Content Creator",
      earnings: "₹45,000/month",
      quote: "The Resume Builder affiliate program has been my most profitable partnership. The conversion rates are amazing!"
    },
    {
      name: "Rahul Singh",
      role: "Career Coach",
      earnings: "₹82,000/month",
      quote: "My audience loves the product, and the commissions have become a significant income stream for my business."
    },
    {
      name: "Anita Sharma",
      role: "YouTube Educator",
      earnings: "₹63,000/month",
      quote: "Excellent support team and great tracking tools. It's easy to promote something I genuinely believe in."
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
          <h1 className="text-4xl font-bold mb-4">Affiliate Partner Program</h1>
          <p className="text-xl text-green-100 mb-8">
            Earn up to 30% commission promoting the #1 AI-powered resume builder
          </p>
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold">30%</div>
              <div className="text-green-100">Commission</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">60 Days</div>
              <div className="text-green-100">Cookie Life</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-green-100">Support</div>
            </div>
          </div>
          <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Join Program Now
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Program Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Join Our Affiliate Program?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Commission Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Commission Structure
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {commissionTiers.map((tier, index) => (
              <div key={index} className={`bg-white p-6 rounded-lg shadow-sm border-2 ${
                index === 1 ? 'border-green-500 transform scale-105' : 'border-gray-200'
              }`}>
                {index === 1 && (
                  <div className="bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.tier}</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">{tier.commission}</div>
                <div className="text-gray-600 mb-4">{tier.referrals} referrals/month</div>
                <ul className="space-y-2">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sign Up</h3>
              <p className="text-gray-600 text-sm">Apply to join our affiliate program</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Get Links</h3>
              <p className="text-gray-600 text-sm">Receive your unique tracking links</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📢</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Promote</h3>
              <p className="text-gray-600 text-sm">Share with your audience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Earn</h3>
              <p className="text-gray-600 text-sm">Get paid monthly commissions</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Affiliates Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-600 mb-2">{testimonial.earnings}</div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
              Apply to Join Our Program
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website/Platform</label>
                <input
                  type="url"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="https://yourwebsite.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Traffic/Audience Size</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Select range</option>
                  <option>1K - 10K</option>
                  <option>10K - 50K</option>
                  <option>50K - 100K</option>
                  <option>100K+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">How will you promote us?</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Describe your promotion strategy..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to Start Earning?
          </h2>
          <p className="text-gray-600 mb-6">
            Join thousands of successful affiliates earning substantial commissions with our program.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Apply Now
            </button>
            <Link to="/app" className="border border-green-500 text-green-600 hover:bg-green-50 px-8 py-3 rounded-full font-medium transition-colors">
              Try Our Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Affiliate