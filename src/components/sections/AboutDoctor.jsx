import Link from 'next/link';

export default function AboutDoctor() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div 
              className="rounded-lg shadow-2xl h-96 md:h-[500px] bg-cover bg-center"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80')" 
              }}
            ></div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-clinic-dark mb-6">
              Dr Mike Comins MBBS FBCAM
            </h2>
            
            <div className="w-24 h-1 bg-clinic-blue mb-6"></div>

            <h3 className="text-2xl font-semibold text-clinic-blue mb-4">
              Expert in Anti-Wrinkle Injections and Aesthetic Enhancements
            </h3>

            <p className="text-lg text-clinic-dark mb-4 leading-relaxed">
              Dr Mike Comins is a pioneer in aesthetic medicine, known worldwide for his 
              expertise in Vaser liposuction. He was also one of the first doctors in the 
              UK trained in injectable aesthetics. Since 2001, he has been offering these 
              advanced treatments from his clinic, bringing over 23 years of experience to 
              his patients.
            </p>

            <p className="text-lg text-clinic-dark mb-6 leading-relaxed">
              As one of the original trainers for Allergan and a former president of the 
              British College of Aesthetic Doctors, Dr Comins has established himself as 
              a leader in the industry. He has performed thousands of procedures on both 
              men and women, tailoring treatments to deliver precise, natural-looking 
              results whilst enhancing facial balance, proportions and confidence.
            </p>

            <Link 
              href="/about"
              className="inline-block bg-clinic-blue hover:bg-clinic-light text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Learn More About Dr Comins
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}