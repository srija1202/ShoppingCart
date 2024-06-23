// src/App.js
import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import Cart from './Cart';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Running Shoes', description: 'Comfortable and lightweight running shoes.' },
    { id: 2, name: 'Basketball Shoes', description: 'High-performance shoes for the court.' },
    { id: 3, name: 'Casual Sneakers', description: 'Stylish sneakers for everyday wear.' },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (productId) => {
    if (cartItems.includes(productId)) {
      setCartItems(cartItems.filter((id) => id !== productId));
    } else {
      setCartItems([...cartItems, productId]);
    }
  };

  return (
    <div className="app">
      <h1>Shoe Shopping Cart</h1>
      <Cart cartItems={cartItems} />
      <ProductList products={products} onAddToCart={handleAddToCart} cartItems={cartItems} />
    </div>
  );
};

export default App;
