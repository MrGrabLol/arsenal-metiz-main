import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Button from "./ui/Button";
import { useClickOutside } from "@/app/hooks/useClickOutside";
import { useContactModal } from "@/app/contexts/ContactModalContext";

export default function ContactManagerModal() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const contactManagerRef = useRef(null);

  const { toggleContactManagerModal } = useContactModal();

  useClickOutside(contactManagerRef, toggleContactManagerModal);

  const handleRemoveFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex-center bg-brand-dark/50 text-brand-dark-gray px-7"
    >
      <div className="relative" ref={contactManagerRef}>
        <button
          onClick={toggleContactManagerModal}
          className="group absolute -top-8 -right-4 cursor-pointer"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:fill-brand-red fill-white"
          >
            <path d="M19.6046 2.41735C19.8612 2.15217 20.0032 1.79701 19.9999 1.42835C19.9967 1.0597 19.8486 0.707055 19.5875 0.446368C19.3263 0.185681 18.9731 0.0378111 18.6038 0.0346076C18.2345 0.0314041 17.8787 0.173123 17.6131 0.42924L10.0173 8.01189L2.42153 0.42924C2.29161 0.294951 2.13619 0.187838 1.96436 0.11415C1.79252 0.0404622 1.6077 0.00167537 1.42069 5.30871e-05C1.23368 -0.0015692 1.04821 0.0340051 0.875119 0.104701C0.702025 0.175397 0.544769 0.279798 0.412525 0.411813C0.280282 0.543827 0.1757 0.700812 0.104882 0.873606C0.034064 1.0464 -0.00157191 1.23154 5.31789e-05 1.41823C0.00167827 1.60492 0.0405322 1.78942 0.114348 1.96096C0.188163 2.1325 0.295462 2.28765 0.429983 2.41735L8.02576 10L0.429983 17.5826C0.295462 17.7124 0.188163 17.8675 0.114348 18.039C0.0405322 18.2106 0.00167827 18.3951 5.31789e-05 18.5818C-0.00157191 18.7685 0.034064 18.9536 0.104882 19.1264C0.1757 19.2992 0.280282 19.4562 0.412525 19.5882C0.544769 19.7202 0.702025 19.8246 0.875119 19.8953C1.04821 19.966 1.23368 20.0016 1.42069 19.9999C1.6077 19.9983 1.79252 19.9595 1.96436 19.8858C2.13619 19.8122 2.29161 19.705 2.42153 19.5708L10.0173 11.9881L17.6131 19.5708C17.8787 19.8269 18.2345 19.9686 18.6038 19.9654C18.9731 19.9622 19.3263 19.8143 19.5875 19.5536C19.8486 19.2929 19.9967 18.9403 19.9999 18.5716C20.0032 18.203 19.8612 17.8478 19.6046 17.5826L12.0089 10L19.6046 2.41735Z" />
          </svg>
        </button>

        <div className="max-w-fit h-[calc(100vh-100px)] md:h-fit space-y-7.5 bg-white rounded-md overflow-auto px-6 py-9 lg:p-12.5">
          <form className="max-w-182.5 w-full grid md:grid-cols-2 gap-5 md:gap-7.5">
            {/* Left */}
            <div className="space-y-5">
              <label htmlFor="fullName" className="block">
                <span className="md:text-xl/5 font-medium">ФИО*</span>
                <input
                  id="fullName"
                  type="text"
                  className="h-12 md:h-13.5 w-full leading-4 md:text-lg/4.5 bg-brand-whitish-200 placeholder:text-brand-dark/50 rounded-md outline-none border border-transparent focus:border-brand-dark-gray/30 mt-2.5 px-4 md:px-5"
                />
              </label>

              <label htmlFor="company" className="block">
                <span className="md:text-xl/5 font-medium">Компания</span>
                <input
                  id="company"
                  type="text"
                  placeholder="Арсенал Метиз"
                  className="h-12 md:h-13.5 w-full leading-4 md:text-lg/4.5 bg-brand-whitish-200 placeholder:text-brand-dark/50 rounded-md outline-none border border-transparent focus:border-brand-dark-gray/30 mt-2.5 px-4 md:px-5"
                />
              </label>

              <label htmlFor="email" className="block">
                <span className="md:text-xl/5 font-medium">Email*</span>
                <input
                  id="email"
                  type="email"
                  placeholder="info@arsenal-metiz.ru"
                  className="h-12 md:h-13.5 w-full leading-4 md:text-lg/4.5 bg-brand-whitish-200 placeholder:text-brand-dark/50 rounded-md outline-none border border-transparent focus:border-brand-dark-gray/30 mt-2.5 px-4 md:px-5"
                />
              </label>

              <label htmlFor="tel" className="block">
                <span className="md:text-xl/5 font-medium">Номер телефона</span>
                <input
                  id="tel"
                  type="text"
                  placeholder="8 (990) 000-00-00"
                  className="h-12 md:h-13.5 w-full leading-4 md:text-lg/4.5 bg-brand-whitish-200 placeholder:text-brand-dark/50 rounded-md outline-none border border-transparent focus:border-brand-dark-gray/30 mt-2.5 px-4 md:px-5"
                />
              </label>
            </div>

            {/* Right */}
            <div className="grid grid-rows-4 gap-5">
              <label htmlFor="position" className="row-span-3 pb-7.5">
                <span className="md:text-xl/5 font-medium">
                  Позиции, которые вас интересуют
                </span>
                <textarea
                  id="position"
                  className="w-full h-full leading-4 md:text-lg/4.5 bg-brand-whitish-200 placeholder:text-brand-dark/50 rounded-md outline-none border border-transparent focus:border-brand-dark-gray/30 resize-none  mt-2.5 p-4 md:p-5"
                ></textarea>
              </label>

              <div className="relative">
                <span className="md:text-xl/5 font-medium">Загрузить файл</span>
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  id="file"
                  onChange={(e) => setUploadedFile(e.target.files?.[0] || null)}
                />
                <label
                  htmlFor="file"
                  className="w-full h-12 md:h-13.5 flex-center bg-brand-whitish-200 border border-dashed border-brand-dark-gray/30 rounded-md cursor-pointer mt-2.5 px-4 md:px-5"
                >
                  <Image
                    src="/assets/svgs/attach-file.svg"
                    alt="Attach file icon"
                    width={30}
                    height={30}
                  />
                </label>

                {uploadedFile && (
                  <div className="lg:absolute top-24 mt-2 flex items-center justify-between text-sm text-brand-dark bg-brand-whitish-200 px-4 py-2 rounded-md">
                    <span className="truncate">{uploadedFile.name}</span>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="ml-4 text-red-500 hover:text-red-700 transition"
                      title="Удалить файл"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>
            </div>

            <Button variant="primary" className="w-full h-12 md:h-13.5">
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
