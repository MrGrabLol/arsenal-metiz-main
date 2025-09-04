"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useClickOutside } from "../hooks/useClickOutside";

export default function LeftLinks() {
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#aboutProduct");

  const leftLinksRef = useRef(null);

  useClickOutside(leftLinksRef, () => setIsLinksOpen(false));

  function toggleLinks() {
    setIsLinksOpen((prev) => !prev);
  }

  // Open sidebar by default on 4xl+ (1920px)
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 1920) {
      setIsLinksOpen(true);
    }
  }, []);

  // Update active hash on hashchange
  useEffect(() => {
    const updateHash = () => {
      if (window.location.hash) {
        setActiveHash(window.location.hash);
      }
    };

    updateHash(); // Initial set
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const links = [
    { label: "О продукции", href: "#aboutProduct" },
    { label: "Сферы применения", href: "#applicationAreas" },
    { label: "Сортамент", href: "#ourRange" },
    { label: "Качество и сертификация", href: "#certificate" },
    { label: "Доставка", href: "#delivery" },
    { label: "FAQ", href: "#faqs" },
  ];

  return (
    <div
      className={`max-w-50 xs:max-w-[270px] h-screen fixed top-0 left-0 z-30 text-sm/4.5 xs:text-xl/6 bg-brand-dark/30 4xl:bg-transparent backdrop-blur 4xl:backdrop-blur-none ${
        !isLinksOpen ? "-translate-x-full" : ""
      } text-white border-x border-brand-whitish/30 smooth-200`}
      ref={leftLinksRef}
    >
      <div className="relative size-full flex-center pl-7 pr-5 xs:pl-11 xs:pr-6">
        <button
          onClick={toggleLinks}
          className={`size-7.5 shrink-0 absolute top-24 right-5 flex-center border-brand-whitish/30 ${
            !isLinksOpen
              ? "!-right-8 border-y border-r rounded-r"
              : "border rounded"
          }`}
        >
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={!isLinksOpen ? "rotate-180" : ""}
          >
            <path
              d="M3.51789e-05 6.00002C-4.25386e-05 5.92839 0.0147094 5.85744 0.0434417 5.79126C0.072174 5.72508 0.114321 5.66497 0.167462 5.61439L5.88172 0.159852C6.105 -0.0532841 6.46657 -0.053284 6.68971 0.159852C6.91286 0.372988 6.913 0.718124 6.68971 0.931123L1.37946 6.00002L6.68971 11.0689C6.913 11.2821 6.913 11.6272 6.68971 11.8402C6.46643 12.0532 6.10486 12.0533 5.88172 11.8402L0.167462 6.38566C0.114321 6.33508 0.0721739 6.27497 0.0434416 6.20879C0.0147094 6.14261 -4.25526e-05 6.07166 3.51789e-05 6.00002Z"
              fill="white"
            />
          </svg>
        </button>

        <ul className="space-y-5 xs:space-y-7.5">
          {links.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setActiveHash(href)}
                className={`smooth-200 hover:text-brand-brown-100 ${
                  activeHash === href ? "text-brand-brown-100" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
