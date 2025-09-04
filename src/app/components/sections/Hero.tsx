"use client";

import Image from "next/image";
import Button from "../shared/ui/Button";
import { useContactModal } from "@/app/contexts/ContactModalContext";

export default function Hero() {
  const { toggleContactManagerModal } = useContactModal();

  return (
    <section id="hero" className="relative bg-brand-dark text-white">
      {/* Man Image Mobile */}
      <div className="relative after:absolute after:left-0 after:bottom-0 after:z-30 after:w-full after:h-20 after:bg-gradient-to-t after:from-brand-dark after:to-brand-dark/10">
        <Image
          src="/assets/images/man.png"
          alt="Image"
          width={1305}
          height={955}
          className="lg:hidden w-full"
        />
      </div>

      <div className="size-full bg-none lg:bg-hero-laptop 2xl:bg-hero 2xl:bg-[auto_600px] 3xl:bg-auto bg-no-repeat bg-right-bottom bg-contain lg:pt-25">
        <div className="max-w-base mx-auto relative z-10 pt-5 pb-12 md:py-16 lg:py-32 px-4 md:px-12 lg:px-4">
          <h1 className="max-w-[732px] font-oswald font-medium uppercase text-4xl/11 md:text-6xl/[70px] tracking-tight">
            <span className="text-brand-brown-100">Сварочная проволока</span>
            <br />
            российского <br /> производства
          </h1>
          <p className="text-sm lg:text-lg leading-none mt-5">
            Поставляем то, на чем держится
          </p>
          {/* Buttons */}
          <div className="max-w-105 grid xs:grid-cols-2 gap-3 md:gap-5 mt-7.5">
            <Button onClick={toggleContactManagerModal} variant="primary">
              Оставить заявку
            </Button>
            <Button
              isLink
              variant="secondary"
              className="shine-button relative overflow-hidden"
              href="/marketplace"
            >
              Перейти в магазин
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
