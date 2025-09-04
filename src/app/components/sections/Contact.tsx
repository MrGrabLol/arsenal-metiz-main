"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../shared/ui/Button";
import CallMeModal from "../shared/CallMeModal";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section
        id="statistics"
        className="relative bg-brand-dark-gray text-white py-12 md:py-32 lg:py-50"
      >
        <div className="max-w-base mx-auto relative z-10 space-y-10.5 px-4 md:px-12">
          <h2 className="max-w-[960px]">Контакты</h2>

          <div className="flex flex-col lg:flex-row items-stretch gap-7.5">
            <div className="lg:w-1/2 xl:w-auto space-y-7.5 bg-brand-dark text-white rounded-md p-6 lg:p-7.5">
              <p className="text-lg/4 lg:text-[22px]/5 font-medium">
                Отдел продаж
              </p>
              <ul className="space-y-3.75">
                <li className="flex items-center gap-3.5">
                  <Image
                    src="/assets/svgs/call.svg"
                    alt="Call icon"
                    className="w-6 h-6.25"
                    width={24}
                    height={24}
                  />
                  <a
                    href="tel:+7 (499) 503-73-63/62"
                    className="text-sm/3.5 lg:text-lg/4.5 font-medium hover:text-brand-brown smooth-200"
                  >
                    +7 (499) 503-73-63/62
                  </a>
                </li>
                <li className="flex items-center gap-3.5">
                  <Image
                    src="/assets/svgs/message.svg"
                    alt="Message icon"
                    className="w-6.25 h-4.5"
                    width={24}
                    height={24}
                  />
                  <a
                    href="mailto:info@arsenal-metiz.ru"
                    className="text-sm/3.5 lg:text-lg/4.5 font-medium hover:text-brand-brown smooth-200"
                  >
                    info@arsenal-metiz.ru
                  </a>
                </li>
                <li className="flex items-center gap-3.5">
                  <Image
                    src="/assets/svgs/location.svg"
                    alt="Location icon"
                    className="w-4.5 h-6"
                    width={24}
                    height={24}
                  />
                  <p className="text-sm/3.5 lg:text-lg/4.5 font-medium hover:text-brand-brown smooth-200">
                    г. Долгопрудный, Лихачевский просп., д.18, стр.1
                  </p>
                </li>
              </ul>
              <Button 
                variant="primary" 
                onClick={openModal}
                className="cursor-pointer"
              >
                Позвоните мне
              </Button>
            </div>
            <div className="flex-1 h-80 rounded-md overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A40e3085364203a508bce77d7270bc0f2b250e7a8ed232f66817d4685b9ea32e3&amp;source=constructor"
                className="w-full h-80"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <CallMeModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
