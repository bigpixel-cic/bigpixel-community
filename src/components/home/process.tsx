import { BullhornIcon, CommentIcon, CircleCheckIcon } from '@/components/icons';
import { BounceInFromTop } from '@/components/motion';

const processes = [
  {
    key: 1,
    name: 'Get in touch',
    colour: 'text-yellow-300',
    icon: BullhornIcon,
    description:
      'Send us a brief message or email telling me about your organisation and what you are trying to solve.',
  },
  {
    key: 2,
    name: 'We have a conversation',
    colour: 'text-blue-300',
    icon: CommentIcon,
    description:
      "We pop over to see you, or set up a Zoom call where we'll ask about your annual income (that sets the starting point, not the cost), and what you want to achieve.",
  },
  {
    key: 3,
    name: 'We agree on a plan',
    colour: 'text-green-300',
    icon: CircleCheckIcon,
    description:
      "An easy to follow document setting out what we'll do, what it'll cost, and what you can expect",
  },
];

export default function Process() {
  return (
    <div className="block py-8 md:py-12 lg:py-16 bg-purple-900 text-purple-50">
      <div className="w-full max-w-7xl mx-auto p-4 lg:p-6">
        <div className="flex flex-col gap-y-12 md:gap-y-14 lg:gap-y-16">
          <h2 className="font-headline font-black text-4xl sm:text-5xl md:text-6xl text-red-200">
            How it works
          </h2>
          <div className="grid grid-cols-3 gap-4 lg:gap-6">
            {processes.map((process, index) => (
              <div key={process.key} className="col-span-3 md:col-span-1">
                <BounceInFromTop delay={index * 0.2}>
                  <div className="flex flex-col items-center text-center">
                    <process.icon
                      className={`size-24 md:size-32 lg:size-40 mb-4 ${process.colour}`}
                    />
                    <h3 className="font-headline font-bold text-3xl">{process.name}</h3>
                    <p className="mt-2">{process.description}</p>
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
