import Link from 'next/link';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CheckCircleIcon from '@mui/icons-material/CheckCircleOutlineRounded';

export default function CompliancePage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-clinic-blue to-clinic-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <VerifiedUserIcon sx={{ fontSize: 48 }} className="mb-4" />
            <h1 className="text-5xl font-bold mb-4">Regulatory Compliance</h1>
            <p className="text-xl opacity-90">Last updated: January 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-clinic-dark mb-6">Our Regulatory Framework</h2>
            <p className="text-gray-700 mb-8">
              Dr Mike Comins Clinic operates under the highest regulatory standards to ensure 
              patient safety and quality of care.
            </p>

            <div className="space-y-6">
              {/* CQC */}
              <div className="bg-gray-50 border-l-4 border-clinic-blue p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <CheckCircleIcon className="text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-clinic-dark mb-2">
                      Care Quality Commission (CQC)
                    </h3>
                    <p className="text-gray-700 mb-2">
                      Registered with the CQC under the Health and Social Care Act 2008.
                    </p>
                    <p className="text-sm text-gray-600">Registration Number: [CQC-XXXXXX]</p>
                  </div>
                </div>
              </div>

              {/* GMC */}
              <div className="bg-gray-50 border-l-4 border-clinic-blue p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <CheckCircleIcon className="text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-clinic-dark mb-2">
                      General Medical Council (GMC)
                    </h3>
                    <p className="text-gray-700">
                      Dr Mike Comins is fully registered with the GMC with a license to practice.
                    </p>
                  </div>
                </div>
              </div>

              {/* GDPR */}
              <div className="bg-gray-50 border-l-4 border-clinic-blue p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <CheckCircleIcon className="text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-clinic-dark mb-2">
                      GDPR Compliance
                    </h3>
                    <p className="text-gray-700 mb-2">
                      Fully compliant with UK GDPR and Data Protection Act 2018.
                    </p>
                    <Link href="/privacy" className="text-clinic-blue underline">
                      View Privacy Policy →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Professional Bodies */}
              <div className="bg-gray-50 border-l-4 border-clinic-blue p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <CheckCircleIcon className="text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-clinic-dark mb-2">
                      Professional Memberships
                    </h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>Fellow, British College of Aesthetic Medicine (FBCAM)</li>
                      <li>Former President, British College of Aesthetic Doctors</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Insurance */}
              <div className="bg-gray-50 border-l-4 border-clinic-blue p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <CheckCircleIcon className="text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-clinic-dark mb-2">
                      Medical Indemnity Insurance
                    </h3>
                    <p className="text-gray-700">
                      Full medical indemnity insurance coverage in place.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-clinic-dark mb-3">Compliance Queries</h3>
              <p className="text-gray-700 mb-4">
                For questions about our regulatory compliance, contact us at:
              </p>
              <a href="mailto:compliance@hansplace.com" className="text-clinic-blue font-semibold underline">
                compliance@hansplace.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 bg-white"></div>
    </main>
  );
}
