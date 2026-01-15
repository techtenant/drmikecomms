import Link from 'next/link';
import { FiCheck } from 'react-icons/fi';

export default function RapidDiagnostics() {
  const features = [
    'See a specialist within 48 hours',
    'State-of-the-art aesthetics facility',
    'Treatment results typically within 72 hours',
    'Same-day consultations and procedures (when required)'
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/images/drmike_heroone.png" 
              alt="Aesthetic treatment facility"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT: Content */}
          <div>
            <h2 className="text-4xl font-bold text-clinic-dark mb-6">
              Rapid answers, world-class care
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Dr Mike Comins' clinic offers advanced aesthetic treatments with expert consultation and fast access to procedures. We specialise in anti-wrinkle injections, dermal fillers, fat reduction and Vaser liposuction. Patients benefit from fast access to treatments, with a dedicated team guiding them through every stage.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-clinic-light flex items-center justify-center">
                      <FiCheck className="text-clinic-dark" size={16} />
                    </div>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Link 
              href="/treatments"
              className="bg-clinic-light text-clinic-dark px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition inline-block"
            >
              Explore treatments
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
