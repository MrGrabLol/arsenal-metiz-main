"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import Button from "../shared/ui/Button";
import { useContactModal } from "@/app/contexts/ContactModalContext";

export default function Footer() {
  const router = usePathname();
  const { toggleContactManagerModal } = useContactModal();

  const isProductPage = router === "/our-product";
  const isAboutPage = router === "/about";

  return (
    <footer
      className={`${
        isProductPage ? "bg-brand-dark-gray" : 
        isAboutPage ? "bg-brand-dark-gray" : 
        router === "/career" ? "bg-brand-dark-gray" : 
        router === "/contacts" ? "bg-brand-dark-gray" : "bg-brand-dark"
      } text-white py-12.5`}
    >
      <div className="max-w-base mx-auto relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-26 px-4 md:px-12 lg:px-4">
        {/* Logo & Location */}
        <div className="space-y-7.5">
          <div>
            <Link href="/">
              <Image
                src="/assets/svgs/logo.svg"
                alt="Logo"
                width={153}
                height={45}
                className="w-24 h-8 lg:size-auto"
              />
            </Link>

            <p className="text-xs/3 md:text-sm/3.5 mt-3.75">
              Эксключивный дистрибьютор
            </p>

            <div className="hidden sm:flex items-center gap-2.5 mt-3.75">
              <Image
                src="/assets/svgs/location.svg"
                alt="Location"
                width={14}
                height={19}
              />
              <button className="text-xs lg:text-sm hover:text-brand-brown smooth-200 cursor-pointer">
                г. Солнечногорск
              </button>
            </div>
            <Button
              variant="primary"
              onClick={toggleContactManagerModal}
              className="mt-8"
            >
              Оставить заявку
            </Button>
          </div>
        </div>

        <div className="max-w-4xl w-full flex flex-col md:flex-row justify-between gap-10 xl:pr-20">
          {/* Links */}
          <div className="flex gap-20 xs:gap-32 md:gap-26 text-sm/3.5 xs:text-base/4">
            <ul className="space-y-5">
              <li>
                <Link href="/about" className="hover:text-brand-brown smooth-200">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="/our-product" className="hover:text-brand-brown smooth-200">
                  Продукция
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="hover:text-brand-brown smooth-200">
                  Маркетплейс
                </Link>
              </li>
            </ul>
            <ul className="space-y-5">
              <li>
                <Link href="/news" className="hover:text-brand-brown smooth-200">
                  Новости
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-brand-brown smooth-200">
                  Карьера
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-brand-brown smooth-200">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts & Adresses */}
          <div className="flex items-center gap-8 xs:gap-20 md:gap-14">
            {/* Contact */}
            <div className="space-y-7.5">
              <div className="space-y-2.5">
                <p className="text-xs/3.5 xs:text-sm/4">Телефон</p>
                <a
                  href="tel:+7 (499) 503-73-63"
                  className="text-brand-brown underline text-sm/3.5 xs:text-base/4"
                >
                  +7 (499) 503-73-63
                </a>
              </div>

              <div className="space-y-2.5">
                <p className="text-xs/3.5 xs:text-sm/4">Режим работы</p>

                <p className="text-sm/4.5 xs:text-base/5.5">
                  с 9:00 до 18:00 <br /> по будням
                </p>
              </div>
            </div>
            {/* Adress */}
            <div className="space-y-7.5">
              <div className="space-y-2.5">
                <p className="text-xs/3.5 xs:text-sm/4">Электронная почта</p>
                <a
                  href="mailto:info@arsenal-metiz.ru"
                  className="text-brand-brown underline text-sm/3.5 xs:text-base/4"
                >
                  info@arsenal-metiz.ru
                </a>
              </div>

              <div className="space-y-2.5">
                <p className="text-xs/3.5 xs:text-sm/4">г. Долгопрудный</p>

                <p className="text-sm/4.5 xs:text-base/5.5">
                  Лихачевский просп., <br /> д.18, стр.1
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
