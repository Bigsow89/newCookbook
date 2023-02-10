import React from "react";
import Post from "../Post/Post";

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((article, index) => (
        <Post article={article} key={index} />
      ))}
    </div>
  );
};

export default Posts;
