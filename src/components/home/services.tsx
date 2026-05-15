import { ChessIcon, BrowsersIcon, PaintbrushIcon } from '@/components/icons';
import { BounceInFromTop } from '@/components/motion';

const services = [
  {
    key: 1,
    name: 'Strategy',
    colour: 'text-blue-300',
    icon: ChessIcon,
    description:
      'Through workshops, surveys, and regular meetings, Big Pixel can help you build a digital strategy and roadmap. Helping you and your team make the most of AI, data, security, and performance, now and into the future.',
  },
  {
    key: 2,
    name: 'Web Design',
    colour: 'text-orange-300',
    icon: BrowsersIcon,
    description:
      'Whether you need online donation forms,event registration,member portals,newsletter integration, or something entirely bespoke, we build fully-accessible websites and web apps around the way you work.',
  },
  {
    key: 3,
    name: 'Graphic Design',
    colour: 'text-violet-300',
    icon: PaintbrushIcon,
    description:
      'Logos, colour systems, typography, reports, and campaign materials that communicate who you are clearly and consistently across your website, your annual report, your social channels, and everything in between.',
  },
];

export default function Services() {
  return (
    <div className="block py-8 md:py-12 lg:py-16 bg-blue-900 text-blue-50">
      <div className="w-full max-w-7xl mx-auto p-4 lg:p-6">
        <div className="flex flex-col gap-y-12 md:gap-y-14 lg:gap-y-16">
          <h2 className="font-headline font-black text-4xl sm:text-5xl md:text-6xl text-green-200">
            Solutions we can provide
          </h2>
          <div className="grid grid-cols-3 gap-4 lg:gap-6">
            {services.map((service, index) => (
              <div key={service.key} className="col-span-3 md:col-span-1">
                <BounceInFromTop delay={index * 0.2}>
                  <div className="flex flex-col items-center text-center">
                    <service.icon
                      className={`size-24 md:size-32 lg:size-40 mb-4 ${service.colour}`}
                    />
                    <h3 className="font-headline font-bold text-3xl">{service.name}</h3>
                    <p className="mt-2">{service.description}</p>
                  </div>
                </BounceInFromTop>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
