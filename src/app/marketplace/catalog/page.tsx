"use client";

import Filter from "@/app/components/Filter";
import ProductCard from "@/app/components/shared/ProductCard";
import Dropdown from "@/app/components/shared/ui/Dropdown";
import Image from "next/image";
import { useState } from "react";

export default function CatalogPage() {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  function toggleFilter() {
    setIsOpenFilter((open) => !open);
    document.body.classList.toggle("overflow-hidden");
  }

  return (
    <>
      <section className="pt-20 lg:pt-44 pb-12.5">
        <div className="max-w-secondary mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 md:gap-4 lg:gap-7.5 text-xs sm:text-xs lg:text-base font-medium text-brand-dark-gray/50 lg:pl-7.5">
            <span>Главная</span>
            <Image
              src="/assets/svgs/arrow.svg"
              alt="Arrow icon"
              width={37}
              height={18}
              className="w-4 h-2 md:w-6 md:h-3 lg:size-auto"
            />
            <span>Каталог</span>
            <Image
              src="/assets/svgs/arrow.svg"
              alt="Arrow icon"
              width={37}
              height={18}
              className="w-4 h-2 md:w-6 md:h-3 lg:size-auto"
            />
            <span className="text-gray-900">Проволока легированная</span>
          </div>

          <div className="flex gap-7.5 mt-1 lg:mt-4">
            <Filter isOpen={isOpenFilter} />
            <div
              onClick={toggleFilter}
              className={`fixed inset-0 size-full z-50 bg-brand-dark/50 ${
                isOpenFilter ? "block" : "hidden"
              }`}
            >
              <button className="absolute top-5 left-85 z-[60]">
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

            {/* Catalog Items */}
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-medium">Проволока ЛЕГИРОВАННАЯ</h2>

              {/* Filters button */}
              <button
                className="lg:hidden mt-5"
                onClick={() => setIsOpenFilter(true)}
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
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                  />
                </svg>
              </button>

              {/* Sorting & Pagination */}
              <div className="flex-between mt-2">
                <div className="flex items-center gap-10">
                  <div className="flex items-center gap-6 lg:gap-12.5 text-xs sm:text-sm">
                    {/* Positions */}
                    <div className="flex items-center gap-1">
                      <span className="text-brand-dark-gray/50">
                        Найдено позиций:
                      </span>
                      <span>37</span>
                    </div>

                    {/* Sortings */}
                    <div className="flex items-center gap-1">
                      <span className="text-brand-dark-gray/50">
                        Сортировка:
                      </span>
                      <Dropdown />
                    </div>
                  </div>
                </div>

                {/* Pagination */}
                <div className="hidden md:flex items-center gap-3.75">
                  <button>
                    <Image
                      src="/assets/svgs/angle-right.svg"
                      alt="Angle icon"
                      width={20}
                      height={11}
                      className="w-5 h-2.75 cursor-pointer rotate-180"
                    />
                  </button>

                  <div>
                    {" "}
                    <span className="text-brand-dark-gray/50">
                      1...5 /
                    </span> 6{" "}
                    <span className="text-brand-dark-gray/50">/ 7...13</span>
                  </div>
                  <button>
                    <Image
                      src="/assets/svgs/angle-right.svg"
                      alt="Angle icon"
                      width={20}
                      height={11}
                      className="w-5 h-2.75 cursor-pointer"
                    />
                  </button>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-5 xl:gap-7.5 mt-4">
                {Array.from({ length: 15 }, (_, index) => (
                  <ProductCard key={index} />
                ))}
              </div>

              {/* Pagination Mobile */}
              <div className="flex md:hidden items-center justify-center gap-3.75 text-xl">
                <button>
                  <Image
                    src="/assets/svgs/angle-right.svg"
                    alt="Angle icon"
                    width={20}
                    height={11}
                    className="w-7 h-3.75 cursor-pointer rotate-180"
                  />
                </button>

                <div>
                  {" "}
                  <span className="text-brand-dark-gray/50">
                    1...5 /
                  </span> 6{" "}
                  <span className="text-brand-dark-gray/50">/ 7...13</span>
                </div>
                <button>
                  <Image
                    src="/assets/svgs/angle-right.svg"
                    alt="Angle icon"
                    width={20}
                    height={11}
                    className="w-7 h-3.75 cursor-pointer"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
