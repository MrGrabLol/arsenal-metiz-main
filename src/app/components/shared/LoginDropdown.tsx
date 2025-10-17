import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

interface LoginDropdownProps {
  onToggleLoginModal: () => void;
  onToggleRegisterModal: () => void;
  buttonRef?: React.RefObject<HTMLButtonElement | null>;
}

export default function LoginDropdown({
  onToggleLoginModal,
  onToggleRegisterModal,
  buttonRef,
}: LoginDropdownProps) {
  const [position, setPosition] = useState({ top: 0, right: 0 });

  useEffect(() => {
    if (buttonRef?.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 8,
        right: window.innerWidth - rect.right - window.scrollX,
      });
    }
  }, [buttonRef]);

  const dropdownContent = (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="w-38.25 flex flex-col gap-2.5 fixed bg-brand-dark-gray font-medium text-center rounded-md p-2.5"
      style={{ 
        zIndex: 99999,
        top: position.top,
        right: position.right,
      }}
    >
      <button
        onClick={onToggleRegisterModal}
        className="w-full bg-brand-brown text-white rounded-md hover:opacity-70 smooth-200 cursor-pointer p-3.75"
      >
        Регистрация
      </button>
      <button
        onClick={onToggleLoginModal}
        className="w-full bg-white text-brand-dark-gray-100 rounded-md hover:opacity-70 smooth-200 cursor-pointer p-3.75"
      >
        Войти
      </button>
    </motion.div>
  );

  return typeof window !== 'undefined' ? createPortal(dropdownContent, document.body) : null;
}
