import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

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
          title={nameOfRecipe}
          id="recipe-img"></img>
      )}
      <ul className="ingredients">{ingredients}</ul>
      <ol className="instructions">{instructions}</ol>
    </div>
  );
};

export default Post;
