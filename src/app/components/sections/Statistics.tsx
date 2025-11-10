import Image from "next/image";
import Button from "../shared/ui/Button";

export default function Statistics() {
  return (
    <section
      id="statistics"
      className="relative bg-brand-dark-gray text-white py-12 md:py-23"
    >
      <div className="max-w-base mx-auto relative z-10 space-y-7.5 px-4 md:px-12 lg:px-4">
        <div className="space-y-4">
          <h2 className="max-w-[720px]">
            <span className="text-brand-brown-100">арсенал метиз</span> — ведущий производитель сварочной проволоки в России
          </h2>
          <p className="w-full text-sm/5 md:text-lg/6.5">
          ООО «Торговый Дом &quot;Арсенал-Метиз&quot;» — один из крупнейших отечественных производителей сварочной проволоки и проволоки из специальных сталей. Компания постоянно наращивает производственные мощности и расширяет ассортимент, поставляя продукцию для ведущих промышленных предприятий машиностроительного, химического, энергетического, нефтегазового и военно-промышленного комплекса по всей стране. Мы обеспечиваем стабильное качество, высокие стандарты безопасности и надёжные поставки, что делает нас надежным партнёром для ключевых отраслей российской экономики.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row items-stretch gap-4.5">
          <div className="md:w-1/2 lg:w-[45%] grid grid-cols-1 gap-3 lg:gap-5">
            {/* Stat 1 */}
            <div className="space-y-2.5 bg-brand-dark rounded-md p-3.5 md:p-5">
              <div className="flex items-center gap-2.5">
                <p className="font-oswald text-4xl/7 md:text-5xl/11 font-medium text-brand-brown-100">
                  более 4500
                </p>
                <p className="uppercase text-sm/5 md:text-lg/6 font-medium">
                  ТОНН <br /> В ГОД
                </p>
              </div>
              <p className="text-xs/4 lg:text-base/5">
                Объём производства
              </p>
            </div>
            {/* Stat 2 */}
            <div className="space-y-2.5 bg-brand-dark rounded-md p-3.5 md:p-5">
              <div className="flex items-center gap-2.5">
                <p className="font-oswald text-4xl/7 md:text-5xl/11 font-medium text-brand-brown-100">
                  более 100
                </p>
                <p className="uppercase text-sm/5 md:text-lg/6 font-medium">
                  МАРОК <br /> ПРОВОЛОКИ
                </p>
              </div>
              <p className="text-xs/4 lg:text-base/5">
                Ассортимент
              </p>
            </div>
            {/* Stat 3 */}
            <div className="space-y-2.5 bg-brand-dark rounded-md p-3.5 md:p-5">
              <div className="flex items-center gap-2.5">
                <p className="font-oswald text-4xl/7 md:text-5xl/11 font-medium text-brand-brown-100">
                  более 1000
                </p>
                <p className="uppercase text-sm/5 md:text-lg/6 font-medium">
                  КОМПАНИЙ <br /> ПО РОССИИ
                </p>
              </div>
              <p className="text-xs/4 lg:text-base/5">
                Количество клиентов / партнёров
              </p>
            </div>
          </div>

          <div className="flex-1 rounded-md overflow-hidden">
            <Image
              src="/assets/images/stats.png"
              alt="Image"
              width={2800}
              height={1300}
              className="size-full object-cover"
            />
          </div>
        </div>

        <Button isLink href="/about" variant="primary">
          О компании
        </Button>
      </div>
    </section>
  );
}
