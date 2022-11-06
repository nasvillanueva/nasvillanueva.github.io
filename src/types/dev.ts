import { ImageDataLike } from "gatsby-plugin-image";

export interface Post {
  fields: {
    slug: string;
    readingTime: {
      text: string;
    };
  };
  frontmatter: {
    title: string;
    date: string;
    banner?: ImageDataLike;
    tags?: string[];
  };
}

export interface Tag {
  tag: string;
}
