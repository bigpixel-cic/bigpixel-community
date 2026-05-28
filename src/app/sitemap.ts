import type { MetadataRoute } from 'next';
import { PROJECTS_QUERY, POSTS_QUERY } from '@/sanity/queries';
import { sanityFetchMetadata, getDynamicFetchOptions } from '@/sanity/live';

type project = {
  _id: string;
  title: string;
  slug: string;
  subtitle: string;
  coverImage: string;
  altText: string;
  dateModified: string;
};

type post = {
  _id: string;
  title: string;
  slug: string;
  subtitle: string;
  coverImage: string;
  altText: string;
  date: string;
};

export const baseUrl =
  process.env.NODE_ENV === 'production' ? 'https://bigpixel.org.uk' : 'http://localhost:3000';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { perspective } = await getDynamicFetchOptions();
  const [{ data: projects }, { data: posts }] = await Promise.all([
    sanityFetchMetadata({ query: PROJECTS_QUERY, perspective }),
    sanityFetchMetadata({ query: POSTS_QUERY, perspective }),
  ]);

  const projectEntries = (projects as project[]).map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(p.dateModified),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  const postEntries = (posts as post[]).map((p) => ({
    url: `${baseUrl}/news/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    { url: baseUrl, lastModified: new Date('2026-05-17'), priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date('2026-05-17'), priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date('2026-05-17'), priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: new Date('2026-05-17'), priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date('2026-05-17'), priority: 0.5 },
    ...projectEntries,
    ...postEntries,
  ];
}
