"use client";

import React, { useState } from 'react';
import { Product, Size } from '@/types';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';
import { Plus, Minus, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<Size | undefined>(undefined);

  const handleAddToCart = () => {
    addItem(product, selectedSize);
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-primary font-bold text-lg">
            ${product.basePrice.toFixed(2)}
          </span>

          <div className="flex items-center space-x-2">
            {product.hasSizes ? (
              <select 
                value={selectedSize || ''}
                onChange={(e) => setSelectedSize(e.target.value as Size)}
                className="text-sm border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="" disabled>Size</option>
                {Object.entries(product.sizes || {}).map(([size, price]) => (
                  <option key={size} value={size}>
                    {size.charAt(0).toUpperCase() + size.slice(1)} (${price.toFixed(2)})
                  </option>
                ))}
              </select>
            ) : null}

            <button
              onClick={handleAddToCart}
              className="bg-primary text-white p-2 rounded-full hover:bg-primary-foreground transition-colors"
              aria-label={`Add ${product.name} to cart`}
            >
              <Plus size={20} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
