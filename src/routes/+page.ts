import type { PageLoad } from './$types';
import { filenameFromPath } from '$lib/utils/filepath';
import type { Image } from '$lib/types/image';
import { ImageOrientation } from '$lib/types/image';

export const load: PageLoad = () => {
  const carouselImageMetas = import.meta.glob<true, string, string>('$lib/assets/carousel/*.jpg', {
    query: {
      quality: 100,
      webp: '',
      w: '500;700;1000;1280;1600',
      srcset: '',
    },
    import: 'default',
    eager: true,
  });

  const carouselImages: Image[] = Object.entries(carouselImageMetas).map(([path, srcset]) => {
    return {
      alt: filenameFromPath(path) as string,
      srcset,
      orientation: ImageOrientation.LANDSCAPE,
    };
  });

  return {
    carouselImages,
  };
};
