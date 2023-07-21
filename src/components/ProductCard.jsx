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
        <div className="border p-4">
            <img src={image} alt={title} className="mx-auto mb-2" style={{ width: '150px' }} />
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600">${price}</p>
            <div className="flex items-center mt-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => addToCart(product, quantity)}>
                    Add To Cart
                </button>
                <div className="ml-4 flex items-center border rounded">
                    <button className="px-2" onClick={handleDecrement}>
                        -
                    </button>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                        className="w-12 text-center border-r border-l"
                    />
                    <button className="px-2" onClick={handleIncrement}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
