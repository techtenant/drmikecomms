'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual EmailJS/API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          treatment: '',
          message: '',
          consent: false
        });
      }, 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-clinic-blue to-clinic-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl opacity-90 mb-8">
              Book your consultation with Dr Mike Comins. We typically respond within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-left">
              <div className="flex items-center gap-3">
                <FiPhone size={24} />
                <div>
                  <div className="text-sm opacity-80">Phone</div>
                  <a href="tel:02075841642" className="font-semibold hover:text-clinic-light transition">
                    020 7584 1642
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FiMail size={24} />
                <div>
                  <div className="text-sm opacity-80">Email</div>
                  <a href="mailto:info@hansplace.com" className="font-semibold hover:text-clinic-light transition">
                    info@hansplace.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 lg:p-10 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-clinic-dark mb-6">Send Us a Message</h2>
              
              {isSuccess ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                  <FiCheckCircle className="text-green-500 mx-auto mb-4" size={64} />
                  <h3 className="text-2xl font-bold text-green-700 mb-2">Message Sent!</h3>
                  <p className="text-green-600">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clinic-blue focus:border-transparent transition"
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clinic-blue focus:border-transparent transition"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clinic-blue focus:border-transparent transition"
                        placeholder="07XXX XXXXXX"
                      />
                    </div>
                  </div>

                  {/* Treatment Interest */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Treatment Interest
                    </label>
                    <select 
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clinic-blue focus:border-transparent transition"
                    >
                      <option value="">Please select...</option>
                      <option value="anti-wrinkle">Anti-Wrinkle Injections</option>
                      <option value="fillers">Dermal Fillers</option>
                      <option value="vaser">Vaser Liposuction</option>
                      <option value="fat-reduction">Facial Fat Reduction</option>
                      <option value="nose">Non-Surgical Nose Reshaping</option>
                      <option value="profhilo">Profhilo</option>
                      <option value="polynucleotides">Polynucleotides</option>
                      <option value="consultation">General Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clinic-blue focus:border-transparent transition resize-none"
                      placeholder="Tell us about your aesthetic goals and any questions you have..."
                    ></textarea>
                  </div>

                  {/* GDPR Consent */}
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
                        I consent to Dr Mike Comins Clinic processing my data for consultation purposes 
                        in accordance with the <Link href="/privacy" className="text-clinic-blue underline hover:text-clinic-dark" target='_blank'>Privacy Policy</Link>. 
                        <span className="text-red-500"> *</span>
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-clinic-blue text-white font-bold px-8 py-4 rounded-lg hover:bg-opacity-90 transition flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={20} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    We aim to respond to all enquiries within 24 hours
                  </p>
                </form>
              )}
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-6">
              {/* Clinic Details Card */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-clinic-dark mb-6">Visit Our Clinic</h3>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="bg-clinic-light/30 p-3 rounded-lg">
                      <FiMapPin className="text-clinic-blue" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Hans Place Practice<br />
                        43 Hans Place<br />
                        London SW1X 0JZ<br />
                        United Kingdom
                      </p>
                      <a 
                        href="https://maps.google.com/?q=43+Hans+Place+London+SW1X+0JZ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-clinic-blue hover:underline text-sm font-semibold mt-2 inline-block"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="bg-clinic-light/30 p-3 rounded-lg">
                      <FiPhone className="text-clinic-blue" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                      <a href="tel:02075841642" className="text-clinic-blue hover:underline font-semibold">
                        +44 (0)20 7584 1642
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-clinic-light/30 p-3 rounded-lg">
                      <FiMail className="text-clinic-blue" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                      <a href="mailto:info@hansplace.com" className="text-clinic-blue hover:underline">
                        info@hansplace.com
                      </a>
                    </div>
                  </div>

                  {/* Opening Hours */}
                  <div className="flex items-start gap-4">
                    <div className="bg-clinic-light/30 p-3 rounded-lg">
                      <FiClock className="text-clinic-blue" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Opening Hours</h4>
                      <div className="space-y-1 text-gray-600 text-sm">
                        <div className="flex justify-between gap-8">
                          <span>Monday - Friday:</span>
                          <span className="font-semibold">9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span>Saturday:</span>
                          <span className="font-semibold">9:00 AM - 2:00 PM</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span>Sunday:</span>
                          <span className="font-semibold text-red-600">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-clinic-blue to-clinic-dark text-white p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">Emergency Contact</h4>
                <p className="text-sm opacity-90 mb-3">
                  For urgent matters outside of opening hours, please call our main line and follow the instructions.
                </p>
                <a 
                  href="tel:02075841642"
                  className="bg-white text-clinic-blue px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold inline-block"
                >
                  Call Emergency Line
                </a>
              </div>

              {/* CQC Registration */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-clinic-light">
                <div className="flex items-center gap-3 mb-2">
                  <FiCheckCircle className="text-green-500" size={24} />
                  <h4 className="font-bold text-gray-800">CQC Registered</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Dr Mike Comins Clinic is registered with the Care Quality Commission, 
                  ensuring the highest standards of care and safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-0">
        <div className="w-full h-96 bg-gray-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.6461234567!2d-0.15887!3d51.49567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760527d9c4e8d9%3A0x4e8f8e8e8e8e8e8e!2s43%20Hans%20Pl%2C%20London%20SW1X%200JZ%2C%20UK!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dr Mike Comins Clinic Location"
          ></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-clinic-dark mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <details className="bg-gray-50 p-6 rounded-lg group">
                <summary className="font-semibold text-lg text-clinic-dark cursor-pointer list-none flex items-center justify-between">
                  How do I book a consultation?
                  <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  You can book a consultation by filling out the form above, calling us on 020 7584 1642, 
                  or emailing info@hansplace.com. We'll get back to you within 24 hours to arrange a suitable time.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg group">
                <summary className="font-semibold text-lg text-clinic-dark cursor-pointer list-none flex items-center justify-between">
                  What should I expect at my first consultation?
                  <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  During your first consultation, Dr Comins will discuss your aesthetic goals, assess your facial 
                  structure, and recommend the most suitable treatments. This is also an opportunity for you to ask 
                  questions and understand the process fully before proceeding.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg group">
                <summary className="font-semibold text-lg text-clinic-dark cursor-pointer list-none flex items-center justify-between">
                  Do you offer payment plans?
                  <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Yes, we offer flexible payment plans for certain treatments. Please discuss this with our team 
                  during your consultation, and we'll work with you to find a suitable payment arrangement.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg group">
                <summary className="font-semibold text-lg text-clinic-dark cursor-pointer list-none flex items-center justify-between">
                  Where can I park?
                  <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  There is paid on-street parking available around Hans Place. The nearest car park is 
                  Knightsbridge Underground Car Park. We recommend using public transport - we're a 5-minute 
                  walk from Knightsbridge Underground Station (Piccadilly Line).
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for footer wave */}
      <div className="h-16 bg-white"></div>
    </main>
  );
}