"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer: React.FC = () => {
  const { items, isOpen, toggleCart, updateQuantity, removeItem, clearCart, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black bg-opacity-50 z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold flex items-center">
                <ShoppingCart className="mr-2" /> Your Cart ({totalItems})
              </h2>
              <button onClick={toggleCart} className="p-2 hover:bg-gray-100 rounded-full">
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="text-center py-20">
                  <ShoppingCart size={48} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <div className="flex-grow">
                        <h4 className="font-bold">{item.name}</h4>
                        <p className="text-sm text-gray-500">
                          {item.size ? `Size: ${item.size}` : ''}
                          {item.options && item.options.length > 0 ? ` | ${item.options.join(', ')}` : ''}
                        </p>
                        <p className="text-primary font-medium">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 border rounded hover:bg-gray-100"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 border rounded hover:bg-gray-100"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-red-500 p-2">
                        <X size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-4 border-t bg-gray-50">
                <div className="flex justify-between text-xl font-bold mb-4">
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <button 
                  className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary-foreground transition-colors"
                  onClick={() => {
                    // In a real app, this would trigger the checkout flow
                    alert('Checkout functionality coming soon!');
                  }}
                >
                  Checkout
                </button>
                <button 
                  onClick={clearCart}
                  className="w-full mt-2 text-gray-500 text-sm hover:underline"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
