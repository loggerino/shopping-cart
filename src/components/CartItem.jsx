import React from 'react';

function CartItem({ cartItem, handleIncreaseQuantity, handleDecreaseQuantity, handleRemoveItem }) {
    const { product, quantity } = cartItem;

    return (
        <div className="mb-2">
            <p>{product.title} - Quantity: {quantity}</p>
            <div className="flex items-center justify-between mt-2">
                <div className="flex items-center border rounded">
                    <button className="px-2" onClick={() => handleDecreaseQuantity(product.id)}>
                        -
                    </button>
                    <div className="px-2 text-center border-r border-l">{quantity}</div>
                    <button className="px-2" onClick={() => handleIncreaseQuantity(product.id)}>
                        +
                    </button>
                </div>
                <button
                    className="ml-4 bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => handleRemoveItem(product.id)}
                >
                    Remove
                </button>
            </div>
        </div>
    );
}

export default CartItem;
