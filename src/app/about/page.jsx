'use client';
import Link from 'next/link';
import { FiAward, FiUsers, FiTrendingUp, FiStar, FiCheckCircle } from 'react-icons/fi';

export default function AboutPage() {
  const milestones = [
    {
      year: '2001',
      title: 'Pioneer in Injectable Aesthetics',
      description: 'One of the first doctors in the UK trained in injectable aesthetic treatments, beginning a career that would span over two decades.'
    },
    {
      year: '2005-2010',
      title: 'Allergan National Trainer',
      description: 'Selected as one of the original trainers for Allergan, training fellow doctors in the art and science of Botox and Juvederm treatments.'
    },
    {
      year: '2010',
      title: 'Introduced Vaser Hi Def to UK',
      description: 'Brought revolutionary Vaser Hi Def liposuction technology to the United Kingdom, establishing expertise in advanced body contouring.'
    },
    {
      year: '2012-2015',
      title: 'President of BCAD',
      description: 'Served as President of the British College of Aesthetic Doctors, shaping standards and education in the aesthetic medicine industry.'
    },
    {
      year: 'Present',
      title: 'Leading Aesthetic Medicine',
      description: 'Continuing to deliver world-class aesthetic treatments from Hans Place Practice, with over 10,000 procedures performed and counting.'
    }
  ];

  const credentials = [
    { icon: <FiAward size={24} />, title: 'MBBS', description: 'Bachelor of Medicine, Bachelor of Surgery' },
    { icon: <FiStar size={24} />, title: 'FBCAM', description: 'Fellow of the British College of Aesthetic Medicine' },
    { icon: <FiUsers size={24} />, title: 'Former BCAD President', description: 'British College of Aesthetic Doctors (2012-2015)' },
    { icon: <FiTrendingUp size={24} />, title: 'Allergan Trainer', description: 'Original national trainer for Botox & Juvederm' }
  ];

  const expertiseAreas = [
    {
      title: 'Anti-Wrinkle Injections',
      treatments: ['Botox', 'Dysport', 'Azzalure', 'Forehead lines', 'Frown lines', 'Crow\'s feet'],
      experience: '23+ years'
    },
    {
      title: 'Dermal Fillers',
      treatments: ['Lip enhancement', 'Cheek augmentation', 'Nose reshaping', 'Jawline definition', 'Chin enhancement'],
      experience: '23+ years'
    },
    {
      title: 'Body Contouring',
      treatments: ['Vaser liposuction', 'Vaser Hi Def', 'Fat transfer', 'Body sculpting', 'Skin tightening'],
      experience: '14+ years'
    },
    {
      title: 'Facial Sculpting',
      treatments: ['Jowel reduction', 'Buccal fat removal', 'Double chin treatment', 'Facial fat reduction', 'PB Serum injections'],
      experience: '20+ years'
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-clinic-blue to-clinic-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                MBBS FBCAM
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Dr Mike Comins
              </h1>
              <p className="text-2xl mb-6 opacity-90">
                Pioneer in Aesthetic Medicine
              </p>
              <p className="text-lg mb-8 opacity-80 leading-relaxed">
                With over 23 years of experience, Dr Mike Comins is recognised worldwide for his expertise 
                in aesthetic medicine, particularly Vaser liposuction. As a former president of the British 
                College of Aesthetic Doctors and original Allergan trainer, his contribution to the field 
                has shaped modern aesthetic practice in the UK.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/treatments"
                  className="bg-white text-clinic-blue px-8 py-4 rounded-md hover:bg-gray-100 transition font-semibold"
                >
                  View Treatments
                </Link>
                <Link 
                  href="/book"
                  className="border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white/10 transition font-semibold"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://www.theprivateclinic.co.uk/wp-content/uploads/2025/01/dr-mike-comins-vaser-liposuction-doctor-700.jpg"
                  alt="Dr Mike Comins"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-white text-clinic-dark p-6 rounded-lg shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="text-center border-r border-gray-300 pr-4">
                    <div className="text-3xl font-bold text-clinic-blue">23+</div>
                    <div className="text-sm text-gray-600">Years</div>
                  </div>
                  <div className="text-center border-r border-gray-300 pr-4">
                    <div className="text-3xl font-bold text-clinic-blue">10k+</div>
                    <div className="text-sm text-gray-600">Procedures</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-clinic-blue">4.95</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-clinic-dark mb-4">
                A Pioneer's Journey
              </h2>
              <p className="text-xl text-gray-600">
                Shaping the future of aesthetic medicine in the UK
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Dr Mike Comins began his journey in aesthetic medicine in 2001, at a time when injectable 
                treatments were still in their infancy in the United Kingdom. As one of the first doctors 
                trained in these revolutionary procedures, he witnessed and helped shape the transformation 
                of the aesthetic medicine landscape.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                His expertise quickly gained recognition, leading to his selection as an original national 
                trainer for Allergan, the company behind Botox and Juvederm. In this role, Dr Comins trained 
                hundreds of doctors across the UK, establishing best practices and safety standards that would 
                become the foundation of modern aesthetic practice.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                In 2010, Dr Comins brought Vaser Hi Def liposuction technology to the UK, becoming one of the 
                country's leading experts in this advanced body contouring technique. His innovative approach 
                and consistent results earned him international recognition, with patients travelling from 
                around the world to benefit from his expertise.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                From 2012 to 2015, he served as President of the British College of Aesthetic Doctors, 
                where he championed education, ethical practice, and patient safety. His leadership helped 
                elevate the standards of aesthetic medicine across the industry.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Today, Dr Comins continues to practice from his clinic at Hans Place in London, where he 
                combines his extensive experience with a commitment to natural-looking results and patient 
                wellbeing. Having performed over 10,000 procedures, his philosophy remains unchanged: 
                to enhance natural beauty through subtle, expert treatments tailored to each individual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-clinic-dark mb-4">
              Qualifications & Credentials
            </h2>
            <p className="text-xl text-gray-600">
              Internationally recognised expertise and accreditation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {credentials.map((credential, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-clinic-blue mb-4 flex justify-center">
                  {credential.icon}
                </div>
                <h3 className="text-xl font-bold text-clinic-dark mb-2">
                  {credential.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {credential.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Qualifications */}
          <div className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-clinic-dark mb-6">Professional Memberships</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <FiCheckCircle className="text-clinic-blue mt-1 flex-shrink-0" size={20} />
                <div>
                  <div className="font-semibold text-clinic-dark">British College of Aesthetic Medicine</div>
                  <div className="text-sm text-gray-600">Fellow (FBCAM)</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiCheckCircle className="text-clinic-blue mt-1 flex-shrink-0" size={20} />
                <div>
                  <div className="font-semibold text-clinic-dark">General Medical Council</div>
                  <div className="text-sm text-gray-600">Fully registered medical practitioner</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiCheckCircle className="text-clinic-blue mt-1 flex-shrink-0" size={20} />
                <div>
                  <div className="font-semibold text-clinic-dark">British College of Aesthetic Doctors</div>
                  <div className="text-sm text-gray-600">Former President (2012-2015)</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiCheckCircle className="text-clinic-blue mt-1 flex-shrink-0" size={20} />
                <div>
                  <div className="font-semibold text-clinic-dark">Allergan Medical Institute</div>
                  <div className="text-sm text-gray-600">Certified national trainer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-clinic-dark mb-4">
              Career Milestones
            </h2>
            <p className="text-xl text-gray-600">
              Over two decades of innovation and excellence
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-clinic-light hidden md:block"></div>

              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}
                >
                  <div className={`md:flex ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <div className={`bg-white p-6 rounded-lg shadow-lg border-2 border-clinic-light md:w-5/12 relative`}>
                      {/* Year Badge */}
                      <div className="absolute -top-4 left-6 bg-clinic-blue text-white px-4 py-2 rounded-full font-bold text-sm">
                        {milestone.year}
                      </div>
                      
                      <h3 className="text-xl font-bold text-clinic-dark mt-2 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-6 h-6 bg-clinic-blue rounded-full border-4 border-white shadow"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-clinic-dark mb-4">
              Areas of Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Specialist treatments delivered with precision and care
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {expertiseAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-clinic-dark">
                    {area.title}
                  </h3>
                  <div className="bg-clinic-light/30 text-clinic-dark px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                    {area.experience}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {area.treatments.map((treatment, idx) => (
                    <span 
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {treatment}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-clinic-blue to-clinic-dark text-white p-12 rounded-2xl">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4">
                  Treatment Philosophy
                </h2>
              </div>
              <blockquote className="text-xl leading-relaxed text-center mb-8 italic opacity-90">
                "My approach has always been about enhancing natural beauty, not changing it. 
                Each treatment is carefully tailored to complement your unique facial proportions 
                and deliver results that look natural, not overdone. It's this commitment to 
                subtlety and precision that has defined my practice for over two decades."
              </blockquote>
              <div className="text-center">
                <div className="text-lg font-semibold">Dr Mike Comins MBBS FBCAM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-clinic-dark mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Book a consultation with Dr Mike Comins to discuss your aesthetic goals 
              and discover the treatment plan that's right for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/book"
                className="bg-clinic-blue text-white px-10 py-4 rounded-md hover:bg-opacity-90 transition font-semibold text-lg"
              >
                Book Consultation
              </Link>
              <Link 
                href="/treatments"
                className="border-2 border-clinic-blue text-clinic-blue px-10 py-4 rounded-md hover:bg-clinic-blue hover:text-white transition font-semibold text-lg"
              >
                Explore Treatments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for footer wave */}
      <div className="h-16 bg-gray-50"></div>
    </main>
  );
}