import React from "react";

const Post = ({ article }) => {
  const {
    nameOfRecipe,
    featuredImage,
    ingredients,
    instructions,
    timeOfPreparation,
    videoTutorial,
  } = article.fields;

  console.log(featuredImage, "featuredImage");
  return (
    <div className="post">
      <h2 className="title">{nameOfRecipe}</h2>
      <p>{ingredients}</p>
      <p>{instructions}</p>
      <p>{instructions}</p>
      {featuredImage.fields && <img src={featuredImage.fields.file.url}></img>}
    </div>
  );
};

export default Post;
