"use client";

import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/app/contexts/CartContext';
import Cart from './Cart';

interface CartIconProps {
  className?: string;
}

export default function CartIcon({ className = "" }: CartIconProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems } = useCart();

  const totalItems = getTotalItems();

  return (
    <>
      <button
        onClick={() => setIsCartOpen(true)}
        className={`relative p-2 hover:opacity-80 transition-opacity ${className}`}
        title="Корзина"
      >
        <ShoppingCart size={24} className="text-white" />
        
        {/* Cart Badge */}
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
            {totalItems > 99 ? '99+' : totalItems}
          </span>
        )}
      </button>

      {/* Cart Modal */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
} 