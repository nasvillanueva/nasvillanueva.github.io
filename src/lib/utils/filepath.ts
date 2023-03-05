export const categoryFromPortfolioPath = (path: string) => {
  const category = path.match(/\/portfolio(?:\/(?<category>[\w-]{2,}))?\/[\w-]+\.jpg$/)?.groups
    ?.category;

  return category == null ? null : `${category[0].toUpperCase()}${category.substring(1)}`;
};

export const filenameFromPath = (path: string) =>
  path.match(/(?<filename>[\w-]+)\.\w+$/)?.groups?.filename ?? null;

export const slugFromPath = (path: string) =>
  path.match(/(?<slug>[\w-]+)(?:\/index)?\.(svelte\.md|md|svx)/)?.groups?.slug ?? null;
