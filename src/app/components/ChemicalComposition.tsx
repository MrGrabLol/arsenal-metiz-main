"use client";

import { useRef } from "react";
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

  return (
    <div className="space-y-5 mt-10">
      <h2 className="text-lg md:text-xl font-semibold">Химический состав</h2>

      <div className="flex items-stretch relative">
        {/* Left image box */}
        <div className="w-12 sm:w-24 lg:w-32 shrink-0 flex-center border-y border-l border-r border-brand-dark-gray/30 rounded-l-md">
          <Image
            src="/assets/svgs/chemical.svg"
            alt="Chemical"
            width={88}
            height={88}
            className="size-8 sm:size-10 lg:size-12"
          />
        </div>

        {/* Scrollable table */}
        <div
          ref={scrollRef}
          className="scroll-none overflow-auto border-y border-brand-dark-gray/30"
        >
          <table className="min-w-max text-xs sm:text-sm lg:text-base/6 text-center">
            <thead>
              <tr>
                {chemicalData.elements.map((elem, idx) => (
                  <th
                    key={idx}
                    className="w-8 h-6 sm:w-10 sm:h-8 lg:w-16 lg:h-12 shrink-0 font-normal border-b border-r border-brand-dark-gray/30"
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
                    className="w-8 h-6 sm:w-10 sm:h-8 lg:w-16 lg:h-12 shrink-0 border-r border-brand-dark-gray/30"
                  >
                    {val}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
