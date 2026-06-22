"use client";

import React, { useState } from 'react';
import { MENU_DATA } from '@/data/menu';
import ProductCard from './ProductCard';
import { Category } from '@/types';

interface ProductListProps {
  categoryFilter?: Category;
}

const ProductList: React.FC<ProductListProps> = ({ categoryFilter }) => {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');

  const filteredProducts = activeCategory === 'all' 
    ? MENU_DATA 
    : MENU_DATA.filter(p => p.category === activeCategory);

  return (
    <section id="menu" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 py-12">No products found in this category.</p>
        )}
      </div>
    </section>
  );
};

export default ProductList;
