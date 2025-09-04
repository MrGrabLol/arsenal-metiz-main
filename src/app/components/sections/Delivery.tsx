export default function Delivery() {
  return (
    <section
      id="delivery"
      className="relative bg-brand-dark-gray text-white py-12 md:py-23"
    >
      <div className="max-w-base mx-auto relative z-10 relative space-y-6 md:space-y-9 lg:space-y-12.5 px-4 md:px-12 lg:px-4">
        <h2 className="font-oswald font-medium text-center text-brand-brown-100 uppercase text-4xl/11 md:text-6xl/[70px] tracking-tight">
          Доставка
        </h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-7.5">
          <div className="space-y-6">
            <div className="h-96 lg:h-112 rounded-md overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A6e0f8662feceb9e49cd0b766c5eb5d4b0d3168f5fada33a1c949ac5d8e92c020&amp;source=constructor"
                width="630"
                height="448"
                className="size-full object-cover"
                frameBorder="0"
              ></iframe>
            </div>
            <p className="text-sm/4 md:text-base/5 lg:text-xl/6.5 pb-4 pl-4 lg:pl-6 lg:pb-6">
              г. Долгопрудный, Лихачевский просп., д.18, стр.1
            </p>
          </div>
          <div className="space-y-6">
            <div className="h-96 lg:h-112 rounded-md overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A6e0f8662feceb9e49cd0b766c5eb5d4b0d3168f5fada33a1c949ac5d8e92c020&amp;source=constructor"
                width="630"
                height="448"
                className="size-full object-cover"
                frameBorder="0"
              ></iframe>
            </div>
            <p className="text-sm/4 md:text-base/5 lg:text-xl/6.5 pb-4 pl-4 lg:pl-6 lg:pb-6">
              г. Долгопрудный, Лихачевский просп., д.18, стр.1
            </p>
          </div>
        </div>

        <p className="max-w-[877px] mx-auto text-center text-sm/4.5 md:text-base/5 lg:text-lg/6">
          Прокат производства ММК отвечает всем современным требованиям сектора
          вагоностроения. Изготовление всех существующих типов вагонов из стали
          ММК: пассажирских, грузовых-крытых, полувагонов, платформ, цистерн,
          изотермических, специального назначения
        </p>
      </div>
    </section>
  );
}
