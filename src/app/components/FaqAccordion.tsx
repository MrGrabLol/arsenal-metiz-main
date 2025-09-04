"use client";

import { useState } from "react";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Сервис позволяет в онлайн-режиме сформировать заказ?",
    answer:
      "Прокат производства ММК отвечает всем современным требованиям сектора вагоностроения. Изготовление всех существующих типов вагонов из стали ММК: пассажирских, грузовых-крытых, полувагонов, платформ, цистерн, изотермических, специального назначения",
  },
  {
    id: 2,
    question: "Сервис позволяет в онлайн-режиме сформировать заказ?",
    answer:
      "Прокат производства ММК отвечает всем современным требованиям сектора вагоностроения. Изготовление всех существующих типов вагонов из стали ММК: пассажирских, грузовых-крытых, полувагонов, платформ, цистерн, изотермических, специального назначения",
  },
  {
    id: 3,
    question: "Сервис позволяет в онлайн-режиме сформировать заказ?",
    answer:
      "Прокат производства ММК отвечает всем современным требованиям сектора вагоностроения. Изготовление всех существующих типов вагонов из стали ММК: пассажирских, грузовых-крытых, полувагонов, платформ, цистерн, изотермических, специального назначения",
  },
  {
    id: 4,
    question: "Сервис позволяет в онлайн-режиме сформировать заказ?",
    answer:
      "Прокат производства ММК отвечает всем современным требованиям сектора вагоностроения. Изготовление всех существующих типов вагонов из стали ММК: пассажирских, грузовых-крытых, полувагонов, платформ, цистерн, изотермических, специального назначения",
  },
];

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4 text-white">
      {faqData.map((item, index) => (
        <div
          key={item.id}
          className="bg-brand-dark-gray text-sm/4 md:text-lg/5  rounded-md overflow-hidden"
        >
          <button
            className="w-full flex justify-between items-center gap-5 text-left focus:outline-none py-5 px-6 md:py-6 md:px-7.5"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-medium">{item.question}</span>
            <svg
              width="21"
              height="12"
              viewBox="0 0 21 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`w-4 h-2.5 md:size-auto ${
                activeIndex === index ? "rotate-180" : ""
              } transition-all duration-300`}
            >
              <path
                d="M10.5 3.57313e-08C10.6253 -0.000135375 10.7495 0.0256796 10.8653 0.0759621C10.9811 0.126244 11.0863 0.2 11.1748 0.292997L20.7203 10.2929C21.0932 10.6837 21.0932 11.3164 20.7203 11.7069C20.3473 12.0974 19.7433 12.0977 19.3705 11.7069L10.5 2.41399L1.62938 11.7069C1.25639 12.0977 0.652401 12.0977 0.279652 11.7069C-0.0930976 11.3162 -0.093336 10.6834 0.279652 10.2929L9.82509 0.292997C9.91362 0.2 10.0188 0.126244 10.1346 0.0759621C10.2504 0.0256796 10.3746 -0.000135397 10.5 3.57313e-08Z"
                fill="#BBA483"
              />
            </svg>
          </button>

          <div
            className={`bg-brand-whitish-300 transition-all duration-300 px-5 md:px-7.5 ${
              activeIndex === index
                ? "max-h-96 py-4.5 md:py-6"
                : "max-h-0 overflow-hidden py-0"
            }`}
          >
            <p className="text-sm leading-relaxed text-brand-dark-gray">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
