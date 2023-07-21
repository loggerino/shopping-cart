import React from 'react';
import ProductCard from './ProductCard';
import ShoppingCart from './ShoppingCart';

function ShoppingPage({ products, addToCart, cartItems }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <ShoppingCart cartItems={cartItems} />
    </div>
  );
}

export default ShoppingPage;
