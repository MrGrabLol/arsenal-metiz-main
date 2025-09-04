import { motion } from "framer-motion";

interface LoginDropdownProps {
  onToggleLoginModal: () => void;
  onToggleRegisterModal: () => void;
}

export default function LoginDropdown({
  onToggleLoginModal,
  onToggleRegisterModal,
}: LoginDropdownProps) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="w-38.25 flex flex-col gap-2.5 absolute top-12 right-0 z-50 bg-brand-dark-gray font-medium text-center rounded-md p-2.5"
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
}
