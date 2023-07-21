import React from 'react';
import CartItem from './CartItem';

function ShoppingCart({ cartItems }) {
    const totalAmount = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

    return (
        <div className="bg-white p-4 rounded shadow-lg absolute top-14 right-4 z-10" style={{ minWidth: '20rem' }}>
            <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
            {cartItems.map((cartItem) => (
                <CartItem key={cartItem.product.id} cartItem={cartItem} />
            ))}
            <p className="text-xl font-semibold mt-4">Total Amount: ${totalAmount.toFixed(2)}</p>
        </div>
    );
}

export default ShoppingCart;
