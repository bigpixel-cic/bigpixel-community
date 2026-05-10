import Navbar from '@/components/global/navbar';
import HeroVideo from '@/components/home/hero-video';
import SectionOne from '@/components/home/section-one';
import Services from '@/components/home/services';

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <HeroVideo />
      <SectionOne />
      <Services />
    </div>
  );
}
