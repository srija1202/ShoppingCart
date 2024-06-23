// src/ProductList.js
import React from 'react';
import './ProductList.css';

const ProductList = ({ products, onAddToCart, cartItems }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={`/images/shoes/${product.id}.jpg`} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button onClick={() => onAddToCart(product.id)}>
            {cartItems.includes(product.id) ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
