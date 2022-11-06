import * as React from "react";

const Head = ({ headProps: props, pageTitle }: { headProps: any, pageTitle?: string }) => {
  const siteTitle = props.data.site.siteMetadata.title;
  const siteDescription = props.data.site.siteMetadata.description;
  const siteAuthor = props.data.site.siteMetadata.author;

  const title = `${siteTitle}${pageTitle != null ? ` | ${pageTitle}` : ""}`;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={siteDescription} />
      <meta name="author" content={siteAuthor} />
    </>
  );
}

export default Head;
