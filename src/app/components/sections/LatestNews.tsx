"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import Button from "../shared/ui/Button";

interface NewsItem {
  id: number;
  date: string;
  title: string;
  image: string;
  link: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    date: "25 апреля 2025...",
    title:
      "ММК примет в Магнитогорске форум по цифровизации Smart Mining Metals",
    image: "/assets/images/news.png",
    link: "/news/1",
  },
  {
    id: 2,
    date: "25 апреля 2025...",
    title:
      "ММК примет в Магнитогорске форум по цифровизации Smart Mining Metals",
    image: "/assets/images/news.png",
    link: "/news/2",
  },
  {
    id: 3,
    date: "25 апреля 2025...",
    title:
      "ММК примет в Магнитогорске форум по цифровизации Smart Mining Metals",
    image: "/assets/images/news.png",
    link: "/news/3",
  },
  {
    id: 4,
    date: "25 апреля 2025...",
    title:
      "ММК примет в Магнитогорске форум по цифровизации Smart Mining Metals",
    image: "/assets/images/news.png",
    link: "/news/4",
  },
  {
    id: 5,
    date: "25 апреля 2025...",
    title:
      "ММК примет в Магнитогорске форум по цифровизации Smart Mining Metals",
    image: "/assets/images/news.png",
    link: "/news/5",
  },
  {
    id: 6,
    date: "25 апреля 2025...",
    title:
      "ММК примет в Магнитогорске форум по цифровизации Smart Mining Metals",
    image: "/assets/images/news.png",
    link: "/news/6",
  },
  {
    id: 7,
    date: "25 апреля 2025...",
    title:
      "ММК примет в Магнитогорске форум по цифровизации Smart Mining Metals",
    image: "/assets/images/news.png",
    link: "/news/7",
  },
  {
    id: 8,
    date: "25 апреля 2025...",
    title:
      "ММК примет в Магнитогорске форум по цифровизации Smart Mining Metals",
    image: "/assets/images/news.png",
    link: "/news/8",
  },
];

