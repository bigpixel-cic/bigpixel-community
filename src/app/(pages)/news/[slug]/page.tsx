import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { POSTS_SLUGS_QUERY, POST_QUERY, POST_METADATA_QUERY } from '@/sanity/queries';
import { urlFor } from '@/sanity/images';
import PortableText from '@/components/global/portable-text';
import { SlideInTop } from '@/components/motion';
import { type PortableTextBlock } from 'next-sanity';
import { formatDate } from 'date-fns';
import {
  sanityFetch,
  sanityFetchStaticParams,
  sanityFetchMetadata,
  getDynamicFetchOptions,
  type DynamicFetchOptions,
} from '@/sanity/live';
import { draftMode } from 'next/headers';
import { Suspense } from 'react';

type Props = {
  params: Promise<{ slug: string }>;
};

type PostMetadata = {
  title: string | null;
  description: string | null;
  primaryKeyword: string | null;
  keywords: string[] | null;
  generateOgImage: boolean | null;
  ogImage: string | null;
};

type Post = {
  _id: string;
  title: string;
  slug: string;
  date: string;
  tags: string[] | null;
  category: string | null;
  author: string | null;
  coverImage: string | null;
  altText: string | null;
  content: unknown;
};

export async function generateStaticParams() {
  const { data: slugs } = await sanityFetchStaticParams({ query: POSTS_SLUGS_QUERY });
  return (slugs as string[]).map((slug) => ({ slug }));
}

export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const [{ slug }, { perspective }] = await Promise.all([
    props.params,
    getDynamicFetchOptions(),
  ]);
  const { data } = await sanityFetchMetadata({
    query: POST_METADATA_QUERY,
    params: { slug },
    perspective,
  });
  const metadata = data as PostMetadata | null;

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
  const { isEnabled: isDraftMode } = await draftMode();
  if (isDraftMode) {
    return (
      <Suspense fallback={<PostPageFallback />}>
        <DynamicPostPage params={props.params} />
      </Suspense>
    );
  }
  const { slug } = await props.params;
  return <CachedPostPage slug={slug} perspective="published" stega={false} />;
}

async function DynamicPostPage({ params }: Pick<Props, 'params'>) {
  const [{ slug }, { perspective, stega }] = await Promise.all([params, getDynamicFetchOptions()]);
  return <CachedPostPage slug={slug} perspective={perspective} stega={stega} />;
}

async function CachedPostPage({
  slug,
  perspective,
  stega,
}: { slug: string } & DynamicFetchOptions) {
  'use cache';
  const { data } = await sanityFetch({
    query: POST_QUERY,
    params: { slug },
    perspective,
    stega,
  });
  const post = data as Post | null;

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
      <div className="w-full px-12 py-12 lg:py-24 bg-metal-50 rounded-lg lg:rounded-xl shadow-lg lg:shadow-xl border border-metal-200 dark:bg-metal-950 dark:border-metal-800">
        <PortableText
          value={post.content as PortableTextBlock[]}
          className="mx-auto max-w-4xl font-slab prose prose-metal dark:prose-invert prose-sm md:prose-base lg:prose-lg prose-headings:font-headline"
        />
      </div>
    </div>
  );
}

function PostPageFallback() {
  return (
    <div className="flex flex-col items-start gap-8 lg:gap-12 w-full animate-pulse">
      <div className="h-12 w-96 bg-metal-200 dark:bg-metal-800 rounded" />
      <div className="h-6 w-32 bg-metal-200 dark:bg-metal-800 rounded" />
      <div className="w-full aspect-video bg-metal-100 dark:bg-metal-800 rounded-lg" />
      <div className="w-full h-96 bg-metal-100 dark:bg-metal-800 rounded-lg" />
    </div>
  );
}
