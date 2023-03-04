import type { PageLoad } from './$types';
import { filenameFromPath } from '../lib/utils/filenameFromPath';

export const load: PageLoad = () => {
  const carouselImageMetas = import.meta.glob('$lib/assets/carousel/*.jpg', {
    query: {
      format: 'webp',
      quality: 100,
    },
    import: 'default',
    eager: true,
  });

  const carouselImages = Object.entries(carouselImageMetas).map(([path, src]) => {
    return {
      alt: filenameFromPath(path),
      src,
    };
  });

  return {
    carouselImages,
  };
};
