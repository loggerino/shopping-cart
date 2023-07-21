function ShoppingCart({ cartItems }) {
    const totalAmount = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

    return (
        <div
            className="bg-white p-4 rounded shadow-lg absolute top-14 right-4 z-10"
            style={{ minWidth: '20rem' }}
        >
            <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
            {cartItems.map((cartItem) => (
                <div key={cartItem.product.id} className="mb-2">
                    <p>{cartItem.product.title} - Quantity: {cartItem.quantity}</p>
                </div>
            ))}
        </div>
    );
};


export default ShoppingCart