import React from "react";
import type { Post } from "@@types/dev";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import * as PropTypes from "prop-types";
import { Link } from "gatsby";

const DevPost = ({ post }: { post: Post }) => {
  const postTitle = post.frontmatter.title;
  const banner = getImage(post.frontmatter.banner ?? null);
  const tags = post.frontmatter.tags ?? []

  return (
    <div>
      <Link className="font-serif block no-underline mb-5" to={post.fields.slug}>
        <div className="shadow-lg shadow-nxs-blue/50">
          {banner != null
            ? <GatsbyImage image={banner} alt={postTitle} />
            : <StaticImage placeholder="blurred" aspectRatio={16/9} src="../images/default-dev-banner.jpg" alt={postTitle}></StaticImage>
          }
        </div>

        <p className="mt-6 text-xl font-medium">{postTitle}</p>
      </Link>

      <div className="mt-6 text-slate-500 text-[0.7rem] flex justify-between">
        <span>{post.frontmatter.date}</span>
        <span>{post.fields.readingTime.text}</span>
      </div>

      {tags.length > 0
        ? <div className="mt-3 tags">
          {tags.map((tag, index) => (
            <Link className="tag" key={index} to={`/dev/tagged/${tag}`}>{tag}</Link>
          ))}
        </div>
        : null
      }
    </div>
  );
}

DevPost.propTypes = {
  post: PropTypes.object
};

export default DevPost;
