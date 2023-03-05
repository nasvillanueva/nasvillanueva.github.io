import type { PageLoad } from './$types';
import { slugFromPath } from '$lib/utils/filepath';
import { error } from '@sveltejs/kit';
import { buildFrontmatter } from '$lib/utils/frontmatter';

export const load: PageLoad = async ({ params }) => {
  const modules = import.meta.glob(`/src/posts/tech/**/*.{md,svx,svelte.md}`);

  const [_path, resolver] =
    (Object.entries(modules).find(([path]) => slugFromPath(path) === params.slug) as [
      string,
      App.MdsvexResolver
    ]) ?? [];

  if (resolver == null) {
    throw error(404);
  }

  const post = await resolver();

  return {
    component: post.default,
    frontmatter: buildFrontmatter(post.metadata),
  };
};
