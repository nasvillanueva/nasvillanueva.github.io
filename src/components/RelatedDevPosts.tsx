import * as React from "react";
import type { Post } from "@@types/dev";
import DevPost from "@components/DevPost";
import PropTypes from "prop-types";


const RelatedDevPosts = ({ posts }: { posts: Post[] }) => {
  const relatedPosts = posts.slice(0, 3);
  return (
    <div className="grid grid-cols-3 gap-5">
      {relatedPosts.map((post, index) => (<DevPost post={post} key={index} />))}
    </div>
  );
}

RelatedDevPosts.propTypes = {
  posts: PropTypes.array
};

export default RelatedDevPosts;
