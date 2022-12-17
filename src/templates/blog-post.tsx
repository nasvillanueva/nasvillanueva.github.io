import * as React from "react";
import { graphql, HeadFC } from "gatsby";
import Layout from "@/components/Layout";
import HeadComponent from "@/components/Head";
import RelatedDevPosts from "@/components/RelatedDevPosts";
import type { Post } from "@/types/dev";

const BlogPost = ({
  data: {
    post,
    relatedPosts: {
      nodes: relatedPosts
    }
  },
}: {
  data: {
    post: {
      id: string;
      excerpt: string;
      html: string;
      frontmatter: {
        title: string;
        date: string;
      }
    },
    relatedPosts: {
      nodes: Post[]
    }
  },
  }) => {
  const postTitle = post.frontmatter.title;

  return (
    <Layout>
      <h1 className="text-3xl my-6 font-semibold text-nxs-red">{postTitle}</h1>
      <div className="markdown" dangerouslySetInnerHTML={{ __html: post.html }}></div>

      <div className="mt-20">
        <div className="border-b-[2px] w-1/4"></div>
        <h2 className="mt-10 mb-5 text-2xl font-serif font-medium">Related Posts</h2>
        <RelatedDevPosts posts={relatedPosts} />
      </div>
    </Layout>
  );
}

export default BlogPost;

export const Head: HeadFC = (props: any) => {
  const pageTitle = props.data.post.frontmatter.title;

  return <HeadComponent headProps={props} pageTitle={pageTitle} />
}

export const pageQuery = graphql`
query BlogPostBySlug($slug: String!, $tags: [String!]!) {
  site {
    siteMetadata {
      title
      author
    }
  }
  post: markdownRemark(fields: { slug: { eq: $slug } }) {
    id
    html
    frontmatter {
      title
      date(formatString: "YYYY-MM-DD")
      tags
    }
  }
  relatedPosts: allMarkdownRemark(
    filter: {fields: {site: {eq: "dev"}}, frontmatter: {tags: {in: $tags}}}
    limit: 3
  ) {
    nodes {
      frontmatter {
        tags
        date(formatString: "YYYY-MM-DD")
        title
      }
      fields {
        readingTime {
          text
        }
        site
        slug
      }
    }
  }
}
`;
