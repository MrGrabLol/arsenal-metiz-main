export default function Delivery() {
  return (
    <section
      id="delivery"
      className="relative bg-brand-dark-gray text-white py-12 md:py-23"
    >
      <div className="max-w-base mx-auto relative z-10 relative space-y-6 md:space-y-9 lg:space-y-12.5 px-4 md:px-12 lg:px-4">
        <h2 className="font-oswald mb-6 font-medium text-center text-brand-brown-100 uppercase text-4xl/11 md:text-6xl/[70px] tracking-tight">
          Доставка
        </h2>

        <div className="max-w-4xl mx-auto text-center mb-8">
          <p className="text-sm/5 md:text-base/6 lg:text-lg/7 text-brand-dark-gray-200">
            Поставка продукции «Арсенал-Метиз» осуществляется по всей территории России. Доставка возможна до терминалов транспортных компаний в вашем регионе или любым удобным способом по согласованию. Также доступен самовывоз со склада предприятия. Мы подбираем оптимальные условия транспортировки, обеспечивая сохранность продукции и своевременные поставки.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-7.5">
          <div className="space-y-6">
            <div className="h-96 lg:h-112 rounded-md overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Aed868e724b7e87b1fb5efa4b569d3672af4465b2346476cc55325d56224f0879&amp;source=constructor"
                width="630"
                height="448"
                className="size-full object-cover"
                frameBorder="0"
              ></iframe>
            </div>
            <p className="text-sm/4 md:text-base/5 lg:text-xl/6.5 pb-4 pl-4 lg:pl-6 lg:pb-6">
              Московская обл., Солнечногорск, ул. Революции, д.3
            </p>
          </div>
          <div className="space-y-6">
            <div className="h-96 lg:h-112 rounded-md overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae5876a555ba84dbe045c8ea2bbda4643735c41ac531b9924a0638ee71490cb96&amp;source=constructor"
                width="630"
                height="448"
                className="size-full object-cover"
                frameBorder="0"
              ></iframe>
            </div>
            <p className="text-sm/4 md:text-base/5 lg:text-xl/6.5 pb-4 pl-4 lg:pl-6 lg:pb-6">
              Республика Башкортостан, Белорецк, ул. В. Блюхера, 68/2
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
