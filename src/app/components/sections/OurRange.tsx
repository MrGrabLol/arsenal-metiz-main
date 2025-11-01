"use client";

import Image from "next/image";
import Button from "../shared/ui/Button";

type block = {
  title: string;
  texts: string[];
};

const blocks: block[] = [
  {
    title: "Виды проволоки",
    texts: [
      "Легированная",
      "Высоколегированная",
      "Наплавленная",
      "Медно-никелевые сплавы",
      "Электроэрозионная",
      "Микропроволока",
      "Коррозионностойкая",
      "Проволока из прецизионных металлов с высоким электрическим сопротивлением",
    ],
  },
  {
    title: "Упаковки",
    texts: [
      "Мотки",
      "Кассеты",
      "Бочки",
      "Прутки разной длины",
    ],
  },
];

export default function OurRange() {
  return (
    <section
      id="ourRange"
      className="relative bg-brand-dark text-white pt-12 md:pt-23"
    >
      <div className="max-w-base mx-auto relative z-10 relative space-y-6 lg:space-y-10 px-4 md:px-12 lg:px-4">
        {/* Title */}
        <div className="space-y-5 text-center">
          <h2 className="font-oswald font-medium text-brand-brown-100 uppercase text-4xl/11 md:text-6xl/[70px] tracking-tight">
            Наш сортамент
          </h2>
          <p className="text-xl/5">
          От универсальных марок до специализированных решений — в линейке «Арсенал-Метиз» есть проволока для любых задач. Подберем оптимальный вариант под ваш станок или метод сварки. 
          </p>
        </div>

        {/* Block */}
        <div className="flex flex-col xl:flex-row xl:items-stretch gap-7.5">
          <div className="flex-1 sm:max-w-3/4 mx-auto lg:max-w-none grid lg:grid-cols-2 bg-gradient-to-br from-brand-dark-gray to-brand-dark border border-brand-brown/30 divide-x divide-brand-brown/20 rounded-lg shadow-2xl overflow-hidden">
            {blocks.map((item, idx) => (
              <div key={idx} className="group hover:bg-brand-dark/50 transition-all duration-300">
                {/* Header */}
                <div
                  className={`text-center text-xl font-semibold border-b border-brand-brown/30 ${
                    idx === 1
                      ? "border-t border-brand-dark/30 lg:border-t-0"
                      : ""
                  } py-8 bg-gradient-to-r from-brand-brown/10 to-transparent`}
                >
                  <div className="flex items-center justify-center gap-3">
                    {idx === 0 ? (
                      <svg className="w-6 h-6 text-brand-brown-100" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-brand-brown-100" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span className="text-brand-brown-100">{item.title}</span>
                  </div>
                </div>

                {/* Body */}
                <ul className="space-y-2 py-6 px-8">
                  {item.texts.map((text, textIdx) => (
                    <li className="flex items-start gap-3 group/item hover:bg-brand-brown/5 rounded-lg p-2 transition-all duration-200" key={textIdx}>
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-gradient-to-r from-brand-brown to-brand-brown-100 rounded-full group-hover/item:scale-125 transition-transform duration-200"></div>
                      </div>
                      <p className="text-sm leading-relaxed text-gray-200 group-hover/item:text-white transition-colors duration-200">
                        {text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="h-125 xs:h-auto xl:w-90 relative flex-center bg-products bg-no-repeat bg-cover rounded-md py-20">
            <div className="space-y-5">
              <Image
                src="/assets/svgs/logo.svg"
                alt="Logo"
                width={153}
                height={44}
                className="mx-auto"
              />
              <Button variant="primary" isLink href="/marketplace">Перейти в каталог</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
