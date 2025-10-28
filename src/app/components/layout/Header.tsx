"use client";
import { useState} from "react";
import { AnimatePresence } from "framer-motion";
import MobileMenu from "../shared/MobileMenu";
import NavBase from "./NavBase";
import { usePathname } from "next/navigation";
import ContactManagerModal from "../shared/ContactManagerModal";
import { useContactModal } from "@/app/contexts/ContactModalContext";

export default function Header() {
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);

  const { isOpenContactManagerModal } = useContactModal();
  
  function toggleMobMenu() {
    setIsMobMenuOpen((open) => !open);
  }

  const router = usePathname();
  const isMarketplace = router.startsWith("/marketplace");

  return (
    <header className="fixed z-50 w-full text-white">
      <div
        className={`${
          !isMarketplace
            ? "bg-nav border-b border-brand-whitish/30"
            : "bg-black"
        } py-4 transition-transform duration-300 translate-y-0`}
      >
        <nav
          className={`${
            !isMarketplace ? "" : "max-w-secondary"
          } px-15 lg:px-15`}
        >
            <NavBase onToggle={toggleMobMenu} />
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobMenuOpen && <MobileMenu onToggle={toggleMobMenu} />}
          {isOpenContactManagerModal && <ContactManagerModal />}
        </AnimatePresence>
      </div>
    </header>
  );
}
