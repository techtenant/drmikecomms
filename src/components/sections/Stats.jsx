export default function Stats() {
  const stats = [
    { number: '5', label: 'Star reviews', sublabel: '(Trustpilot, Realself)' },
    { number: '24', label: 'Years of Experience', sublabel: '' },
    { number: '10k+', label: 'Successful Procedures', sublabel: '' }
  ];

  return (
    <section className="bg-clinic-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          {stats.map((stat, index) => (
            <div key={index} className="py-4">
              <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
              <div className="text-xl font-semibold">{stat.label}</div>
              {stat.sublabel && (
                <div className="text-sm text-clinic-light mt-1">{stat.sublabel}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}