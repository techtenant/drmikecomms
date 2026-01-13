import { FiAward, FiHeart, FiUsers } from 'react-icons/fi';
import Link from 'next/link';

export default function OurValues() {
  const values = [
    {
      icon: <FiAward size={48} />,
      title: 'We go further',
      description: 'We operate as experts with world-class expertise dedicated to maintaining the highest standards of aesthetic care.',
      color: 'text-red-500'
    },
    {
      icon: <FiHeart size={48} />,
      title: 'We personalise care',
      description: 'Our clinician and support team are dedicated to the care of a very small number of patients, so have more time for you.',
      color: 'text-clinic-teal'
    },
    {
      icon: <FiUsers size={48} />,
      title: 'We work as one',
      description: 'Your personal treatment plan will be laid out for you, then we\'ll take care of the details while you focus on you.',
      color: 'text-clinic-blue'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-clinic-dark mb-4">
            Our values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className={`${value.color} mb-4 flex justify-center`}>
                {value.icon}
              </div>
              <h3 className={`text-xl font-bold mb-3 ${value.color}`}>
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/about"
            className="bg-clinic-light text-clinic-dark px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition inline-block"
          >
            About us
          </Link>
        </div>
      </div>
    </section>
  );
}
