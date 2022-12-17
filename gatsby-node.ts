import path from "path";
import type { CreatePagesArgs, CreateNodeArgs } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";

export const createPages = async ({
  graphql,
  actions,
  reporter,
}: CreatePagesArgs & {
  traceId: "initial-createPages";
}): Promise<void> => {
  const { createPage } = actions;

  const blogTemplate = path.resolve("./src/templates/blog-post.tsx");
  const taggedTemplate = path.resolve("./src/templates/tagged.tsx");

  interface Post {
    id: string;
    fields: {
      slug: string;
      site: string;
    };
    frontmatter: {
      title: string;
      tags?: string[];
    };
  }

  const devTags = await graphql<{
    allMarkdownRemark: {
      group: {
        tag: string;
      }[];
    }
  }>(`
      allMarkdownRemark(filter: { fields: { site: { eq: "dev" } } }) {
        group(field: { frontmatter: { tags: SELECT } }) {
          tag: fieldValue
        }
      }
  `);

  const dev = await graphql<{
    allMarkdownRemark: {
      nodes: Post[];
    }
  }>(`
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: { fields: { site: { eq: "dev" } } }
      ) {
        nodes {
          id
          fields {
            slug
            site
          }
          frontmatter {
            title
            tags
          }
        }
      }
  `)

  const photography = await graphql<{
    allMarkdownRemark: {
      nodes: Post[];
    }
  }>(`
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC }  }
        filter: { fields: { site: { eq: "photography" } } }
      ) {
        nodes {
          id
          fields {
            slug
            site
          }
          frontmatter {
            title
            tags
          }
        }
      }
  `)

  const createPages = (posts: Post[]) => {
    posts.forEach((post) => {
      createPage({
        path: post.fields.slug,
        component: blogTemplate,
        // Accessible as props.pageContext in the component.
        context: {
          slug: post.fields.slug,
          tags: post.frontmatter.tags ?? [],
        },
      });
    });
  };

  createPages(dev.data?.allMarkdownRemark.nodes ?? []);
  createPages(photography.data?.allMarkdownRemark.nodes ?? []);

  devTags.data?.allMarkdownRemark.group.forEach(({ tag }) => {
    createPage({
      path: `/dev/tagged/${tag}`,
      component: taggedTemplate,
      // Accessible as props.pageContext in the component.
      context: {
        currentTag: tag,
      },
    });
  });
};

export const onCreateNode = ({
  node,
  actions,
  getNode,
}: CreateNodeArgs<any>): void => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const site: "photography" | "dev" | undefined = node.fileAbsolutePath.match(
      /\/src\/posts\/(?<site>dev|photography)/
    ).groups?.site;

    if (site == null) {
      return;
    }

    createNodeField({
      name: "site",
      node,
      value: site,
    });

    const urlPath = createFilePath({ node, getNode, trailingSlash: false });
    createNodeField({
      name: "slug",
      node,
      value: urlPath,
    });
  }
};

export const onCreateWebpackConfig = ({ actions }: any) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/"),
      },
    },
  });
};

export const createSchemaCustomization = ({ actions }: any) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: MarkdownRemarkFields
    }
    type Frontmatter {
      tags: [String]
      banner: File @fileByRelativePath
    }
    type MarkdownRemarkFields {
      readingTime: MarkdownRemarkReadingTime
    }
    type MarkdownRemarkReadingTime {
      text: String
    }
  `;
  createTypes(typeDefs);
};
