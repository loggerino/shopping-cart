import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

function ShoppingPage() {
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
        // Check if the product is already in the cart
        const existingCartItem = cartItems.find((item) => item.product.id === product.id);

        if (existingCartItem) {
            // Update the quantity if the product is already in the cart
            const updatedCartItems = cartItems.map((item) =>
                item.product.id === product.id ? { ...item, quantity } : item
            );
            setCartItems(updatedCartItems);
        } else {
            // Add the product to the cart if it's not already there
            setCartItems([...cartItems, { product, quantity }]);
        }
        console.log('Added to cart:', product.title, '-', quantity, 'quantity');
    };

    // Calculate the total amount
    const totalAmount = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
            <div>
                <h2 className="text-2xl font-semibold mt-4">Shopping Cart</h2>
                {cartItems.map((cartItem) => (
                    <div key={cartItem.product.id}>
                        <p>{cartItem.product.title} - Quantity: {cartItem.quantity}</p>
                    </div>
                ))}
                <p className="text-xl font-semibold mt-4">Total Amount: ${totalAmount.toFixed(2)}</p>
            </div>
        </div>
    );
};


export default ShoppingPage;
