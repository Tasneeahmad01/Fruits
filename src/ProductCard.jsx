import React from 'react';
 
const ProductCard = ({ image, title }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <p className="product-title">{title}</p>
    </div>
  );
};

export default ProductCard;