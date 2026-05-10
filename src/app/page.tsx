import Navbar from '@/components/global/navbar';
import HeroVideo from '@/components/home/hero-video';

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <HeroVideo />
    </div>
  );
}
