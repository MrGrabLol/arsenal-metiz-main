"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Button from "./ui/Button";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FeedbackModal({ isOpen, onClose }: FeedbackModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    comment: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Feedback form submitted:", formData);
    // Можно добавить API вызов или другую логику
    onClose();
    setFormData({ fullName: "", phone: "", comment: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Обратная связь
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
              ФИО *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-brown focus:border-transparent"
              placeholder="Введите ваше полное имя"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Номер телефона *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-brown focus:border-transparent"
              placeholder="+7 (___) ___-__-__"
            />
          </div>

          {/* Comment */}
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
              Комментарий
            </label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-brown focus:border-transparent resize-none"
              placeholder="Опишите ваш вопрос или пожелание"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              variant="primary"
              className="w-full"
            >
              Отправить
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
} 