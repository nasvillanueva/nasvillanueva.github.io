import * as React from "react";
import { graphql, HeadFC, navigate } from "gatsby";
import Layout from "@/components/Layout";
import HeadComponent from "@/components/Head";
import { isBrowser } from "@/utils";

const About = () => {
  if (!isBrowser()) {
    return;
  }
  navigate("/dev");
  return <Layout></Layout>;
}

export default About;

export const Head: HeadFC = (props: any) => <HeadComponent headProps={ props } pageTitle="About"/>

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
