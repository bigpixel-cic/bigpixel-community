import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { client } from '@/sanity/client';
import { POSTS_SLUGS_QUERY, POST_QUERY, POST_METADATA_QUERY } from '@/sanity/queries';
import { urlFor } from '@/sanity/images';
import PortableText from '@/components/global/portable-text';
import { SlideInTop } from '@/components/motion';

import { type PortableTextBlock } from 'next-sanity';
import { formatDate } from 'date-fns';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await client.fetch(POSTS_SLUGS_QUERY);
  return slugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params;
  const metadata = await client.fetch(POST_METADATA_QUERY, { slug: params.slug });

  if (!metadata) {
    return {};
  }

  const keywordData = [metadata.primaryKeyword, ...(metadata.keywords || [])].filter(
    (k): k is string => k !== null
  );

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: metadata.title,
    description: metadata.description,
    keywords:
      keywordData.length > 0
        ? keywordData
        : ['digital services for charities', 'charity web design', 'charity web development'],
    openGraph: {
      title: metadata.title || 'Big Pixel - Projects',
      description:
        metadata.description ||
        'Explore the projects portfolio of Big Pixel, showcasing innovative digital services for charities, non-profits, and social enterprises.',
      images: metadata.ogImage ? [metadata.ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata;
}

export default async function Page(props: Props) {
  const params = await props.params;
  const post = await client.fetch(POST_QUERY, { slug: params.slug });

  if (!post) {
    return notFound();
  }

  return (
    <div className="flex flex-col items-start gap-8 lg:gap-12 w-full">
      <h1 className="font-headline font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        {post.title}
      </h1>
      <time dateTime={post.date} className="font-semibold text-sm md:text-base text-metal-500">
        {formatDate(post.date, 'PPP')}
      </time>
      {post.coverImage && (
        <div className="w-full">
          <SlideInTop>
            <Image
              src={urlFor(post.coverImage).width(1200).height(630).url()}
              alt={post.altText || post.title}
              width={1200}
              height={630}
              className="w-full h-auto rounded-lg"
              loading="eager"
            />
          </SlideInTop>
        </div>
      )}
      <div className="w-full px-6 py-12 lg:py-24 bg-metal-50 rounded-lg lg:rounded-xl shadow-lg lg:shadow-xl border border-metal-200 dark:bg-metal-950 dark:border-metal-800">
        <PortableText
          value={post.content as PortableTextBlock[]}
          className="mx-auto prose-metal dark:prose-invert prose-sm md:prose-base lg:prose-lg xl:prose-xl prose-headings:font-headline"
        />
      </div>
    </div>
  );
}
