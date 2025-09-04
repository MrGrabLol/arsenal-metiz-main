"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./ui/Button";

interface MarketplaceMobileMenuProps {
  onToggle: () => void;
  onToggleLoginModal: () => void;
  onToggleRegisterModal: () => void;
  toggleContactManagerModal: () => void;
}

export default function MarketplaceMobileMenu({
  onToggle,
  onToggleLoginModal,
  onToggleRegisterModal,
  toggleContactManagerModal,
}: MarketplaceMobileMenuProps) {
  return (
    <motion.div
      className="fixed inset-0 lg:hidden bg-brand-dark text-white z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4">
        <Link href="/">
          <Image
            src="/assets/svgs/logo-marketplace.svg"
            alt="Logo"
            width={64}
            height={64}
            className="size-12"
          />
        </Link>

        <div className="flex items-center gap-6">
          <Button
            onClick={() => {
              onToggle();
              toggleContactManagerModal();
            }}
            variant="secondary"
            className="whitespace-nowrap text-xs !p-2 !px-5"
          >
            Связаться <br /> с менеджером
          </Button>

          <Link
            href="/marketplace/cart"
            className="hover:opacity-70 smooth-200"
            onClick={onToggle}
          >
            <svg width="31" height="27" fill="none" viewBox="0 0 31 27">
              <path
                d="M30.0918 9.00024H26.8955L19.9025 0.338034C19.5893 -0.0499862 19.0178 -0.113046 18.626 0.197514C18.2344 0.508014 18.1708 1.07435 18.4842 1.46249L24.5694 9.00024H6.43062L12.5158 1.46249C12.8292 1.07435 12.7656 0.507954 12.374 0.197514C11.9823 -0.113046 11.4108 -0.0500462 11.0975 0.338034L4.10453 9.00024H0.908203C0.406633 9.00024 0 9.4032 0 9.90024V13.5002C0 13.9973 0.406633 14.4002 0.908203 14.4002H2.03958L5.48421 26.3475C5.53842 26.5356 5.65296 26.701 5.81052 26.8188C5.96808 26.9365 6.16007 27.0003 6.35742 27.0002H24.6426C24.8399 27.0002 25.0319 26.9365 25.1895 26.8188C25.3471 26.701 25.4616 26.5356 25.5158 26.3475L28.9604 14.4002H30.0918C30.5934 14.4002 31 13.9973 31 13.5002V9.90024C31 9.4032 30.5934 9.00024 30.0918 9.00024ZM23.9576 25.2002H7.04245L3.92864 14.4002H27.0714L23.9576 25.2002ZM29.1836 12.6002H1.81641V10.8002H29.1836V12.6002Z"
                fill="white"
              />
            </svg>
          </Link>

          <button onClick={onToggle}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 hover:fill-brand-red fill-white cursor-pointer"
            >
              <path d="M19.6046 2.41735C19.8612 2.15217 20.0032 1.79701 19.9999 1.42835C19.9967 1.0597 19.8486 0.707055 19.5875 0.446368C19.3263 0.185681 18.9731 0.0378111 18.6038 0.0346076C18.2345 0.0314041 17.8787 0.173123 17.6131 0.42924L10.0173 8.01189L2.42153 0.42924C2.29161 0.294951 2.13619 0.187838 1.96436 0.11415C1.79252 0.0404622 1.6077 0.00167537 1.42069 5.30871e-05C1.23368 -0.0015692 1.04821 0.0340051 0.875119 0.104701C0.702025 0.175397 0.544769 0.279798 0.412525 0.411813C0.280282 0.543827 0.1757 0.700812 0.104882 0.873606C0.034064 1.0464 -0.00157191 1.23154 5.31789e-05 1.41823C0.00167827 1.60492 0.0405322 1.78942 0.114348 1.96096C0.188163 2.1325 0.295462 2.28765 0.429983 2.41735L8.02576 10L0.429983 17.5826C0.295462 17.7124 0.188163 17.8675 0.114348 18.039C0.0405322 18.2106 0.00167827 18.3951 5.31789e-05 18.5818C-0.00157191 18.7685 0.034064 18.9536 0.104882 19.1264C0.1757 19.2992 0.280282 19.4562 0.412525 19.5882C0.544769 19.7202 0.702025 19.8246 0.875119 19.8953C1.04821 19.966 1.23368 20.0016 1.42069 19.9999C1.6077 19.9983 1.79252 19.9595 1.96436 19.8858C2.13619 19.8122 2.29161 19.705 2.42153 19.5708L10.0173 11.9881L17.6131 19.5708C17.8787 19.8269 18.2345 19.9686 18.6038 19.9654C18.9731 19.9622 19.3263 19.8143 19.5875 19.5536C19.8486 19.2929 19.9967 18.9403 19.9999 18.5716C20.0032 18.203 19.8612 17.8478 19.6046 17.5826L12.0089 10L19.6046 2.41735Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Body */}
      <div className="flex flex-col items-center justify-evenly px-6 gap-10">
        {/* Search */}
        <label
          htmlFor="searchMarketMobile"
          className="relative w-full max-w-md"
        >
          <input
            type="text"
            className="w-full bg-brand-whitish-100 text-brand-dark-gray-100 text-sm leading-5 rounded-md outline-none py-3.5 pl-5 pr-12"
            placeholder="Найти товар..."
            id="searchMarketMobile"
          />
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-5 top-3.5 cursor-pointer"
          >
            <path
              d="M3.83745 7.38213C3.72863 7.38213 3.618 7.36074 3.51137 7.31571C3.08543 7.13544 2.88616 6.64397 3.06643 6.21797C4.19947 3.54038 7.29959 2.28382 9.97712 3.41687C10.4031 3.59714 10.6023 4.0886 10.4221 4.5146C10.2417 4.94061 9.75039 5.13976 9.32426 4.95955C7.49745 4.18653 5.38212 5.04389 4.60917 6.8707C4.47394 7.1902 4.16378 7.38213 3.83745 7.38213Z"
              fill="#3F3C39"
            />
            <path
              d="M18.7111 17.306L14.0273 12.6028C15.2316 11.2207 15.8914 9.48166 15.8914 7.67124C15.8914 3.44139 12.3269 0 7.94571 0C3.56452 0 0 3.44139 0 7.67124C0 11.9011 3.56452 15.3425 7.94571 15.3425C9.59048 15.3425 11.1579 14.8635 12.4979 13.9543L17.2173 18.6931C17.4146 18.8909 17.6799 19 17.9642 19C18.2333 19 18.4886 18.9009 18.6824 18.7208C19.0942 18.3383 19.1074 17.7039 18.7111 17.306ZM7.94571 2.00119C11.1841 2.00119 13.8186 4.54471 13.8186 7.67124C13.8186 10.7978 11.1841 13.3413 7.94571 13.3413C4.70732 13.3413 2.07279 10.7978 2.07279 7.67124C2.07279 4.54471 4.70732 2.00119 7.94571 2.00119Z"
              fill="#3F3C39"
            />
          </svg>
        </label>

        {/* Navigation Links */}
        <ul className="flex flex-col items-center text-xl gap-6 mt-80">
          {["Проволока", "Сварочные материалы", "Приборы"].map((text, i) => (
            <li key={i}>
              <Link
                href="/"
                onClick={onToggle}
                className="hover:text-brand-brown smooth-200"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="flex gap-3 pt-10 w-full max-w-md">
          <button
            className="w-full text-center bg-brand-brown text-white rounded-md hover:opacity-70 smooth-200 cursor-pointer py-3"
            onClick={() => {
              onToggle();
              onToggleRegisterModal();
            }}
          >
            Регистрация
          </button>
          <button
            className="w-full text-center bg-white text-brand-dark-gray-100 rounded-md hover:opacity-70 smooth-200 cursor-pointer py-3"
            onClick={() => {
              onToggle();
              onToggleLoginModal();
            }}
          >
            Войти
          </button>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4 pt-10">
          <Image
            src="/assets/svgs/message.svg"
            alt="Message Icon"
            width={33}
            height={23}
            className="shrink-0"
          />
          <div className="whitespace-nowrap">
            <p className="text-xs leading-4">Электронная почта</p>
            <a
              href="mailto:info@arsenal-metiz.ru"
              className="text-sm text-brand-brown underline underline-offset-2 leading-4"
            >
              info@arsenal-metiz.ru
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
