import Image from "next/image";
import Button from "../shared/ui/Button";

export default function AboutOurProduct() {
  return (
    <section id="aboutProduct" className="relative bg-brand-dark text-white">
      <div className="max-w-base mx-auto relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 pb-8 pt-32 xl:pt-48 lg:pb-12.5 px-4">
        <div className="max-w-144 xl:max-w-154">
          <h1 className="max-w-[732px] font-oswald font-medium text-brand-brown-100 uppercase text-4xl/11 lg:text-5xl/14 xl:text-6xl/[70px] tracking-tight">
            О нашей продукции
          </h1>
          <p className="leading-5 xs:text-lg/6 xl:text-2xl/8 mt-5">
            Сварочная проволока и флюс от «Арсенал Метиз» - надежность,
            проверенная промышленностью
          </p>
          <div className="space-y-7.5 mt-4.5">
            <p className="text-sm/4.5 xs:text-base/5 xl:text-xl/6.5">
              ММК на протяжении многих лет является крупнейшим предприятием
              черной металлургии России и обладает огромным опытом в области
              производства металлопродукции:
            </p>
            <ul className="grid grid-cols-2 gap-y-4 text-sm/3.5 xs:text-base/4 xl:text-xl/5 font-medium text-white">
              <li className="flex items-center gap-2 xs:gap-3">
                <span className="size-3.5 xs:size-4.5 shrink-0 bg-brand-brown rounded-2"></span>
                <p>Атомная энергетика</p>
              </li>
              <li className="flex items-center gap-2 xs:gap-3">
                <span className="size-3.5 xs:size-4.5 shrink-0 bg-brand-brown rounded-2"></span>
                <p>Атомная энергетика</p>
              </li>
              <li className="flex items-center gap-2 xs:gap-3">
                <span className="size-3.5 xs:size-4.5 shrink-0 bg-brand-brown rounded-2"></span>
                <p>Атомная энергетика</p>
              </li>
              <li className="flex items-center gap-2 xs:gap-3">
                <span className="size-3.5 xs:size-4.5 shrink-0 bg-brand-brown rounded-2"></span>
                <p>Атомная энергетика</p>
              </li>
            </ul>
            <p className="text-sm/4.5 xs:text-base/5 xl:text-xl/6.5">
              ММК на протяжении многих лет является крупнейшим предприятием
              черной металлургии России и обладает огромным опытом в области
              производства
            </p>
          </div>
          {/* Buttons */}
          <div className="max-w-105 grid xs:grid-cols-2 gap-3 md:gap-5 mt-7.5">
            <Button
              variant="secondary"
              className="shine-button relative overflow-hidden"
              isLink
              href="/marketplace"
            >
              Перейти в каталог
            </Button>
          </div>
        </div>

        <div className="">
          <Image
            src="/assets/images/product-image.png"
            alt="Product Image"
            width={2088}
            height={2427}
            className="w-full max-w-120 xl:max-w-[566px]"
          />
        </div>
      </div>
    </section>
  );
}
