import CartProduct from "@/app/components/CartProduct";
import Button from "@/app/components/shared/ui/Button";
import Image from "next/image";

export default function page() {
  return (
    <div className="bg-brand-whitish-200">
      <div className="max-w-6xl mx-auto bg-white space-y-3 pt-30 lg:pt-46 pb-8 px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 md:gap-3 text-xs sm:text-sm font-medium text-brand-dark-gray/50">
          <span>Главная</span>
          <Image
            src="/assets/svgs/arrow.svg"
            alt="Arrow icon"
            width={37}
            height={18}
            className="w-3 h-1.5 md:w-4 md:h-2"
          />
          <span className="text-gray-900">Корзина</span>
        </div>

        <div className="space-y-4 lg:space-y-5 bg-brand-whitish-200 border border-brand-dark-gray/30 sm:rounded-md p-4 lg:p-5">
          <div className="space-y-2">
            <h2 className="text-xl lg:text-2xl">Ваша корзина</h2>
            <p className="text-lg lg:text-xl font-medium">
              <span className="text-brand-dark-gray/50">Всего товаров:</span> 3
            </p>
          </div>

          {/* Products */}
          <div className="space-y-3 lg:space-y-4">
            <CartProduct />
            <CartProduct />
            <CartProduct />
          </div>

          <div className="space-y-3 sm:space-y-4">
            <p className="text-xl sm:text-2xl font-bold">
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
