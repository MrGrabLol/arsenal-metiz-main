"use client";

import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import ProductCard from "../shared/ProductCard";

export default function NewProducts() {
  return (
    <section id="new-products" className="bg-brand-whitish-200 py-8 px-4">
      <div className="max-w-secondary mx-auto relative space-y-5 px-4">
        <div className="flex items-center gap-3">
          <h2 className="text-brand-dark-gray text-lg lg:text-xl">Новые поступления</h2>
          <Image
            src="/assets/svgs/new.svg"
            alt="Flame icon"
            width={56}
            height={30}
          />
        </div>

        <div className="relative flex items-center gap-12.5">
          <button
            className="prev cursor-pointer w-3 md:w-6 lg:w-auto flex items-center justify-center flex-shrink-0"
            aria-label="Prev button"
          >
            <Image
              src="/assets/svgs/prev.svg"
              alt="Prev"
              width={30}
              height={116}
              className="hidden md:block"
            />
            <Image
              src="/assets/svgs/angle-right.svg"
              alt="Next"
              width={28}
              height={22}
              className="md:hidden rotate-180"
            />
          </button>

          <div className="flex-1 max-w-full overflow-hidden">
            <Swiper
              navigation={{
                nextEl: ".next",
                prevEl: ".prev",
              }}
              loop={true}
              modules={[Navigation]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 12,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              className="mySwiper !w-full"
            >
              <SwiperSlide>
                <ProductCard bg="white" />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard bg="white" />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard bg="white" />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard bg="white" />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard bg="white" />
              </SwiperSlide>
            </Swiper>
          </div>

          <button
            className="next cursor-pointer w-3 md:w-6 lg:w-auto flex items-center justify-center flex-shrink-0"
            aria-label="Next button"
          >
            <Image
              src="/assets/svgs/next.svg"
              alt="Next"
              width={30}
              height={116}
              className="hidden md:block"
            />
            <Image
              src="/assets/svgs/angle-right.svg"
              alt="Next"
              width={28}
              height={22}
              className="md:hidden"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
