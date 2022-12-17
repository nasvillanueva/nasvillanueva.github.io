import * as React from "react";
import { graphql, HeadFC } from "gatsby";
import DevLayout from "@/components/DevLayout";
import HeadComponent from "@/components/Head";
import type { Post } from "@/types/dev";

export default function DevPage({ data: { tags, allMarkdownRemark: { nodes: posts } } }: {
  data: {
    tags: {
      group: {
        tag: string;
        totalCount: number
      }[]
    },
    allMarkdownRemark: {
      nodes: Post[]
    }
  }
}) {
  return <DevLayout posts={posts} tags={ tags } />
}

export const Head: HeadFC = (props: any) => <HeadComponent headProps={ props } pageTitle="Dev" />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    tags: allMarkdownRemark {
      group(field: { frontmatter: { tags: SELECT } }) {
        tag: fieldValue
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC }}
      filter: { fields: { site: { eq: "dev" } } }
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
