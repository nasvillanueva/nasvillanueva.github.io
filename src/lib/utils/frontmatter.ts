export const buildFrontmatter = (metadata: App.MdsvexFile['metadata']): App.Frontmatter => {
  return {
    ...metadata,
    date: new Date(metadata.date),
  } as unknown as App.Frontmatter;
};
