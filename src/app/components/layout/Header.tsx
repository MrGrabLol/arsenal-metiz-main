"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import MobileMenu from "../shared/MobileMenu";
import NavBase from "./NavBase";
import { usePathname } from "next/navigation";
import NavMarketplace from "./NavMarketplace";
import MarketplaceLinks from "./MarketplaceLinks";
import ContactManagerModal from "../shared/ContactManagerModal";
import { useContactModal } from "@/app/contexts/ContactModalContext";

export default function Header() {
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);

  const { isOpenContactManagerModal } = useContactModal();
  
  function toggleMobMenu() {
    setIsMobMenuOpen((open) => !open);
  }

  const router = usePathname();
  const isMarketplace = router.startsWith("/marketplace");

  // Логика скрытия/показа навбара при скролле
  useEffect(() => {
    if (!isMarketplace) return;

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Скролл вниз и больше 100px - скрываем навбар
        setIsNavbarHidden(true);
      } else if (currentScrollY < lastScrollY) {
        // Скролл вверх - показываем навбар
        setIsNavbarHidden(false);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMarketplace]);

  return (
    <header className="fixed z-50 w-full text-white">
      {/* Верхний навбар - скрывается при скролле вниз */}
      <div
        className={`${
          !isMarketplace
            ? "bg-nav border-b border-brand-whitish/30"
            : "bg-black"
        } py-4 transition-transform duration-300 ${
          isMarketplace && isNavbarHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <nav
          className={`${
            !isMarketplace ? "" : "max-w-secondary"
          } px-15 lg:px-15`}
        >
          {!isMarketplace ? (
            <NavBase onToggle={toggleMobMenu} />
          ) : (
            <NavMarketplace />
          )}
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobMenuOpen && <MobileMenu onToggle={toggleMobMenu} />}
          {isOpenContactManagerModal && <ContactManagerModal />}
        </AnimatePresence>
      </div>

      {/* Категории - поднимаются наверх при скрытии навбара */}
      {isMarketplace ? (
        <div 
          className={`transition-all duration-300 ${
            isNavbarHidden ? "mt-0" : "mt-0"
          }`}
          style={{
            transform: isNavbarHidden ? 'translateY(-100%)' : 'translateY(0)',
            marginTop: isNavbarHidden ? '-34px' : '0px' // Попробуем -34px
          }}
        >
          <MarketplaceLinks />
        </div>
      ) : null}
    </header>
  );
}
