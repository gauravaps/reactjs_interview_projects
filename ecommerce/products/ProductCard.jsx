import React from 'react';
import './productcard.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../reduxToolkit/cartSlice';

const ProductCard = ({ id,image, name, price }) => {

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({id, name, price, image }));
  };


  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">₹{price}</p>
      <button className="add-btn" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
