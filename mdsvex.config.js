import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import remarkGithub from 'remark-github';
import remarkAbbr from 'remark-abbr';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool',
  },

  remarkPlugins: [
    [
      remarkGithub,
      {
        repository: 'https://github.com/nasvillanueva/nasvillanueva.github.io.git',
      },
    ],
    remarkAbbr,
  ],
  rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
});

export default config;
