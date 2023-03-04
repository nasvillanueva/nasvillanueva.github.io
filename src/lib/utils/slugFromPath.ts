export const slugFromPath = (path: string) =>
  path.match(/(?<slug>[\w-]+)(?:\/index)?\.(svelte\.md|md|svx)/)?.groups?.slug ?? null;
