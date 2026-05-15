import Image from 'next/image';
import { SlideInLeft } from '@/components/motion';

export default function SectionOne() {
  return (
    <div className="block py-8 md:py-12 lg:py-16">
      <div className="w-full max-w-7xl mx-auto p-4 lg:p-6">
        <div className="flex flex-col gap-y-12 md:gap-y-14 lg:gap-y-16">
          <h2 className="font-headline font-black text-4xl sm:text-5xl md:text-6xl">
            A CIC founded by someone who has been where you are now
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <SlideInLeft>
              <Image
                src="/assets/james-event.webp"
                alt="James at an event when working for a charity"
                width={540}
                height={540}
                loading="eager"
                className="rounded-lg object-cover w-135 h-135"
              />
            </SlideInLeft>
            <div className="flex-1 text-xl md:text-2xl leading-normal">
              <p>
                Before starting Big Pixel® Community CIC, I spent twenty years in design and over a
                decade working for a large UK charity. This means I know how organisations like
                yours actually work.
              </p>
              <p className="mt-6">
                I know about the funding cycles, the trustee decisions, the gap between what you
                want your website to do and what your budget allows.
              </p>
              <p className="mt-6">
                At Big Pixel®, our mission is to close the digital gap and bring the commercially
                recognised benefits of digital strategy, design, and development to the non-profit
                sector, helping you achieve your true potential.
              </p>
            </div>
          </div>
          <h3 className="font-headline font-black text-4xl sm:text-5xl md:text-6xl">
            A different way of doing things
          </h3>
          <div className="text-xl md:text-2xl leading-normal">
            <p>
              ☝️ That isn&apos;t just a nice phrase. I <em>genuinely</em> want to do things
              differently. That is why I set up Big Pixel® as a CIC at the start of 2026.
            </p>
            <p className="mt-6">
              After studying digital strategy at Henley Business School, and then talking to
              charities and social enterprises in and around Norwich, I realised that real,
              substantive digital support at a price nonprofits can actually budget for is
              practically non-existent.
            </p>
            <p className="mt-6">
              Resources exist, but the understanding of how to use them often doesn&apos;t.
              Organisations doing genuinely important work are locked out of the digital strategies
              that commercial companies take for granted. Not through any failing of their own, but
              because of restricted budgets and stretched staff.
            </p>
            <p className="mt-6">To me, that feels morally wrong.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
