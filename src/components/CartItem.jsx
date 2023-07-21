import React from 'react';

function CartItem({ cartItem, onIncreaseQuantity, onDecreaseQuantity, onRemoveItem }) {
    const { product, quantity } = cartItem;

    return (
        <div className="mb-2">
            <p>{product.title} - Quantity: {quantity}</p>
            <div className="flex items-center">
                <button className="px-2" onClick={() => onDecreaseQuantity(product.id)}>
                    -
                </button>
                <div className="px-2 text-center border-r border-l">{quantity}</div>
                <button className="px-2" onClick={() => onIncreaseQuantity(product.id)}>
                    +
                </button>
                <button className="ml-4 bg-red-500 text-white px-3 py-1 rounded" onClick={() => onRemoveItem(product.id)}>
                    Remove
                </button>
            </div>
        </div>
    );
}

export default CartItem;
