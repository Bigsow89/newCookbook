import React from "react";

const Post = ({ article }) => {
  const {
    nameOfRecipe,
    featuredImage,
    ingredients,
    instructions,
    timeOfPreparation,
  } = article.fields;

  return (
    <div className="post">
      <h2 className="title">{nameOfRecipe}</h2>
      {featuredImage && (
        <img
          className="featuredImage"
          src={featuredImage.fields.file.url}
          alt={nameOfRecipe}
          title={nameOfRecipe}></img>
      )}
      <p>{ingredients}</p>
      <p>{instructions}</p>
    </div>
  );
};

export default Post;
