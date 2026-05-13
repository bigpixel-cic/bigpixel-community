import Image from 'next/image';
import { SlideInRight } from '../motion/slide-in-right';
import { SlideInLeft } from '../motion/slide-in-left';

export default function Testimonial({
  quote,
  organisation,
  logo,
  slideDirection = 'right',
}: Readonly<{
  quote: string;
  organisation?: string;
  logo?: string;
  slideDirection?: 'right' | 'left';
}>) {
  const SlideComponent = slideDirection === 'left' ? SlideInLeft : SlideInRight;

  return (
    <SlideComponent>
      <div className="mt-8 bg-blue-700 rounded-xl p-6 lg:p-10 shadow-md not-prose">
        <blockquote className="text-base md:text-lg lg:text-xl text-center text-white text-balance italic">
          {quote}
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-x-4">
          {logo && (
            <Image
              src={logo}
              alt={organisation ? organisation : 'Organisation logo'}
              width={36}
              height={36}
            />
          )}
          {organisation && <p className="font-bold text-blue-50">{organisation}</p>}
        </div>
      </div>
    </SlideComponent>
  );
}
