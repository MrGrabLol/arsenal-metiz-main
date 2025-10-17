import Link from "next/link";
import Image from "next/image";

export default function CartProduct() {
  return (
    <Link
      href="/marketplace/1"
      className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative bg-white border border-brand-dark-gray-100/30 rounded-md smooth-200 p-3 sm:p-4"
    >
      {/* Remove Btn */}
      <button 
        className="shrink-0 absolute flex-center bg-brand-whitish-200 border border-brand-dark-gray/30 rounded-full cursor-pointer hover:bg-white smooth-200"
        style={{ 
          width: '20px', 
          height: '20px', 
          top: '-10px', 
          right: '-10px' 
        }}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '10px', height: '10px' }}
        >
          <path
            d="M14.7035 1.81301C14.8959 1.61413 15.0024 1.34776 15 1.07127C14.9976 0.794776 14.8865 0.530291 14.6906 0.334776C14.4948 0.139261 14.2298 0.0283583 13.9528 0.0259557C13.6759 0.0235531 13.409 0.129842 13.2098 0.32193L7.51298 6.00892L1.81615 0.32193C1.71871 0.221213 1.60214 0.140879 1.47327 0.0856126C1.34439 0.0303466 1.20578 0.00125653 1.06552 3.98153e-05C0.925257 -0.0011769 0.786159 0.0255039 0.656339 0.0785257C0.526519 0.131548 0.408576 0.209848 0.309394 0.308859C0.210212 0.407871 0.131775 0.525609 0.0786616 0.655205C0.025548 0.784801 -0.00117894 0.923659 3.98842e-05 1.06368C0.0012587 1.20369 0.0303991 1.34207 0.0857608 1.47072C0.141122 1.59938 0.221596 1.71574 0.322487 1.81301L6.01932 7.5L0.322487 13.187C0.221596 13.2843 0.141122 13.4006 0.0857608 13.5293C0.0303991 13.6579 0.0012587 13.7963 3.98842e-05 13.9363C-0.00117894 14.0763 0.025548 14.2152 0.0786616 14.3448C0.131775 14.4744 0.210212 14.5921 0.309394 14.6911C0.408576 14.7902 0.526519 14.8685 0.656339 14.9215C0.786159 14.9745 0.925257 15.0012 1.06552 15C1.20578 14.9987 1.34439 14.9697 1.47327 14.9144C1.60214 14.8591 1.71871 14.7788 1.81615 14.6781L7.51298 8.99108L13.2098 14.6781C13.409 14.8702 13.6759 14.9764 13.9528 14.974C14.2298 14.9716 14.4948 14.8607 14.6906 14.6652C14.8865 14.4697 14.9976 14.2052 15 13.9287C15.0024 13.6522 14.8959 13.3859 14.7035 13.187L9.00664 7.5L14.7035 1.81301Z"
            fill="#3F3C39"
            fillOpacity="0.5"
          />
        </svg>
      </button>

      {/* Product Infos */}
      <div className="flex flex-col justify-center space-y-2">
        {/* Name */}
        <h4 className="font-medium text-lg/5 lg:text-xl/5">
          Проволока СВ08Г2С-О, ГОСТ 123-45
        </h4>
        {/* Details */}
        <ul className="space-y-1.5 sm:space-y-2 text-sm">
          <li className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/assets/svgs/diameters.svg"
              alt="Diameters"
              width={35}
              height={35}
              className="size-5 sm:size-6"
            />
            <p>
              Диаметр: <span className="font-medium">1.20 мм</span>
            </p>
          </li>
          <li className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/assets/svgs/packaging.svg"
              alt="Package"
              width={33}
              height={31}
              className="size-5 sm:size-6"
            />
            <p>
              Упаковка: <span className="font-medium">Д300</span>
            </p>
          </li>
          <li className="pl-7 sm:pl-8">
            <p>
              Количество: <span className="font-medium">800 кг</span>
            </p>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-end sm:space-y-4">
        {/* Product Image */}
        <div className="size-16 sm:size-20 shrink-0 absolute sm:static bottom-3 left-3 sm:left-auto sm:top-4 sm:right-4 flex-center bg-brand-whitish-200 rounded-md">
          <Image
            src="/assets/svgs/product.svg"
            alt="Product"
            width={42}
            height={48}
            className="w-8 h-9 sm:size-auto"
          />
        </div>
        {/* Cost */}
        <p className="whitespace-nowrap text-base sm:text-lg font-medium text-end pt-12 sm:pt-0">
          От 100000 ₽/Т
        </p>
      </div>
    </Link>
  );
}
