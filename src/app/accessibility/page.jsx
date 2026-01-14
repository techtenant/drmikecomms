import Link from 'next/link';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function AccessibilityPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-clinic-blue to-clinic-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AccessibilityNewIcon sx={{ fontSize: 48 }} className="mb-4" />
            <h1 className="text-5xl font-bold mb-4">Accessibility Statement</h1>
            <p className="text-xl opacity-90">Last updated: January 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-clinic-dark mb-6">Our Commitment</h2>
            <p className="text-gray-700 mb-6">
              Dr Mike Comins Clinic is committed to ensuring our website is accessible to everyone, 
              including people with disabilities. We strive to meet WCAG 2.1 Level AA standards.
            </p>

            <h3 className="text-2xl font-bold text-clinic-dark mb-4">Accessibility Features</h3>
            <ul className="space-y-3 mb-8">
              <li>Alt text for images</li>
              <li>Keyboard navigation support</li>
              <li>Clear heading structure</li>
              <li>Sufficient color contrast</li>
              <li>Resizable text</li>
              <li>Screen reader compatibility</li>
            </ul>

            <h3 className="text-2xl font-bold text-clinic-dark mb-4">Clinic Access</h3>
            <p className="text-gray-700 mb-4">
              Our clinic at Hans Place is accessible with:
            </p>
            <ul className="space-y-2 mb-8">
              <li>Ground floor consultation rooms</li>
              <li>Wide doorways</li>
              <li>Accessible toilet facilities</li>
            </ul>

            <h3 className="text-2xl font-bold text-clinic-dark mb-4">Assistance</h3>
            <p className="text-gray-700 mb-4">
              If you experience any accessibility issues, please contact us:
            </p>
            
            <div className="bg-clinic-blue text-white p-6 rounded-lg">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <PhoneIcon />
                  <a href="tel:02075841642" className="underline">020 7584 1642</a>
                </div>
                <div className="flex items-center gap-3">
                  <EmailIcon />
                  <a href="mailto:info@hansplace.com" className="underline">info@hansplace.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 bg-white"></div>
    </main>
  );
}
