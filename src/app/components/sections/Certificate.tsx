"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../shared/ui/Button";

export default function Certificate() {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowCertificates = () => {
    setShowPopup(true);
    // Автоматически скрыть попап через 3 секунды
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <>
      <section
        id="certificate"
        className="bg-brand-dark text-white pt-6 md:pt-12 pb-12.5 md:pb-25"
      >
        <div className="max-w-base mx-auto relative z-10 px-4">
          <div className=" flex flex-col md:flex-row items-center text-center md:text-start gap-5 bg-brand-dark-gray rounded-md pt-8 pb-6 px-5 md:px-10 xl:px-20">
            <div className="max-w-[632px] space-y-7.5">
              <div className="space-y-5">
                <h2 className="font-oswald font-medium xl:whitespace-nowrap text-brand-brown-100 uppercase text-4xl/11 lg:text-6xl/[70px] tracking-tight">
                  Качество и сертификация
                </h2>
                <p className="max-w-140 text-sm/4 xs:text-base/5 lg:text-xl/6.5">
                  Продукция сертифицирована в авторитетных российских надзорных
                  органах, таких как НАКС, РОСТЕСТ, РМРС, РТ-Техприемка
                </p>
              </div>
              <Button variant="primary" onClick={handleShowCertificates}>
                Все сертификаты
              </Button>
            </div>
            <Image
              src="/assets/images/certificate.png"
              alt="Certificate"
              width={484}
              height={387}
              className="md:w-1/2 lg:w-121"
            />
          </div>
        </div>
      </section>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 text-center">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Страница сертификатов
            </h3>
            <p className="text-gray-600 mb-4">
              Страница сертификатов будет реализована позже. 
              Мы работаем над её созданием.
            </p>
            <Button
              variant="primary"
              onClick={() => setShowPopup(false)}
              className="w-full"
            >
              Понятно
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
