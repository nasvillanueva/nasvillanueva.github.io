import type { PageLoad } from './$types';
import { categoryFromPortfolioPath, filenameFromPath } from '$lib/utils/filepath';
import { ImageOrientation } from '$lib/assets/types/image';

const UNCATEGORIZED_LABEL = 'Uncategorized';

export const load: PageLoad = ({ url }) => {
  const imageMetadatas = import.meta.glob('/src/lib/assets/portfolio/**/*.jpg', {
    query: {
      metadata: '',
    },
    import: 'default',
    eager: true,
  });
  const imageModules = import.meta.glob('/src/lib/assets/portfolio/**/*.jpg', {
    query: {
      quality: 100,
      webp: '',
      w: '500;700;1000;1280;1600',
      srcset: '',
    },
    import: 'default',
    eager: true,
  });

  const category = url.searchParams.get('category') ?? '';

  const filteredImageModules = (() => {
    if (category == '') {
      return Object.entries(imageModules);
    } else {
      return Object.entries(imageModules).filter(([path]) => {
        const categoryFromPath = categoryFromPortfolioPath(path);

        return category === UNCATEGORIZED_LABEL
          ? categoryFromPath == null
          : categoryFromPath === category;
      });
    }
  })();

  const images = filteredImageModules
    .map(([path, srcset]) => {
      const metadata = imageMetadatas[path] as {
        width: number;
        height: number;
      };
      const orientation = (() => {
        if (metadata.width > metadata.height) {
          return ImageOrientation.LANDSCAPE;
        } else if (metadata.height > metadata.width) {
          return ImageOrientation.PORTRAIT;
        } else {
          return ImageOrientation.SQUARE;
        }
      })();

      return {
        alt: filenameFromPath(path) as string,
        orientation,
        srcset,
      };
    })
    .sort(({ alt: a }, { alt: b }) => a.localeCompare(b) * -1);

  const categories = (
    Object.keys(imageModules)
      .map(categoryFromPortfolioPath)
      .filter((category, index, array) => {
        return category != null && array.indexOf(category) === index;
      }) as string[]
  ).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

  return {
    images,
    category,
    categories: [...categories, UNCATEGORIZED_LABEL],
  };
};
