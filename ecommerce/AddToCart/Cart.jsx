import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
 import { removeFromCart } from '../reduxToolkit/cartSlice';
import './Cart.css';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    
    
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {items.map((item, id) => (
            <div className="cart-card" key={id}>
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <button className="buy-now">Buy Now</button>
        </div>
      )}
    </div>
  );
};

export default Cart;