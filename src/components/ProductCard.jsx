import React from 'react';

function ProductCard({ product, addToCart }) {
    const { title, image, price } = product;

    return (
        <div className="border p-4">
            <img src={image} alt={title} className="mx-auto mb-2" style={{ width: '150px' }} />
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600">${price}</p>
            <div className="flex items-center mt-2">
                <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => addToCart(product)}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
