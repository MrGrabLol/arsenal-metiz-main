import { useRef, useState } from "react";
import Image from "next/image";
import { useClickOutside } from "@/app/hooks/useClickOutside";

interface TagSelectorProps {
  availableOptions: string[];
  selected: string[];
  onChange: (newTags: string[]) => void;
}

export default function TagSelector({
  availableOptions,
  selected,
  onChange,
}: TagSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(containerRef, () => setIsOpen(false));

  const addTag = (tag: string) => {
    if (!selected.includes(tag)) {
      onChange([...selected, tag]);
    }
    setIsOpen(false);
  };

  const removeTag = (tag: string) => {
    onChange(selected.filter((t) => t !== tag));
  };

  return (
    <div className="flex flex-wrap items-center gap-2.5 leading-4">
      {selected.map((tag, index) => (
        <div
          key={index}
          className="flex items-center gap-2.5 bg-white rounded-md p-2.5"
        >
          {tag}
          <button
            onClick={() => removeTag(tag)}
            className="hover:opacity-50 smooth-200 cursor-pointer"
          >
            <Image src="/assets/svgs/x.svg" alt="X" width={13} height={13} />
          </button>
        </div>
      ))}

      {/* Add Button */}
      <div ref={containerRef} className="relative w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="size-8.25 flex-center bg-white rounded-md cursor-pointer hover:bg-brand-brown/10 smooth-200"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3499 5.84998H7.15002V0.649957C7.15002 0.29125 6.85877 0 6.49994 0C6.14123 0 5.84998 0.29125 5.84998 0.649957V5.84998H0.649957C0.29125 5.84998 0 6.14123 0 6.49994C0 6.85877 0.29125 7.15002 0.649957 7.15002H5.84998V12.3499C5.84998 12.7088 6.14123 13 6.49994 13C6.85877 13 7.15002 12.7088 7.15002 12.3499V7.15002H12.3499C12.7088 7.15002 13 6.85877 13 6.49994C13 6.14123 12.7088 5.84998 12.3499 5.84998Z"
              fill="#A2845E"
            />
          </svg>
        </button>

        {isOpen && (
          <div
            className="absolute z-10 mt-2 max-h-25
           bg-white border border-brand-dark-gray/30 rounded-md shadow-md w-max max-w-full overflow-auto"
          >
            {availableOptions.map((opt, i) => (
              <button
                key={i}
                onClick={() => addTag(opt)}
                disabled={selected.includes(opt)}
                className={`block w-full text-left px-4 py-2 transition ${
                  selected.includes(opt)
                    ? "text-gray-400 cursor-not-allowed"
                    : "hover:bg-brand-brown/10"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
