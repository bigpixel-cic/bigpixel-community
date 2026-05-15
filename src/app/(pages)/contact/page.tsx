import ContactForm from '@/components/contact/form';
import type { Metadata } from 'next';

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

export default async function ContactPage() {
  return (
    <div className="flex flex-col items-start gap-8 lg:gap-12">
      <h1 className="font-headline font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        Contact Us
      </h1>
      <h2 className="font-headline font-bold text-metal-500 text-2xl">
        Contact us for more information&hellip;
      </h2>
      <ContactForm />
    </div>
  );
}
