'use client';
import Link from 'next/link';
import { FiCheck, FiClock, FiActivity } from 'react-icons/fi';

export default function TreatmentsPage() {
  const mainTreatments = [
    {
      id: 'anti-wrinkle',
      title: 'Anti-Wrinkle Injections',
      subtitle: 'Botox, Dysport & Azzalure',
      image: '/images/drmike_antiwrinkle.png',
      description: 'Dr Mike Comins has been performing anti-wrinkle injections since 2001, making him one of the first doctors in the UK trained in this treatment. With over 23 years of experience and having trained other practitioners as an Allergan trainer, you can trust his expertise.',
      benefits: [
        'Reduces forehead lines, frown lines and crow\'s feet',
        'Natural-looking results that preserve facial expression',
        'Quick treatment with minimal downtime',
        'Results visible within 3-7 days, lasting 3-4 months'
      ],
      duration: '15-30 minutes',
      downtime: 'None',
      results: '3-7 days',
      price: 'From £250'
    },
    {
      id: 'fillers',
      title: 'Dermal Fillers',
      subtitle: 'Lips, Cheeks, Nose & Jawline Enhancement',
      image: '/images/drmike_filler_injection.png',
      description: 'Using premium hyaluronic acid fillers, Dr Comins specialises in creating natural-looking volume and definition. Whether you want to enhance your lips, restore cheek volume, refine your nose shape, or define your jawline, treatments are tailored to your facial proportions.',
      benefits: [
        'Lip enhancement and symmetry correction',
        'Cheek augmentation for youthful contours',
        'Non-surgical nose reshaping (rhinoplasty)',
        'Jawline definition and chin augmentation',
        'Immediate visible results',
        'Natural-looking enhancement'
      ],
      duration: '30-60 minutes',
      downtime: 'Minimal (possible swelling 24-48 hours)',
      results: 'Immediate',
      price: 'From £350'
    },
    {
      id: 'vaser',
      title: 'Vaser Liposuction',
      subtitle: 'Advanced Body Contouring',
      image: '/images/drmike_vaser.jpg',
      description: 'Dr Mike Comins introduced Vaser Hi Def liposuction to the UK in 2010 and is recognised worldwide as a pioneer in this technique. Vaser uses ultrasound technology to selectively target fat cells whilst preserving surrounding tissues, resulting in superior body contouring with less bruising and faster recovery.',
      benefits: [
        'Precise fat removal and body sculpting',
        'Hi-definition muscle definition possible',
        'Less bruising and swelling than traditional liposuction',
        'Faster recovery time',
        'Skin tightening effect',
        'Permanent fat reduction in treated areas'
      ],
      duration: '1-4 hours (depending on areas)',
      downtime: '1-2 weeks',
      results: 'Visible immediately, final results at 3-6 months',
      price: 'From £3,500'
    },
    {
      id: 'fat-reduction',
      title: 'Facial Fat Reduction',
      subtitle: 'Jowel, Jaw & Buccal Fat Treatment',
      image: '/images/drmike_facial_reduction.jpeg',
      description: 'Targeting stubborn facial fat deposits that affect your facial contours. Dr Comins uses advanced PB Serum injections and surgical techniques to reduce jowels, slim the jawline, and remove buccal (cheek) fat for a more defined, sculpted facial appearance.',
      benefits: [
        'Reduction of jowel fat for defined jawline',
        'Slimming of lower face and jaw area',
        'Buccal fat removal for cheek definition',
        'Double chin reduction',
        'More sculpted facial contours',
        'Long-lasting results'
      ],
      duration: '30-90 minutes',
      downtime: '3-7 days',
      results: '2-4 weeks',
      price: 'From £500'
    }
  ];

  const additionalTreatments = [
    {
      id: 'nose-reshaping',
      title: 'Non-Surgical Nose Reshaping',
      description: 'Correct bumps, asymmetry, or drooping nasal tip using dermal fillers. Results are immediate and reversible.',
      image: '/images/drmike_Non-SurgicalNoseReshaping.png',
      price: 'From £400'
    },
    {
      id: 'profhilo',
      title: 'Profhilo',
      description: 'Bio-remodelling treatment that improves skin quality, hydration and elasticity. Often called "injectable skincare".',
      image: '/images/drmike_profhilo.png',
      price: 'From £450'
    },
    {
      id: 'polynucleotides',
      title: 'Polynucleotides',
      description: 'Advanced skin rejuvenation treatment that stimulates collagen production and improves skin texture and tone.',
      image: '/images/drmike_polynucleotides.jpeg',
      price: 'From £350'
    },
    {
      id: 'obagi',
      title: 'Obagi Medical Skincare',
      description: 'Prescription-strength skincare systems designed to correct signs of ageing, hyperpigmentation and skin damage.',
      image: 'https://images.pexels.com/photos/3738387/pexels-photo-3738387.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'From £150'
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-clinic-dark mb-6">
              Our Treatments
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With over 23 years of experience in aesthetic medicine, Dr Mike Comins MBBS FBCAM offers 
              a comprehensive range of advanced treatments. From anti-wrinkle injections to pioneering 
              Vaser liposuction, each treatment is tailored to enhance your natural beauty.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#anti-wrinkle" className="bg-clinic-blue text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition">
                View Anti-Wrinkle
              </Link>
              <Link href="#fillers" className="bg-clinic-light text-clinic-dark px-6 py-3 rounded-md hover:bg-opacity-90 transition">
                View Fillers
              </Link>
              <Link href="/contact" className="border-2 border-clinic-blue text-clinic-blue px-6 py-3 rounded-md hover:bg-clinic-blue hover:text-white transition">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Treatments - Detailed */}
      {mainTreatments.map((treatment, index) => (
        <section 
          key={treatment.id} 
          id={treatment.id}
          className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src={treatment.image} 
                    alt={treatment.title}
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="inline-block bg-clinic-light/30 text-clinic-dark px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {treatment.subtitle}
                </div>
                <h2 className="text-4xl font-bold text-clinic-dark mb-4">
                  {treatment.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {treatment.description}
                </p>

                {/* Benefits */}
                <div className="mb-6">
                  <h3 className="font-bold text-clinic-dark mb-4">Key Benefits:</h3>
                  <ul className="space-y-3">
                    {treatment.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FiCheck className="text-clinic-blue mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Treatment Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <FiClock className="text-clinic-blue" size={20} />
                      <span className="font-semibold text-sm text-gray-700">Duration</span>
                    </div>
                    <p className="text-gray-600 text-sm">{treatment.duration}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <FiActivity className="text-clinic-blue" size={20} />
                      <span className="font-semibold text-sm text-gray-700">Downtime</span>
                    </div>
                    <p className="text-gray-600 text-sm">{treatment.downtime}</p>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="flex items-center justify-between bg-clinic-blue/5 p-4 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Starting from</div>
                    <div className="text-2xl font-bold text-clinic-blue">{treatment.price}</div>
                  </div>
                  <Link 
                    href="/book"
                    className="bg-clinic-blue text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition font-semibold"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Treatments Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-clinic-dark mb-4">
              Additional Treatments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our range of advanced aesthetic treatments designed to enhance your natural beauty
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {additionalTreatments.map((treatment) => (
              <div 
                key={treatment.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-200"
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${treatment.image}')` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-clinic-dark mb-3">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {treatment.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-clinic-blue font-bold">{treatment.price}</span>
                    <Link 
                      href="/contact"
                      className="text-clinic-blue hover:text-clinic-dark transition text-sm font-semibold"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Dr Comins */}
      <section className="py-16 bg-gradient-to-r from-clinic-blue to-clinic-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Dr Mike Comins?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-5xl font-bold mb-2">23+</div>
                <div className="opacity-90">Years Experience</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">10k+</div>
                <div className="opacity-90">Procedures Performed</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">4.95</div>
                <div className="opacity-90">Patient Rating</div>
              </div>
            </div>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              As a pioneer in aesthetic medicine, former president of the British College of Aesthetic 
              Doctors, and original Allergan trainer, Dr Comins brings unparalleled expertise to every treatment.
            </p>
            <Link 
              href="/contact"
              className="bg-white text-clinic-blue px-8 py-4 rounded-md hover:bg-gray-100 transition font-semibold inline-block"
            >
              Schedule Your Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Spacer for footer wave */}
      <div className="h-16 bg-white"></div>
    </main>
  );
}