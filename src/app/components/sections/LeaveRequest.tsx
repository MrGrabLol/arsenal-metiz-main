"use client";

import Image from "next/image";
import Button from "../shared/ui/Button";
import { useContactModal } from "@/app/contexts/ContactModalContext";

export default function LeaveRequest() {
  const { toggleContactManagerModal } = useContactModal();

  return (
    <section>
      <div className="max-w-secondary mx-auto px-4">
        <div className="flex-center text-center bg-brand-whitish-200 border border-brand-dark-gray/30 rounded-md mt-8 p-8">
          <div className="space-y-4">
            <div className="space-y-3">
              <Image
                src="/assets/svgs/find.svg"
                alt="catalog"
                width={100}
                height={50}
                className="mx-auto"
              />
              <h2 className="text-brand-dark-gray-100 text-lg lg:text-xl">Не нашли что искали?</h2>
            </div>
            <p className="lg:max-w-1/2 xl:max-w-none mx-auto leading-5 text-sm lg:text-base">
              Вы можете оставить заявку и наш менеджер перезвонит вам!
            </p>

            <Button variant="primary" onClick={toggleContactManagerModal}>
              Оставить заявку
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
