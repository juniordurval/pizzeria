"use client";

import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center">
              <img className="h-10 w-auto" src="/logo-namnam.png" alt="Ñam Ñam Logo" />
              <span className="ml-2 text-primary font-bold text-xl hidden sm:block">Ñam Ñam</span>
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Cart Icon Desktop */}
            <button 
              onClick={toggleCart}
              className="relative p-2 text-gray-700 hover:text-primary transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <motion.span
                  key={totalItems}
                  initial={{ scale: 0.5 }}
                  animate={{ scale: [1, 1.3, 1] }}
                  className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleCart}
              className="relative p-2 text-gray-700"
              aria-label="Open cart"
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-primary hover:text-white rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
