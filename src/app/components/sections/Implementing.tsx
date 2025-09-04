import Image from "next/image";
import Button from "../shared/ui/Button";

export default function Implementing() {
  return (
    <section
      id="implementing"
      className="relative bg-brand-dark py-12 sm:py-32 lg:py-51"
    >
      <div className="max-w-base mx-auto relative z-10 flex flex-col lg:flex-row items-stretch gap-7.5 px-4 md:px-12 lg:px-4">
        <div className="lg:w-[520px] 2xl:max-h-99 relative rounded-md overflow-hidden after:absolute after:inset-0 after:bg-brand-dark-gray">
          <Image
            src="/assets/images/woman.png"
            alt="Image"
            width={2080}
            height={1564}
            className="size-full relative z-20 object-cover"
          />
        </div>

        <div className="flex-1 space-y-5">
          <h2 className="text-white">
            РАЗВИВАЕМ СВОЙ <br />
            <span className="text-brand-brown-100">
              ПРОФЕССИОНАЛЬНЫЙ ПОТЕНЦИАЛ
            </span>
          </h2>

          <div className="space-y-2.5 text-white text-sm/4.5 md:text-lg/6.5">
            <p>
              ММК стремится обеспечить предприятие высококвалифицированными
              кадрами и непрерывно развивает свой профессиональный потенциал
            </p>
            <p>
              Основные источники кадров — Магнитогорский государственный
              технический университет им. Г.И. Носова, Многопрофильный колледж
              и Политехнический колледж, завоевавший в 2019 году звание
              «Абсолютный победитель в конкурсе «Лучшая профессиональная
              организация»
            </p>
          </div>
          <Button
            isLink
            href="/career"
            variant="primary"
            className="w-full xs:w-auto"
          >
            Смотреть вакансии
          </Button>
        </div>
      </div>
    </section>
  );
}
