"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useClickOutside } from "@/app/hooks/useClickOutside";

interface SortOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options?: SortOption[];
  defaultOption?: SortOption;
  label?: string;
  onSelect?: (option: SortOption) => void;
}

const defaultSortOptions: SortOption[] = [
  { value: "price", label: "По цене" },
  { value: "name", label: "По названию" },
  { value: "date", label: "По дате" },
  { value: "popularity", label: "По популярности" },
];

export default function Dropdown({
  options = defaultSortOptions,
  defaultOption = defaultSortOptions[0],
  onSelect,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] =
    useState<SortOption>(defaultOption);

  const handleSelect = (option: SortOption): void => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect?.(option);
  };

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center gap-4">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2.5 bg-brand-whitish-200 rounded-md cursor-pointer leading-4 p-2.5"
            type="button"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
          >
            <span className="text-gray-700">{selectedOption.label}</span>
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
              <Image
                src="/assets/svgs/angle-right.svg"
                alt="Angle icon"
                width={20}
                height={11}
                className="w-3.25 h-2.75 cursor-pointer rotate-90 "
              />
            </motion.div>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute w-fit top-full left-0 right-0 bg-white border-brand-whitish-200 rounded-md shadow-lg z-10 mt-2"
                role="listbox"
              >
                {options.map((option: SortOption) => (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option)}
                    className="w-full text-left whitespace-nowrap cursor-pointer hover:bg-gray-50 border-b border-gray-100 last:border-b-0 first:rounded-t-md last:rounded-b-md p-2.5"
                    type="button"
                    role="option"
                    aria-selected={selectedOption.value === option.value}
                  >
                    {option.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
