// src/Product.js
import React from 'react';
import './Product.css';

const Product = ({ products, onAddToCart, cartItems }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={`images/shoes/${product.id}.jpg`} alt={product.name} className="product-image" />
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button onClick={() => onAddToCart(product.id)}>
              Add to Cart
            </button>
            <p>Quantity in Cart: {cartItems[product.id] || 0}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
