import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="bg-clinic-blue text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to book or need assistance?
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
          If you're ready to book or prefer talking to someone directly, our friendly team is here to help.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link 
            href="tel:02075841642"
            className="bg-white text-clinic-blue font-semibold px-10 py-4 rounded-md hover:bg-gray-100 transition text-lg min-w-[250px]"
          >
            Call our team
          </Link>
          <Link 
            href="/contact"
            className="bg-clinic-light text-clinic-dark font-semibold px-10 py-4 rounded-md hover:bg-opacity-90 transition text-lg min-w-[250px]"
          >
            Enquire online
          </Link>
        </div>

        <p className="text-sm opacity-80">
          Hans Place Practice, 43 Hans Place, London SW1X 0JZ
        </p>
      </div>
    </section>
  );
}
