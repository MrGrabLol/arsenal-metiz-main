"use client";

import { useState } from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Navigation } from "swiper/modules";

type slides = {
  img: string;
  title: string;
  description: string;
};

const slides: slides[] = [
  {
    img: "/assets/images/applicaton-areas-3.png",
    title: "Атомная энергетика",
    description: "Сварочная проволока «Арсенал-Метиз» соответствует высоким требованиям отрасли атомной энергетики. Используется при строительстве и обслуживании объектов, где надёжность и безопасность соединений имеют первостепенное значение."
  },
  {
    img: "/assets/images/applicaton-areas-1.png",
    title: "Производство военной техники",
    description: "Продукция «Арсенал-Метиз» применяется в изготовлении бронетехники, артиллерийских систем и других изделий оборонного комплекса. Проволока обеспечивает высокую прочность и долговечность сварных соединений в условиях экстремальных нагрузок."
  },
  {
    img: "/assets/images/applicaton-areas-2.png",
    title: "Железнодорожное машиностроение",
    description: "Сварочная проволока «Арсенал-Метиз» широко используется в производстве и ремонте железнодорожной техники: грузовых и пассажирских вагонов, локомотивов, цистерн и платформ. Продукция отвечает современным требованиям отрасли и обеспечивает надёжность конструкций."
  },
  {
    img: "/assets/images/application-areas-5.jpg",
    title: "Судостроение",
    description: "Продукция «Арсенал-Метиз» применяется при строительстве и ремонте судов различного назначения. Сварочная проволока обеспечивает прочность корпусных соединений и соответствует строгим стандартам судостроительной отрасли."
  },
  {
    img: "/assets/images/application-areas-4.png",
    title: "Нефтегазовый сектор",
    description: "Сварочная проволока «Арсенал-Метиз» применяется при изготовлении и ремонте трубопроводов. Продукция обеспечивает прочность сварных соединений и устойчивость к воздействию давления, температур и агрессивных сред, что особенно важно в условиях добычи и транспортировки нефти и газа."
  },
];

export default function ApplicationAreas() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section
      id="applicationAreas"
      className="relative bg-brand-dark-gray text-white py-12 md:py-23"
    >
      <div className="max-w-base mx-auto relative z-10 relative space-y-6 px-4 md:px-12 lg:px-4">
        <div className="space-y-3.5 lg:space-y-4 text-center">
          <h2 className="font-oswald font-medium text-brand-brown-100 uppercase text-4xl/11 md:text-6xl/[70px] tracking-tight">
            Сферы применения
          </h2>
        </div>

        <div className="flex justify-center">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            centeredSlidesBounds={true}
            loop={true}
            spaceBetween={50}
            navigation={{
              prevEl: ".prev-slide",
              nextEl: ".next-slide",
            }}
            pagination={true}
            modules={[EffectCoverflow, Navigation]}
            onSlideChange={handleSlideChange}
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
                slidesPerView: 1.75,
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
            className="mySwiper lg:max-w-[87.5%] w-full"
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
                  <div className="absolute bottom-0 left-0 w-full text-xs/3 sm:text-sm/3.5 lg:text-base/4 xl:text-lg/4.5 bg-brand-dark/90 backdrop-blur-lg px-3.75 py-6 text-center">
                    {slide.title}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="lg:absolute top-1/2 -translate-y-1/2 left-0 w-full flex items-center justify-between px-4 pointer-events-none">
          <button className="prev-slide cursor-pointer pointer-events-auto">
            <Image
              src="/assets/svgs/arrow-left.svg"
              alt="Arrow left"
              width={37}
              height={18}
            />
          </button>
          <button className="next-slide cursor-pointer pointer-events-auto">
            <Image
              src="/assets/svgs/arrow-left.svg"
              alt="Arrow left"
              width={37}
              height={18}
              className="rotate-180"
            />
          </button>
        </div>

        <div className="max-w-[877px] mx-auto text-center">
          <div className="min-h-[120px] flex items-center justify-center">
            <p 
              key={activeIndex}
              className="text-sm/4 xs:text-base/5 lg:text-lg/6 animate-fade-in"
            >
              {slides[activeIndex].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
