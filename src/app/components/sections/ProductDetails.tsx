"use client";

import Image from "next/image";
import { DropdownDetails, DropdownOption } from "../shared/ui/DropdownDetails";
import Button from "../shared/ui/Button";
import ChemicalComposition from "../ChemicalComposition";
import MechanicalProperties from "../MechanicalProperties";

const gostOptions: DropdownOption[] = [
  { value: "gost-123456", label: "ГОСТ 123456" },
  { value: "gost-789012", label: "ГОСТ 789012" },
  { value: "gost-345678", label: "ГОСТ 345678" },
  { value: "gost-901234", label: "ГОСТ 901234" },
];

const versionOptions: DropdownOption[] = [
  { value: "1.20", label: "1.20" },
  { value: "1.15", label: "1.15" },
  { value: "1.10", label: "1.10" },
  { value: "1.05", label: "1.05" },
];

const gradeOptions: DropdownOption[] = [
  { value: "d200", label: "Д200" },
  { value: "d300", label: "Д300" },
  { value: "d400", label: "Д400" },
  { value: "d500", label: "Д500" },
];

export default function ProductDetails() {
  const handleGostSelect = (option: DropdownOption) => {
    console.log("GOST selected:", option);
  };

  const handleVersionSelect = (option: DropdownOption) => {
    console.log("Version selected:", option);
  };

  const handleGradeSelect = (option: DropdownOption) => {
    console.log("Grade selected:", option);
  };

  return (
    <section className="">
      <div className="max-w-secondary mx-auto px-4 text-[0.92rem] sm:text-[0.95rem] lg:text-base">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 md:gap-4 lg:gap-7.5 text-[10px] sm:text-xs lg:text-lg/6 font-medium text-brand-dark-gray/50 lg:pl-7.5 md:px-16 lg:px-0">
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
          <span>Проволока легированная</span>
          <Image
            src="/assets/svgs/arrow.svg"
            alt="Arrow icon"
            width={37}
            height={18}
            className="w-4 h-2 md:w-6 md:h-3 lg:size-auto"
          />
          <span className="text-gray-900">СВ-08г2с-о</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-stretch mt-7.5 gap-8 md:px-16 lg:px-0">
          {/* Product Image */}
          <div className="lg:w-2/5 flex flex-col items-center gap-5 bg-brand-whitish-200 rounded-md pt-9 pb-5">
            <Image
              src="/assets/images/product-image.png"
              alt="Product Image"
              width={2088}
              height={2427}
              className="max-w-[55%] mx-auto lg:max-w-72 xl:max-w-[300px]"
            />

            <div className="mt-8">
              <button className="flex items-center gap-2 cursor-pointer hover:opacity-80 smooth-200 border border-brand-dark-gray/30 rounded-md px-3 py-2">
              <Image
                src="/assets/svgs/download.svg"
                alt="Product Image"
                width={22}
                height={23}
              />
              <span className="text-base lg:text-lg/6 font-medium">
                Загрузить сертификат
              </span>
              </button>
            </div>
          </div>

          {/* Details */}
          <div className="lg:w-3/5 space-y-6 bg-brand-whitish-200 p-4 sm:p-6 3xl:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold">св-08г2с-о</h2>

            <ul className="space-y-3.5">
              <li className="w-full flex-between">
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <Image
                    src="/assets/svgs/certificate.svg"
                    alt="Standard"
                    width={34}
                    height={40}
                  />
                  <span className="leading-4 text-xs/4.5 xl:text-sm/5 2xl:text-[16px]/5.5">
                    Стандарт:
                  </span>
                </div>

                <DropdownDetails
                  options={gostOptions}
                  onSelect={handleGostSelect}
                  className="w-full"
                />
              </li>
              <li className="w-full flex-between">
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <Image
                    src="/assets/svgs/factory.svg"
                    alt="Producer"
                    width={42}
                    height={35}
                  />
                  <span className="leading-4 text-xs/4.5 xl:text-sm/5 2xl:text-[16px]/5.5">
                    Производитель:
                  </span>
                </div>

                <p className="leading-4 text-xs/4.5 xl:text-sm/5 2xl:text-[16px]/5.5 uppercase">
                  Ферратрейд
                </p>
              </li>
              <li className="w-full flex-between">
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <Image
                    src="/assets/svgs/diameters.svg"
                    alt="Diameters"
                    width={35}
                    height={35}
                  />
                  <span className="leading-4 text-xs/4.5 xl:text-sm/5 2xl:text-[16px]/5.5">
                    Доступные диаметры:
                  </span>
                </div>

                <DropdownDetails
                  options={versionOptions}
                  onSelect={handleVersionSelect}
                  className="w-full"
                />
              </li>
              <li className="w-full flex-between">
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <Image
                    src="/assets/svgs/packaging.svg"
                    alt="Package"
                    width={37}
                    height={31}
                  />
                  <span className="leading-4 text-xs/4.5 xl:text-sm/5 2xl:text-[16px]/5.5">
                    Доступные упаковки:
                  </span>
                </div>

                <DropdownDetails
                  options={gradeOptions}
                  onSelect={handleGradeSelect}
                  className="w-full"
                />
              </li>
              <li className="w-full flex-between">
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <Image
                    src="/assets/svgs/cart.svg"
                    alt="Price"
                    width={35}
                    height={35}
                  />
                  <span className="leading-4 text-xs/4.5 xl:text-sm/5 2xl:text-[16px]/5.5">
                    Цена:
                  </span>
                </div>
                <p className="leading-4 text-sm/4.5 xl:text-base/5 2xl:text-[18px]/5.5">
                  100000 ₽/Т
                </p>
              </li>
              <li className="w-full flex-between">
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <Image
                    src="/assets/svgs/location.svg"
                    alt="Warehouse"
                    width={35}
                    height={35}
                  />
                  <span className="leading-4 text-xs/4.5 xl:text-sm/5 2xl:text-[16px]/5.5">
                    Склад:
                  </span>
                </div>
                <div className="flex flex-col xl:flex-row items-end xl:items-center gap-3.75">
                  <div className="flex items-center gap-2.5">
                    <span>Матросово</span>
                    <div className="h-5 grid grid-cols-3  border border-brand-dark-gray divide-x divide-brand-dark-gray rounded-[5px] overflow-hidden">
                      <div className="size-5 shrink-0 bg-brand-yellow"></div>
                      <div className="size-5 shrink-0 bg-brand-yellow"></div>
                      <div className="size-5 shrink-0"></div>
                    </div>
                  </div>
                  <span className="h-5 w-px shrink bg-brand-dark-gray/50 hidden xl:block"></span>
                  <div className="flex items-center gap-2.5">
                    <span>Белорецк</span>
                    <div className="h-5 grid grid-cols-3  border border-brand-dark-gray divide-x divide-brand-dark-gray rounded-[5px] overflow-hidden">
                      <div className="size-5 shrink-0 bg-brand-red"></div>
                      <div className="size-5 shrink-0"></div>
                      <div className="size-5 shrink-0"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="w-full flex-between">
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <Image
                    src="/assets/svgs/product.svg"
                    alt="Quantity"
                    width={35}
                    height={35}
                  />
                  <span className="leading-4 text-xs/4.5 xl:text-sm/5 2xl:text-[16px]/5.5">
                    Количество:
                  </span>
                </div>
                <div className="flex items-center gap-1.25">
                  <button className="size-8 shrink flex-center bg-white rounded-md cursor-pointer hover:bg-brand-brown-100/50 smooth-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 stroke-brand-brown"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                  </button>
                  <p className="text-base/5 p-1.5">1 кг</p>
                  <button className="size-8 shrink flex-center bg-white rounded-md cursor-pointer hover:bg-brand-brown-100/50 smooth-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 stroke-brand-brown"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            </ul>

            {/* Cost */}
            <div className="flex-between flex-col items-end md:flex-row md:items-center lg:flex-col lg:items-end 2xl:items-center 2xl:flex-row gap-3.5">
              <p className="text-xl/7 3xl:text-[26px]/8 font-bold">
                Итого: 100000 ₽/Т
              </p>

              <Button
                variant="primary"
                className="!h-auto flex items-center gap-3 !text-sm rounded-md !p-2 lg:!p-3.5"
              >
                Добавить в корзину
                <svg
                  width="25"
                  height="22"
                  viewBox="0 0 25 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4539 19.0571C16.494 19.0638 16.5346 19.0672 16.5752 19.0672C16.9268 19.0672 17.2371 18.813 17.2968 18.4543L18.0292 14.0543C18.0957 13.6548 17.8262 13.2769 17.4272 13.2103C17.0281 13.1436 16.6508 13.4136 16.5843 13.8131L15.8519 18.2131C15.7854 18.6127 16.0549 18.9905 16.4539 19.0571ZM7.74641 18.4543C7.80613 18.813 8.11638 19.0672 8.46799 19.0672C8.50798 19.0672 8.54851 19.0639 8.58928 19.0571C8.9883 18.9905 9.25784 18.6127 9.19133 18.2131L8.45891 13.8131C8.39241 13.4136 8.01511 13.1438 7.61604 13.2103C7.21701 13.2769 6.94748 13.6547 7.01399 14.0543L7.74641 18.4543Z"
                    fill="white"
                  />
                  <path
                    d="M24.2637 7.33333H21.686L16.0465 0.275236C15.7939 -0.0409284 15.333 -0.0923108 15.0171 0.160738C14.7012 0.413738 14.65 0.875201 14.9027 1.19146L19.8101 7.33333H5.18208L10.0895 1.19146C10.3422 0.875201 10.291 0.413689 9.97515 0.160738C9.65923 -0.0923108 9.19834 -0.0409773 8.9457 0.275236L3.3062 7.33333H0.728516C0.324023 7.33333 -0.00390625 7.66167 -0.00390625 8.06666V11C-0.00390625 11.405 0.324023 11.7333 0.728516 11.7333H1.64092L4.41885 21.4681C4.46256 21.6214 4.55494 21.7562 4.682 21.8521C4.80906 21.9481 4.96389 22 5.12305 22H19.8691C20.0283 22 20.1831 21.9481 20.3102 21.8521C20.4373 21.7562 20.5297 21.6214 20.5734 21.4681L23.3513 11.7333H24.2637C24.6682 11.7333 24.9961 11.405 24.9961 11V8.06666C24.9961 7.66167 24.6682 7.33333 24.2637 7.33333ZM19.3167 20.5333H5.67549L3.16436 11.7333H21.8279L19.3167 20.5333ZM23.5312 10.2667H1.46094V8.8H23.5312V10.2667Z"
                    fill="white"
                  />
                  <path
                    d="M12.498 19.0669C12.9025 19.0669 13.2305 18.7385 13.2305 18.3335V13.9335C13.2305 13.5285 12.9025 13.2002 12.498 13.2002C12.0936 13.2002 11.7656 13.5285 11.7656 13.9335V18.3335C11.7656 18.7386 12.0936 19.0669 12.498 19.0669Z"
                    fill="white"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        <ChemicalComposition />
        <MechanicalProperties />

        <div className="space-y-6 mt-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">Что делает нас лучшим выбором?</h2>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-7.5">
            {/* 1 */}
            <div className="h-20 xl:h-24 flex items-center bg-brand-whitish-200 border border-brand-dark-gray/30 divide-x divide-brand-dark-gray/30 rounded-md">
              <div className="h-full w-20 xl:w-24 flex-center">
                <Image
                  src="/assets/svgs/best-choise-icon-1.svg"
                  alt="Fast"
                  width={72}
                  height={98}
                  className="w-8 h-12 xl:w-10 xl:h-14"
                />
              </div>
              <div className="flex-1">
                <div className="space-y-1.5 px-3 xl:px-4">
                  <p className="text-sm/4 xl:text-base/5">
                    Высокое <br /> качество
                  </p>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="h-20 xl:h-24 flex items-center bg-brand-whitish-200 border border-brand-dark-gray/30 divide-x divide-brand-dark-gray/30 rounded-md">
              <div className="h-full w-20 xl:w-24 flex-center">
                <Image
                  src="/assets/svgs/best-choise-icon-2.svg"
                  alt="Fast"
                  width={85}
                  height={86}
                  className="w-8 h-12 xl:w-10 xl:h-14"
                />
              </div>
              <div className="flex-1">
                <div className="space-y-1.5 px-3 xl:px-4">
                  <p className="text-sm/4 xl:text-base/5">
                    Гарантия <br /> сертификации
                  </p>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="h-20 xl:h-24 flex items-center bg-brand-whitish-200 border border-brand-dark-gray/30 divide-x divide-brand-dark-gray/30 rounded-md">
              <div className="h-full w-20 xl:w-24 flex-center">
                <Image
                  src="/assets/svgs/best-choise-icon-3.svg"
                  alt="Fast"
                  width={80}
                  height={99}
                  className="w-8 h-12 xl:w-10 xl:h-14"
                />
              </div>
              <div className="flex-1">
                <div className="space-y-1.5 px-3 xl:px-4">
                  <p className="text-sm/4 xl:text-base/5">
                    Соответствие <br /> ГОСТ
                  </p>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="h-20 xl:h-24 flex items-center bg-brand-whitish-200 border border-brand-dark-gray/30 divide-x divide-brand-dark-gray/30 rounded-md">
              <div className="h-full w-20 xl:w-24 flex-center">
                <Image
                  src="/assets/svgs/best-choise-icon-4.svg"
                  alt="Fast"
                  width={106}
                  height={63}
                  className="w-12 h-16 xl:w-14 xl:h-18"
                />
              </div>
              <div className="flex-1">
                <div className="space-y-1.5 px-3 xl:px-4">
                  <p className="text-sm/4 xl:text-base/5">
                    Быстрая <br /> доставка
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
