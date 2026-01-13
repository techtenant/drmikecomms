'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiShield, FiLock, FiEye, FiUserCheck, FiDatabase, FiMail, FiCheckCircle, FiFileText, FiEdit, FiTrash2, FiPauseCircle, FiRepeat, FiXCircle, FiX, FiPhone } from 'react-icons/fi';
import DescriptionIcon from '@mui/icons-material/Description';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PauseCircleIcon from '@mui/icons-material/PauseCircleOutline';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'introduction', title: '1. Introduction', icon: <FiShield size={18} /> },
    { id: 'information-collected', title: '2. Information We Collect', icon: <FiDatabase size={18} /> },
    { id: 'how-we-use', title: '3. How We Use Your Information', icon: <FiEye size={18} /> },
    { id: 'legal-basis', title: '4. Legal Basis for Processing', icon: <FiUserCheck size={18} /> },
    { id: 'data-retention', title: '5. Data Retention', icon: <FiLock size={18} /> },
    { id: 'your-rights', title: '6. Your Rights Under GDPR', icon: <FiUserCheck size={18} /> },
    { id: 'data-security', title: '7. Data Security', icon: <FiShield size={18} /> },
    { id: 'cookies', title: '8. Cookies', icon: <FiDatabase size={18} /> },
    { id: 'third-parties', title: '9. Third Party Disclosure', icon: <FiEye size={18} /> },
    { id: 'international', title: '10. International Transfers', icon: <FiLock size={18} /> },
    { id: 'contact', title: '11. Contact Us', icon: <FiMail size={18} /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-clinic-blue to-clinic-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FiShield size={48} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl opacity-90 mb-4">
              Your privacy and data protection are our top priorities
            </p>
            <p className="text-sm opacity-80">
              Last updated: January 2026 | Effective from: January 2026
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar Navigation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
            {/* Sticky Sidebar Navigation */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-24 bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <h3 className="font-bold text-lg text-clinic-dark mb-4">Quick Navigation</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition flex items-center gap-3 ${
                        activeSection === section.id
                          ? 'bg-clinic-blue text-white'
                          : 'text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {section.icon}
                      <span className="text-sm">{section.title}</span>
                    </button>
                  ))}
                </nav>

                {/* Contact Card */}
                <div className="mt-6 bg-clinic-blue text-white p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Questions?</h4>
                  <p className="text-sm opacity-90 mb-3">
                    Contact our Data Protection Officer
                  </p>
                  <a 
                    href="mailto:dpo@hansplace.com"
                    className="text-sm underline hover:text-clinic-light"
                  >
                    dpo@hansplace.com
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              {/* Introduction */}
              <section id="introduction" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-clinic-dark mb-6 flex items-center gap-3">
                  <FiShield className="text-clinic-blue" size={32} />
                  1. Introduction
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Dr Mike Comins Clinic ("we", "our", "us") is committed to protecting your privacy and 
                    ensuring your personal data is handled in accordance with the General Data Protection 
                    Regulation (GDPR) and the Data Protection Act 2018.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This Privacy Policy explains how we collect, use, store, and protect your personal 
                    information when you:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                    <li>Visit our website (drmikecomins.com)</li>
                    <li>Book a consultation or treatment</li>
                    <li>Contact us via phone, email, or our contact form</li>
                    <li>Receive our services at Hans Place Practice</li>
                  </ul>
                  <div className="bg-blue-50 border-l-4 border-clinic-blue p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Data Controller:</strong> Dr Mike Comins Clinic, Hans Place Practice, 
                      43 Hans Place, London SW1X 0JZ
                    </p>
                  </div>
                </div>
              </section>

              {/* Information We Collect */}
              <section id="information-collected" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-clinic-dark mb-6 flex items-center gap-3">
                  <FiDatabase className="text-clinic-blue" size={32} />
                  2. Information We Collect
                </h2>
                <div className="space-y-6">
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-clinic-dark mb-3">Personal Information</h3>
                    <p className="text-gray-700 mb-3">We collect the following personal data:</p>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {['Full name', 'Date of birth', 'Email address', 'Phone number', 'Home address', 'Emergency contact details'].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700">
                          <span className="w-2 h-2 bg-clinic-blue rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-clinic-dark mb-3">Medical Information</h3>
                    <p className="text-gray-700 mb-3">With your explicit consent, we collect:</p>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {['Medical history', 'Current medications', 'Allergies', 'Previous treatments', 'Treatment preferences', 'Clinical photographs'].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700">
                          <span className="w-2 h-2 bg-clinic-blue rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-clinic-dark mb-3">Financial Information</h3>
                    <p className="text-gray-700 mb-3">For payment processing:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-clinic-blue rounded-full"></span>
                        Payment card details (processed securely via third-party providers)
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-clinic-blue rounded-full"></span>
                        Billing address
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-clinic-blue rounded-full"></span>
                        Insurance details (if applicable)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-clinic-dark mb-3">Website Usage Data</h3>
                    <p className="text-gray-700 mb-3">Automatically collected via cookies:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-clinic-blue rounded-full"></span>
                        IP address and device information
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-clinic-blue rounded-full"></span>
                        Browser type and operating system
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-clinic-blue rounded-full"></span>
                        Pages visited and time spent on site
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section id="how-we-use" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-clinic-dark mb-6 flex items-center gap-3">
                  <FiEye className="text-clinic-blue" size={32} />
                  3. How We Use Your Information
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use your personal data for the following purposes:
                  </p>
                  <div className="space-y-4">
                    {[
                      { title: 'Treatment & Care', desc: 'To provide, maintain, and improve our aesthetic medical services' },
                      { title: 'Appointments', desc: 'To process bookings and send appointment reminders' },
                      { title: 'Communication', desc: 'To respond to your enquiries and provide customer support' },
                      { title: 'Follow-up Care', desc: 'To send post-treatment instructions and check-in communications' },
                      { title: 'Legal Compliance', desc: 'To comply with medical record-keeping and regulatory obligations' },
                      { title: 'Marketing', desc: 'To send relevant treatment information (only with your explicit consent)' }
                    ].map((item, i) => (
                      <div key={i} className="bg-gray-50 p-4 rounded-lg border-l-4 border-clinic-blue">
                        <h4 className="font-bold text-clinic-dark mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Legal Basis */}
              <section id="legal-basis" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-clinic-dark mb-6 flex items-center gap-3">
                  <FiUserCheck className="text-clinic-blue" size={32} />
                  4. Legal Basis for Processing
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Under GDPR, we process your personal data based on the following legal grounds:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { basis: 'Consent', example: 'Marketing communications, clinical photography' },
                      { basis: 'Contract', example: 'Providing treatments you have booked' },
                      { basis: 'Legal Obligation', example: 'Medical record retention (7 years)' },
                      { basis: 'Legitimate Interest', example: 'Improving our services and website functionality' }
                    ].map((item, i) => (
                      <div key={i} className="bg-white border-2 border-gray-200 rounded-lg p-5">
                        <h4 className="font-bold text-clinic-blue mb-2">{item.basis}</h4>
                        <p className="text-gray-600 text-sm">Example: {item.example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Data Retention */}
              <section id="data-retention" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-clinic-dark mb-6 flex items-center gap-3">
                  <FiLock className="text-clinic-blue" size={32} />
                  5. Data Retention
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-white border-2 border-clinic-light rounded-lg p-6">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="pb-3 text-clinic-dark font-bold">Data Type</th>
                        <th className="pb-3 text-clinic-dark font-bold">Retention Period</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b border-gray-200">
                        <td className="py-3">Medical records</td>
                        <td className="py-3 font-semibold">7 years (legal requirement)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">Financial records</td>
                        <td className="py-3 font-semibold">6 years (HMRC requirement)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">Marketing consent</td>
                        <td className="py-3 font-semibold">Until withdrawn</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">Website cookies</td>
                        <td className="py-3 font-semibold">Up to 12 months</td>
                      </tr>
                      <tr>
                        <td className="py-3">Enquiry forms (no treatment)</td>
                        <td className="py-3 font-semibold">2 years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Your Rights */}
              <section id="your-rights" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-clinic-dark mb-6 flex items-center gap-3">
                  <FiUserCheck className="text-clinic-blue" size={32} />
                  6. Your Rights Under GDPR
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    You have the following rights regarding your personal data:
                  </p>
                  <div className="space-y-4">
                    {[
                      { 
                        right: 'Right to Access', 
                        desc: 'Request a copy of all personal data we hold about you', 
                        icon: <DescriptionIcon />,
                        bgColor: 'bg-blue-100',
                        iconColor: 'text-blue-600'
                      },
                      { 
                        right: 'Right to Rectification', 
                        desc: 'Request correction of inaccurate or incomplete data', 
                        icon: <EditIcon />,
                        bgColor: 'bg-orange-100',
                        iconColor: 'text-orange-600'
                      },
                      { 
                        right: 'Right to Erasure', 
                        desc: 'Request deletion of your data (subject to legal obligations)', 
                        icon: <DeleteIcon />,
                        bgColor: 'bg-gray-100',
                        iconColor: 'text-gray-600'
                      },
                      { 
                        right: 'Right to Restriction', 
                        desc: 'Request limitation of how we process your data', 
                        icon: <PauseCircleIcon />,
                        bgColor: 'bg-blue-100',
                        iconColor: 'text-blue-600'
                      },
                      { 
                        right: 'Right to Portability', 
                        desc: 'Request transfer of your data to another provider', 
                        icon: <SwapHorizIcon />,
                        bgColor: 'bg-purple-100',
                        iconColor: 'text-purple-600'
                      },
                      { 
                        right: 'Right to Object', 
                        desc: 'Object to processing based on legitimate interests', 
                        icon: <FiXCircle size={24} />,
                        bgColor: 'bg-red-100',
                        iconColor: 'text-red-600'
                      },
                      { 
                        right: 'Right to Withdraw Consent', 
                        desc: 'Withdraw consent for marketing or photography at any time', 
                        icon: <FiX size={24} />,
                        bgColor: 'bg-gray-100',
                        iconColor: 'text-gray-600'
                      }
                    ].map((item, i) => (
                      <div key={i} className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-clinic-blue transition">
                        <div className="flex items-start gap-4">
                          <div className={`${item.bgColor} ${item.iconColor} p-3 rounded-full flex-shrink-0`}>
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-clinic-dark mb-1">{item.right}</h4>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-clinic-blue text-white p-6 rounded-lg mt-6">
                    <h4 className="font-bold text-lg mb-2">How to Exercise Your Rights</h4>
                    <p className="text-sm opacity-90 mb-4">
                      To exercise any of these rights, please contact our Data Protection Officer:
                    </p>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-center gap-2">
                        <FiMail size={16} /> Email: <a href="mailto:dpo@hansplace.com" className="underline">dpo@hansplace.com</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <FiPhone size={16} /> Phone: <a href="tel:02075841642" className="underline">020 7584 1642</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <FiMail size={16} /> Post: Data Protection Officer, Hans Place Practice, 43 Hans Place, London SW1X 0JZ
                      </p>
                    </div>
                    <p className="text-xs opacity-80 mt-4">
                      We will respond to your request within one month of receipt.
                    </p>
                  </div>
                </div>
              </section>

              {/* Data Security */}
              <section id="data-security" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-clinic-dark mb-6 flex items-center gap-3">
                  <FiShield className="text-clinic-blue" size={32} />
                  7. Data Security
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We implement appropriate technical and organisational measures to protect your personal 
                    data against unauthorised access, alteration, disclosure, or destruction:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'SSL encryption for website data transmission',
                      'Secure password-protected systems',
                      'Regular security audits and updates',
                      'Staff training on data protection',
                      'Access controls and user authentication',
                      'Encrypted backup systems',
                      'Secure disposal of physical records',
                      'GDPR-compliant third-party processors'
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <FiShield className="text-green-500 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Cookies */}
              <section id="cookies" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-clinic-dark mb-6 flex items-center gap-3">
                  <FiDatabase className="text-clinic-blue" size={32} />
                  8. Cookies
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use cookies to improve your experience on our website. You can control cookie settings 
                    through your browser preferences.
                  </p>
                  <div className="space-y-4">
                    {[
                      { type: 'Essential Cookies', desc: 'Required for website functionality (e.g., security, session management)', required: true },
                      { type: 'Performance Cookies', desc: 'Help us understand how visitors use our website (e.g., Google Analytics)', required: false },
                      { type: 'Functional Cookies', desc: 'Remember your preferences and settings', required: false },
                      { type: 'Marketing Cookies', desc: 'Track your activity for targeted advertising (only with consent)', required: false }
                    ].map((item, i) => (
                      <div key={i} className="bg-white border-2 border-gray-200 rounded-lg p-5">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-clinic-dark">{item.type}</h4>
                          <span className={`text-xs px-3 py-1 rounded-full ${item.required ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                            {item.required ? 'Required' : 'Optional'}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 bg-clinic-blue text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition font-semibold">
                    Manage Cookie Preferences
                  </button>
                </div>
              </section>

              {/* Third Parties */}
              <section id="third-parties" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-clinic-dark mb-6 flex items-center gap-3">
                  <FiEye className="text-clinic-blue" size={32} />
                  9. Third Party Disclosure
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal data to third parties. We may share your 
                    information with:
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Medical laboratories for diagnostic testing',
                      'Payment processors (Stripe, PayPal) for secure transactions',
                      'Email service providers for appointment reminders',
                      'Regulatory bodies (CQC, GMC) when legally required',
                      'Legal advisors when necessary for legal proceedings'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-clinic-blue rounded-full mt-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 mt-4">
                    All third-party processors are GDPR-compliant and bound by data processing agreements.
                  </p>
                </div>
              </section>

              {/* International Transfers */}
              <section id="international" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-clinic-dark mb-6 flex items-center gap-3">
                  <FiLock className="text-clinic-blue" size={32} />
                  10. International Data Transfers
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Your data is primarily stored and processed within the United Kingdom and European Economic 
                    Area (EEA). If data is transferred outside the EEA, we ensure:
                  </p>
                  <div className="bg-blue-50 border-l-4 border-clinic-blue p-5 rounded">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <FiCheckCircle className="text-green-500" size={18} />
                        Adequate protection through EU-approved safeguards
                      </li>
                      <li className="flex items-center gap-2">
                        <FiCheckCircle className="text-green-500" size={18} />
                        Standard Contractual Clauses (SCCs) are in place
                      </li>
                      <li className="flex items-center gap-2">
                        <FiCheckCircle className="text-green-500" size={18} />
                        Recipient countries have adequate data protection laws
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-clinic-dark mb-6 flex items-center gap-3">
                  <FiMail className="text-clinic-blue" size={32} />
                  11. Contact Us & Complaints
                </h2>
                <div className="bg-gradient-to-r from-clinic-blue to-clinic-dark text-white p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Data Protection Officer</h3>
                  <p className="opacity-90 mb-6">
                    If you have questions about this Privacy Policy or wish to exercise your rights, 
                    please contact our Data Protection Officer:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Email</h4>
                      <a href="mailto:dpo@hansplace.com" className="underline hover:text-clinic-light">
                        dpo@hansplace.com
                      </a>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Phone</h4>
                      <a href="tel:02075841642" className="underline hover:text-clinic-light">
                        020 7584 1642
                      </a>
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="font-semibold mb-2">Post</h4>
                      <p>
                        Data Protection Officer<br />
                        Dr Mike Comins Clinic<br />
                        Hans Place Practice<br />
                        43 Hans Place<br />
                        London SW1X 0JZ
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-clinic-dark mb-3">Right to Complain</h4>
                  <p className="text-gray-700 mb-4">
                    If you are unhappy with how we have handled your personal data, you have the right to 
                    lodge a complaint with the Information Commissioner's Office (ICO):
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Website:</strong> <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-clinic-blue underline">ico.org.uk</a></p>
                    <p><strong>Phone:</strong> 0303 123 1113</p>
                    <p><strong>Post:</strong> Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF</p>
                  </div>
                </div>
              </section>

              {/* ICO Registration */}
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
                <FiCheckCircle className="text-green-500 mx-auto mb-3" size={48} />
                <h3 className="text-xl font-bold text-gray-800 mb-2">ICO Registered</h3>
                <p className="text-gray-600 mb-4">
                  Dr Mike Comins Clinic is registered with the Information Commissioner's Office (ICO) 
                  as a data controller.
                </p>
                <p className="text-sm text-gray-500">
                  Registration Number: ZA123456 (Example)
                </p>
              </div>

              {/* Last Updated */}
              <div className="mt-8 pt-8 border-t-2 border-gray-200 text-center text-gray-500 text-sm">
                <p>This Privacy Policy was last updated on <strong>13 January 2026</strong></p>
                <p className="mt-2">We reserve the right to update this policy. Any changes will be posted on this page.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for footer wave */}
      <div className="h-16 bg-white"></div>
    </main>
  );
}