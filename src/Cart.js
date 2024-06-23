// src/Cart.js
import React from 'react';
import './Cart.css';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <p>Items in cart: {cartItems.length}</p>
    </div>
  );
};

export default Cart;
