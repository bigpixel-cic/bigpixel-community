import Image from 'next/image';
import { BlueSkyIcon, FacebookIcon, GitHubIcon, LinkedInIcon } from '../icons';
import Link from 'next/link';

const socials = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/bigpixelcic',
    icon: LinkedInIcon,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/bigpixelcic',
    icon: FacebookIcon,
  },
  {
    name: 'BlueSky',
    url: 'https://bsky.app/profile/bigpixel.org.uk',
    icon: BlueSkyIcon,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/bigpixel-cic',
    icon: GitHubIcon,
  },
];

const solutions = [
  { name: 'Projects', url: '/projects' },
  { name: 'Our Services', url: '/services' },
];

const company = [
  { name: 'About', url: '/about' },
  /* { name: 'Business Plan', url: '#' }, */
  { name: 'News', url: '#' },
];

const legal = [
  { name: 'Privacy Policy', url: '/privacy' },
  { name: 'Cookie Policy', url: '/cookie' },
  { name: 'Terms of Use', url: '/terms' },
];

export default function Footer() {
  return (
    <footer className="bg-metal-800 dark:bg-metal-950">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          <div className="space-y-6">
            <Image
              className="h-10"
              src="/brand/dark-bp-text-metal.svg"
              alt="Big Pixel"
              width={169}
              height={40}
            />
            <p className="text-sm/6 text-balance text-metal-200 font-slab">
              Helping good organisations get the digital tools they deserve.
            </p>
            <div className="flex gap-x-4">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  className="text-metal-300 hover:text-metal-200 transition-colors duration-200 ease-out"
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="size-8" aria-hidden="true" />
                </Link>
              ))}
            </div>
            <Image
              className="h-16 self-start"
              src="/assets/climatehub.svg"
              alt="Climate Hub"
              width={155}
              height={64}
            />
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 xl:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-8">
              <div>
                <h3 className="text-base/6 font-headline font-bold text-metal-50">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {solutions.map((solution) => (
                    <li key={solution.name}>
                      <Link
                        href={solution.url}
                        className="text-metal-300 hover:text-metal-200 transition-colors duration-200 ease-out"
                      >
                        {solution.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-base/6 font-headline font-bold text-metal-50">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.url}
                        className="text-metal-300 hover:text-metal-200 transition-colors duration-200 ease-out"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-base/6 font-headline font-bold text-metal-50">Legal</h3>
                <ul className="mt-6 space-y-4">
                  {legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.url}
                        className="text-metal-300 hover:text-metal-200 transition-colors duration-200 ease-out"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-metal-600 pt-8 sm:mt-16 lg:mt-20 font-slab">
          <p className="text-sm/6 text-metal-400">
            Big Pixel&reg; and the device mark are registered trademarks in the United Kingdom.
          </p>
          <p className="text-sm/6 text-balance text-metal-400">
            A Community Interest Company registered in England and Wales, No. 17201222. Company
            limited by guarantee. Registered office: Carrow House, 301 King Street, Norwich, NR1
            2TG.
          </p>
        </div>
        <div className="mt-8 border-t border-metal-600 pt-8 font-slab">
          <p className="text-sm/6 text-metal-400">
            &copy; {new Date().getFullYear()} Big Pixel Community CIC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
