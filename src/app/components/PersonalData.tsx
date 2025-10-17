"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./shared/ui/Button";

export default function PersonalData() {
  const [visible, setVisible] = useState({
    old: false,
    new: false,
    repeat: false,
  });

  const toggleVisibility = (field: "old" | "new" | "repeat") => {
    setVisible((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className="space-y-4">
      <div className="space-y-6 bg-brand-whitish-200 border border-brand-dark-gray/30 rounded-md p-4 lg:p-6 2xl:p-8">
        <div className="flex-between flex-col sm:flex-row items-start sm:items-center gap-5">
          <h2 className="text-2xl lg:text-3xl font-medium">Личный кабинет</h2>
          <Button
            variant="white"
            className="flex items-center gap-3.75 !py-3.75"
          >
            <span className="text-xs whitespace-nowrap lg:text-sm leading-4">
              Изменить данные
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.4597 12.5508C18.1846 12.5508 17.9616 12.7749 17.9616 13.0515V17.4966C17.9606 18.3257 17.2922 18.9977 16.4672 18.9985H2.49058C1.66555 18.9977 0.99723 18.3257 0.996234 17.4966V4.45045C0.99723 3.62145 1.6656 2.94954 2.49058 2.94854H6.91336C7.18847 2.94854 7.41148 2.72441 7.41148 2.4479C7.41148 2.17155 7.18847 1.94727 6.91336 1.94727H2.49058C1.11568 1.94882 0.00154416 3.06859 0 4.45045V17.4968C0.00154416 18.8786 1.11568 19.9984 2.49058 20H16.4672C17.8421 19.9984 18.9563 18.8786 18.9578 17.4968V13.0515C18.9578 12.7749 18.7348 12.5508 18.4597 12.5508Z"
                  fill="#3F3C39"
                  fillOpacity="0.5"
                />
                <path
                  d="M18.762 0.659865C17.8867 -0.219955 16.4674 -0.219955 15.592 0.659865L6.70523 9.59159C6.6444 9.65272 6.60036 9.72865 6.57741 9.81197L5.40878 14.0524C5.38519 14.1378 5.38458 14.2279 5.40701 14.3136C5.42943 14.3993 5.47409 14.4774 5.53642 14.5401C5.59875 14.6028 5.67651 14.6477 5.76177 14.6703C5.84702 14.6928 5.93671 14.6922 6.02166 14.6686L10.2407 13.4938C10.3236 13.4707 10.3992 13.4265 10.46 13.3653L19.3465 4.43347C20.2205 3.553 20.2205 2.12778 19.3465 1.24736L18.762 0.659865ZM7.79057 9.91701L15.0637 2.6069L17.4094 4.9644L10.1361 12.2745L7.79057 9.91701ZM7.32204 10.862L9.19596 12.7456L6.60386 13.4674L7.32204 10.862ZM18.6422 3.72552L18.1139 4.2564L15.7681 1.89869L16.2966 1.36777C16.7828 0.879045 17.5712 0.879045 18.0575 1.36777L18.6422 1.95522C19.1277 2.44454 19.1277 3.2364 18.6422 3.72552Z"
                  fill="#3F3C39"
                  fillOpacity="0.5"
                />
              </svg>
            </svg>
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12.5 lg:items-start">
          <div className="space-y-5">
            <div className="w-full aspect-square xs:aspect-auto xs:size-[200px] shrink-0 flex-center bg-white border border-brand-dark-gray/30 rounded-md">
              <Image
                src="/assets/svgs/user-large.svg"
                alt="User"
                width={100}
                height={120}
              />
            </div>

            <button className="h-12 w-full aspect-square xs:aspect-auto xs:w-[200px] flex items-center justify-center gap-2.5 bg-white xs:text-sm rounded-md cursor-pointer border border-transparent hover:border-brand-dark-gray/30 p-2.5">
              <Image
                src="/assets/svgs/upload-image.svg"
                alt="Upload icon"
                width={20}
                height={20}
              />
              Установить фото профиля
            </button>
          </div>

          <div className="flex-1 h-full grid sm:grid-cols-2 xl:grid-cols-3 gap-7.5">
            {/* Name */}
            <label htmlFor="name" className="block">
              <span className="text-sm lg:text-base font-medium">Имя</span>
              <input
                id="name"
                type="text"
                placeholder="Иван"
                className="h-10 lg:h-11 w-full leading-4 text-sm bg-white placeholder:text-brand-dark/50 rounded-md outline-none border border-transparent focus:border-brand-dark-gray/30 mt-2.5 px-3"
              />
            </label>

            {/* Surname */}
            <label htmlFor="surname" className="block">
              <span className="text-sm lg:text-base font-medium">Фамилия</span>
              <input
                id="surname"
                type="text"
                placeholder="Иванов"
                className="h-10 lg:h-11 w-full leading-4 text-sm bg-white placeholder:text-brand-dark/50 rounded-md outline-none border border-transparent focus:border-brand-dark-gray/30 mt-2.5 px-3"
              />
            </label>

            {/* Father name */}
            <label htmlFor="fatherName" className="block">
              <span className="text-sm lg:text-base font-medium">Отчество</span>
              <input
                id="fatherName"
                type="text"
                placeholder="Иванович"
                className="h-10 lg:h-11 w-full leading-4 text-sm bg-white placeholder:text-brand-dark/50 rounded-md outline-none border border-transparent focus:border-brand-dark-gray/30 mt-2.5 px-3"
              />
            </label>

            {/* Phone */}
            <label htmlFor="phone" className="block">
              <span className="text-sm lg:text-base font-medium">Номер телефона</span>
              <input
                id="phone"
                type="text"
                placeholder="8 (990) 000-00-00"
                className="h-10 lg:h-11 w-full leading-4 text-sm bg-white placeholder:text-brand-dark/50 rounded-md outline-none border border-transparent focus:border-brand-dark-gray/30 mt-2.5 px-3"
              />
            </label>

            {/* Email */}
            <label htmlFor="email" className="block">
              <span className="text-sm lg:text-base font-medium">Email</span>
              <input
                id="email"
                type="text"
                placeholder="info@arsenal-metiz.ru"
                className="h-10 lg:h-11 w-full leading-4 text-sm bg-white placeholder:text-brand-dark/50 rounded-md outline-none border border-transparent focus:border-brand-dark-gray/30 mt-2.5 px-3"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Password Section */}
      <div className="space-y-6 bg-brand-whitish-200 border border-brand-dark-gray/30 rounded-md p-4 lg:p-6 2xl:p-8">
        <h2 className="text-2xl lg:text-3xl font-medium">Изменение пароля</h2>

        <div className="space-y-4">
          <div className="flex-1 h-fit grid sm:grid-cols-2 lg:grid-cols-3 gap-7.5 pt-4">
            {/* Old Password */}
            <label htmlFor="old-password" className="block">
              <span className="text-sm lg:text-base font-medium">Старый пароль</span>
              <div className="h-10 lg:h-11 relative bg-white rounded-md mt-2.5">
                <input
                  id="old-password"
                  type={visible.old ? "text" : "password"}
                  className="size-full leading-4 text-sm placeholder:text-brand-dark/50 rounded-md outline-none border border-transparent focus:border-brand-dark-gray/30 pl-3 pr-8"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => toggleVisibility("old")}
                >
                  <Image
                    src={
                      visible.old
                        ? "/assets/svgs/show-password.svg"
                        : "/assets/svgs/hide-password.svg"
                    }
                    alt={visible.old ? "Скрыть пароль" : "Показать пароль"}
                    width={27}
                    height={18}
                  />
                </button>
              </div>
            </label>

            {/* New Password */}
            <label htmlFor="new-password" className="block">
              <span className="text-sm lg:text-base font-medium">Новый пароль</span>
              <div className="h-10 lg:h-11 relative bg-white rounded-md mt-2.5">
                <input
                  id="new-password"
                  type={visible.new ? "text" : "password"}
                  className="size-full leading-4 text-sm placeholder:text-brand-dark/50 rounded-md outline-none border border-transparent focus:border-brand-dark-gray/30 pl-3 pr-8"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => toggleVisibility("new")}
                >
                  <Image
                    src={
                      visible.new
                        ? "/assets/svgs/show-password.svg"
                        : "/assets/svgs/hide-password.svg"
                    }
                    alt={visible.new ? "Скрыть пароль" : "Показать пароль"}
                    width={27}
                    height={18}
                  />
                </button>
              </div>
            </label>

            {/* Repeat Password */}
            <label htmlFor="repeat-password" className="block">
              <span className="text-sm lg:text-base font-medium">
                Повторите новый пароль
              </span>
              <div className="h-10 lg:h-11 relative bg-white rounded-md mt-2.5">
                <input
                  id="repeat-password"
                  type={visible.repeat ? "text" : "password"}
                  className="size-full leading-4 text-sm placeholder:text-brand-dark/50 rounded-md outline-none border border-transparent focus:border-brand-dark-gray/30 pl-3 pr-8"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => toggleVisibility("repeat")}
                >
                  <Image
                    src={
                      visible.repeat
                        ? "/assets/svgs/show-password.svg"
                        : "/assets/svgs/hide-password.svg"
                    }
                    alt={visible.repeat ? "Скрыть пароль" : "Показать пароль"}
                    width={27}
                    height={18}
                  />
                </button>
              </div>
            </label>
          </div>

          <Button variant="primary" className="!h-10 !text-sm">Сохранить</Button>
        </div>
      </div>
    </div>
  );
}
