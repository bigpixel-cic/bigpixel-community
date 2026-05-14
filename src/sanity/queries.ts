import { defineQuery } from 'next-sanity';

export const PROJECTS_QUERY = defineQuery(
  `*[_type == "project" && defined(slug.current)][0...12]{
    _id,
    title,
    "slug": slug.current,
    subtitle,
    "coverImage": coverImage.asset->url,
    "altText": coverImage.alt
  }`
);

export const PROJECTS_SLUGS_QUERY = defineQuery(
  `*[_type == "project" && defined(slug.current)].slug.current`
);

export const PROJECT_QUERY = defineQuery(
  `*[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    date,
    client,
    "category": category->name,
    "colour": category->colour,
    "tags": tags[]->name,
    "coverImage": coverImage.asset->url,
    "altText": coverImage.altText,
    "caseStudy": caseStudy.asset->url,
    content,
  }`
);

export const PROJECT_METADATA_QUERY = defineQuery(
  `*[_type == "project" && slug.current == $slug][0]{
    "title": seo.title,
    "description": seo.description,
    "primaryKeyword": seo.primaryKeyword,
    "keywords": coalesce(seo.keywords, []),
    "generateOgImage": seo.generateOgImage,
    "ogImage": seo.ogImage.asset->url,
  }`
);
