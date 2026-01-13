'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function WaysToAccess() {
  const [activeTab, setActiveTab] = useState('selfpay');

  const tabs = {
    selfpay: {
      title: 'Self pay',
      icon: '£',
      description: 'Choose to pay directly and get fast access to world-class care, with clear fixed-price packages and 0% finance to make things simple.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
      link: '/pricing'
    },
    insurance: {
      title: 'Private medical insurance',
      icon: '🏥',
      description: 'Use your private medical insurance to access expert care at Dr Mike Comins Clinic. We work with all major UK insurers.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80',
      link: '/insurance'
    },
    international: {
      title: 'Patients from abroad',
      icon: '✈',
      description: 'Travelling from abroad? Our international team will support every step of your visit - from finding the right treatment to organising your care.',
      image: 'https://images.unsplash.com/photo-1436262513933-a0b06755c784?w=600&q=80',
      link: '/international'
    }
  };

  const activeContent = tabs[activeTab];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-clinic-dark mb-4">
            Ways to access care
          </h2>
          <p className="text-lg text-gray-600">
            Explore the funding options available at Dr Mike Comins Clinic.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {Object.entries(tabs).map(([key, tab]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-t-lg font-semibold transition ${
                activeTab === key 
                  ? 'bg-clinic-teal text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-clinic-teal rounded-lg overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Image */}
            <div 
              className="h-80 md:h-auto bg-cover bg-center"
              style={{ backgroundImage: `url('${activeContent.image}')` }}
            />
            
            {/* Right: Content */}
            <div className="p-12 text-white flex flex-col justify-center">
              <div className="text-5xl mb-6">{activeContent.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{activeContent.title}</h3>
              <p className="text-lg mb-8 leading-relaxed opacity-90">
                {activeContent.description}
              </p>
              <Link 
                href={activeContent.link}
                className="bg-clinic-light text-clinic-dark px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition inline-block w-fit"
              >
                Learn about {activeContent.title.toLowerCase()} options
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
