import Image from "next/image";
import Button from "../components/shared/ui/Button";
import { useContactModal } from "../contexts/ContactModalContext";

export default function AboutPage() {
  return (
    <>
      {/* Global Pattern Image */}
      <Image
        src="/assets/images/pattern-long.png"
        alt="Image"
        width={522}
        height={3800}
        className="h-full w-64 absolute left-0 top-0 z-[1] hidden lg:block object-fill"
      />
      
      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white">
        <div className="size-full bg-none lg:bg-hero-laptop 2xl:bg-hero 2xl:bg-[auto_600px] 3xl:bg-auto bg-no-repeat bg-right-bottom bg-contain lg:pt-25">
          <div className="max-w-base mx-auto relative z-10 pt-5 pb-12 md:py-16 lg:py-32 px-4 md:px-12 lg:px-4">
            <h1 className="max-w-[732px] font-oswald font-medium uppercase text-4xl/11 md:text-6xl/[70px] tracking-tight">
              <span className="text-brand-brown-100">ПАО «МАГНИТОГОРСКИЙ МЕТАЛЛУРГИЧЕСКИЙ КОМБИНАТ»</span>
            </h1>
            <p className="text-sm lg:text-lg leading-none mt-5 max-w-[600px]">
              Входит в число крупнейших мировых производителей стали и занимает лидирующие позиции среди предприятий черной металлургии России.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative bg-brand-dark-gray text-white py-12 md:py-23">
        <div className="max-w-base mx-auto relative z-10 space-y-7.5 px-4 md:px-12 lg:px-4">
          <div className="space-y-4">
            <h2 className="max-w-[720px]">
              <span className="text-brand-brown-100">АРСЕНАЛ МЕТИЗ</span> - ОДИН ИЗ КРУПНЕЙШИХ В МИРЕ ПРОИЗВОДИТЕЛЕЙ СТАЛИ
            </h2>
            <p className="max-w-[630px] text-sm/5 md:text-lg/6.5">
              ПАО «Магнитогорский металлургический комбинат» входит в число крупнейших мировых производителей стали и занимает:
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4.5">
            <div className="space-y-2.5 bg-brand-dark rounded-md p-3.5 md:p-5">
              <div className="flex items-center gap-2.5">
                <p className="font-oswald text-4xl/7 md:text-5xl/11 font-medium text-brand-brown-100">
                  13
                </p>
                <p className="uppercase text-sm/5 md:text-lg/6 font-medium">
                  МЛН <br /> ТОНН
                </p>
              </div>
              <p className="text-xs/4 lg:text-base/5">
                Объем производства стали
              </p>
            </div>
            <div className="space-y-2.5 bg-brand-dark rounded-md p-3.5 md:p-5">
              <div className="flex items-center gap-2.5">
                <p className="font-oswald text-4xl/7 md:text-5xl/11 font-medium text-brand-brown-100">
                  11.8
                </p>
                <p className="uppercase text-sm/5 md:text-lg/6 font-medium">
                  МЛН <br /> ТОНН
                </p>
              </div>
              <p className="text-xs/4 lg:text-base/5">
                Продажи металлопродукции
              </p>
            </div>
            <div className="space-y-2.5 bg-brand-dark rounded-md p-3.5 md:p-5">
              <div className="flex items-center gap-2.5">
                <p className="font-oswald text-4xl/7 md:text-5xl/11 font-medium text-brand-brown-100">
                  13
                </p>
                <p className="uppercase text-sm/5 md:text-lg/6 font-medium">
                  МЛН <br /> ТОНН
                </p>
              </div>
              <p className="text-xs/4 lg:text-base/5">
                Объем производства стали
              </p>
            </div>
            <div className="space-y-2.5 bg-brand-dark rounded-md p-3.5 md:p-5">
              <div className="flex items-center gap-2.5">
                <p className="font-oswald text-4xl/7 md:text-5xl/11 font-medium text-brand-brown-100">
                  11.8
                </p>
                <p className="uppercase text-sm/5 md:text-lg/6 font-medium">
                  МЛН <br /> ТОНН
                </p>
              </div>
              <p className="text-xs/4 lg:text-base/5">
                Продажи металлопродукции
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="relative bg-brand-dark text-white py-12 md:py-23">
        <div className="max-w-base mx-auto relative z-10 space-y-7.5 px-4 md:px-12 lg:px-4">
          <div className="space-y-4">
            <h2 className="text-white">
              С КЕМ МЫ РАБОТАЕМ
            </h2>
            <p className="max-w-[630px] text-sm/5 md:text-lg/6.5 text-brand-dark-gray-200">
              Наши активы представляют собой крупный металлургический комплекс с полным производственным циклом
            </p>
          </div>

          {/* Partner Logos - Animated Strip */}
          <div className="overflow-hidden relative">
            <div className="flex animate-scroll-left" style={{ width: 'fit-content' }}>
              {/* Triple set for seamless loop */}
              {[1, 2, 3].map((set) => (
                <div key={`set-${set}`} className="flex">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={`${set}-${item}`} className="flex-shrink-0 bg-brand-dark-gray rounded-md p-4 md:p-6 flex items-center justify-center mx-2 min-w-[200px]">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-brand-brown-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                          <span className="text-brand-dark font-bold text-lg">АМ</span>
                        </div>
                        <p className="text-white text-sm font-medium">АРСЕНАЛ МЕТИЗ</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="max-w-[630px] text-sm/5 md:text-lg/6.5 text-brand-dark-gray-200">
              Наши активы представляют собой крупный металлургический комплекс с полным производственным циклом
            </p>
            <ul className="space-y-2">
              {[1, 2, 3, 4].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm/5 md:text-lg/6.5 text-brand-dark-gray-200">
                  <div className="w-2 h-2 bg-brand-brown-100 rounded-full"></div>
                  Атомная энергетика
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative bg-brand-dark-gray text-white py-12 md:py-23">
        <div className="max-w-base mx-auto relative z-10 space-y-7.5 px-4 md:px-12 lg:px-4">
          <div className="space-y-4">
            <h2 className="max-w-[720px]">
              ПОЧЕМУ СТОИТ ВЫБРАТЬ НАС?
            </h2>
            <p className="max-w-[630px] text-sm/5 md:text-lg/6.5">
              ММК стремится обеспечить предприятие высококвалифицированными кадрами и непрерывно развивает свой профессиональный потенциал
            </p>
          </div>

          {/* Feature Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                title: "Объем производства стали",
                description: "ММК стремится обеспечить предприятие высококвалифицированными кадрами и непрерывно развивает свой профессиональный потенциал"
              },
              {
                number: "02", 
                title: "Объем производства стали",
                description: "ММК стремится обеспечить предприятие высококвалифицированными кадрами и непрерывно развивает свой профессиональный потенциал"
              },
              {
                number: "03",
                title: "Объем производства стали", 
                description: "ММК стремится обеспечить предприятие высококвалифицированными кадрами и непрерывно развивает свой профессиональный потенциал"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-brand-dark rounded-md p-6 relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-oswald text-2xl font-medium text-brand-brown-100">
                      {feature.number}
                    </span>
                    <h3 className="font-medium text-lg">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm/5 text-brand-dark-gray-200">
                    {feature.description}
                  </p>
                </div>
                {/* Background Image */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className="w-full h-full bg-gradient-to-br from-brand-brown-100 to-transparent rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative bg-brand-dark text-white py-12 md:py-23">
        <div className="max-w-base mx-auto relative z-10 space-y-7.5 px-4 md:px-12 lg:px-4 text-center">
          <div className="space-y-4">
            <h2 className="text-white">
              ОЗНАКОМЬТЕСЬ С НАШЕЙ ПРОДУКЦИИ
            </h2>
            <p className="max-w-[630px] mx-auto text-sm/5 md:text-lg/6.5 text-brand-dark-gray-200">
              вы можете ознакомиться с нашей продукцией на маркетплейсе
            </p>
          </div>

          <Button isLink href="/marketplace" variant="primary">
            Перейти в маркетплейс
          </Button>
        </div>
      </section>
    </>
  );
} 