import { defineQuery } from 'next-sanity';

export const PROJECTS_QUERY = defineQuery(
  `*[_type == "project" && defined(slug.current)][0...12]{
    _id,
    title,
    "slug": slug.current,
    subtitle,
    "coverImage": coverImage.asset->url,
    "altText": coverImage.alt,
    "dateModified": coalesce(_createdAt, _updatedAt),
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

export const POSTS_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current)][0...12]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "coverImage": coverImage.asset->url,
    "altText": coverImage.alt,
    "date": coalesce(date, _updatedAt),
    "author": author->{
      "name": firstName + " " + lastName,
      "imageUrl": picture.asset->url
    },
  }`
);

export const POSTS_SLUGS_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current)].slug.current`
);

export const POST_QUERY = defineQuery(
  `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    date,
    "tags": tags[]->name,
    "category": category->name,
    "author": author->name,
    "coverImage": coverImage.asset->url,
    "altText": coverImage.altText,
    content,
  }`
);

export const POST_METADATA_QUERY = defineQuery(
  `*[_type == "post" && slug.current == $slug][0]{
    "title": seo.title,
    "description": seo.description,
    "primaryKeyword": seo.primaryKeyword,
    "keywords": coalesce(seo.keywords, []),
    "generateOgImage": seo.generateOgImage,
    "ogImage": seo.ogImage.asset->url,
  }`
);
