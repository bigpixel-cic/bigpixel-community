import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { client } from '@/sanity/client';
import { PROJECTS_SLUGS_QUERY, PROJECT_QUERY, PROJECT_METADATA_QUERY } from '@/sanity/queries';
import { urlFor } from '@/sanity/images';
import ProjectDetails from '@/components/projects/details';
import PortableText from '@/components/global/portable-text';
import { SlideInTop } from '@/components/motion';

import { type PortableTextBlock } from 'next-sanity';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await client.fetch(PROJECTS_SLUGS_QUERY);
  return slugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params;
  const metadata = await client.fetch(PROJECT_METADATA_QUERY, { slug: params.slug });

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
  const project = await client.fetch(PROJECT_QUERY, { slug: params.slug });

  if (!project) {
    return notFound();
  }

  return (
    <div className="flex flex-col items-start gap-8 lg:gap-12">
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
          client={project.client}
          date={project.date}
          category={project.category}
          caseStudy={project.caseStudy}
        />
      </SlideInTop>
      <PortableText
        value={project.content as PortableTextBlock[]}
        className="prose-metal dark:prose-invert max-w-none prose-sm md:prose-base lg:prose-lg xl:prose-xl"
      />
    </div>
  );
}
