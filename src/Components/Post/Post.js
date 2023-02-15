import React from "react";
import { marked } from "marked";

const Post = ({ article }) => {
  const {
    nameOfRecipe,
    featuredImage,
    ingredients,
    instructions,
    timeOfPreparation,
    
  } = article.fields;
  const postIngredients = marked(ingredients);
  const postDescription = marked(instructions);

  return (
    <div className="post">
      <h2 className="title">{nameOfRecipe}</h2>
      <p>{timeOfPreparation}</p>
      <section dangerouslySetInnerHTML={{ __html: postIngredients }} />
      <section dangerouslySetInnerHTML={{ __html: postDescription }} />

      {featuredImage && (
        <img
          className="featuredImage"
          src={featuredImage.fields.file.url}
          alt={nameOfRecipe}
          title={nameOfRecipe}></img>
      )}
    </div>
  );
};

export default Post;
