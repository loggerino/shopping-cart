function CartItem({ cartItem }) {
    const { product, quantity } = cartItem;

    return (
        <div>
            <p>{product.title} - Quantity: {quantity}</p>
        </div>
    );
};


export default CartItem