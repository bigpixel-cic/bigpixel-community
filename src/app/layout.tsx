import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Aleo, Outfit } from 'next/font/google'

const bigPixel = {
  name: 'Big Pixel Community CIC',
  url:
    process.env.NODE_ENV === 'production'
      ? 'https://bigpixel.org.uk'
      : 'http://localhost:3000',
  title:
    'Big Pixel | Digital Services for Charities, Non-Profits & Social Enterprises',
  description:
    "A social enterprise offering agency-level design and development to charities, non-profits and social enterprises, with fees scaled to your organisation's income",
}

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
]

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const aleo = Aleo({
  subsets: ['latin'],
  variable: '--font-aleo',
  display: 'swap',
})

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
        url: `${bigPixel.url}/og/og-default.png`,
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
        url: `${bigPixel.url}/og/og-default.png`,
        width: 1200,
        height: 675,
        alt: bigPixel.title,
      },
    ],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: bigPixel.name,
  url: bigPixel.url,
  logo: `${bigPixel.url}/brand/big-pixel-full-black.png`,
  description: bigPixel.description,
  founder: { '@type': 'Person', name: 'James Beston' },
  areaServed: 'Norfolk, UK',
  sameAs: [
    'https://www.facebook.com/bigpixelcic',
    'https://www.linkedin.com/company/bigpixelcic',
    'https://www.instagram.com/bigpixelcic',
    'https://bsky.app/profile/bigpixelcic',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: bigPixel.name,
  url: bigPixel.url,
  description: bigPixel.description,
  publisher: { '@type': 'Organization', name: bigPixel.name },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${aleo.variable} h-full antialiased`}
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="Big Pixel" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          async
          src="https://plausible.io/js/pa-O2Ye9WPds2uF2AhJK4CAm.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
          plausible.init()`,
          }}
        />
      </head>

      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
