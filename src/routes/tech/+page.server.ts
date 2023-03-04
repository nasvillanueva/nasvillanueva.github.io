import type { PageServerLoad } from './$types';
import { slugFromPath } from '$lib/utils/slugFromPath';
import { buildFrontmatter } from '../../lib/utils/frontmatter';

const MAX_POST_PER_PAGE = 10;

export const load: PageServerLoad = async ({ url }) => {
  const modules = import.meta.glob('/src/posts/tech/**/*.{md,svx,svelte.md}');

  const posts = await Promise.all(
    Object.entries(modules).map(async ([path, resolver]) => {
      const post = await resolver();

      const { date, title, tags } = buildFrontmatter((post as unknown as App.MdsvexFile).metadata);

      return {
        slug: `/tech/${slugFromPath(path)}`,
        date: new Date(date),
        title,
        tags,
      } as unknown as App.BlogPost;
    })
  );

  const filteredPosts = (() => {
    const tag = url.searchParams.get('tag');

    if (tag == null || tag === '') {
      return posts;
    } else {
      return posts.filter((post) => {
        return post.tags.includes(tag);
      });
    }
  })();

  const tags = [...new Set(posts.flatMap((post) => post.tags))].sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  );

  const page = Number(url.searchParams.get('page') ?? '1');
  const offset = (page - 1) * MAX_POST_PER_PAGE;
  const limit = offset + MAX_POST_PER_PAGE;
  const paginatedPosts = [...filteredPosts]
    .sort((a, b) => (a.date > b.date ? -1 : 1))
    .slice(offset, limit);

  return {
    posts: paginatedPosts,
    tags,
    page,
    totalPostsCount: posts.length,
    postsPerPage: MAX_POST_PER_PAGE,
  };
};
