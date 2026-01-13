'use client';

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl font-bold text-clinic-dark mb-6 text-center">Contact Us</h1>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              Get in touch with Dr Mike Comins Clinic. We typically respond within 24 hours.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-clinic-dark mb-6">Send us a message</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clinic-blue"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clinic-blue"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clinic-blue"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Treatment Interest</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clinic-blue">
                      <option value="">Please select...</option>
                      <option value="anti-wrinkle">Anti-wrinkle injections</option>
                      <option value="fillers">Dermal fillers</option>
                      <option value="vaser">Vaser liposuction</option>
                      <option value="fat-reduction">Fat reduction</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea 
                      rows="4"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clinic-blue"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      required
                      className="mt-1 w-4 h-4"
                    />
                    <label className="text-sm text-gray-600">
                      I consent to Dr Mike Comins Clinic processing my data for consultation purposes in accordance with the Privacy Policy *
                    </label>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-clinic-blue text-white font-semibold px-8 py-4 rounded-md hover:bg-opacity-90 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-clinic-dark mb-6">Visit us</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
                    <p className="text-gray-600">
                      Hans Place Practice<br />
                      43 Hans Place<br />
                      London SW1X 0JZ<br />
                      United Kingdom
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:02075841642" className="text-clinic-blue hover:underline">
                        +44 (0)20 7584 1642
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@hansplace.com" className="text-clinic-blue hover:underline">
                        info@hansplace.com
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Opening Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="bg-clinic-blue text-white p-6 rounded-lg">
                    <h3 className="font-semibold mb-2">Emergency?</h3>
                    <p className="text-sm opacity-90">
                      For urgent matters outside of opening hours, please call our emergency line at the number above.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Spacer for footer wave decoration */}
      <div className="h-16 bg-white"></div>
    </main>
  );
}
