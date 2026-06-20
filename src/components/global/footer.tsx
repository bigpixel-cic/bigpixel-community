import Image from "next/image";
import { BlueSkyIcon, FacebookIcon, GitHubIcon, LinkedInIcon } from "../icons";
import Link from "next/link";
import { Suspense } from "react";
import { CopyrightYear } from "./copyright-year";
import { ConsentDialogLink } from "@c15t/nextjs/components/consent-dialog-link";

export function SiteFooter() {
  return (
    <footer>
      <ConsentDialogLink>Your privacy settings</ConsentDialogLink>
    </footer>
  );
}

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/bigpixelcic",
    icon: LinkedInIcon,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/bigpixelcic",
    icon: FacebookIcon,
  },
  {
    name: "BlueSky",
    url: "https://bsky.app/profile/bigpixel.org.uk",
    icon: BlueSkyIcon,
  },
  {
    name: "GitHub",
    url: "https://github.com/bigpixel-cic",
    icon: GitHubIcon,
  },
];

const solutions = [
  { name: "Projects", url: "/projects" },
  { name: "Our Services", url: "/services" },
];

const company = [
  { name: "About", url: "/about" },
  /* { name: 'Business Plan', url: '#' }, */
  { name: "News", url: "#" },
];

const legal = [
  { name: "Privacy Policy", url: "/privacy" },
  { name: "Cookie Policy", url: "/cookie" },
  { name: "Terms of Use", url: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-metal-800 dark:bg-metal-950">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-20 lg:px-8 lg:pt-24">
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
                  rel="canonical"
                  href={social.url}
                  className="text-metal-300 hover:text-metal-200 transition-colors duration-200 ease-out"
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="size-8" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 xl:mt-0">
            <Image
              className="h-16 self-center place-self-center"
              src="/assets/climatehub.svg"
              alt="Climate Hub"
              width={155}
              height={64}
            />
            <Image
              className="h-30 self-center place-self-center"
              src="/assets/seukBadge.png"
              alt="Certified Social Enterprise"
              width={120}
              height={120}
            />
            <div className="self-center place-self-center h-20 px-6 inline-flex justify-center items-center bg-metal-50 rounded-full">
              <Image
                className="self-center mt-5"
                src="/assets/creativeeast.svg"
                alt="Climate Hub"
                width={130}
                height={75}
              />
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-metal-600 pt-8 sm:mt-8 lg:mt-12">
          <div className="md:grid md:grid-cols-3 md:gap-8">
            <div>
              <h3 className="text-base/6 font-headline font-bold text-metal-50">
                Solutions
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {solutions.map((solution) => (
                  <li key={solution.name}>
                    <Link
                      rel="canonical"
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
              <h3 className="text-base/6 font-headline font-bold text-metal-50">
                Company
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link
                      rel="canonical"
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
              <h3 className="text-base/6 font-headline font-bold text-metal-50">
                Legal
              </h3>
              <ul className="mt-6 space-y-4">
                {legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      rel="canonical"
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
        <div className="mt-6 border-t border-metal-600 pt-8 sm:mt-8 lg:mt-12 font-slab">
          <p className="text-sm/6 text-metal-400">
            Big Pixel&reg; and the device mark are registered trademarks in the
            United Kingdom.
          </p>
          <p className="text-sm/6 text-balance text-metal-400">
            A Community Interest Company registered in England and Wales, No.
            17201222. Company limited by guarantee. Registered office: Carrow
            House, 301 King Street, Norwich, NR1 2TG.
          </p>
        </div>
        <div className="mt-8 border-t border-metal-600 pt-8 font-slab flex flex-col items-center gap-y-4 sm:flex-row sm:justify-between">
          <p className="text-sm/6 text-metal-400">
            &copy;{" "}
            <Suspense fallback="2026">
              <CopyrightYear />
            </Suspense>{" "}
            Big Pixel Community CIC. All rights reserved.
          </p>
          <ConsentDialogLink className="text-sm text-metal-400 font-sans hover:text-metal-200 transition-colors duration-200 ease-out">
            <span>Manage Preferences</span>
          </ConsentDialogLink>
        </div>
      </div>
    </footer>
  );
}
