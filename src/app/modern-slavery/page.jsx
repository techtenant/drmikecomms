import Link from 'next/link';
import BalanceIcon from '@mui/icons-material/Balance';

export default function ModernSlaveryPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-clinic-blue to-clinic-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BalanceIcon sx={{ fontSize: 48 }} className="mb-4" />
            <h1 className="text-5xl font-bold mb-4">Modern Slavery Statement</h1>
            <p className="text-xl opacity-90">Financial Year 2025/2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            
            <div>
              <h2 className="text-3xl font-bold text-clinic-dark mb-4">Introduction</h2>
              <p className="text-gray-700">
                This statement is made pursuant to Section 54(1) of the Modern Slavery Act 2015 and 
                constitutes Dr Mike Comins Clinic's statement for the financial year ending 2026.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-clinic-dark mb-4">Our Business</h2>
              <p className="text-gray-700 mb-4">
                Dr Mike Comins Clinic is a private aesthetic medicine practice based in London, 
                providing non-surgical cosmetic treatments.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>Location: Hans Place, London</li>
                <li>Services: Aesthetic medical treatments</li>
                <li>Employees: Small clinical team</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-clinic-dark mb-4">Our Supply Chains</h2>
              <p className="text-gray-700 mb-4">
                Our supply chains include:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>Medical suppliers (pharmaceuticals and equipment)</li>
                <li>Consumables and medical supplies</li>
                <li>Professional services (accounting, legal, marketing)</li>
                <li>Facility management and cleaning services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-clinic-dark mb-4">Our Policies</h2>
              <p className="text-gray-700 mb-4">
                We are committed to ensuring there is no modern slavery or human trafficking in our 
                business or supply chains. Our policies include:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>Ethical recruitment practices</li>
                <li>Fair employment terms and conditions</li>
                <li>Safe working environment</li>
                <li>Supplier due diligence</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-clinic-dark mb-4">Due Diligence</h2>
              <p className="text-gray-700 mb-4">
                To identify and mitigate risk we:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>Source from reputable, established UK and EU suppliers</li>
                <li>Conduct supplier assessments</li>
                <li>Maintain transparent employment practices</li>
                <li>Provide channels for reporting concerns</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-clinic-dark mb-4">Risk Assessment</h2>
              <p className="text-gray-700">
                Given our small size, UK location, and use of established medical suppliers, we assess 
                the risk of modern slavery in our operations and supply chains as low. However, we 
                remain vigilant and committed to continuous improvement.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-clinic-dark mb-4">Training</h2>
              <p className="text-gray-700">
                All staff members are made aware of modern slavery issues and our commitment to ethical 
                business practices.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-clinic-dark mb-4">Effectiveness</h2>
              <p className="text-gray-700">
                We measure effectiveness through regular supplier reviews and staff feedback. To date, 
                we have identified no instances of modern slavery in our operations or supply chains.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-clinic-dark mb-4">Reporting Concerns</h2>
              <p className="text-gray-700 mb-4">
                If you have concerns about potential modern slavery in our business or supply chains, 
                please contact:
              </p>
              <div className="bg-gray-50 border-l-4 border-clinic-blue p-4">
                <p className="text-gray-700">
                  Email: <a href="mailto:compliance@hansplace.com" className="text-clinic-blue underline">compliance@hansplace.com</a>
                </p>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-clinic-dark mb-3">Statement Approval</h3>
              <p className="text-gray-700 mb-4">
                This statement has been approved by Dr Mike Comins as the principal of 
                Dr Mike Comins Clinic.
              </p>
              <div className="border-t border-gray-300 pt-4 mt-4">
                <p className="text-gray-700 font-semibold">Dr Mike Comins MBBS FBCAM</p>
                <p className="text-gray-600 text-sm">Principal</p>
                <p className="text-gray-600 text-sm mt-2">Date: January 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 bg-white"></div>
    </main>
  );
}
