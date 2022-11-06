import * as React from "react";
import { graphql, HeadFC, navigate } from "gatsby";
import Layout from "@components/Layout";
import HeadComponent from "@components/Head";
import { ImageDataLike } from "gatsby-plugin-image";
import { isBrowser } from "../utils";

export default function PhotographyPage({ data: { allMarkdownRemark: { nodes: posts } } }: {
  data: {
    allMarkdownRemark: {
      nodes: {
        excerpt: string,
        fields: {
          slug: string;
        },
        frontmatter: {
          title: string;
          date: string;
          banner?: ImageDataLike
        }
      }[]
    }
  }
}) {
  if (!isBrowser()) {
    return;
  }
  navigate("/dev");
  return <Layout></Layout>
}

export const Head: HeadFC = (props: any) => <HeadComponent headProps={ props } pageTitle="Photography" />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { site: { eq: "photography" } } }
    ) {
      nodes {
        excerpt,
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          banner {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
