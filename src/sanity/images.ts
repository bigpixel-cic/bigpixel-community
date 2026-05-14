import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url';
import { dataset, projectId } from './env';

const imageUrlBuilder = createImageUrlBuilder({
  projectId,
  dataset,
});

export function urlFor(source: SanityImageSource) {
  return imageUrlBuilder.image(source);
}
