import Image from "next/image";
import Button from "../components/shared/ui/Button";

export default function AboutPage() {
  
  const sliderImages = [
    { src: '/assets/images/slider1.png', alt: 'Партнер 1' },
    { src: '/assets/images/slider2.png', alt: 'Партнер 2' },
    { src: '/assets/images/slider3.png', alt: 'Партнер 3' },
    { src: '/assets/images/slider4.png', alt: 'Партнер 4' },
    { src: '/assets/images/slider5.png', alt: 'Партнер 5' },
    { src: '/assets/images/slider6.png', alt: 'Партнер 6' },
    { src: '/assets/images/slider7.png', alt: 'Партнер 7' },
    { src: '/assets/images/slider8.png', alt: 'Партнер 8' },
  ]
  
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
        <div className="size-full bg-none lg:bg-hero-laptop lg:bg-[right_bottom_-50px] 2xl:bg-hero 2xl:bg-[right_bottom_-80px] 2xl:bg-[auto_600px] 3xl:bg-auto 3xl:bg-[right_bottom_-100px] bg-no-repeat bg-contain lg:pt-25">
          <div className="max-w-base mx-auto relative z-10 pt-5 pb-12 md:py-16 lg:py-32 px-4 md:px-12 lg:px-4">
            <h1 className="max-w-[732px] font-oswald font-medium uppercase text-4xl/11 md:text-6xl/[70px] tracking-tight">
              <span className="text-brand-brown-100">АРСЕНАЛ МЕТИЗ</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="relative bg-brand-dark-gray text-white py-12 md:py-23">
        <div className="max-w-base mx-auto relative z-10 space-y-7.5 px-4 md:px-12 lg:px-4">
          <div className="space-y-4">
            <h2 className="text-white">
              С КЕМ МЫ РАБОТАЕМ
            </h2>
            <p className="text-sm/5 md:text-lg/6.5 text-brand-dark-gray-200">
            «Арсенал-Метиз» — партнёр для тех, кто ценит надёжность. Наша сварочная проволока применяется в ключевых отраслях промышленности: машиностроении,  энергетике нефтегазовой и химической отраслях, а также используется на предприятиях военно-промышленного комплекса. Мы работаем как с крупными федеральными заказчиками, так и с региональными предприятиями, обеспечивая стабильность поставок и качество продукции.            </p>
          </div>

          {/* Partner Logos - Animated Strip */}
          <div className="overflow-hidden relative">
            <div className="flex animate-scroll-left" style={{ width: 'fit-content' }}>
              {/* Triple set for seamless loop */}
              {[1, 2, 3].map((set) => (
                <div key={`set-${set}`} className="flex">
                  {sliderImages.map((image, index) => {
                    const isSlider4 = image.src.includes('slider4');
                    return (
                      <div key={`${set}-${index}`} className={`flex-shrink-0 bg-brand-dark rounded-md p-4 md:p-6 flex items-center justify-center mx-2 ${isSlider4 ? 'min-w-[240px] md:min-w-[300px]' : 'min-w-[200px] md:min-w-[250px]'}`}>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={isSlider4 ? 240 : 200}
                          height={isSlider4 ? 120 : 100}
                          className={`object-contain w-auto ${isSlider4 ? 'max-h-24' : 'max-h-20'}`}
                        />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Metallurgical Cycle Section */}
      <section className="relative bg-brand-dark text-white py-12 md:py-23">
        <div className="max-w-base mx-auto relative z-10 space-y-7.5 px-4 md:px-12 lg:px-4">
          <div className="space-y-5">
            <h2 className="max-w-[900px]">
              ПРЕДПРИЯТИЕ ПОЛНОГО <span className="text-brand-brown-100">МЕТАЛЛУРГИЧЕСКОГО ЦИКЛА</span>
            </h2>
            <p className="max-w-[800px] text-sm/5 md:text-lg/6.5 text-brand-dark-gray-200">
              Производственная площадка «Арсенал-Метиз» объединяет все основные этапы металлургического процесса — от выплавки стали до выпуска готовой продукции.
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="text-xl md:text-2xl font-semibold">Структура предприятия включает:</h3>
            
            {/* Production stages flow */}
            <div className="overflow-x-auto pb-4 pt-4">
              <div className="flex items-start justify-start md:justify-center gap-3 md:gap-6 min-w-max px-4">
                {[
                  { number: "01", title: "Сталеплавильный участок" },
                  { number: "02", title: "Прокатный цех" },
                  { number: "03", title: "Волочильный цех" },
                  { number: "04", title: "Цех термической обработки" },
                  { number: "05", title: "Отделение намотки и рубки" }
                ].map((item, index, array) => (
                  <div key={item.number} className="flex items-start gap-3 md:gap-6">
                    {/* Circle with number and title */}
                    <div className="flex flex-col items-center gap-3 group">
                      <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-full bg-brand-brown-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="font-oswald text-2xl md:text-3xl font-bold text-brand-dark">
                          {item.number}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm font-medium text-center max-w-[120px] leading-tight">
                        {item.title}
                      </p>
                    </div>
                    
                    {/* Arrow between circles (except after last item) */}
                    {index < array.length - 1 && (
                      <div className="flex items-center h-20 md:h-24 flex-shrink-0">
                        <svg 
                          width="40" 
                          height="40" 
                          viewBox="0 0 40 40" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-brand-brown-100"
                        >
                          <path 
                            d="M20 5L35 20L20 35M5 20H35" 
                            stroke="currentColor" 
                            strokeWidth="3" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-brand-dark-gray rounded-md p-6 md:p-8 border-l-4 border-brand-brown-100">
            <p className="text-sm md:text-lg leading-relaxed text-brand-dark-gray-200">
              Такой подход обеспечивает полный контроль над качеством, стабильность свойств металла и гибкость производства под задачи заказчика.
            </p>
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
          </div>

          {/* Feature Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                title: "Стабильное качество и контроль на каждом этапе",
                description: "Вся продукция соответствует требованиям ГОСТ и международных стандартов. Строгий контроль качества гарантирует надёжность каждой партии."
              },
              {
                number: "02", 
                title: "Широкий сортамент продукции",
                description: "Мы производим сварочную проволоку из легированной, высоколегированной и жаростойкой стали, из прецизионных сплавов с высоким электрическим сопротивлением  и из никелевых сплавов для разных технологий сварки. Помимо этого ассортимент нашей компании представлен электродами и плавленым флюсом."
              },
              {
                number: "03",
                title: "Опыт и доверие партнёров", 
                description: "С нами работают десятки предприятий по всей России — от крупных холдингов до небольших региональных компаний. Мы ценим доверие партнёров и обеспечиваем стабильность поставок."
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

          {/* Modern Laboratory Section - Integrated */}
          <div className="bg-brand-dark rounded-lg p-6 md:p-10 lg:p-12 relative overflow-hidden mt-6">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-brown-100 opacity-5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 space-y-6 md:space-y-8">
              {/* Header with icon */}
              <div className="flex items-center gap-4 md:gap-6">
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-brown-100 flex items-center justify-center">
                  <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 md:w-10 md:h-10 text-brand-dark"
                  >
                    <path 
                      d="M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-oswald font-medium uppercase leading-tight">
                  СОБСТВЕННАЯ СОВРЕМЕННАЯ <span className="text-brand-brown-100">ЛАБОРАТОРИЯ</span>
                </h2>
              </div>

              {/* Description */}
              <div className="space-y-4 md:space-y-5">
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-brand-dark-gray-200 max-w-4xl">
                  Лабораторный комплекс предприятия оснащён современным оборудованием для проведения химического анализа и физико-механических испытаний.
                </p>
                
                {/* Highlighted text with emphasis */}
                <div className="bg-brand-dark-gray rounded-md p-5 md:p-6 border-l-4 border-brand-brown-100">
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                    Контроль качества осуществляется <span className="font-bold text-brand-brown-100">на всех этапах технологического процесса</span>, что гарантирует соответствие продукции требованиям государственных и международных стандартов.
                  </p>
                </div>
              </div>

              {/* Quality badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {[
                  { label: "Химический анализ", icon: "🔬" },
                  { label: "Механические испытания", icon: "⚙️" },
                  { label: "ГОСТ стандарты", icon: "✓" },
                  { label: "Международные нормы", icon: "🌐" }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-brand-dark-gray rounded-md p-4 text-center space-y-2 hover:bg-opacity-80 transition-all duration-300"
                  >
                    <div className="text-2xl md:text-3xl">{item.icon}</div>
                    <p className="text-xs md:text-sm font-medium leading-tight">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
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
              Вы можете ознакомиться с нашей продукцией в нашем магазине
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