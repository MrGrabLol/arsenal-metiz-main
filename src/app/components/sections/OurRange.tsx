"use client";

import Image from "next/image";
import Button from "../shared/ui/Button";

type block = {
  title: string;
  texts: string[];
};

const blocks: block[] = [
  {
    title: "Марки",
    texts: [
      "Подберем оптимальный вариант под ваш станок",
      "Подберем оптимальный вариант под ваш станок",
      "Подберем оптимальный вариант под ваш станок",
      "Подберем оптимальный вариант под ваш станок",
      "Подберем оптимальный вариант под ваш станок",
      "Подберем оптимальный вариант под ваш станок",
      "Подберем оптимальный вариант под ваш станок",
    ],
  },
  {
    title: "Упаковки",
    texts: [
      "Подберем оптимальный вариант под ваш станок",
      "Подберем оптимальный вариант под ваш станок",
      "Подберем оптимальный вариант под ваш станок",
      "Подберем оптимальный вариант под ваш станок",
      "Подберем оптимальный вариант под ваш станок",
      "Подберем оптимальный вариант под ваш станок",
      "Подберем оптимальный вариант под ваш станок",
    ],
  },
  {
    title: "Диаметр",
    texts: [
      "Подберем оптимальный вариант под ваш станок",
      "Подберем оптимальный вариант под ваш станок",
      "Подберем оптимальный вариант под ваш станок",
      "Подберем оптимальный вариант под ваш станок",
      "Подберем оптимальный вариант под ваш станок",
      "Подберем оптимальный вариант под ваш станок",
      "Подберем оптимальный вариант под ваш станок",
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
            Подберем оптимальный вариант под ваш станок или метод сварки
          </p>
        </div>

        {/* Block */}
        <div className="flex flex-col xl:flex-row xl:items-stretch gap-7.5">
          <div className="flex-1 sm:max-w-3/4 mx-auto lg:max-w-none grid lg:grid-cols-3 bg-brand-dark-gray border border-brand-whitish/30 divide-x divide-brand-whitish/30 rounded-md">
            {blocks.map((item, idx) => (
              <div key={idx}>
                {/* Header */}
                <div
                  className={`text-center text-lg/5 font-medium border-b border-brand-whitish/30 ${
                    idx === 1 || idx === 2
                      ? "border-t border-brand-dark/30 lg:border-t-0"
                      : ""
                  } py-6`}
                >
                  {item.title}
                </div>

                {/* Body */}
                <ul className="space-y-5 leading-5 py-5 px-7.5">
                  {item.texts.map((text, idx) => (
                    <li className="flex gap-3" key={idx}>
                      <span className="size-3.5 shrink-0 bg-brand-brown rounded-2"></span>
                      <p>{text}</p>
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
