// Card.js
import React from 'react';
import './card.css';

const Card = ({ image, title, subtitle }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <h3 className="card-subtitle">{subtitle}</h3>
        {/* <h4 className="price">{price}</h4> */}
      </div>
    </div>
  );
};

export default Card;
