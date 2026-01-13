'use client';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';

export default function TreatmentGrid() {
  const treatments = [
    {
      title: 'Anti-wrinkle injections',
      description: 'Expert consultants and advanced techniques for fast, world-class aesthetic treatments.',
      image: 'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/treatments#anti-wrinkle'
    },
    {
      title: 'Dermal Fillers',
      description: 'Rapid diagnostics and tailored treatment for lips, cheeks, jawline and facial contouring.',
      image: 'https://images.pexels.com/photos/3997981/pexels-photo-3997981.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/treatments#fillers'
    },
    {
      title: 'Fat Reduction',
      description: 'Fast access to facial reshaping, jowel reduction and buccal fat treatments.',
      image: 'https://images.pexels.com/photos/5069513/pexels-photo-5069513.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/treatments#fat-reduction'
    },
    {
      title: 'Vaser Liposuction',
      description: 'Specialist support for body contouring with advanced ultrasound-assisted liposuction technology.',
      image: 'https://images.pexels.com/photos/6823567/pexels-photo-6823567.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/treatments#vaser'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-4xl font-bold text-clinic-dark mb-4">
              Explore our specialist treatments
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              At Dr Mike Comins Clinic, we offer advanced aesthetics, world-leading expertise and fast access to 
              consultations - often within 48 hours - so your treatment can begin in days, not weeks.
            </p>
          </div>
          <Link 
            href="/treatments" 
            className="bg-clinic-light text-clinic-dark px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition whitespace-nowrap"
          >
            See all treatments
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {treatments.map((treatment, index) => (
            <Link 
              key={index}
              href={treatment.link}
              className="group block"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${treatment.image}')` }}
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-clinic-dark">{treatment.title}</h3>
                    <FiChevronRight className="text-clinic-blue group-hover:translate-x-1 transition-transform" size={20} />
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{treatment.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full">
            ←
          </button>
          <div className="flex gap-2">
            <button className="w-2 h-2 rounded-full bg-clinic-blue"></button>
            <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400"></button>
            <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400"></button>
          </div>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
