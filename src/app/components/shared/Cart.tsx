"use client";

import React from 'react';
import { ShoppingCart, Trash2 } from 'lucide-react';
import { useCart } from '@/app/contexts/CartContext';
import CartItem from './CartItem';
import Button from './ui/Button';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { items, clearCart, getTotalItems, getTotalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <ShoppingCart size={24} className="text-brand-brown" />
            <h2 className="text-xl font-semibold text-gray-900">
              Корзина ({getTotalItems()})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col h-[calc(90vh-200px)]">
          {items.length === 0 ? (
            /* Empty Cart */
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <ShoppingCart size={64} className="text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Корзина пуста
              </h3>
              <p className="text-gray-500 mb-6">
                Добавьте товары в корзину для оформления заказа
              </p>
              <Button variant="primary" onClick={onClose}>
                Перейти к покупкам
              </Button>
            </div>
          ) : (
            /* Cart Items */
            <div className="flex-1 overflow-y-auto">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={clearCart}
                  className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
                >
                  <Trash2 size={20} />
                  <span>Очистить корзину</span>
                </button>
              </div>
              
              <div className="text-right">
                <p className="text-sm text-gray-500">Итого:</p>
                <p className="text-2xl font-bold text-gray-900">
                  {getTotalPrice().toLocaleString('ru-RU')} ₽
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button
                variant="secondary"
                onClick={onClose}
                className="flex-1"
              >
                Продолжить покупки
              </Button>
              <Button
                variant="primary"
                className="flex-1"
                onClick={() => {
                  // Здесь будет логика оформления заказа
                  console.log('Оформление заказа');
                }}
              >
                Оформить заказ
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 