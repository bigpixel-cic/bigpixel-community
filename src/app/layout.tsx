import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/globals.css';

import 'next-cloudinary/dist/cld-video-player.css';

const bigPixel = {
  name: 'Big Pixel Community CIC',
  url: 'https://bigpixel.org.uk',
  title: 'Big Pixel | Digital Services for Charities, Non-Profits & Social Enterprises',
  description:
    "A social enterprise offering agency-level design and development to charities, non-profits and social enterprises, with fees scaled to your organisation's income",
};

const keywords = [
  'digital services for charities',
  'charity web design',
  'charity web development',
  'non-profit web design',
  'social enterprise digital services',
  'accessibility consultancy charities',
  'digital strategy non-profit',
  'charity website Norfolk',
  'sliding scale web design',
  'CIC web design',
];

const nexa = localFont({
  src: [
    {
      path: '../fonts/nexa-800.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/nexa-900.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-nexa',
});

const nexaText = localFont({
  src: [
    {
      path: '../fonts/nexa-text-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/nexa-text-600.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/nexa-text-700.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/nexa-text-900.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-nexa-text',
});

export const metadata: Metadata = {
  metadataBase: new URL(bigPixel.url),
  title: {
    template: '%s - Big Pixel',
    default: bigPixel.title,
  },
  description: bigPixel.description,
  keywords,
  openGraph: {
    title: bigPixel.title,
    description: bigPixel.description,
    url: bigPixel.url,
    siteName: 'Big Pixel',
    images: [
      {
        url: 'https://bigpixel.org.uk/og/og-default.png',
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
    title: bigPixel.title,
    description: bigPixel.description,
    images: [
      {
        url: 'https://bigpixel.org.uk/og/og-default.png',
        width: 1200,
        height: 675,
        alt: bigPixel.title,
      },
    ],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: bigPixel.name,
  url: bigPixel.url,
  logo: 'https://bigpixel.org.uk/brand/big-pixel-full-black.png',
  description: bigPixel.description,
  founder: { '@type': 'Person', name: 'James Beston' },
  areaServed: 'Norfolk, UK',
  sameAs: [
    'https://www.facebook.com/bigpixelcic',
    'https://www.linkedin.com/company/bigpixelcic',
    'https://www.instagram.com/bigpixelcic',
    'https://bsky.app/profile/bigpixelcic',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: bigPixel.name,
  url: bigPixel.url,
  description: bigPixel.description,
  publisher: { '@type': 'Organization', name: bigPixel.name },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nexa.variable} ${nexaText.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
