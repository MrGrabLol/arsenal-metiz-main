"use client";

import React from 'react';
import Image from 'next/image';
import { X, Minus, Plus } from 'lucide-react';
import { CartItem as CartItemType, useCart } from '@/app/contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(item.id, newQuantity);
  };

  const handleRemove = () => {
    removeItem(item.id);
  };

  return (
    <div className="flex items-center gap-4 p-4 border-b border-gray-200 last:border-b-0">
      {/* Image */}
      <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-xs">Нет фото</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-900 truncate">{item.name}</h3>
        {item.category && (
          <p className="text-sm text-gray-500">{item.category}</p>
        )}
        {item.sku && (
          <p className="text-sm text-gray-500">Артикул: {item.sku}</p>
        )}
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          disabled={item.quantity <= 1}
        >
          <Minus size={16} className="text-gray-600" />
        </button>
        
        <span className="w-12 text-center font-medium">{item.quantity}</span>
        
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          <Plus size={16} className="text-gray-600" />
        </button>
      </div>

      {/* Price */}
      <div className="text-right min-w-0">
        <p className="font-medium text-gray-900">
          {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
        </p>
        {item.quantity > 1 && (
          <p className="text-sm text-gray-500">
            {item.price.toLocaleString('ru-RU')} ₽ за шт.
          </p>
        )}
      </div>

      {/* Remove Button */}
      <button
        onClick={handleRemove}
        className="p-2 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
        title="Удалить товар"
      >
        <X size={20} />
      </button>
    </div>
  );
} 