import Button from "@/app/components/shared/ui/Button";

export default function page() {
  return (
    <>
      <section className="pt-28 lg:pt-56.5 pb-12.5">
        <div className="max-w-secondary mx-auto space-y-10 px-4">
          <h2 className="text-center ">Оформление заказа</h2>
          <div className="space-y-10 bg-brand-whitish-200 rounded-md p-6 lg:p-9 2xl:p-12.5">
            {/* Tabs */}
            <div className="flex items-center gap-5">
              <Button variant="white" className="lg:!text-lg/4.5">
                Физическое лицо
              </Button>
              <Button variant="primary-rounded" className="lg:!text-lg/4.5">
                Юридическое лицо
              </Button>
            </div>

            {/* Form */}
            <form action="#" className="space-y-6 lg:space-y-10">
              <div className="grid sm:grid-cols-2 gap-5">
                <label
                  htmlFor="check"
                  className="sm:col-span-2 flex items-center gap-2.5 cursor-pointer"
                >
                  <input type="checkbox" className="hidden" id="check" />
                  <div className="size-3.75 flex-center bg-white border border-brand-dark-gray/30 rounded-[2px]"></div>
                  <p className="sm:text-xl/5">
                    Оформить коммерческое предложение
                  </p>
                </label>
                <label htmlFor="company" className="block">
                  <span className="md:text-xl/5 font-medium">
                    Название компании
                  </span>
                  <input
                    id="company"
                    type="text"
                    placeholder="Арсенал Метиз"
                    className="h-12 lg:h-13.5 2xl:h-15 w-full leading-4 md:text-lg/4.5 bg-white placeholder:text-brand-dark/50 rounded-md outline-none border border-transparent focus:border-brand-dark-gray/30 mt-2.5 px-4 md:px-5"
                  />
                </label>
                <label htmlFor="inn" className="block">
                  <span className="md:text-xl/5 font-medium">ИНН</span>
                  <input
                    id="inn"
                    type="text"
                    placeholder="7743013902"
                    className="h-12 lg:h-13.5 2xl:h-15 w-full leading-4 md:text-lg/4.5 bg-white placeholder:text-brand-dark/50 rounded-md outline-none border border-transparent focus:border-brand-dark-gray/30 mt-2.5 px-4 md:px-5"
                  />
                </label>
                <label htmlFor="kpp" className="block">
                  <span className="md:text-xl/5 font-medium">КПП</span>
                  <input
                    id="kpp"
                    type="text"
                    placeholder="770201001"
                    className="h-12 lg:h-13.5 2xl:h-15 w-full leading-4 md:text-lg/4.5 bg-white placeholder:text-brand-dark/50 rounded-md outline-none border border-transparent focus:border-brand-dark-gray/30 mt-2.5 px-4 md:px-5"
                  />
                </label>
                <label htmlFor="address" className="block">
                  <span className="md:text-xl/5 font-medium">
                    Юридический адрес
                  </span>
                  <input
                    id="address"
                    type="text"
                    placeholder="г. Долгопрудный, Лихачевский просп., д.18"
                    className="h-12 lg:h-13.5 2xl:h-15 w-full leading-4 md:text-lg/4.5 bg-white placeholder:text-brand-dark/50 rounded-md outline-none border border-transparent focus:border-brand-dark-gray/30 mt-2.5 px-4 md:px-5"
                  />
                </label>
                <label htmlFor="email" className="block">
                  <span className="md:text-xl/5 font-medium">Email</span>
                  <input
                    id="email"
                    type="email"
                    placeholder="info@arsenal-metiz.ru"
                    className="h-12 lg:h-13.5 2xl:h-15 w-full leading-4 md:text-lg/4.5 bg-white placeholder:text-brand-dark/50 rounded-md outline-none border border-transparent focus:border-brand-dark-gray/30 mt-2.5 px-4 md:px-5"
                  />
                </label>
                <label htmlFor="phone" className="block">
                  <span className="md:text-xl/5 font-medium">
                    Номер телефона
                  </span>
                  <input
                    id="phone"
                    type="email"
                    placeholder="8 (990) 000-00-00"
                    className="h-12 lg:h-13.5 2xl:h-15 w-full leading-4 md:text-lg/4.5 bg-white placeholder:text-brand-dark/50 rounded-md outline-none border border-transparent focus:border-brand-dark-gray/30 mt-2.5 px-4 md:px-5"
                  />
                </label>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-12.5">
                {/* 1 */}
                <div className="space-y-5 mt-6">
                  <input
                    type="radio"
                    name="options"
                    id="leftOption"
                    className="hidden"
                    defaultChecked
                  />
                  <label
                    htmlFor="leftOption"
                    className="flex items-center gap-2.5 cursor-pointer"
                  >
                    <div className="size-4 shrink-0 flex-center bg-white border border-brand-dark-gray/30 rounded-2 rounded-2">
                      <span className="size-3.75 hidden bg-brand-brown rounded-2 smooth-200"></span>
                    </div>
                    <span className="font-medium text-xl/5 sm:text-2xl/6">
                      Самовывоз:
                    </span>
                  </label>

                  <div className="flex flex-col gap-2.5 leading-4 pl-6">
                    {/* All */}
                    <input
                      type="radio"
                      name="address"
                      id="address1"
                      className="hidden"
                      defaultChecked
                    />
                    <label
                      htmlFor="address1"
                      className="flex items-center gap-2.5 cursor-pointer"
                    >
                      <div className="size-3.75 shrink-0 flex-center bg-white border border-brand-dark-gray/30 rounded-2">
                        <span className="size-3 hidden bg-brand-brown rounded-2 smooth-200"></span>
                      </div>
                      <span>Матросово (адрес)</span>
                    </label>
                    <input
                      type="radio"
                      name="address"
                      id="address2"
                      className="hidden peer/exist"
                    />
                    <label
                      htmlFor="address2"
                      className="flex items-center gap-2.5 cursor-pointer"
                    >
                      <div className="size-3.75 shrink-0 flex-center bg-white border border-brand-dark-gray/30 rounded-2">
                        <span className="size-3 hidden bg-brand-brown rounded-2 smooth-200"></span>
                      </div>
                      <span>Белорецк (адрес)</span>
                    </label>
                  </div>
                </div>
                {/* 2 */}
                <div className="space-y-5 mt-6">
                  <input
                    type="radio"
                    name="options"
                    id="rightOption"
                    className="hidden"
                  />
                  <label
                    htmlFor="rightOption"
                    className="flex items-center gap-2.5 cursor-pointer"
                  >
                    <div className="size-4 shrink-0 flex-center bg-white border border-brand-dark-gray/30 rounded-2 rounded-2">
                      <span className="size-3.75 hidden bg-brand-brown rounded-2 smooth-200"></span>
                    </div>
                    <span className="font-medium text-xl/5 sm:text-2xl/6">
                      Доставка:
                    </span>
                  </label>

                  <div className="flex flex-col gap-2.5 leading-4 pl-6">
                    {/* All */}
                    <input
                      type="radio"
                      name="toAddress"
                      id="toAddress"
                      className="hidden"
                      defaultChecked
                    />
                    <label
                      htmlFor="toAddress"
                      className="flex items-center gap-2.5 cursor-pointer"
                    >
                      <div className="size-3.75 shrink-0 flex-center bg-white border border-brand-dark-gray/30 rounded-2">
                        <span className="size-3 hidden bg-brand-brown rounded-2 smooth-200"></span>
                      </div>
                      <span>Матросово (адрес)</span>
                    </label>
                    <input
                      type="radio"
                      name="toAddress"
                      id="toTerminal"
                      className="hidden peer/exist"
                    />
                    <label
                      htmlFor="toTerminal"
                      className="flex items-center gap-2.5 cursor-pointer"
                    >
                      <div className="size-3.75 shrink-0 flex-center bg-white border border-brand-dark-gray/30 rounded-2">
                        <span className="size-3 hidden bg-brand-brown rounded-2 smooth-200"></span>
                      </div>
                      <span>Белорецк (адрес)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <div className="space-y-6 sm:space-y-7.5">
                  <p className="text-2xl/6 sm:text-[35px]/9 font-bold">
                    Итого: 295 000 ₽
                  </p>
                  <Button variant="primary">Оформить заказ</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
