import Image from "next/image";
import Button from "../components/shared/ui/Button";

export default function AboutPage() {

  const fields = [
    {title: 'Машиностроение', description: ' — производство техники, оборудования, металлоконструкций'},
    {title: 'Нефтегазовый сектор', description: ' — строительство и обслуживание трубопроводов, объектов добычи и переработки'},
    {title: 'Энергетика', description: ' — изготовление и ремонт трубопроводов, корпусов реакторов и металлоконструкций'},
    {title: 'Судостроение', description: ' — корпусные работы, ремонт и производство судов'},
    {title: 'Военно-промышленный комплекс', description: ' — производство бронетехники'},
  ]
  
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
        <div className="size-full bg-none lg:bg-hero-laptop 2xl:bg-hero 2xl:bg-[auto_600px] 3xl:bg-auto bg-no-repeat bg-right-bottom bg-contain lg:pt-25">
          <div className="max-w-base mx-auto relative z-10 pt-5 pb-12 md:py-16 lg:py-32 px-4 md:px-12 lg:px-4">
            <h1 className="max-w-[732px] font-oswald font-medium uppercase text-4xl/11 md:text-6xl/[70px] tracking-tight">
              <span className="text-brand-brown-100">??????????????</span>
            </h1>
            <p className="text-sm lg:text-lg leading-none mt-5 max-w-[600px]">
              ???????????????????????????????????????????????????????????????????????
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative bg-brand-dark-gray text-white py-12 md:py-23">
        <div className="max-w-base mx-auto relative z-10 space-y-7.5 px-4 md:px-12 lg:px-4">
          <div className="space-y-4">
            <h2 className="max-w-[720px]">
              <span className="text-brand-brown-100">АРСЕНАЛ МЕТИЗ</span> — ВЕДУЩИЙ ПРОИЗВОДИТЕЛЬ СВАРОЧНОЙ ПРОВОЛОКИ В РОССИИ
            </h2>
            <p className="max-w-[630px] text-sm/5 md:text-lg/6.5">
            ООО «Торговый Дом „Арсенал-Метиз“» — один из крупнейших отечественных производителей сварочной проволоки и проволоки из специальных сталей. Компания постоянно наращивает производственные мощности и расширяет ассортимент, поставляя продукцию для ведущих промышленных предприятий машиностроительного, химического, энергетического, нефтегазового и военно-промышленного комплекса по всей стране. Мы обеспечиваем стабильное качество, высокие стандарты безопасности и надёжные поставки, что делает нас надежным партнёром для ключевых отраслей российской экономики.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4.5">
            <div className="space-y-2.5 bg-brand-dark rounded-md p-3.5 md:p-5">
              <div className="flex items-center gap-2.5">
                <p className="font-oswald text-4xl/7 md:text-5xl/11 font-medium text-brand-brown-100">
                  ??
                </p>
                <p className="uppercase text-sm/5 md:text-lg/6 font-medium">
                  МЛН <br /> ТОНН
                </p>
              </div>
              <p className="text-xs/4 lg:text-base/5">
                ????????????
              </p>
            </div>
            <div className="space-y-2.5 bg-brand-dark rounded-md p-3.5 md:p-5">
              <div className="flex items-center gap-2.5">
                <p className="font-oswald text-4xl/7 md:text-5xl/11 font-medium text-brand-brown-100">
                  ??
                </p>
                <p className="uppercase text-sm/5 md:text-lg/6 font-medium">
                  МЛН <br /> ТОНН
                </p>
              </div>
              <p className="text-xs/4 lg:text-base/5">
                ????????????????
              </p>
            </div>
            <div className="space-y-2.5 bg-brand-dark rounded-md p-3.5 md:p-5">
              <div className="flex items-center gap-2.5">
                <p className="font-oswald text-4xl/7 md:text-5xl/11 font-medium text-brand-brown-100">
                  ??
                </p>
                <p className="uppercase text-sm/5 md:text-lg/6 font-medium">
                  МЛН <br /> ТОНН
                </p>
              </div>
              <p className="text-xs/4 lg:text-base/5">
                ??????????????????
              </p>
            </div>
            <div className="space-y-2.5 bg-brand-dark rounded-md p-3.5 md:p-5">
              <div className="flex items-center gap-2.5">
                <p className="font-oswald text-4xl/7 md:text-5xl/11 font-medium text-brand-brown-100">
                  ??
                </p>
                <p className="uppercase text-sm/5 md:text-lg/6 font-medium">
                  МЛН <br /> ТОНН
                </p>
              </div>
              <p className="text-xs/4 lg:text-base/5">
                ??????????
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="relative bg-brand-dark text-white py-12 md:py-23">
        <div className="max-w-base mx-auto relative z-10 space-y-7.5 px-4 md:px-12 lg:px-4">
          <div className="space-y-4">
            <h2 className="text-white">
              С КЕМ МЫ РАБОТАЕМ
            </h2>
            <p className="max-w-[630px] text-sm/5 md:text-lg/6.5 text-brand-dark-gray-200">
            «Арсенал-Метиз» — партнёр для тех, кто ценит надёжность. Мы работаем как с крупными федеральными заказчиками, так и с региональными предприятиями, обеспечивая стабильность поставок и качество продукции.            </p>
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
                      <div key={`${set}-${index}`} className={`flex-shrink-0 bg-brand-dark-gray rounded-md p-4 md:p-6 flex items-center justify-center mx-2 ${isSlider4 ? 'min-w-[240px] md:min-w-[300px]' : 'min-w-[200px] md:min-w-[250px]'}`}>
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

          <div className="space-y-4">
            <p className="max-w-[630px] text-sm/5 md:text-lg/6.5 text-brand-dark-gray-200">
            Отрасли поставок компании «Арсенал-Метиз»: </p>
            <ul className="space-y-2">
              {fields.map((item) => (
                <li key={item.title} className="flex items-center gap-2 text-sm/5 md:text-lg/6.5 text-brand-dark-gray-200">
                  <div className="w-2 h-2 bg-brand-brown-100 rounded-full"></div>
                  <strong>{item.title}</strong>{item.description}
                </li>
              ))}
            </ul>
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
            <p className="max-w-[630px] text-sm/5 md:text-lg/6.5">
              ??????????????????????????????
            </p>
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