import * as React from "react"
import Layout from "@components/Layout"
import HeadComponent from "@components/Head"
import { graphql, HeadFC, navigate } from "gatsby"
import { isBrowser } from "../utils";

export default function Index() {
  if (!isBrowser()) {
    return;
  }

  navigate("/dev");
  return <Layout></Layout>;
}

export const Head: HeadFC = (props: any) => <HeadComponent headProps={ props }/>

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
