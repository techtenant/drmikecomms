'use client';
import { useState } from 'react';
import Link from 'next/link';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import RateReviewIcon from '@mui/icons-material/RateReview';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GoogleIcon from '@mui/icons-material/Google';
import VerifiedIcon from '@mui/icons-material/Verified';
import CelebrationIcon from '@mui/icons-material/Celebration';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    treatment: '',
    recommend: '',
    message: '',
    consent: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [sentiment, setSentiment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setRating(0);
      setSentiment('');
      setFormData({
        name: '',
        email: '',
        treatment: '',
        recommend: '',
        message: '',
        consent: false
      });
    }, 5000);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const externalReviews = [
    {
      name: 'Google Reviews',
      icon: <GoogleIcon sx={{ fontSize: 48 }} />,
      color: 'from-blue-500 to-blue-600',
      rating: '4.9/5',
      reviews: '120+',
      url: 'https://g.page/r/YOUR_GOOGLE_PLACE_ID/review'
    },
    {
      name: 'Doctify',
      icon: <VerifiedIcon sx={{ fontSize: 48 }} />,
      color: 'from-teal-500 to-teal-600',
      rating: '4.95/5',
      reviews: '89+',
      url: 'https://www.doctify.com/uk/specialist/dr-mike-comins'
    },
    {
      name: 'Trustpilot',
      icon: <StarIcon sx={{ fontSize: 48 }} />,
      color: 'from-green-500 to-green-600',
      rating: '4.8/5',
      reviews: '65+',
      url: 'https://uk.trustpilot.com/review/your-clinic'
    },
    {
      name: 'Reviews.io',
      icon: <ThumbUpIcon sx={{ fontSize: 48 }} />,
      color: 'from-orange-500 to-orange-600',
      rating: '4.9/5',
      reviews: '95+',
      url: 'https://www.reviews.io/company-reviews/store/your-clinic'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      treatment: 'Anti-Wrinkle Injections',
      rating: 5,
      text: 'Dr Comins is absolutely brilliant. Natural results, professional service, and made me feel so comfortable. Highly recommend!',
      verified: true
    },
    {
      name: 'James P.',
      treatment: 'Vaser Liposuction',
      rating: 5,
      text: 'Life-changing results! The entire process was smooth and the results exceeded my expectations. Best decision I made.',
      verified: true
    },
    {
      name: 'Emma R.',
      treatment: 'Dermal Fillers',
      rating: 5,
      text: 'Such a gentle touch and amazing eye for aesthetics. My lips look perfect - exactly what I wanted. Thank you!',
      verified: true
    }
  ];

  const treatments = [
    'Anti-Wrinkle Injections',
    'Dermal Fillers',
    'Vaser Liposuction',
    'Facial Fat Reduction',
    'Non-Surgical Nose Reshaping',
    'Profhilo',
    'Other'
  ];

  const sentiments = [
    { icon: <SentimentVeryDissatisfiedIcon sx={{ fontSize: 48 }} />, label: 'Disappointed', value: 'disappointed', color: 'text-red-500' },
    { icon: <SentimentSatisfiedIcon sx={{ fontSize: 48 }} />, label: 'Okay', value: 'okay', color: 'text-yellow-500' },
    { icon: <SentimentVerySatisfiedIcon sx={{ fontSize: 48 }} />, label: 'Good', value: 'good', color: 'text-green-500' },
    { icon: <SentimentVerySatisfiedIcon sx={{ fontSize: 48 }} />, label: 'Excellent', value: 'excellent', color: 'text-clinic-blue' }
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-clinic-blue to-clinic-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <RateReviewIcon sx={{ fontSize: 60 }} className="mb-4" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">We Value Your Opinion</h1>
            <p className="text-xl opacity-90 mb-4">
              Your feedback helps us improve and helps others make informed decisions
            </p>
            <div className="flex items-center justify-center gap-3 text-2xl">
              <span className="font-bold">4.95</span>
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <StarIcon key={i} className="text-yellow-400" />
                ))}
              </div>
              <span className="text-sm opacity-80">(369+ reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Path Selector */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-clinic-dark text-center mb-4">Choose How to Share</h2>
            <p className="text-center text-gray-600 mb-12">Pick the easiest way for you!</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Quick Review */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-clinic-light">
                <div className="text-center mb-6">
                  <div className="inline-block bg-clinic-light/30 p-4 rounded-full mb-4">
                    <ThumbUpIcon className="text-clinic-blue" sx={{ fontSize: 48 }} />
                  </div>
                  <h3 className="text-2xl font-bold text-clinic-dark mb-2">Quick Review</h3>
                  <p className="text-gray-600">Leave a review on your preferred platform (30 seconds)</p>
                </div>
                <div className="space-y-3">
                  {externalReviews.map((site, i) => (
                    <a
                      key={i}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between bg-gradient-to-r ${site.color} text-white p-4 rounded-xl hover:scale-105 transition-transform group`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="group-hover:scale-110 transition-transform">
                          {site.icon}
                        </div>
                        <div>
                          <div className="font-bold">{site.name}</div>
                          <div className="text-sm opacity-90">{site.rating} • {site.reviews} reviews</div>
                        </div>
                      </div>
                      <div className="text-2xl">→</div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Detailed Feedback */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-clinic-light">
                <div className="text-center mb-6">
                  <div className="inline-block bg-clinic-light/30 p-4 rounded-full mb-4">
                    <RateReviewIcon className="text-clinic-blue" sx={{ fontSize: 48 }} />
                  </div>
                  <h3 className="text-2xl font-bold text-clinic-dark mb-2">Detailed Feedback</h3>
                  <p className="text-gray-600">Share your full experience with us (2 minutes)</p>
                </div>
                <div className="space-y-4 text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-xl">
                    <CheckCircleIcon sx={{ fontSize: 40 }} className="mb-2" />
                    <div className="font-semibold">Helps us improve</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-xl">
                    <FavoriteIcon sx={{ fontSize: 40 }} className="mb-2" />
                    <div className="font-semibold">We read every response</div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-xl">
                    <TrendingUpIcon sx={{ fontSize: 40 }} className="mb-2" />
                    <div className="font-semibold">May feature your story</div>
                  </div>
                  <a 
                    href="#feedback-form"
                    className="block bg-clinic-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition"
                  >
                    Fill Form Below ↓
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Feedback Form */}
      <section id="feedback-form" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {submitted ? (
              <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-12 rounded-2xl text-center">
                <CelebrationIcon sx={{ fontSize: 80 }} className="mb-6 animate-bounce" />
                <h2 className="text-4xl font-bold mb-4">Thank You!</h2>
                <p className="text-xl mb-6">
                  Your feedback means the world to us. We'll review your comments carefully.
                </p>
                <div className="flex items-center justify-center gap-2 text-lg">
                  <FavoriteIcon />
                  <span>Your opinion helps us serve you better</span>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
                <h2 className="text-3xl font-bold text-clinic-dark mb-6 text-center">Share Your Experience</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Quick Sentiment */}
                  <div>
                    <label className="block font-semibold text-clinic-dark mb-3">
                      How was your experience?
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {sentiments.map((s) => (
                        <button
                          key={s.value}
                          type="button"
                          onClick={() => setSentiment(s.value)}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            sentiment === s.value
                              ? 'border-clinic-blue bg-clinic-light/20 scale-110'
                              : 'border-gray-200 hover:border-clinic-light'
                          }`}
                        >
                          <div className={`${s.color} mb-2 flex justify-center`}>
                            {s.icon}
                          </div>
                          <div className="text-sm font-semibold text-gray-700">{s.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div>
                    <label className="block font-semibold text-clinic-dark mb-3">
                      Rate your experience (optional)
                    </label>
                    <div className="flex gap-2 justify-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="hover:scale-125 transition-transform"
                        >
                          {star <= (hoverRating || rating) ? (
                            <StarIcon className="text-yellow-400" sx={{ fontSize: 48 }} />
                          ) : (
                            <StarBorderIcon className="text-gray-300" sx={{ fontSize: 48 }} />
                          )}
                        </button>
                      ))}
                    </div>
                    {rating > 0 && (
                      <p className="text-center text-clinic-blue font-semibold mt-2">
                        {rating} out of 5 stars
                      </p>
                    )}
                  </div>

                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-semibold text-clinic-dark mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-clinic-blue focus:outline-none transition"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-clinic-dark mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-clinic-blue focus:outline-none transition"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Treatment */}
                  <div>
                    <label className="block font-semibold text-clinic-dark mb-2">
                      Which treatment did you receive?
                    </label>
                    <select
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-clinic-blue focus:outline-none transition"
                    >
                      <option value="">Select treatment...</option>
                      {treatments.map((t, i) => (
                        <option key={i} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Would Recommend */}
                  <div>
                    <label className="block font-semibold text-clinic-dark mb-3">
                      Would you recommend us to friends/family?
                    </label>
                    <div className="flex gap-4">
                      {['Definitely', 'Probably', 'Not Sure', 'No'].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, recommend: option }))}
                          className={`flex-1 py-3 rounded-lg border-2 font-semibold transition-all ${
                            formData.recommend === option
                              ? 'bg-clinic-blue text-white border-clinic-blue'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-clinic-light'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-semibold text-clinic-dark mb-2">
                      Tell us more about your experience <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-clinic-blue focus:outline-none transition resize-none"
                      placeholder="What did you like? What could we improve? Share your honest feedback..."
                    ></textarea>
                  </div>

                  {/* Consent */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        required
                        className="mt-1 w-5 h-5 text-clinic-blue border-2 border-gray-300 rounded focus:ring-2 focus:ring-clinic-blue"
                      />
                      <span className="text-sm text-gray-700">
                        I consent to Dr Mike Comins Clinic using my feedback for quality improvement. 
                        My testimonial may be featured anonymously on the website. <span className="text-red-500">*</span>
                      </span>
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-clinic-blue to-clinic-dark text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 text-lg"
                  >
                    <SendIcon />
                    Submit Feedback
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-clinic-dark text-center mb-4">What Our Patients Say</h2>
            <p className="text-center text-gray-600 mb-12">Real reviews from real patients</p>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[1,2,3,4,5].map(star => (
                        <StarIcon key={star} className="text-yellow-400" sx={{ fontSize: 20 }} />
                      ))}
                    </div>
                    {testimonial.verified && (
                      <VerifiedIcon className="text-clinic-teal" sx={{ fontSize: 20 }} />
                    )}
                  </div>
                  <p className="text-gray-700 mb-4 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-clinic-dark">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.treatment}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 bg-white"></div>
    </main>
  );
}