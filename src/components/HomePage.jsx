import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

function HomePage({ featuredProducts, addToCart }) {
    return (
        <div>
            <section className="bg-gray-800 text-white py-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Our E-Commerce Store</h1>
                    <p className="text-lg mb-5">Explore our wide range of products and find the best deals!</p>
                    <Link to="/shop">
                        <button className="bg-blue-500 text-white px-8 py-3 rounded">Shop Now</button>
                    </Link>
                </div>
            </section>
            <section className="p-10 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} addToCart={addToCart} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-gray-800 text-white py-12 text-center">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Ready to start shopping?</h2>
                    <p className="text-lg mb-8">Create an account or log in to access your cart and preferences.</p>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded">Sign In</button>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
