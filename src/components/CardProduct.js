import React from "react";
import PropTypes from "prop-types";

import "../css/CardProduct.css";

function CardProduct({ imageSource, title, text, url }) {
  return (
    <div className="card h-100  text-center bg-light animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text
            ? text
            : "$ -"}
        </p>
        <button className="btnDetails">Details</button>
      </div>
    </div>
  );
}

CardProduct.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default CardProduct;