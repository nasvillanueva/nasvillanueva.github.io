import type { PageLoad } from './$types';
import { categoryFromPortfolioPath, filenameFromPath } from '$lib/utils/filepath';
import type { Image } from '$lib/types/image';
import { ImageOrientation } from '$lib/types/image';

const UNCATEGORIZED_LABEL = 'Uncategorized';

export const load: PageLoad = ({ url }) => {
  const imageMetadatas = import.meta.glob<true, string, { width: number; height: number }>(
    '/src/lib/assets/portfolio/**/*.jpg',
    {
      query: {
        metadata: '',
      },
      import: 'default',
      eager: true,
    }
  );
  const imageModules = import.meta.glob<true, string, string>(
    '/src/lib/assets/portfolio/**/*.jpg',
    {
      query: {
        quality: 100,
        webp: '',
        w: '500;700;1000;1280;1600',
        srcset: '',
      },
      import: 'default',
      eager: true,
    }
  );

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

  const images: Image[] = filteredImageModules
    .map(([path, srcset]) => {
      const { width, height } = imageMetadatas[path];
      const orientation = (() => {
        if (width > height) {
          return ImageOrientation.LANDSCAPE;
        } else if (height > width) {
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
