import Image from "next/image";

export default function OrderHistoryCard() {
  return (
    <div className="relative bg-white rounded-md p-5 sm:p-7.5">
      <div className="size-12.5 shrink-0 absolute top-5 right-5 sm:top-7.5 sm:right-7.5 flex-center bg-brand-dark rounded-md">
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
        <p className="text-lg/4.5">11.02.2025</p>
      </div>
      <p className="text-xl/5 xs:text-2xl/6 lg:text-[26px]/6.5 font-medium mt-2.5">
        Заказ №1616161616
      </p>

      <p className="text-lg/4.5 mt-3.75">В производстве</p>

      <div className="w-fit bg-brand-whitish-200 text-[22px]/5.5 font-medium rounded-md mt-5 p-2.5">
        72600,00 ₽
      </div>
    </div>
  );
}
