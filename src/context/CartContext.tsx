'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product, Size } from '@/types';
import { MENU_DATA } from '@/data/menu';

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, size?: Size, options?: string[]) => void;
  removeItem: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  totalPrice: number;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const totalPrice = items.reduce((total, item) => total + item.totalPrice, 0);
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const addItem = (product: Product, size?: Size, options?: string[]) => {
    setItems((prevItems) => {
      // Check if item with same product, size and options already exists
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.productId === product.id &&
          item.size === size &&
          JSON.stringify(item.options?.sort()) === JSON.stringify(options?.sort())
      );

      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        updatedItems[existingItemIndex].totalPrice = updatedItems[existingItemIndex].quantity * updatedItems[existingItemIndex].price;
        return updatedItems;
      }

      const price = size && product.sizes ? product.sizes[size] : product.basePrice;

      const newItem: CartItem = {
        id: `${product.id}-${size || 'default'}-${Date.now()}`,
        productId: product.id,
        name: product.name,
        size,
        price,
        quantity: 1,
        totalPrice: price,
        options,
      };

      return [...prevItems, newItem];
    });
  };

  const removeItem = (cartItemId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(cartItemId);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === cartItemId
          ? { ...item, quantity, totalPrice: item.quantity * item.price }
          : item
      )
    );
  };

  const clearCart = () => setItems([]);
  const toggleCart = () => setIsOpen((prev) => !prev);

  return (
    <CartContext.Provider value={{ items, isOpen, addItem, removeItem, updateQuantity, clearCart, toggleCart, totalPrice, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
