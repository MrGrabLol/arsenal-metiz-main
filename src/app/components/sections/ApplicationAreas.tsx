"use client";

import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Navigation } from "swiper/modules";

type slides = {
  img: string;
  title: string;
};

const slides: slides[] = [
  {
    img: "/assets/images/applicaton-areas-3.png",
    title: "Атомная энергетика",
  },
  {
    img: "/assets/images/applicaton-areas-1.png",
    title: "Производство военной техники(танки, БМП, Тигры)",
  },
  {
    img: "/assets/images/applicaton-areas-2.png",
    title: "Ж/Д техника(локомотивы и вагоны)",
  },
  {
    img: "/assets/images/applicaton-areas-3.png",
    title: "Атомная энергетика",
  },
  {
    img: "/assets/images/applicaton-areas-1.png",
    title: "Производство военной техники(танки, БМП, Тигры)",
  },
  {
    img: "/assets/images/applicaton-areas-2.png",
    title: "Ж/Д техника(локомотивы и вагоны)",
  },
];

export default function ApplicationAreas() {
  return (
    <section
      id="applicationAreas"
      className="relative bg-brand-dark-gray text-white py-12 md:py-23"
    >
      <div className="max-w-base mx-auto relative z-10 relative space-y-7.5 px-4 md:px-12 lg:px-4">
        <div className="space-y-3.5 lg:space-y-5 text-center">
          <h2 className="font-oswald font-medium text-brand-brown-100 uppercase text-4xl/11 md:text-6xl/[70px] tracking-tight">
            Сферы применения
          </h2>
          <p className="leading-4 lg:text-xl/5">
            Где используют нашу продукцию?
          </p>
        </div>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          spaceBetween={50}
          navigation={{
            prevEl: ".prev-slide",
            nextEl: ".next-slide",
          }}
          pagination={true}
          modules={[EffectCoverflow, Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              centeredSlides: true,
              spaceBetween: 16,
              effect: "slide", // simple effect
            },
            640: {
              slidesPerView: 1.2,
              centeredSlides: true,
              spaceBetween: 16,
              effect: "slide",
            },
            768: {
              slidesPerView: 1.2,
              centeredSlides: true,
              spaceBetween: 16,
              effect: "slide",
            },
            1280: {
              slidesPerView: 2,
              centeredSlides: true,
              effect: "coverflow",
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 65,
                modifier: 5,
                slideShadows: false,
              },
            },
          }}
          className="mySwiper lg:max-w-[87.5%]"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-60 xs:h-72 xl:w-157.5 lg:h-96 xl:h-75 relative rounded-md overflow-hidden">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  width={1150}
                  height={300}
                  className="size-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full text-xs/3 sm:text-sm/3.5 lg:text-base/4 xl:text-lg/4.5 bg-brand-dark/90 backdrop-blur-lg px-3.75 py-6">
                  {slide.title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="lg:absolute top-1/2 -translate-y-1/2 left-0 w-full flex items-center justify-between px-4">
          <button className="prev-slide cursor-pointer">
            <Image
              src="/assets/svgs/arrow-left.svg"
              alt="Arrow left"
              width={37}
              height={18}
            />
          </button>
          <button className="next-slide cursor-pointer">
            <Image
              src="/assets/svgs/arrow-left.svg"
              alt="Arrow left"
              width={37}
              height={18}
              className="rotate-180"
            />
          </button>
        </div>

        <p className="max-w-[877px] mx-auto text-center text-sm/4 xs:text-base/5 lg:text-lg/6">
          Прокат производства ММК отвечает всем современным требованиям сектора
          вагоностроения. Изготовление всех существующих типов вагонов из стали
          ММК: пассажирских, грузовых-крытых, полувагонов, платформ, цистерн,
          изотермических, специального назначения
        </p>
      </div>
    </section>
  );
}