export default function LatestNews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const swiperRef = useRef<SwiperType | null>(null);



  const formatSlideNumber = (number: number) => {
    return number < 10 ? `0${number}` : number.toString();
  };

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  // Calculate the last visible slide number
  const getLastVisibleSlide = () => {
    return Math.min(Math.ceil(activeIndex + slidesPerView), newsItems.length);
  };

  const lastVisibleSlide = getLastVisibleSlide();

  return (
    <section id="news" className="relative py-8">
      <div className="max-w-secondary mx-auto space-y-5 text-white px-4 md:px-12 lg:px-4">
        <h2 className="text-center text-brand-dark-gray text-lg lg:text-xl">Последние новости</h2>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              0: { slidesPerView: 1.5, spaceBetween: 12 },
              640: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1280: { slidesPerView: 3, spaceBetween: 24 },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              // Get initial slides per view from params
              setSlidesPerView((swiper.params.slidesPerView as number) || 1);
            }}
            onBreakpoint={(swiper) => {
              // Update slides per view when breakpoint changes
              setSlidesPerView((swiper.params.slidesPerView as number) || 1);
            }}
            className="mb-6"
          >
            {newsItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative h-70 group overflow-hidden rounded xs:rounded-md">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 p-2.5 md:p-4 z-20">
                    <p className="font-inter text-xs md:text-sm text-gray-300 leading-3.5 mb-1">
                      {item.date}
                    </p>
                    <h5 className="font-medium leading-5 md:text-lg/6.5 mb-3">
                      {item.title}
                    </h5>
                                          <Link
                      href={item.link}
                        className="font-inter inline-flex items-center text-xs/3.5 md:text-sm/4 hover:underline"
                    >
                      Читать статью{" "}
                      <svg
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-1.5 h-2.5 md:size-auto ml-2 md:ml-3"
                      >
                        <path
                          d="M8 6.99997C8.00009 7.08355 7.98288 7.16632 7.94936 7.24353C7.91584 7.32074 7.86667 7.39086 7.80467 7.44988L1.13804 13.8135C0.877537 14.0622 0.455706 14.0622 0.195374 13.8135C-0.064958 13.5648 -0.0651246 13.1622 0.195374 12.9137L6.39067 6.99997L0.195374 1.08625C-0.0651245 0.837594 -0.0651245 0.434935 0.195374 0.186435C0.455873 -0.0620651 0.877704 -0.0622234 1.13804 0.186435L7.80467 6.55006C7.86667 6.60908 7.91584 6.67921 7.94936 6.75641C7.98288 6.83362 8.00009 6.91639 8 6.99997Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-end sm:items-center justify-between gap-6 md:gap-3">
          <div className="w-full flex flex-col xs:flex-row items-stretch justify-center gap-2.5 md:gap-3">
                            <Link
          href="/news"
          className="xl:min-w-40 xl:h-12 text-white bg-brand-brown border-brand-brown hover:opacity-80 py-1.5 sm:py-2.5 px-4 lg:ml-32 relative z-10 text-xs/5 xs:text-sm/4 cursor-pointer border smooth-200 inline-flex items-center justify-center"
        >
          Пресс-центр
        </Link>
            <Button variant="outline">Подписаться на новости</Button>
          </div>

          <div className="flex items-center gap-5 text-brand-dark-gray whitespace-nowrap">
            <div className="absolute left-1/2 -translate-x-1/2 sm:static flex items-center gap-1 font-inter text-sm">
              <span>{formatSlideNumber(lastVisibleSlide)}</span>
              <div className="flex items-center text-brand-dark-gray-200">
                / {formatSlideNumber(newsItems.length)}
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handlePrevClick}
                disabled={activeIndex === 0}
                className="absolute sm:static left-4 cursor-pointer disabled:opacity-50"
                aria-label="Previous slide"
              >
                <svg
                  width="11"
                  height="20"
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-brand-brown"
                >
                  <path d="M8.34425e-07 9.99996C-0.000123142 10.1194 0.0235404 10.2376 0.0696324 10.3479C0.115724 10.4582 0.183334 10.5584 0.268582 10.6427L9.4352 19.7336C9.79339 20.0888 10.3734 20.0888 10.7314 19.7336C11.0893 19.3784 11.0895 18.8031 10.7314 18.4481L2.21282 9.99996L10.7314 1.55179C11.0895 1.19656 11.0895 0.621334 10.7314 0.266335C10.3732 -0.088665 9.79316 -0.088892 9.4352 0.266335L0.268582 9.35723C0.183334 9.44154 0.115724 9.54172 0.0696324 9.65202C0.0235404 9.76232 -0.000123145 9.88056 8.34425e-07 9.99996Z" />
                </svg>
              </button>
              <button
                onClick={handleNextClick}
                disabled={activeIndex >= newsItems.length - slidesPerView}
                className="cursor-pointer disabled:opacity-50"
                aria-label="Next slide"
              >
                <svg
                  width="11"
                  height="20"
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-brand-brown"
                >
                  <path d="M11 9.99996C11.0001 10.1194 10.9765 10.2376 10.9304 10.3479C10.8843 10.4582 10.8167 10.5584 10.7314 10.6427L1.5648 19.7336C1.20661 20.0888 0.626596 20.0888 0.268639 19.7336C-0.0893172 19.3784 -0.0895464 18.8031 0.268639 18.4481L8.78718 9.99996L0.268639 1.55179C-0.0895462 1.19656 -0.0895462 0.621334 0.268639 0.266335C0.626825 -0.088665 1.20684 -0.088892 1.5648 0.266335L10.7314 9.35723C10.8167 9.44154 10.8843 9.54172 10.9304 9.65202C10.9765 9.76232 11.0001 9.88056 11 9.99996Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
