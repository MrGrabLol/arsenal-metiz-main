import Image from "next/image";
import Button from "../shared/ui/Button";

export default function Produce() {
  return (
    <section
      id="statistics"
      className="relative bg-brand-dark-gray text-white py-12 md:py-23"
    >
      <div className="max-w-base mx-auto relative z-10 space-y-10 md:space-y-12 px-4 md:px-12 lg:px-4">
        {/* Header */}
        <div className="space-y-5">
          <h2 className="max-w-[1000px]">
            АРСЕНАЛ-МЕТИЗ:{" "}
            <span className="text-brand-brown-100">
              ШИРОКИЙ СОРТАМЕНТ СВАРОЧНЫХ МАТЕРИАЛОВ
            </span>
          </h2>
        </div>

        {/* Main Content Card */}
        <div className="bg-brand-dark rounded-lg p-6 md:p-10 lg:p-12 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-brown-100 opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-brown-100 opacity-3 rounded-full blur-3xl"></div>

          <div className="relative z-10 space-y-8">
            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-brand-dark-gray-200">
              Мы выпускаем сварочную проволоку из легированной, высоколегированной и жаростойкой стали, из прецизионных сплавов с высоким электрическим сопротивлением и из никелевых сплавов, также электроды и плавленый флюс. Ассортимент охватывает десятки марок для работы с низкоуглеродистыми, легированными и нержавеющими сталями, включая специальные позиции для сложных изделий и высоконагруженных узлов. Такой выбор обеспечивает точное соответствие материалов конкретным технологиям сварочного производства.
            </p>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Feature 1 - Certifications */}
              <div className="bg-brand-dark-gray rounded-md p-6 border-l-4 border-brand-brown-100 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-brown-100 flex items-center justify-center">
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-brand-dark"
                    >
                      <path 
                        d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">Сертификация</h3>
                </div>
                <p className="text-sm md:text-base leading-relaxed">
                  Наша сварочная проволока сертифицирована по стандартам <span className="font-semibold text-brand-brown-100">РСТ, ISO, РМРС, НАКС</span> и <span className="font-semibold text-brand-brown-100">ЦНИИ «Прометей»</span>
                </p>
              </div>

              {/* Feature 2 - Geography */}
              <div className="bg-brand-dark-gray rounded-md p-6 border-l-4 border-brand-brown-100 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-brown-100 flex items-center justify-center">
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-brand-dark"
                    >
                      <path 
                        d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" 
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">География поставок</h3>
                </div>
                <p className="text-sm md:text-base leading-relaxed">
                  География поставок охватывает <span className="font-semibold text-brand-brown-100">всю территорию России</span>
                </p>
              </div>
            </div>

            {/* Product Categories */}
            <div className="pt-4">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">Основные категории продукции:</h3>
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { 
                    icon: "🔗",
                    title: "Сварочная проволока",
                    description: "Легированная, высоколегированная, жаростойкая"
                  },
                  { 
                    icon: "⚡",
                    title: "Сварочные электроды",
                    description: "Для различных типов сварки"
                  },
                  { 
                    icon: "🔥",
                    title: "Плавленый флюс",
                    description: "Для автоматической сварки"
                  }
                ].map((product, index) => (
                  <div 
                    key={index}
                    className="bg-brand-dark-gray rounded-md p-5 text-center space-y-2 hover:bg-opacity-70 transition-all duration-300 group"
                  >
                    <div className="text-3xl md:text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {product.icon}
                    </div>
                    <h4 className="font-semibold text-base md:text-lg text-white">{product.title}</h4>
                    <p className="text-xs md:text-sm text-brand-dark-gray-200 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full sm:w-auto flex flex-col xs:flex-row items-center gap-3.5 md:gap-5">
          <Button
            isLink
            href="/our-product"
            className="w-full xs:w-auto"
            variant="primary"
          >
            Продукция
          </Button>
          <Button
            isLink
            href="/marketplace"
            variant="secondary"
            className="w-full xs:w-auto"
          >
            Маркетплейс
          </Button>
        </div>
      </div>
    </section>
  );
}
