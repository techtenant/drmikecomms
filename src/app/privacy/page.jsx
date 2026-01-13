export const metadata = {
  title: 'Privacy Policy | Dr Mike Comins',
  description: 'Privacy Policy for Dr Mike Comins Aesthetic Clinic',
}

export default function PrivacyPolicy() {
  return (
    <main className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-clinic-dark mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: January 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-clinic-dark mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Dr Mike Comins Clinic ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-clinic-dark mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Name, email address, phone number, and home address</li>
              <li>Medical history and treatment preferences</li>
              <li>Payment information</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-clinic-dark mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your appointments and treatments</li>
              <li>Send you appointment reminders and follow-up care instructions</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-clinic-dark mb-4">4. Data Retention</h2>
            <p className="text-gray-600 leading-relaxed">
              We retain medical records for 7 years in accordance with UK medical record retention requirements. Other personal data is retained only for as long as necessary to fulfill the purposes outlined in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-clinic-dark mb-4">5. Your Rights Under GDPR</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Under the General Data Protection Regulation (GDPR), you have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Erasure:</strong> Request deletion of your data (subject to legal obligations)</li>
              <li><strong>Restriction:</strong> Request limitation of processing</li>
              <li><strong>Portability:</strong> Request transfer of your data</li>
              <li><strong>Objection:</strong> Object to processing of your data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-clinic-dark mb-4">6. Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              We use cookies to improve your experience on our website. You can control cookie settings through your browser preferences. For more information, please see our Cookie Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-clinic-dark mb-4">7. Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-clinic-dark mb-4">8. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Dr Mike Comins Clinic</strong><br />
                Hans Place Practice<br />
                43 Hans Place<br />
                London SW1X 0JZ<br />
                <br />
                Email: <a href="mailto:info@hansplace.com" className="text-clinic-blue hover:underline">info@hansplace.com</a><br />
                Phone: <a href="tel:02075841642" className="text-clinic-blue hover:underline">020 7584 1642</a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-clinic-dark mb-4">9. ICO Registration</h2>
            <p className="text-gray-600 leading-relaxed">
              We are registered with the Information Commissioner's Office (ICO) as a data controller.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-clinic-dark mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated "Last updated" date.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
