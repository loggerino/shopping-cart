import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import ShoppingCart from './components/ShoppingCart';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ShoppingPage from './components/ShoppingPage';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const addToCart = (product, quantity) => {
    const existingCartItem = cartItems.find((item) => item.product.id === product.id);

    if (existingCartItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.product.id === product.id ? { ...item, quantity } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { product, quantity }]);
    }
  };

  return (
    <Router>
      <div>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/shop"
            element={<ShoppingPage products={products} addToCart={addToCart} cartItems={cartItems} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
