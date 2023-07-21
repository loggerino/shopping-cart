import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import ShoppingCart from './ShoppingCart';

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
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
            <ShoppingCart cartItems={cartItems} />
        </div>
    );
};



export default ShoppingPage;
