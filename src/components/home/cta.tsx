import Link from 'next/link';

export default function CTA() {
  return (
    <div className="block py-8 md:py-12 lg:py-16">
      <div className="w-full max-w-7xl mx-auto p-4 lg:p-6">
        <div className="flex flex-col md:flex-row gap-16 md:gap-20 lg:gap-24 items-center justify-center">
          <div className="flex-1 flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8">
            <h2 className="font-headline font-black text-4xl sm:text-5xl md:text-6xl">
              Sounds good?
            </h2>
            <p className="text-xl md:text-2xl leading-normal">
              If any of this sounds like what your organisation needs, the best thing to do is drop
              us a line.{' '}
              <strong className="font-extrabold">There&apos;s no obligation on your side.</strong>{' '}
              We can just have a chat about your organisation, what you need, and see if we can
              help.
            </p>
          </div>
          <Link
            href="/contact"
            className="w-64 h-64 rounded-full bg-linear-to-tl from-metal-600 to-metal-100 to-90% via-metal-300 via-80% shadow-lg shadow-black/50 flex items-center justify-center group"
          >
            <div className="rounded-full w-54 h-54 p-8 bg-radial-[at_30%_30%] from-red-400 via-30% to-80% to-red-950 via-red-600 text-white text-center font-headline font-extrabold flex flex-col items-center justify-center shadow-[0_0_26px] shadow-red-600/30 group-hover:scale-105 transition-transform duration-300">
              <p className="text-5xl">Giant</p>
              <p className="text-2xl/6">get in touch button</p>
              <p className="text-xs mt-2 text-red-300">Patent Pending</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
