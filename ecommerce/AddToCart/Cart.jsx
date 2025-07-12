import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
 import { removeFromCart ,clearCart } from '../reduxToolkit/cartSlice';
import './Cart.css';
import { toast } from 'react-toastify';


const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();


  //remove products from cart..
  const handleRemove = (id) => {
       dispatch(removeFromCart(id));
  };

  //calculate total price of items
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

// Buy now functionality
  const handleBuyNow = () => {
    dispatch(clearCart());  
    toast.success('Your order has been placed successfully!');
  };


  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
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

          <div className="cart-total">
            <h3>Total: ₹{totalPrice}</h3>
          </div>


          <button className="buy-now"  onClick={handleBuyNow}>Buy Now</button>
        </div>
      )}
    </div>
  );
};

export default Cart;