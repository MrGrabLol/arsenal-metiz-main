import Image from "next/image";

export default function OrderHistoryCard() {
  return (
    <div className="relative bg-white rounded-md p-4 sm:p-5">
      <div className="size-10 shrink-0 absolute top-4 right-4 sm:top-5 sm:right-5 flex-center bg-brand-dark rounded-md">
        <Image
          src="/assets/svgs/logo-marketplace-small.svg"
          alt="Date icon"
          width={25}
          height={25}
        />
      </div>
      <div className="flex items-center gap-2.5">
        <Image
          src="/assets/svgs/date.svg"
          alt="Date icon"
          width={19}
          height={19}
        />
        <p className="text-sm">11.02.2025</p>
      </div>
      <p className="text-base lg:text-lg font-medium mt-2">
        Заказ №1616161616
      </p>

      <p className="text-sm mt-2">В производстве</p>

      <div className="w-fit bg-brand-whitish-200 text-base font-medium rounded-md mt-3 p-2">
        72600,00 ₽
      </div>
    </div>
  );
}
