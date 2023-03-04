export const filenameFromPath = (path: string) =>
  path.match(/(?<filename>[\w-]+)\.\w+$/)?.groups?.filename ?? null;
