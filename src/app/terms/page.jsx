import Link from 'next/link';
import GavelIcon from '@mui/icons-material/Gavel';

export default function TermsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-clinic-blue to-clinic-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <GavelIcon sx={{ fontSize: 48 }} className="mb-4" />
            <h1 className="text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-xl opacity-90">Last updated: January 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            
            <div>
              <h2 className="text-3xl font-bold text-clinic-dark mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing and using this website or our services, you accept and agree to be bound 
                by these Terms and Conditions. If you do not agree, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-clinic-dark mb-4">2. Services</h2>
              <p className="text-gray-700 mb-4">
                Dr Mike Comins Clinic provides aesthetic medical services including but not limited to:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>Anti-wrinkle injections (Botox, Dysport, Azzalure)</li>
                <li>Dermal fillers</li>
                <li>Vaser liposuction</li>
                <li>Facial fat reduction procedures</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-clinic-dark mb-4">3. Consultation & Treatment</h2>
              <p className="text-gray-700 mb-4">
                All treatments require an initial consultation. During this:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>Medical history will be reviewed</li>
                <li>Treatment options will be discussed</li>
                <li>Risks and benefits will be explained</li>
                <li>Written consent will be obtained before any procedure</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-clinic-dark mb-4">4. Payment Terms</h2>
              <p className="text-gray-700 mb-4">Payment is required at the time of treatment unless alternative arrangements have been agreed in writing.</p>
              <ul className="text-gray-700 space-y-2">
                <li>Consultation fees are non-refundable</li>
                <li>Treatment deposits are non-refundable unless cancelled with 48 hours notice</li>
                <li>We accept card payments, bank transfers, and cash</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-clinic-dark mb-4">5. Cancellation Policy</h2>
              <ul className="text-gray-700 space-y-2">
                <li>Cancellations with 48+ hours notice: Full refund of deposit</li>
                <li>Cancellations with 24-48 hours notice: 50% deposit refund</li>
                <li>Cancellations with less than 24 hours notice: No refund</li>
                <li>Failed to attend: No refund and full treatment cost may be charged</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-clinic-dark mb-4">6. Medical Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                While we strive for optimal results:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>Results may vary between individuals</li>
                <li>No guarantees of specific outcomes are given</li>
                <li>Side effects and complications, though rare, are possible</li>
                <li>Follow-up care is your responsibility</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-clinic-dark mb-4">7. Aftercare</h2>
              <p className="text-gray-700">
                You will receive detailed aftercare instructions following treatment. Failure to follow 
                these instructions may affect results and is not grounds for complaint.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-clinic-dark mb-4">8. Photography</h2>
              <p className="text-gray-700">
                Clinical photographs may be taken for medical records. Separate consent is required 
                for any marketing or educational use of images.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-clinic-dark mb-4">9. Complaints</h2>
              <p className="text-gray-700 mb-4">
                If you have concerns about any aspect of your care:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>Contact us immediately: <a href="tel:02075841642" className="text-clinic-blue underline">020 7584 1642</a></li>
                <li>Email: <a href="mailto:complaints@hansplace.com" className="text-clinic-blue underline">complaints@hansplace.com</a></li>
                <li>We will respond within 5 working days</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-clinic-dark mb-4">10. Liability</h2>
              <p className="text-gray-700">
                Dr Mike Comins Clinic maintains full medical indemnity insurance. Our liability is 
                limited to the extent permitted by law and does not cover indirect or consequential losses.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-clinic-dark mb-4">11. Governing Law</h2>
              <p className="text-gray-700">
                These terms are governed by the laws of England and Wales. Any disputes will be 
                subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>

            <div className="mt-12 bg-clinic-blue text-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <p className="mb-4">Questions about these terms?</p>
              <div className="space-y-2">
                <p>Phone: <a href="tel:02075841642" className="underline">020 7584 1642</a></p>
                <p>Email: <a href="mailto:info@hansplace.com" className="underline">info@hansplace.com</a></p>
                <p>Address: 43 Hans Place, London SW1X 0JZ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 bg-white"></div>
    </main>
  );
}
