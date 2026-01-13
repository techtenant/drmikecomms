import { FiAward, FiUsers, FiStar, FiTrendingUp } from 'react-icons/fi';

export default function WhyChoose() {
  const reasons = [
    {
      icon: <FiAward size={48} />,
      title: "Pioneer in Aesthetic Medicine",
      description: "One of the first doctors in the UK trained in injectable aesthetics, with over 23 years of experience."
    },
    {
      icon: <FiUsers size={48} />,
      title: "Former BCAD President",
      description: "Former president of the British College of Aesthetic Doctors and original trainer for Allergan."
    },
    {
      icon: <FiStar size={48} />,
      title: "Natural-Looking Results",
      description: "Thousands of procedures performed with focus on subtle, tailored treatments that enhance your features."
    },
    {
      icon: <FiTrendingUp size={48} />,
      title: "Advanced Techniques",
      description: "Introduced Vaser Hi Def liposuction to the UK in 2010, leading innovation in aesthetic treatments."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 relative">
      {/* Wavy Decoration */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden h-16">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0 Q300,80 600,60 T1200,0 L1200,120 L0,120 Z" fill="white" />
        </svg>
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-red-400">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-clinic-dark mb-4">
            Why choose Dr Mike Comins?
          </h2>
          <p className="text-xl text-gray-600">
            Your aesthetic goals deserve the very best. Here's why patients trust Dr Mike Comins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="text-clinic-blue mb-4 flex justify-center">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-clinic-dark mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
