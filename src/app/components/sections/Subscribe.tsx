import Image from "next/image";
import Button from "../shared/ui/Button";

export default function Subscribe() {
  return (
    <section id="subscribe" className="bg-brand-whitish-200">
      <div className=" max-w-secondary mx-auto flex-center text-center 00 mt-8 py-8 px-4">
        <div className="space-y-4">
          <div className="space-y-3">
            <Image
              src="/assets/svgs/calendar.svg"
              alt="catalog"
              width={69}
              height={65}
              className="mx-auto"
            />
            <h2 className="text-brand-dark-gray-100 text-lg lg:text-xl">
              Хотите быть в курсе <br /> наших последних событий?
            </h2>
          </div>
          <p className="lg:max-w-1/2 xl:max-w-none mx-auto font-medium lg:text-xl/8">
            Подпишитесь на рассылку!
          </p>

          <form action="#" className="flex items-stretch">
            <div className="max-w-100 w-full relative bg-white rounded-l-md">
              <svg
                width="18"
                height="14"
                viewBox="0 0 23 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-4 left-4"
              >
                <path
                  d="M20.9785 0H2.02148C0.904592 0 0 0.956817 0 2.125V14.875C0 16.0501 0.91124 17 2.02148 17H20.9785C22.0861 17 23 16.0541 23 14.875V2.125C23 0.958894 22.099 0 20.9785 0ZM20.6954 1.41667L12.9294 9.53733C12.5476 9.93872 12.04 10.1597 11.5 10.1597C10.96 10.1597 10.4524 9.93867 10.0693 9.53601L2.30458 1.41667H20.6954ZM1.34766 14.5867V2.41424L7.17124 8.50378L1.34766 14.5867ZM2.30544 15.5833L8.12673 9.50286L9.11766 10.5391C9.75402 11.208 10.6001 11.5764 11.5 11.5764C12.3999 11.5764 13.246 11.208 13.8811 10.5404L14.8733 9.50286L20.6946 15.5833H2.30544ZM21.6523 14.5867L15.8288 8.50378L21.6523 2.41424V14.5867Z"
                  fill="#3F3C39"
                  fillOpacity="0.3"
                />
              </svg>

              <input
                type="email"
                placeholder="Ваш email"
                className="size-full outline-none pl-12 py-3 lg:py-4 pr-4"
              />
            </div>
            <Button variant="primary" className="lg:!h-12">
              Подписаться
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
