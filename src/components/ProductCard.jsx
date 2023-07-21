import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductCard = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const addToCart = (product) => {
        console.log('Added to cart:', product);
    };

    return (
        <div className="grid grid-cols-3 gap-4">
            {products.map((product) => (
                <div key={product.id} className="border p-4">
                    <img src={product.image} alt={product.title} className="mx-auto mb-2" style={{ width: '150px' }} />
                    <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                    <p className="text-gray-600">${product.price}</p>
                    <div className="flex items-center mt-2">
                        <button
                            className="bg-blue-500 text-white px-2 py-1 rounded"
                            onClick={() => addToCart(product)}
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;
