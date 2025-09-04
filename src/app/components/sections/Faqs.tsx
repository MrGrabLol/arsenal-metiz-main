"use client";

import { useState } from "react";
import FaqAccordion from "../FaqAccordion";
import Button from "../shared/ui/Button";
import FeedbackModal from "../shared/FeedbackModal";

export default function Faqs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section
        id="faqs"
        className="relative bg-brand-dark text-white py-12 md:py-23"
      >
        <div className="max-w-base mx-auto relative z-10 relative space-y-12.5 px-4 md:px-12 lg:px-4">
          <h2 className="font-oswald font-medium text-center text-brand-brown-100 uppercase text-4xl/11 md:text-6xl/[70px] tracking-tight">
            Частые вопросы
          </h2>

          <FaqAccordion />

          <div className="max-w-200 mx-auto text-center space-y-7.5">
            <h2>Есть вопросы или нужна консультация? свяжитесь с нами!</h2>
            <Button variant="primary" onClick={openModal}>
              Обратная связь
            </Button>
          </div>
        </div>
      </section>

      {/* Modal */}
      <FeedbackModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
