import Hero from '@/components/sections/Hero';
import TreatmentGrid from '@/components/sections/TreatmentGrid';
import WhyChoose from '@/components/sections/WhyChoose';
import WaysToAccess from '@/components/sections/WaysToAccess';
import RapidDiagnostics from '@/components/sections/RapidDiagnostics';
import OurValues from '@/components/sections/OurValues';
import ContactCTA from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <TreatmentGrid />
      <WhyChoose />
      <WaysToAccess />
      <RapidDiagnostics />
      <OurValues />
      <ContactCTA />
    </main>
  );
}
