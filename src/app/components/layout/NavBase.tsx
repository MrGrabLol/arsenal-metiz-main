"use client";

import { useState, useRef } from "react";
import { useClickOutside } from "@/app/hooks/useClickOutside";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkType = {
  link: string;
  href: string;
};

const linksBase: LinkType[] = [
  { link: "О компании", href: "/about" },
  { link: "Продукция", href: "/our-product" },
  { link: "Новости", href: "/news" },
  { link: "Карьера", href: "/career" },
  { link: "Контакты", href: "/contacts" }
];

export default function NavBase({ onToggle }: { onToggle: () => void }) {
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(searchRef, () => setShowSearch(false));
  const router = usePathname();

  return (
    <div className="flex-between overflow-hidden">
      <div className="flex items-center gap-10 xl:gap-15">
        <div className="flex items-center gap-7">
          <Link href="/" className="flex items-center justify-center w-50 h-18">
            <img src="/assets/svgs/logo.svg" alt="Logo" className="w-full h-full" />
          </Link>
        </div>

        <div
          className="sm:flex hidden items-center gap-2.5"
        >
          <Image
            src="/assets/svgs/location.svg"
            alt="Location"
            width={14}
            height={19}
          />
          <button className="whitespace-nowrap text-xs lg:text-sm hover:text-brand-brown smooth-200 cursor-pointer">
            г. Солнечногорск
          </button>
        </div>

        <ul className="hidden lg:flex items-center gap-6 xl:gap-6 text-sm leading-5 whitespace-nowrap">
          {linksBase.map((link) => (
            <li key={link.link}>
              <Link
                href={link.href}
                className={`hover:text-brand-brown smooth-200 ${
                  router === link.href ? "text-brand-brown-100" : ""
                }`}
              >
                {link.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-5" ref={searchRef}>
        <div
          className={`flex items-center gap-16 transition-all duration-500 ${
            showSearch ? "" : "translate-x-36 lg:translate-x-44"
          }`}
        >
          <ul className="hidden lg:flex items-center gap-4.5 w-full h-full">
            {["message", "call", "telegram", "whatsapp"].map((icon) => (
              <li key={icon}>
                <a href="#">
                  <Image
                    src={`/assets/svgs/${icon}.svg`}
                    alt={`${icon} Icon`}
                    width={25}
                    height={18}
                    className="hover:scale-110 smooth-200 w-full h-full"
                  />
                </a>
              </li>
            ))}
          </ul>

          <input
            key="search-input"
            type="text"
            placeholder="Поиск по каталогу"
            className={`w-28 xs:w-34 text-white text-xs xs:text-sm leading-5 outline-none bg-transparent focus:border-b border-white placeholder-white/70 transition-all smooth-200 ${
              showSearch ? "delay-100" : "opacity-0"
            }`}
          />
        </div>

        <div className="flex items-center gap-5">
          <button
            onClick={() => setShowSearch(!showSearch)}
            aria-label="Toggle search"
          >
            <Image
              src="/assets/svgs/search.svg"
              alt="Search Icon"
              width={19}
              height={19}
              className="hover:scale-110 smooth-200 cursor-pointer relative z-30"
            />
          </button>

          <button
            className="lg:hidden cursor-pointer relative z-20"
            onClick={onToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
