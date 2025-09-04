"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useClickOutside } from "@/app/hooks/useClickOutside";

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownDetailsProps {
  options: DropdownOption[];
  placeholder?: string;
  className?: string;
  onSelect?: (option: DropdownOption) => void;
}

export function DropdownDetails({
  options,
  placeholder = "Select option",
  className = "",
  onSelect,
}: DropdownDetailsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption>(
    options[0] || { value: "", label: placeholder }
  );

  const dropRef = useRef(null);

  useClickOutside(dropRef, () => setIsOpen(false));

  const handleSelect = (option: DropdownOption) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect?.(option);
  };

  return (
    <div
      className={`w-min whitespace-nowrap relative inline-block ${className}`}
      ref={dropRef}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-2 bg-white text-left text-sm/3.5 sm:text-lg/4.5 2xl:text-xl/5 cursor-pointer transition-colors duration-200 rounded-md p-2.5"
      >
        <span>{selectedOption.label}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_4541_3958" fill="white">
              <path d="M6.49607 8C6.57367 8.00009 6.65053 7.98288 6.72223 7.94936C6.79392 7.91584 6.85904 7.86667 6.91384 7.80467L12.8229 1.13804C13.0538 0.877537 13.0538 0.455706 12.8229 0.195374C12.592 -0.0649579 12.2181 -0.0651246 11.9874 0.195374L6.49607 6.39067L1.00476 0.195375C0.773858 -0.0651236 0.39996 -0.0651235 0.169209 0.195375C-0.0615396 0.455874 -0.0616874 0.877704 0.16921 1.13804L6.07829 7.80467C6.13309 7.86667 6.19821 7.91584 6.26991 7.94936C6.3416 7.98288 6.41846 8.00009 6.49607 8Z" />
            </mask>
            <path
              d="M6.49607 8C6.57367 8.00009 6.65053 7.98288 6.72223 7.94936C6.79392 7.91584 6.85904 7.86667 6.91384 7.80467L12.8229 1.13804C13.0538 0.877537 13.0538 0.455706 12.8229 0.195374C12.592 -0.0649579 12.2181 -0.0651246 11.9874 0.195374L6.49607 6.39067L1.00476 0.195375C0.773858 -0.0651236 0.39996 -0.0651235 0.169209 0.195375C-0.0615396 0.455874 -0.0616874 0.877704 0.16921 1.13804L6.07829 7.80467C6.13309 7.86667 6.19821 7.91584 6.26991 7.94936C6.3416 7.98288 6.41846 8.00009 6.49607 8Z"
              fill="#A2845E"
            />
            <path
              d="M6.49607 8L6.4914 3.99999L6.50073 4L6.49607 8ZM6.91384 7.80467L3.91678 5.15558L3.92046 5.15143L6.91384 7.80467ZM12.8229 1.13804L9.82954 -1.5152L9.82954 -1.5152L12.8229 1.13804ZM11.9874 0.195374L14.9816 2.84766L14.9808 2.84861L11.9874 0.195374ZM6.49607 6.39067L9.48945 9.04391L6.49607 12.421L3.50268 9.04391L6.49607 6.39067ZM1.00476 0.195375L-1.98863 2.84861L1.00476 0.195375ZM0.16921 1.13804L3.16175 -1.51615L3.16259 -1.5152L0.16921 1.13804ZM6.07829 7.80467L9.07168 5.15143L9.07535 5.15559L6.07829 7.80467ZM6.49607 8L6.50073 4C5.97939 3.99939 5.47725 4.11583 5.02804 4.32586L6.72223 7.94936L8.41642 11.5729C7.82381 11.8499 7.16796 12.0008 6.49141 12L6.49607 8ZM6.72223 7.94936L5.02804 4.32586C4.58075 4.535 4.20809 4.82601 3.91678 5.15559L6.91384 7.80467L9.9109 10.4537C9.50999 10.9073 9.00709 11.2967 8.41642 11.5729L6.72223 7.94936ZM6.91384 7.80467L3.92046 5.15143L9.82954 -1.5152L12.8229 1.13804L15.8163 3.79127L9.90722 10.4579L6.91384 7.80467ZM12.8229 1.13804L9.82954 -1.5152C8.71871 -0.261962 8.71757 1.59489 9.83038 2.84956L12.8229 0.195374L15.8155 -2.45881C17.3901 -0.683476 17.3889 2.01703 15.8163 3.79127L12.8229 1.13804ZM12.8229 0.195374L9.83038 2.84956C10.4484 3.54637 11.3739 3.99992 12.4045 4.00006C13.4356 4.0002 14.3626 3.54643 14.9816 2.84766L11.9874 0.195374L8.99315 -2.45691C10.8174 -4.51634 13.9948 -4.51158 15.8155 -2.45881L12.8229 0.195374ZM11.9874 0.195374L14.9808 2.84861L9.48945 9.04391L6.49607 6.39067L3.50268 3.73744L8.99399 -2.45786L11.9874 0.195374ZM6.49607 6.39067L3.50268 9.04391L-1.98863 2.84861L1.00476 0.195375L3.99814 -2.45786L9.48945 3.73744L6.49607 6.39067ZM1.00476 0.195375L-1.98863 2.84861C-1.37045 3.54604 -0.444359 4 0.586928 4C1.61831 4 2.54491 3.54592 3.16344 2.84766L0.169209 0.195375L-2.82502 -2.45691C-1.00202 -4.51494 2.17611 -4.51347 3.99814 -2.45786L1.00476 0.195375ZM0.169209 0.195375L3.16344 2.84766C4.27235 1.59578 4.2755 -0.260417 3.16175 -1.51615L0.16921 1.13804L-2.82333 3.79222C-4.39888 2.01583 -4.39543 -0.684035 -2.82502 -2.45691L0.169209 0.195375ZM0.16921 1.13804L3.16259 -1.5152L9.07168 5.15143L6.07829 7.80467L3.08491 10.4579L-2.82417 3.79127L0.16921 1.13804ZM6.07829 7.80467L9.07535 5.15559C8.78403 4.82599 8.41136 4.53499 7.9641 4.32586L6.26991 7.94936L4.57572 11.5729C3.98506 11.2967 3.48216 10.9073 3.08123 10.4537L6.07829 7.80467ZM6.26991 7.94936L7.9641 4.32586C7.51489 4.11583 7.01275 3.99939 6.4914 4L6.49607 8L6.50073 12C5.82417 12.0008 5.16832 11.8499 4.57572 11.5729L6.26991 7.94936Z"
              fill="#A2845E"
              mask="url(#path-1-inside-1_4541_3958)"
            />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden"
          >
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option)}
                className="block  px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-150 text-gray-700 font-medium first:rounded-t-lg last:rounded-b-lg"
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
