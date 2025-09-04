"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

type LinkType = {
  link: string;
  href: string;
};

const linksBase: LinkType[] = [
  { link: "Производство", href: "/production" },
  { link: "О компании", href: "/about-company" },
  { link: "Прайс-лист", href: "/price-list" },
];

const linksProducPage: LinkType[] = [
  { link: "О компании", href: "/about-company" },
  { link: "Продукция", href: "/our-product" },
  { link: "Новости", href: "/news" },
  { link: "Карьера", href: "/career" },
  { link: "Контакты", href: "/contacts" },
];

export default function MobileMenu({ onToggle }: { onToggle: () => void }) {
  const router = usePathname();
  const isProductPage = router === "/our-product";

  return (
    <motion.div
      className="fixed inset-0 bg-brand-dark text-white z-50 lg:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-5">
          <Link href="/">
            <Image
              src="/assets/svgs/logo.svg"
              alt="Logo"
              width={153}
              height={45}
              className="w-24 h-8 md:size-auto"
            />
          </Link>
          <div className="flex sm:hidden items-center gap-2.5">
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
        </div>

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

      <div className="size-full flex flex-col items-center justify-center gap-10">
        <ul className="flex flex-col items-center text-xl gap-6 p-6">
          {(isProductPage ? linksProducPage : linksBase).map((link) => (
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

        <ul className="flex items-center gap-4.5">
          {["message", "call", "telegram", "whatsapp"].map((icon) => (
            <li key={icon}>
              <a href="#" onClick={onToggle}>
                <Image
                  src={`/assets/svgs/${icon}.svg`}
                  alt={`${icon} Icon`}
                  width={25}
                  height={18}
                  className="hover:scale-110 smooth-200"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
