import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  bg?: string;
}

export default function ProductCard({ bg = "gray" }: ProductCardProps) {

  return (
    <Link
      href="/marketplace/1"
      className={`block relative ${
        bg === "white" ? "bg-white" : "bg-brand-whitish-200"
      } border border-brand-dark-gray-100/30 rounded-md ${
        bg === "gray" ? "hover:-translate-y-5" : ""
      }       smooth-200 p-3`}
    >
      <div
        className={`size-16 shrink absolute top-3 right-3 flex-center ${
          bg === "white" ? "bg-brand-whitish-200" : "bg-white"
        } rounded-md`}
      >
        <Image
          src="/assets/svgs/product.svg"
          alt="Product"
          width={26}
          height={30}
        />
      </div>

      {/* Product Infos */}
      <div className="space-y-3">
        {/* Name */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1">
            <span className="size-1.5 flex-center bg-white rounded-2">
              <span className="size-1 bg-brand-green rounded-2"></span>
            </span>
            <p className="text-xs">В наличии</p>
          </div>
          <h4 className="font-medium text-base/5 lg:text-lg/5 uppercase">
            СВ-08Г2С-О
          </h4>
        </div>

        {/* Details */}
        <ul className="space-y-2 lg:space-y-2.5 lg:text-sm/4.5">
          <li className="flex items-center gap-2">
            <Image
              src="/assets/svgs/certificate.svg"
              alt="Document"
              width={16}
              height={18}
            />
            <p className="uppercase text-xs">ГОСТ 1234</p>
          </li>
          <li className="flex items-center gap-2">
            <Image
              src="/assets/svgs/factory.svg"
              alt="Document"
              width={16}
              height={18}
            />
            <p className="uppercase text-xs">ФЕРРОТРЕЙД</p>
          </li>
          <li className="flex items-center gap-2">
            <Image
              src="/assets/svgs/diameters.svg"
              alt="Document"
              width={16}
              height={18}
            />
            <p className="text-xs">Диаметры: 1.0, 1.20, 1.60, 2.0, 3.0</p>
          </li>
        </ul>

        {/* Cost */}
        <div className="w-fit bg-white rounded-md p-1.5">
          <p className="text-base/5 font-medium">От 100000 ₽/Т</p>
        </div>
      </div>
    </Link>
  );
}
