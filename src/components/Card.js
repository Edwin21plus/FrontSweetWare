import React from "react";
import PropTypes from "prop-types";

import "../css/Card.css";

function Card({ imageSource, title, text, url }) {
  return (
    <div className="card-box  text-center bg-light animate__animated animate__fadeInUp">
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

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;