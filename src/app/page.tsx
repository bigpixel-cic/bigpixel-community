import Navbar from '@/components/global/navbar';
import HeroVideo from '@/components/home/hero-video';
import SectionOne from '@/components/home/section-one';
import Services from '@/components/home/services';
import Prices from '@/components/home/prices';
import Process from '@/components/home/process';
import CTA from '@/components/home/cta';

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <HeroVideo />
      <SectionOne />
      <Services />
      <Prices />
      <Process />
      <CTA />
    </div>
  );
}
