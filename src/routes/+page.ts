import type { PageLoad } from './$types';
import { filenameFromPath } from '$lib/utils/filepath';

export const load: PageLoad = () => {
  const carouselImageMetas = import.meta.glob('$lib/assets/carousel/*.jpg', {
    query: {
      quality: 100,
      webp: '',
      w: '500;700;1000;1280;1600',
      srcset: '',
    },
    import: 'default',
    eager: true,
  });

  const carouselImages = Object.entries(carouselImageMetas).map(([path, srcset]) => {
    return {
      alt: filenameFromPath(path),
      srcset,
    };
  });

  return {
    carouselImages,
  };
};

export const prerender = true;
