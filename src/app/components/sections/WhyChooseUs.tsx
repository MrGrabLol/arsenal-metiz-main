import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section>
      <div className="max-w-secondary mx-auto space-y-6 mt-8 px-4 md:px-12 lg:px-4">
        <h2 className="text-lg lg:text-xl">Почему стоит выбирать нас?</h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-5">
          {/* 1 */}
          <div className="h-28 md:h-32 3xl:h-40 flex items-center bg-brand-whitish-200 border border-brand-dark-gray/30 divide-x divide-brand-dark-gray/30 rounded-md">
            <div className="h-full w-1/3 flex-center">
              <Image
                src="/assets/svgs/fast.svg"
                alt="Fast"
                width={96}
                height={90}
                className="w-[55%]"
              />
            </div>
            <div className="flex-1">
              <div className="space-y-2 3xl:space-y-3 px-4 3xl:px-6">
                <h4 className="font-medium text-lg/6 lg:text-xl/7 3xl:text-xl/7.5">
                  Быстро, выгодно <br /> и в любом объеме
                </h4>
                <p className="text-xs/5 3xl:text-base/6.5">
                  Все товары на сайте <br /> - есть на складе
                </p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="h-28 md:h-32 3xl:h-40 flex items-center bg-brand-whitish-200 border border-brand-dark-gray/30 divide-x divide-brand-dark-gray/30 rounded-md">
            <div className="h-full w-1/3 flex-center">
              <Image
                src="/assets/svgs/individual.svg"
                alt="Fast"
                width={86}
                height={90}
                className="w-[55%]"
              />
            </div>
            <div className="flex-1">
              <div className="space-y-2 3xl:space-y-3 px-4 3xl:px-6">
                <h4 className="font-medium text-lg/6 lg:text-xl/7 3xl:text-xl/7.5">
                  Индивидуальный <br /> подход к ценам
                </h4>
                <p className="text-xs/5 3xl:text-base/6.5">
                  Обсуждаем условия с каждым <br /> клиентом персонально
                </p>
              </div>
            </div>
          </div>
          {/* 1 */}
          <div className="h-28 md:h-32 3xl:h-40 flex items-center bg-brand-whitish-200 border border-brand-dark-gray/30 divide-x divide-brand-dark-gray/30 rounded-md">
            <div className="h-full w-1/3 flex-center">
              <Image
                src="/assets/svgs/quality.svg"
                alt="Fast"
                width={69}
                height={94}
                className="w-[55%]"
              />
            </div>
            <div className="flex-1">
              <div className="space-y-2 3xl:space-y-3 px-4 3xl:px-6">
                <h4 className="font-medium text-lg/6 lg:text-xl/7 3xl:text-xl/7.5">
                  Превосходное качество <br /> металлопродукции
                </h4>
                <p className="text-xs/5 3xl:text-base/6.5">
                  С надежной доставкой <br /> от производителя
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
