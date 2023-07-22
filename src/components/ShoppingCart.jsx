import React, { useState } from 'react';
import CartItem from './CartItem';

function ShoppingCart({ cartItems, handleRemoveItem, handleIncreaseQuantity, handleDecreaseQuantity }) {
    const totalAmount = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    const [isCartOpen, setCartOpen] = useState(true);

    const handleCloseCart = () => {
        setCartOpen(false);
    };

    if (!isCartOpen) {
        return null;
    }

    return (
        <div className="bg-white p-4 rounded shadow-lg absolute top-14 right-4 z-10" style={{ minWidth: '20rem' }}>
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold">Shopping Cart</h2>
                <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={handleCloseCart}>
                    &times;
                </button>
            </div>
            <hr className='mb-2' />
            {cartItems.map((cartItem) => (
                <CartItem
                    key={cartItem.product.id}
                    cartItem={cartItem}
                    handleIncreaseQuantity={handleIncreaseQuantity}
                    handleDecreaseQuantity={handleDecreaseQuantity}
                    handleRemoveItem={handleRemoveItem}
                />
            ))}
            <p className="text-xl font-semibold mt-2">Total Amount: ${totalAmount.toFixed(2)}</p>
            <div className="flex justify-center mt-6">
                <button className="bg-green-500 text-white px-5 py-1 rounded">
                    Checkout
                </button>
            </div>
        </div>
    );
}

export default ShoppingCart;
