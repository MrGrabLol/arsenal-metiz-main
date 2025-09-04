import Image from "next/image";
import ProductCard from "../shared/ProductCard";

export default function PopularProducts() {
  return (
    <section id="popular-products" className="pt-24 lg:pt-40 pb-8">
      <div className="max-w-secondary mx-auto space-y-6 px-4">
        <div className="flex items-center gap-3 xl:ml-107.5">
          <h2 className="text-brand-dark-gray text-lg lg:text-xl">Популярные товары</h2>
          <Image
            src="/assets/svgs/flame.svg"
            alt="Flame icon"
            width={28}
            height={36}
          />
        </div>
        <div className="flex flex-col xl:flex-row xl:items-stretch gap-4">
          <div className="xl:w-80 flex-center text-center bg-brand-whitish-200 border border-brand-dark-gray-100/30 rounded-md p-4">
            <div className="space-y-3">
              <div className="space-y-2">
                <Image
                  src="/assets/svgs/catalog.svg"
                  alt="catalog"
                  width={32}
                  height={48}
                  className="mx-auto"
                />
                <h2 className="text-brand-dark-gray-100 text-sm lg:text-base">весь Каталог</h2>
              </div>
              <p className="lg:max-w-1/2 xl:max-w-none mx-auto leading-4 text-xs lg:text-sm">
                вы можете ознакомиться со всем нашим каталогом, скачав файл
                ниже. в нем содержится вся актуальная информация касательно
                нашей продукции
              </p>

              {/* Download Doc */}
              <div className="w-fit mx-auto flex items-center gap-1.5 bg-white rounded-md p-2.5">
                <Image
                  src="/assets/svgs/pdf.svg"
                  alt="catalog"
                  width={32}
                  height={32}
                />
                <div className="flex flex-col items-start space-y-0.5">
                  <p className="text-xs">Каталог продукции 2025</p>
                  <button className="align-left text-brand-dark-gray/50 underline underline-offset-2 cursor-pointer hover:text-brand-dark-gray smooth-200 text-xs">
                    Скачать
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
