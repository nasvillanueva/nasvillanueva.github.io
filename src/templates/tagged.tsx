import * as React from "react";
import { graphql, HeadFC } from "gatsby";
import DevLayout from "@/components/DevLayout";
import HeadComponent from "@/components/Head";
import type { Post, Tag } from "@/types/dev";

export default function Tagged({ data: { tags, allMarkdownRemark: { nodes: posts } }, pageContext: { currentTag } }: {
  data: {
    tags: {
      group: Tag[]
    },
    allMarkdownRemark: {
      nodes: Post[]
    }
  },
  pageContext: {
    currentTag: string;
  }
}) {

  return (
    <DevLayout posts={posts} tags={tags} currentTag={currentTag} />
  )
}

export const Head: HeadFC = (props: any) => {
  const pageTitle = props.pageContext.currentTag;

  return <HeadComponent headProps={props} pageTitle={pageTitle} />
}

export const pageQuery = graphql`
  query ($currentTag: String) {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    tags: allMarkdownRemark {
      group(field: { frontmatter: { tags: SELECT }}) {
        tag: fieldValue
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fields: { site: { eq: "dev" } }, frontmatter: { tags: { eq: $currentTag } } }
    ) {
      nodes {
        fields {
          slug
          readingTime {
            text
          }
        }
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          tags
          banner {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                layout: FULL_WIDTH
                aspectRatio: 1.77777778
              )
            }
          }
        }
      }
    }
  }
`;
