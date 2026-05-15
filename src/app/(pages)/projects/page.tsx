import type { Metadata } from 'next';
import { client } from '@/sanity/client';
import { PROJECTS_QUERY } from '@/sanity/queries';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/images';
import { BoxGesture } from '@/components/motion';

type Project = {
  _id: string;
  title: string;
  slug: string;
  subtitle?: string;
  coverImage?: string;
  altText?: string;
};

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore the projects portfolio of Big Pixel, showcasing innovative digital services for charities, non-profits, and social enterprises.',
  keywords: ['digital services for charities', 'charity web design', 'charity web development'],
  openGraph: {
    title: 'Projects - Big Pixel',
    description:
      'Explore the projects portfolio of Big Pixel, showcasing innovative digital services for charities, non-profits, and social enterprises.',
    url: 'https://bigpixel.org.uk/projects',
    siteName: 'Big Pixel',
    images: [
      {
        url: 'https://bigpixel.org.uk/og/og-projects.png',
        width: 1200,
        height: 630,
        alt: 'Projects',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects - Big Pixel',
    description:
      'Explore the projects portfolio of Big Pixel, showcasing innovative digital services for charities, non-profits, and social enterprises.',
    images: [
      {
        url: 'https://bigpixel.org.uk/og/og-projects.png',
        width: 1200,
        height: 675,
        alt: 'Projects',
      },
    ],
  },
};

export default async function Page() {
  const projects = await client.fetch(PROJECTS_QUERY);

  return (
    <div className="flex flex-col items-start gap-8 lg:gap-12">
      <h1 className="font-headline font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        Projects Portfolio
      </h1>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {projects.map((project: Project) => (
          <BoxGesture key={project._id}>
            <li className="h-full rounded-lg bg-white shadow-md dark:divide-white/10 dark:bg-metal-800/50 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10">
              <Link
                href={`/projects/${project.slug}`}
                className="divide-y divide-metal-200 overflow-hidden"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  {project.coverImage && (
                    <div className="relative aspect-video w-full rounded-md bg-gray-50">
                      <Image
                        src={urlFor(project.coverImage).width(800).height(450).url()}
                        alt={project.altText || project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
                <div className="px-4 py-4 sm:px-6">
                  <h2 className="font-headline font-bold text-xl">{project.title}</h2>
                  {project.subtitle && <p className="text-sm text-gray-600">{project.subtitle}</p>}
                </div>
              </Link>
            </li>
          </BoxGesture>
        ))}
      </ul>
      <h2 className="font-headline font-bold text-metal-500 text-2xl mt-8">
        More projects coming soon&hellip;
      </h2>
    </div>
  );
}
