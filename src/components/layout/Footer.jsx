import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-clinic-blue text-white relative">
      {/* Wavy Top Decoration with Heart */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-full overflow-hidden h-16">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,60 Q300,0 600,40 T1200,60 L1200,120 L0,120 Z" fill="#1e4a6b" />
        </svg>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-red-400">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-8">
        {/* Top Section - Logo, Badges, Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-8 border-b border-white/20">
          {/* Logo & Partnership */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <svg width="24" height="36" viewBox="0 0 24 36" fill="white" className="opacity-90">
                    <path d="M12 0 C12 0 24 8 24 18 C24 28 18 36 12 36 C6 36 0 28 0 18 C0 8 12 0 12 0 Z M12 6 C12 6 6 12 6 18 C6 24 9 30 12 30 C15 30 18 24 18 18 C18 12 12 6 12 6 Z" />
                  </svg>
                  <div>
                    <div className="text-xs font-light tracking-wider">THE</div>
                    <div className="text-lg font-bold tracking-tight leading-none">DR MIKE</div>
                    <div className="text-lg font-bold tracking-tight leading-none">COMINS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ratings & Verification */}
          <div className="flex flex-col gap-4">
            {/* Doctify Rating */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#60D5C3" className="text-teal-400">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="font-bold text-lg">4.95</span>
              </div>
              <div className="text-xs opacity-80">Based on patient reviews</div>
              <div className="text-xs opacity-60 flex items-center gap-1 mt-1">
                Verified by <span className="font-semibold">Reviews.io</span>
              </div>
            </div>
          </div>

          {/* CQC Verification */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-start gap-3">
              <div className="bg-white rounded-full p-2 flex-shrink-0">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-clinic-blue">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-sm mb-1">CQC registered</div>
                <div className="text-xs opacity-80 mb-2">Regulated by Care Quality Commission</div>
                <div className="text-xs opacity-60">Registration: HC12345</div>
              </div>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Contact us */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-white/20 pb-2">Contact us</h3>
            <div className="space-y-2 text-sm opacity-80">
              <p>43 Hans Place</p>
              <p>London</p>
              <p>SW1X 0JZ</p>
              <p className="pt-2">
                <a href="tel:02075841642" className="hover:text-clinic-light transition">
                  +44 (0)20 7584 1642
                </a>
              </p>
              <p>
                <Link href="/contact" className="hover:text-clinic-light transition">
                  Enquire online
                </Link>
              </p>
            </div>
          </div>

          {/* About us */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-white/20 pb-2">About us</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="/about" className="hover:text-clinic-light transition">About us</Link></li>
              <li><Link href="/about#qualifications" className="hover:text-clinic-light transition">Qualifications</Link></li>
              <li><Link href="/blog" className="hover:text-clinic-light transition">News & articles</Link></li>
              <li><Link href="/careers" className="hover:text-clinic-light transition">Careers</Link></li>
            </ul>
          </div>

          {/* Patient information */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-white/20 pb-2">Patient information</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="/patient-hub" className="hover:text-clinic-light transition">Patient hub</Link></li>
              <li><Link href="/pricing" className="hover:text-clinic-light transition">How to pay</Link></li>
              <li><Link href="/international" className="hover:text-clinic-light transition">International patients</Link></li>
              <li><Link href="/feedback" className="hover:text-clinic-light transition">Your feedback</Link></li>
            </ul>
          </div>

          {/* For professionals */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-white/20 pb-2">For professionals</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="/professionals" className="hover:text-clinic-light transition">Professionals hub</Link></li>
              <li><Link href="/refer" className="hover:text-clinic-light transition">Refer a patient</Link></li>
              <li><Link href="/forms" className="hover:text-clinic-light transition">Treatment forms</Link></li>
              <li><Link href="/press" className="hover:text-clinic-light transition">Press enquiries</Link></li>
            </ul>
          </div>

          {/* Legal & compliance */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-white/20 pb-2">Legal & compliance</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="/accessibility" className="hover:text-clinic-light transition">Accessibility</Link></li>
              <li><Link href="/compliance" className="hover:text-clinic-light transition">Compliance</Link></li>
              <li><Link href="/privacy" className="hover:text-clinic-light transition">Privacy</Link></li>
              <li><Link href="/cookie-notice" className="hover:text-clinic-light transition">Cookie notice</Link></li>
              <li><Link href="/terms" className="hover:text-clinic-light transition">Terms and conditions</Link></li>
              <li><Link href="/modern-slavery" className="hover:text-clinic-light transition">Modern slavery statement</Link></li>
              <li><button className="hover:text-clinic-light transition">Cookies Settings</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
            <p>
              © Copyright {new Date().getFullYear()} Dr Mike Comins Clinic. 
              Registered company number: 12345678. CQC registered: HC12345.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.medicodigital.co.uk/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                <span className="text-xs">Website by Medico Digital</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
