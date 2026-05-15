import {
  BrowsersIcon,
  GearCodeIcon,
  LowVisionIcon,
  ChessIcon,
  PaintbrushIcon,
} from '@/components/icons';
import { SlideInRight } from '@/components/motion';

const serviceList = [
  {
    name: 'Web Design',
    title: 'Websites that do the work, not just look the part.',
    description:
      'We design websites that make your mission clear from the first visit. No unnecessary complexity, no hunting around for the donate button, no wondering whether the organisation is still active. Just clear, accessible design that respects your visitors and gets them where they need to be.',
    icon: BrowsersIcon,
    colour: 'bg-orange-700',
  },
  {
    name: 'Digital Development',
    title: 'Built to work as hard as you do.',
    description:
      'Slow sites, broken forms, or plugins that conflict at the worst possible moment - these frustrations are avoidable. We build web applications that are fast, secure, and built on a solid foundation. More importantly, we build around how you actually work. Whether you need donation forms, member portals, event systems, or something specific to your organisation, the system works for your team, not the other way around.',
    icon: GearCodeIcon,
    colour: 'bg-indigo-700',
  },
  {
    name: 'Accessibility Consultancy',
    title: 'Because your website should work for everyone.',
    description:
      'Accessibility is often treated as a checklist item. We treat it as a design principle. We audit existing sites, advise on best practice, and build accessibility into new projects from the start - not as an afterthought.',
    icon: LowVisionIcon,
    colour: 'bg-yellow-400',
  },
  {
    name: 'Digital Strategy',
    title: 'Knowing what to build is as important as building it.',
    description:
      "Before spending money on a new website or system, it helps to step back and ask whether it's the right thing to build at all. We work with organisations to map out their digital needs, identify where the real problems are, and plan a practical route forward.",
    icon: ChessIcon,
    colour: 'bg-blue-700',
  },
  {
    name: 'Branding & Graphic Design',
    title: 'Visual identity that earns trust before a word is read.',
    description:
      "A consistent brand builds confidence before a single conversation takes place. If your visual identity feels patched together - different logos on different documents, colours that don't quite match - it can quietly undermine everything else you do. We create logos, colour systems, typography, and design guidelines that hold together across your website, your annual report, your campaign materials, and your social presence",
    icon: PaintbrushIcon,
    colour: 'bg-violet-700',
  },
];

export default function ServiceList() {
  return (
    <div className="flex flex-col gap-8 lg:gap-12">
      {serviceList.map((service) => (
        <SlideInRight key={service.name}>
          <div
            className={`flex flex-col gap-4 lg:gap-6 p-8 rounded-xl ${service.name === 'Accessibility Consultancy' ? 'text-black' : 'text-white'} ${service.colour}`}
          >
            <div className="flex items-center justify-start gap-4">
              <service.icon
                className={`shrink-0 size-16 lg:size-24 ${service.name === 'Accessibility Consultancy' ? 'text-black' : 'text-white/60'}`}
              />
              <h3 className="font-headline font-black text-3xl md:text-4xl">{service.name}</h3>
            </div>
            <p className="font-extrabold text-xl/6 md:text-2xl">{service.title}</p>
            <p className="text-sm sm:text-base lg:text-lg">{service.description}</p>
          </div>
        </SlideInRight>
      ))}
    </div>
  );
}
