import React from "react";
import { Link } from "react-router-dom";

const CarouselSlide = (props) => {
  const { id, slideTitle, slideDescription, slideBg } = props;
  return (
    <div className="slideWrap" style={{ backgroundImage: `url(${slideBg})` }}>
      <div className="textWrap">
        <h2>{slideTitle}</h2>
        <p>{slideDescription}</p>
        <Link to="/recipes" className="btn-header">
          Go to Recipes
        </Link>
      </div>
    </div>
  );
};

export default CarouselSlide;
