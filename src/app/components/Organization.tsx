import Button from "./shared/ui/Button";

export default function Organization() {
  return (
    <div className="space-y-7.5">
      <div className="space-y-10 bg-brand-whitish-200 border border-brand-dark-gray/30 rounded-md p-6 lg:p-10 2xl:p-12.5">
        <div className="flex-between flex-col sm:flex-row items-start sm:items-center gap-5">
          <h2>Организация</h2>
          <Button
            variant="white"
            className="flex items-center gap-3.75 !py-3.75"
          >
            <span className="text-sm lg:text-lg leading-4.5">
              Изменить данные
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.4597 12.5508C18.1846 12.5508 17.9616 12.7749 17.9616 13.0515V17.4966C17.9606 18.3257 17.2922 18.9977 16.4672 18.9985H2.49058C1.66555 18.9977 0.99723 18.3257 0.996234 17.4966V4.45045C0.99723 3.62145 1.6656 2.94954 2.49058 2.94854H6.91336C7.18847 2.94854 7.41148 2.72441 7.41148 2.4479C7.41148 2.17155 7.18847 1.94727 6.91336 1.94727H2.49058C1.11568 1.94882 0.00154416 3.06859 0 4.45045V17.4968C0.00154416 18.8786 1.11568 19.9984 2.49058 20H16.4672C17.8421 19.9984 18.9563 18.8786 18.9578 17.4968V13.0515C18.9578 12.7749 18.7348 12.5508 18.4597 12.5508Z"
                fill="#3F3C39"
                fill-opacity="0.5"
              />
              <path
                d="M18.762 0.659865C17.8867 -0.219955 16.4674 -0.219955 15.592 0.659865L6.70523 9.59159C6.6444 9.65272 6.60036 9.72865 6.57741 9.81197L5.40878 14.0524C5.38519 14.1378 5.38458 14.2279 5.40701 14.3136C5.42943 14.3993 5.47409 14.4774 5.53642 14.5401C5.59875 14.6028 5.67651 14.6477 5.76177 14.6703C5.84702 14.6928 5.93671 14.6922 6.02166 14.6686L10.2407 13.4938C10.3236 13.4707 10.3992 13.4265 10.46 13.3653L19.3465 4.43347C20.2205 3.553 20.2205 2.12778 19.3465 1.24736L18.762 0.659865ZM7.79057 9.91701L15.0637 2.6069L17.4094 4.9644L10.1361 12.2745L7.79057 9.91701ZM7.32204 10.862L9.19596 12.7456L6.60386 13.4674L7.32204 10.862ZM18.6422 3.72552L18.1139 4.2564L15.7681 1.89869L16.2966 1.36777C16.7828 0.879045 17.5712 0.879045 18.0575 1.36777L18.6422 1.95522C19.1277 2.44454 19.1277 3.2364 18.6422 3.72552Z"
                fill="#3F3C39"
                fill-opacity="0.5"
              />
            </svg>
          </Button>
        </div>

        <div className="flex gap-12.5">
          <div className="flex-1 h-fit grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7.5 pt-7.5">
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
          </div>
        </div>
      </div>
    </div>
  );
}
