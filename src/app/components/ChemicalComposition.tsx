"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const chemicalData = {
  elements: [
    "Эл",
    "C",
    "Si",
    "Ni",
    "P",
    "N",
    "Mn",
    "Ti",
    "Cr",
    "S",
    "H",
    "O",
    "Xe",
  ],
  values: [
    "90",
    "0.2",
    "0.01",
    "0.02",
    "0.34",
    "0.06",
    "0.1",
    "0.12",
    "0.001",
    "0.702",
    "0.1",
    "0.2",
    "0.3",
  ],
};

export default function ChemicalComposition() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const checkScroll = () => {
      setShowScrollButton(el.scrollWidth > el.clientWidth);
      setIsScrolledToEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 5); // allow small margin
    };

    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scrollToEnd = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
  };

  return (
    <div className="space-y-7.5 mt-12.5">
      <h2>Химический состав</h2>

      <div className="flex items-stretch relative">
        {/* Left image box */}
        <div className="w-16 sm:w-32 lg:w-40 shrink-0 flex-center border-y border-l border-r border-brand-dark-gray/30 rounded-l-md">
          <Image
            src="/assets/svgs/chemical.svg"
            alt="Chemical"
            width={88}
            height={88}
            className="size-10 sm:size-14 lg:size-auto"
          />
        </div>

        {/* Scrollable table */}
        <div
          ref={scrollRef}
          className="scroll-none overflow-auto border-y border-brand-dark-gray/30"
        >
          <table className="min-w-max sm:text-lg lg:text-2xl/6 text-center">
            <thead>
              <tr>
                {chemicalData.elements.map((elem, idx) => (
                  <th
                    key={idx}
                    className="w-13 h-10 sm:w-16 sm:h-14 lg:w-25 lg:h-20 shrink-0 font-normal border-b border-r border-brand-dark-gray/30"
                  >
                    {elem}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {chemicalData.values.map((val, idx) => (
                  <td
                    key={idx}
                    className="w-13 h-10 sm:w-16 sm:h-14 lg:w-25 lg:h-20 shrink-0 border-r border-brand-dark-gray/30"
                  >
                    {val}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Scroll-to-end button */}
        {showScrollButton && (
          <button
            onClick={scrollToEnd}
            className={`w-10 sm:w-18 lg:w-25 shrink-0 flex-center border-y border-r border-brand-dark-gray/30 rounded-r-md cursor-pointer transition-all duration-200 ${
              isScrolledToEnd ? "" : "border-l"
            }`}
          >
            <svg
              width="26"
              height="43"
              viewBox="0 0 26 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-6 sm:w-6 sm:h-8 lg:size-auto"
            >
              <path
                d="M2.16699 41C2.2735 41 2.33663 40.962 2.3584 40.9424L2.35937 40.9424L23.9102 21.5L2.35937 2.05762C2.33696 2.0374 2.2731 2.0001 2.16699 2C2.15801 2 2.149 2.00145 2.14062 2.00195L22.1094 20.0146L23.7559 21.5L22.1094 22.9854L2.14062 40.9971C2.14914 40.9976 2.15784 41 2.16699 41Z"
                fill="#A2845E"
                stroke="#A2845E"
                strokeWidth="4"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
