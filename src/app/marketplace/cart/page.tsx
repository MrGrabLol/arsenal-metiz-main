import CartProduct from "@/app/components/CartProduct";
import Button from "@/app/components/shared/ui/Button";
import Image from "next/image";

export default function page() {
  return (
    <div className="bg-brand-whitish-200">
      <div className="max-w-[1920px] mx-auto bg-white space-y-5 pt-28 lg:pt-56.5 pb-12.5 sm:px-7.5">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 md:gap-4 lg:gap-7.5 text-xs sm:text-sm lg:text-2xl/6 font-medium text-brand-dark-gray/50 pl-4 sm:pl-0">
          <span>Главная</span>
          <Image
            src="/assets/svgs/arrow.svg"
            alt="Arrow icon"
            width={37}
            height={18}
            className="w-4 h-2 md:w-6 md:h-3 lg:size-auto"
          />
          <span className="text-gray-900">Корзина</span>
        </div>

        <div className="space-y-7.5 lg:space-y-10 2xl:space-y-12.5 bg-brand-whitish-200 border border-brand-dark-gray/30 sm:rounded-md p-6 lg:p-9 2xl:p-12.5">
          <div className="space-y-3.75">
            <h2>Ваша корзина</h2>
            <p className="text-2xl/6 font-medium">
              <span className="text-brand-dark-gray/50">Всего товаров:</span> 3
            </p>
          </div>

          {/* Products */}
          <div className="space-y-7.5 lg:space-y-10 2xl:space-y-12.5">
            <CartProduct />
            <CartProduct />
            <CartProduct />
          </div>

          <div className="space-y-6 sm:space-y-7.5">
            <p className="text-2xl/6 sm:text-[35px]/9 font-bold">
              Итого: 295 000 ₽
            </p>
            <div className="flex items-center gap-5">
              <Button variant="primary">Оформить заказ</Button>
              <Button variant="outline">Продолжить покупки</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
