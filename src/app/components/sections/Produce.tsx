import Image from "next/image";
import Button from "../shared/ui/Button";

export default function Produce() {
  return (
    <section
      id="statistics"
      className="relative bg-brand-dark-gray text-white py-12 md:py-23"
    >
      <div className="max-w-base mx-auto relative z-10 space-y-7.5 px-4 md:px-12 lg:px-4">
        <div className="space-y-5">
          <h2>
            {" "}
            арсенал метиз производит{" "}
            <span className="text-brand-brown-100">
              широкий сортамент металлопродукции
            </span>{" "}
            с фокусом на премиум класс
          </h2>
          <p className="max-w-[830px] text-sm/4.5 md:text-lg/6.5">
            Группа ПАО «ММК» — производитель полного металлургического цикла,
            начина с подготовки железорудного сырья и заканчивая глубокой
            переработкой черных металлов
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-col lg:flex-row items-stretch gap-7.5">
          <div className="md:w-1/2 lg:w-65 flex flex-col xxs:flex-row lg:flex-col xs:items-center sm:items-stretch gap-3 xs:gap-5">
            {/* Stat 1 */}
            <div className="xxs:w-1/2 lg:w-auto space-y-2.5 bg-brand-dark rounded-md p-5">
              <p className="font-oswald text-4xl/7 md:text-5xl/11 font-medium text-brand-brown-100">
                24%
              </p>
              <p className="text-xs/4 lg:text-base/5">
                Количество марок производимой стали ММК
              </p>
            </div>
            {/* Stat 2 */}
            <div className="xxs:w-1/2 lg:w-auto space-y-2.5 bg-brand-dark rounded-md p-5">
              <p className="font-oswald text-4xl/7 md:text-5xl/11 font-medium text-brand-brown-100">
                90%
              </p>
              <p className="text-xs/4 lg:text-base/5">
                Продукции реализуется на российском рынке
              </p>
            </div>
          </div>

          {/* Products */}
          <div className="flex-1 grid xxs:grid-cols-2 sm:grid-cols-3 gap-5">
            {/* Product 1 */}
            <button className="group relative aspect-square lg:aspect-auto bg-white hover:bg-brand-dark rounded-md cursor-pointer p-2.5">
              <div className="size-full relative flex-center bg-brand-whitish-100 group-hover:bg-white/5">
                <Image
                  src="/assets/images/corners-white.png"
                  alt="corner"
                  width={300}
                  height={280}
                  className="hidden group-hover:block size-full absolute"
                />
                <Image
                  src="/assets/images/corners-cream.png"
                  alt="corner"
                  width={300}
                  height={280}
                  className="group-hover:hidden size-full absolute"
                />
                <Image
                  src="/assets/images/product.png"
                  alt="corner"
                  width={341}
                  height={173}
                  className="w-full"
                />
              </div>
              {/* Title */}
              <p className="absolute z-30 bottom-5 left-5 md:bottom-7.5 md:left-7.5 text-[10px]/3 xs:text-sm/3.5 xl:text-lg/4.5 font-medium text-brand-dark-gray-100 group-hover:text-white">
                Проволока
              </p>
            </button>
            {/* Product 2 */}
            <button className="group relative aspect-square lg:aspect-auto bg-white hover:bg-brand-dark rounded-md cursor-pointer p-2.5">
              <div className="size-full relative flex-center bg-brand-whitish-100 group-hover:bg-white/5">
                <Image
                  src="/assets/images/corners-white.png"
                  alt="corner"
                  width={300}
                  height={280}
                  className="hidden group-hover:block size-full absolute"
                />
                <Image
                  src="/assets/images/corners-cream.png"
                  alt="corner"
                  width={300}
                  height={280}
                  className="group-hover:hidden size-full absolute"
                />
                <Image
                  src="/assets/images/product.png"
                  alt="corner"
                  width={341}
                  height={173}
                  className="w-full"
                />
              </div>
              {/* Title */}
              <p className="absolute z-30 bottom-5 left-5 md:bottom-7.5 md:left-7.5 text-[10px]/3 xs:text-sm/3.5 xl:text-lg/4.5 font-medium text-brand-dark-gray-100 group-hover:text-white">
                Сварочные электроды
              </p>
            </button>
            {/* Product 3 */}
            <button className="group relative aspect-square lg:aspect-auto bg-white hover:bg-brand-dark rounded-md cursor-pointer p-2.5">
              <div className="size-full relative flex-center bg-brand-whitish-100 group-hover:bg-white/5">
                <Image
                  src="/assets/images/corners-white.png"
                  alt="corner"
                  width={300}
                  height={280}
                  className="hidden group-hover:block size-full absolute"
                />
                <Image
                  src="/assets/images/corners-cream.png"
                  alt="corner"
                  width={300}
                  height={280}
                  className="group-hover:hidden size-full absolute"
                />
                <Image
                  src="/assets/images/product.png"
                  alt="corner"
                  width={341}
                  height={173}
                  className="w-full"
                />
              </div>
              {/* Title */}
              <p className="absolute z-30 bottom-5 left-5 md:bottom-7.5 md:left-7.5 text-[10px]/3 xs:text-sm/3.5 xl:text-lg/4.5 font-medium text-brand-dark-gray-100 group-hover:text-white">
                Плавленый флюс
              </p>
            </button>
          </div>
        </div>
        <div className="w-full sm:w-auto flex items-center gap-3.5 md:gap-5">
          <Button
            isLink
            href="/our-product"
            className="w-full sm:w-auto"
            variant="primary"
          >
            Продукция
          </Button>
          <Button
            isLink
            href="/marketplace"
            variant="secondary"
            className="w-full sm:w-auto"
          >
            Маркетплейс
          </Button>
        </div>
      </div>
    </section>
  );
}
