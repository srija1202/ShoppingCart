// src/Cart.js
import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, products, onRemoveFromCart }) => {
  const cartProductList = Object.keys(cartItems).map((productId) => {
    const product = products.find((p) => p.id === parseInt(productId));
    return (
      <div key={productId} className="cart-item">
        <h3>{product.name}</h3>
        <p>Quantity: {cartItems[productId]}</p>
        <button onClick={() => onRemoveFromCart(productId)}>Remove from Cart</button>
      </div>
    );
  });

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartProductList.length > 0 ? (
        cartProductList
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
