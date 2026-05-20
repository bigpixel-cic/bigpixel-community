import type { Metadata } from 'next';
import { client } from '@/sanity/client';
import { POSTS_QUERY } from '@/sanity/queries';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/images';
import { BoxGesture } from '@/components/motion';
import { formatDate } from 'date-fns';

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImage?: string;
  altText?: string;
  date: string;
  author: {
    name: string;
    imageUrl: string;
  };
};

const bigPixel = {
  url: process.env.NODE_ENV === 'production' ? 'https://bigpixel.org.uk' : 'http://localhost:3000',
  title: 'News and Updates',
  description:
    'Stay updated with the latest news and updates from Big Pixel, showcasing innovative digital services for charities, non-profits, and social enterprises.',
};

export const metadata: Metadata = {
  title: bigPixel.title,
  description: bigPixel.description,
  keywords: ['digital services for charities', 'charity web design', 'charity web development'],
  openGraph: {
    title: `${bigPixel.title} - Big Pixel`,
    description: bigPixel.description,
    url: `${bigPixel.url}/news`,
    siteName: 'Big Pixel',
    images: [
      {
        url: `${bigPixel.url}/og/og-news.png`,
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
        url: `${bigPixel.url}/og/og-news.png`,
        width: 1200,
        height: 675,
        alt: bigPixel.title,
      },
    ],
  },
};

export default async function NewsPage() {
  const posts = await client.fetch<Post[]>(POSTS_QUERY);
  return (
    <div className="flex flex-col items-start gap-8 lg:gap-12">
      <h1 className="font-headline font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        News and Updates
      </h1>
      <div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post: Post) => (
          <BoxGesture key={post._id}>
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-metal-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80 dark:bg-metal-800">
              {post.coverImage && (
                <Image
                  src={urlFor(post.coverImage).width(800).height(800).url()}
                  alt={post.altText || post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="absolute inset-0 -z-10 size-full object-cover"
                />
              )}
              <div className="absolute inset-0 -z-10 bg-linear-to-t from-black via-black/40 dark:from-black/80 dark:via-black/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl inset-ring inset-ring-metal-900/10 dark:inset-ring-white/10" />
              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-metal-300">
                <time dateTime={post.date} className="mr-8">
                  {formatDate(post.date, 'PPP')}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 size-0.5 flex-none fill-white/50 dark:fill-metal-300/50"
                  >
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    <Image
                      alt=""
                      width={24}
                      height={24}
                      src={urlFor(post.author.imageUrl).width(24).height(24).url()}
                      className="size-6 flex-none rounded-full bg-white/10 dark:bg-metal-800/10"
                    />
                    {post.author.name}
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg/6 font-headline font-bold text-white">
                <Link href={`/news/${post.slug}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
            </article>
          </BoxGesture>
        ))}
      </div>
    </div>
  );
}
