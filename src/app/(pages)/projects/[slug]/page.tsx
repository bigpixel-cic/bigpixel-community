import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PROJECTS_SLUGS_QUERY, PROJECT_QUERY, PROJECT_METADATA_QUERY } from '@/sanity/queries';
import { urlFor } from '@/sanity/images';
import ProjectDetails from '@/components/projects/details';
import PortableText from '@/components/global/portable-text';
import { SlideInTop } from '@/components/motion';
import { type PortableTextBlock } from 'next-sanity';
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

type ProjectMetadata = {
  title: string | null;
  description: string | null;
  primaryKeyword: string | null;
  keywords: string[] | null;
  generateOgImage: boolean | null;
  ogImage: string | null;
};

type Project = {
  _id: string;
  title: string;
  slug: string;
  date: string | null;
  client: string | null;
  category: string | null;
  colour: string | null;
  tags: string[] | null;
  coverImage: string | null;
  altText: string | null;
  caseStudy: string | null;
  content: unknown;
};

export async function generateStaticParams() {
  const { data: slugs } = await sanityFetchStaticParams({ query: PROJECTS_SLUGS_QUERY });
  return (slugs as string[]).map((slug) => ({ slug }));
}

export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const [{ slug }, { perspective }] = await Promise.all([props.params, getDynamicFetchOptions()]);
  const { data } = await sanityFetchMetadata({
    query: PROJECT_METADATA_QUERY,
    params: { slug },
    perspective,
  });
  const metadata = data as ProjectMetadata | null;

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
      <Suspense fallback={<ProjectPageFallback />}>
        <DynamicProjectPage params={props.params} />
      </Suspense>
    );
  }
  const { slug } = await props.params;
  return <CachedProjectPage slug={slug} perspective="published" stega={false} />;
}

async function DynamicProjectPage({ params }: Pick<Props, 'params'>) {
  const [{ slug }, { perspective, stega }] = await Promise.all([params, getDynamicFetchOptions()]);
  return <CachedProjectPage slug={slug} perspective={perspective} stega={stega} />;
}

async function CachedProjectPage({
  slug,
  perspective,
  stega,
}: { slug: string } & DynamicFetchOptions) {
  const { data } = await sanityFetch({
    query: PROJECT_QUERY,
    params: { slug },
    perspective,
    stega,
  });
  const project = data as Project | null;

  if (!project) {
    return notFound();
  }

  return (
    <div className="flex flex-col items-start gap-8 lg:gap-12 w-full">
      <h1 className="font-headline font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        {project.title}
      </h1>
      {project.coverImage && (
        <Image
          src={urlFor(project.coverImage).width(1200).height(630).url()}
          alt={project.altText || project.title}
          width={1200}
          height={630}
          className="w-full h-auto rounded-lg"
          loading="eager"
        />
      )}
      <SlideInTop>
        <ProjectDetails
          client={project.client ?? ''}
          date={project.date ?? ''}
          category={project.category ?? ''}
          caseStudy={project.caseStudy ?? ''}
        />
      </SlideInTop>
      <PortableText
        value={project.content as PortableTextBlock[]}
        className="font-slab prose-metal dark:prose-invert max-w-none prose-sm md:prose-base lg:prose-lg xl:prose-xl prose-figcaption:font-sans prose-figcaption:not-italic"
      />
    </div>
  );
}

function ProjectPageFallback() {
  return (
    <div className="flex flex-col items-start gap-8 lg:gap-12 w-full animate-pulse">
      <div className="h-12 w-96 bg-metal-200 dark:bg-metal-800 rounded" />
      <div className="w-full aspect-video bg-metal-100 dark:bg-metal-800 rounded-lg" />
      <div className="w-full h-48 bg-metal-100 dark:bg-metal-800 rounded-lg" />
    </div>
  );
}
