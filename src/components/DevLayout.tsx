import * as React from "react";
import * as PropTypes from "prop-types";
import Layout from "@components/Layout";
import { GatsbyImage, getImage, ImageDataLike, StaticImage } from "gatsby-plugin-image";
import { Link, navigate } from "gatsby";
import type { Post } from "@@types/dev";
import DevPost from "./DevPost";

const DevLayout = ({
  posts,
  tags,
  currentTag
}: {
  posts: Post[],
  tags: {
    group: {
      tag: string;
    }[]
  },
  currentTag?: string;
}) => {

  const tagList = tags.group.map(({ tag }) => tag).sort();

  const goToTagPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newTag = event.target.value;

    if (newTag === "") {
      navigate("/dev");
    }

    if (tagList.includes(newTag)) {
      navigate(`/dev/tagged/${newTag}`);
    }
  }

  return (
    <Layout>
      <div className="container">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-serif font-medium mb-5">
              Dev Blog
              { currentTag != null ? <span className="text-zinc-500"> | {currentTag}</span> : null }
            </h1>
            <div className="border-b-[2px] w-1/4"></div>
          </div>

          <select className="mb-5" onChange={goToTagPage} value={currentTag}>
            <option value="">All Categories</option>
            {tagList.map((tag, index) => (<option key={index} value={tag}>{tag}</option>))}
          </select>
        </div>
        <div className="grid grid-flow-row sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-20">
        { posts.map((post, index) => (<DevPost post={post} key={index} />)) }
        </div>
      </div>
    </Layout>
  )
}

DevLayout.propTypes = {
  posts: PropTypes.array,
  tags: PropTypes.object,
  currentTag: PropTypes.string
};

export default DevLayout;
