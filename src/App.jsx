import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ShoppingPage from './components/ShoppingPage';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const featuredProducts = products.slice(0, 4);

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

  const handleIncreaseQuantity = (cartItemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.product.id === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (cartItemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.product.id === cartItemId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const handleRemoveItem = (cartItemId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.product.id !== cartItemId));
  };

  return (
    <Router>
      <div>
        <Navbar
          cartItems={cartItems}
          handleIncreaseQuantity={handleIncreaseQuantity}
          handleDecreaseQuantity={handleDecreaseQuantity}
          handleRemoveItem={handleRemoveItem}
        />
        <Routes>
          <Route path="/" element={<HomePage featuredProducts={featuredProducts} />} />
          <Route
            path="/shop"
            element={
              <ShoppingPage
                products={products}
                addToCart={addToCart}
                cartItems={cartItems}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
