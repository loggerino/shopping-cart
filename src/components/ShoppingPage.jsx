import React from 'react';
import ProductCard from './ProductCard';

function ShoppingPage({ products, addToCart }) {
  return (
    <div>
      <div className="p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ShoppingPage;
