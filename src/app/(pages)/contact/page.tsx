import ContactForm from '@/components/contact/form';
import type { Metadata } from 'next';
import {
  EmailIcon,
  PhoneIcon,
  MobileIcon,
  BlueSkyIcon,
  LinkedInIcon,
  FacebookIcon,
} from '@/components/icons';
import { Suspense } from 'react';

const bigPixel = {
  url: process.env.NODE_ENV === 'production' ? 'https://bigpixel.org.uk' : 'http://localhost:3000',
  title: 'Contact Us',
  description:
    'Get in touch with Big Pixel to learn more about our innovative digital services for charities, non-profits, and social enterprises.',
};

export const metadata: Metadata = {
  title: bigPixel.title,
  description: bigPixel.description,
  keywords: ['digital services for charities', 'charity web design', 'charity web development'],
  openGraph: {
    title: `${bigPixel.title} - Big Pixel`,
    description: bigPixel.description,
    url: `${bigPixel.url}/contact`,
    siteName: 'Big Pixel',
    images: [
      {
        url: `${bigPixel.url}/og/og-contact.png`,
        width: 1200,
        height: 630,
        alt: bigPixel.title,
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${bigPixel.title} - Big Pixel`,
    description: bigPixel.description,
    images: [
      {
        url: `${bigPixel.url}/og/og-contact.png`,
        width: 1200,
        height: 675,
        alt: bigPixel.title,
      },
    ],
  },
};

const contactData = [
  {
    type: 'Email',
    label: 'hello@bigpixel.org.uk',
    value: 'mailto:hello@bigpixel.org.uk',
    icon: EmailIcon,
  },
  {
    type: 'Phone',
    label: '01603 515 224',
    value: 'tel:+441603515224',
    icon: PhoneIcon,
  },
  {
    type: 'Mobile',
    label: '07405 146 885',
    value: 'tel:+447405146885',
    icon: MobileIcon,
  },
];

const socialData = [
  {
    type: 'BlueSky',
    value: 'https://bsky.app/profile/bigpixel.org.uk',
    icon: BlueSkyIcon,
  },
  {
    type: 'LinkedIn',
    value: 'https://www.linkedin.com/company/bigpixel-cic',
    icon: LinkedInIcon,
  },
  {
    type: 'Facebook',
    value: 'https://www.facebook.com/bigpixelcic',
    icon: FacebookIcon,
  },
];

export default async function ContactPage() {
  return (
    <div className="flex flex-col items-start gap-8">
      <h1 className="font-headline font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        Contact Us
      </h1>
      <div className="mt-4 w-full flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-8">
          <Suspense fallback="Loading contact form...">
            <ContactForm />
          </Suspense>
        </div>
        <div className="flex-1 space-y-8">
          <h2 className="font-headline font-bold text-purple-900 dark:text-purple-300 text-2xl">
            Or you can contact us directly
          </h2>
          <ul className="space-y-6">
            {contactData.map(({ type, label, value, icon: Icon }) => (
              <li key={type} className="flex items-center gap-2.5">
                <Icon className="w-6 h-6" />
                <a
                  href={value}
                  className="text-metal-700 hover:text-indigo-700 dark:text-metal-100 hover:dark:text-indigo-400 transition-colors ease-out duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <h2 className="font-headline font-bold text-purple-900 dark:text-purple-300 text-2xl">
            Follow us on social media
          </h2>
          <ul className="space-y-6">
            {socialData.map(({ type, value, icon: Icon }) => (
              <li key={type} className="flex items-center gap-2.5">
                <Icon className="w-6 h-6" />
                <a
                  href={value}
                  className="text-metal-700 hover:text-indigo-700 dark:text-metal-100 hover:dark:text-indigo-400 transition-colors ease-out duration-200"
                >
                  {type}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
