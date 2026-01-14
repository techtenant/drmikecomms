'use client';
import Link from 'next/link';
import { FiSearch, FiPhone, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);

  const treatments = [
    { name: 'Anti-Wrinkle Injections', href: '/treatments#anti-wrinkle' },
    { name: 'Dermal Fillers', href: '/treatments#fillers' },
    { name: 'Vaser Liposuction', href: '/treatments#vaser' },
    { name: 'Facial Fat Reduction', href: '/treatments#fat-reduction' },
    { name: 'View All Treatments', href: '/treatments' }
  ];

  return (
    <header className="bg-clinic-blue text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with logo, search, phone, enquire */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logos/logo-concept-2-wordmark.svg"
              alt="Dr Mike Comins Clinic"
              className="h-12 md:h-14 w-auto brightness-0 invert"
            />
          </Link>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="hover:bg-white/10 p-2 rounded-full transition">
              <FiSearch size={20} />
            </button>
            <a href="tel:02075841642" className="flex items-center gap-2 hover:bg-white/10 px-3 py-2 rounded transition">
              <FiPhone size={18} />
              <span>+44 (0)20 7584 1642</span>
            </a>
            <Link
              href="/contact"
              className="bg-clinic-light text-clinic-dark px-6 py-2 rounded-md font-semibold hover:bg-opacity-90 transition"
            >
              Enquire online
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-3">
            <a href="tel:02075841642" className="hover:bg-white/10 p-2 rounded-full transition">
              <FiPhone size={20} />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hover:bg-white/10 p-2 rounded-full transition"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block border-t border-white/20 py-3">
          <ul className="flex items-center gap-8 text-sm">
            <li>
              <Link href="/" className="hover:text-clinic-light transition">Home</Link>
            </li>
            <li className="relative group">
              <button className="hover:text-clinic-light transition flex items-center gap-1">
                Treatments <span className="text-xs">▼</span>
              </button>
              {/* Desktop Dropdown */}
              <div className="absolute top-full left-0 mt-2 bg-white text-clinic-dark rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[250px]">
                {treatments.map((treatment, i) => (
                  <Link
                    key={i}
                    href={treatment.href}
                    className="block px-4 py-3 hover:bg-clinic-light/20 transition first:rounded-t-lg last:rounded-b-lg"
                  >
                    {treatment.name}
                  </Link>
                ))}
              </div>
            </li>
            <li>
              <Link href="/about" className="hover:text-clinic-light transition">About Dr Comins</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-clinic-light transition">Contact Us</Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-clinic-light transition">Privacy Policy</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Slide-in */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[85%] bg-clinic-dark text-white z-50 transform transition-transform duration-300 lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="p-6">
          {/* Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 hover:bg-white/10 p-2 rounded-full transition"
          >
            <FiX size={24} />
          </button>

          {/* Logo */}
          <div className="mb-8 mt-2">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <div className="text-xl font-bold">Dr Mike Comins</div>
              <div className="text-sm opacity-80">MBBS FBCAM</div>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <nav>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-4 hover:bg-white/10 rounded-lg transition"
                >
                  Home
                </Link>
              </li>

              {/* Treatments with submenu */}
              <li>
                <button
                  onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                  className="w-full text-left py-3 px-4 hover:bg-white/10 rounded-lg transition flex items-center justify-between"
                >
                  Treatments
                  <span className={`text-xs transform transition-transform ${treatmentsOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {treatmentsOpen && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {treatments.map((treatment, i) => (
                      <li key={i}>
                        <Link
                          href={treatment.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-2 px-4 text-sm hover:bg-white/10 rounded-lg transition"
                        >
                          {treatment.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-4 hover:bg-white/10 rounded-lg transition"
                >
                  About Dr Comins
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-4 hover:bg-white/10 rounded-lg transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-4 hover:bg-white/10 rounded-lg transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile CTA */}
          <div className="mt-8 space-y-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full bg-clinic-light text-clinic-dark text-center px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              Enquire Online
            </Link>
            <a
              href="tel:02075841642"
              className="block w-full border-2 border-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Call: 020 7584 1642
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}