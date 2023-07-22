import React, { useState } from 'react';

function ProductCard({ product, addToCart }) {
    const [quantity, setQuantity] = useState(1);
    const { title, image, price } = product;

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    return (
        <div className="border p-4 bg-white shadow-md">
            <div className="relative" style={{ height: '300px' }}>
                <img src={image} alt={title} className="object-contain w-full h-full" style={{ maxHeight: '100%', maxWidth: '100%' }} />
            </div>
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600">${price}</p>
            <div className="flex items-center mt-2">
                <button className="bg-blue-500 text-white px-5 py-1 rounded" onClick={() => addToCart(product, quantity)}>
                    Add To Cart
                </button>
                <div className="ml-4 flex items-center border rounded">
                    <button className="px-2 " onClick={handleDecrement}>
                        -
                    </button>
                    <div className="px-2 text-center border-r border-l">{quantity}</div>
                    <button className="px-2" onClick={handleIncrement}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
