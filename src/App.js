// src/App.js
import React, { useState } from 'react';
import './App.css';
import Product from './Product';
import Cart from './Cart';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Running Shoes', description: 'Comfortable and lightweight running shoes.' },
    { id: 2, name: 'Basketball Shoes', description: 'High-performance shoes for the court.' },
    { id: 3, name: 'Casual Sneakers', description: 'Stylish sneakers for everyday wear.' },
    { id: 4, name: 'Sandal', description: `Sandals are an open type of shoe, consisting of a sole held 
                                             to the wearer's foot by straps going over the instep and around the ankle.` },
    { id: 5, name: 'Loafer', description: 'Loafers are slip-on with a low-cut vamp. They are classically finished with leather or suede, but you can also find them in other materials.' },
    { id: 6, name: 'Boot', description: 'A boot is a type of footwear. Most boots mainly cover the foot and the ankle, while some also cover some part of the lower calf.' },
  ]);

  const [cartItems, setCartItems] = useState({});

  const handleAddToCart = (productId) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [productId]: (prevItems[productId] || 0) + 1,
    }));
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      if (updatedItems[productId] > 1) {
        updatedItems[productId] -= 1;
      } else {
        delete updatedItems[productId];
      }
      return updatedItems;
    });
  };

  return (
    <div className="app">
      <h1>Shoe Shopping Cart</h1>
      <Cart cartItems={cartItems} products={products} onRemoveFromCart={handleRemoveFromCart} />
      <Product products={products} onAddToCart={handleAddToCart} cartItems={cartItems} />
    </div>
  );
};

export default App;
