"use client";

import Image from "next/image";
import Button from "../components/shared/ui/Button";

// Моковые данные для вакансий
const mockVacancies = [
  {
    id: 1,
    title: "Инженер-технолог сварочного производства",
    description: "Разработка и внедрение новых технологических процессов сварочного производства, контроль качества продукции, оптимизация производственных процессов.",
    date: "2024-01-15",
    salary: "от 80 000 ₽",
    experience: "от 3 лет",
    location: "г. Солнечногорск"
  },
  {
    id: 2,
    title: "Менеджер по продажам",
    description: "Работа с ключевыми клиентами, развитие продаж сварочных материалов, проведение переговоров и заключение договоров.",
    date: "2024-01-12",
    salary: "от 70 000 ₽ + %",
    experience: "от 2 лет",
    location: "г. Москва"
  },
  {
    id: 3,
    title: "Специалист по контролю качества",
    description: "Контроль качества продукции на всех этапах производства, проведение испытаний, работа с документацией по качеству.",
    date: "2024-01-10",
    salary: "от 65 000 ₽",
    experience: "от 2 лет",
    location: "г. Солнечногорск"
  },
  {
    id: 4,
    title: "Электрогазосварщик",
    description: "Выполнение сварочных работ различной сложности, работа с различными видами сварочного оборудования.",
    date: "2024-01-08",
    salary: "от 75 000 ₽",
    experience: "от 1 года",
    location: "г. Солнечногорск"
  },
  {
    id: 5,
    title: "Маркетолог",
    description: "Разработка и реализация маркетинговых стратегий, проведение рекламных кампаний, анализ рынка и конкурентов.",
    date: "2024-01-05",
    salary: "от 85 000 ₽",
    experience: "от 3 лет",
    location: "г. Москва"
  },
  {
    id: 6,
    title: "Логист",
    description: "Организация поставок продукции, работа с транспортными компаниями, оптимизация логистических процессов.",
    date: "2024-01-03",
    salary: "от 60 000 ₽",
    experience: "от 2 лет",
    location: "г. Солнечногорск"
  }
];

export default function CareerPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <>
      {/* Global Pattern Image */}
      <div className="absolute left-0 top-0 z-[1] hidden lg:block">
        <div className="w-64 h-full bg-gradient-to-b from-brand-dark to-transparent opacity-20"></div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white pt-32 pb-16">
        <div className="max-w-base mx-auto relative z-10 px-4 md:px-12 lg:px-4">
          <div className="text-center">
            <h1 className="font-oswald font-medium uppercase text-4xl/11 md:text-6xl/[70px] tracking-tight mb-6">
              <span className="text-brand-brown-100">Карьера</span> в нашей компании
            </h1>
            <p className="max-w-[600px] mx-auto text-sm lg:text-lg leading-relaxed text-brand-dark-gray-200">
              Присоединяйтесь к команде профессионалов и станьте частью успешной истории
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="relative bg-brand-dark-gray text-white py-16">
        <div className="max-w-base mx-auto relative z-10 px-4 md:px-12 lg:px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-oswald font-medium uppercase mb-8">
              Почему у нас работать хорошо?
            </h2>
            <div className="max-w-4xl mx-auto text-lg leading-relaxed text-brand-dark-gray-200">
              <p className="mb-6">
                Мы создаем условия для профессионального роста и развития каждого сотрудника. 
                В нашей компании вы найдете стабильность, интересные задачи и возможность реализовать свой потенциал.
              </p>
              <p>
                Мы ценим профессионализм, инициативность и стремление к совершенству. 
                Присоединяйтесь к команде, которая меняет будущее металлургической отрасли!
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "Стабильность",
                description: "Работаем на рынке более 20 лет, стабильные зарплаты и социальные гарантии"
              },
              {
                title: "Развитие",
                description: "Обучение и повышение квалификации, карьерный рост внутри компании"
              },
              {
                title: "Команда",
                description: "Дружный коллектив профессионалов, готовых поддержать и помочь"
              },
              {
                title: "Инновации",
                description: "Работа с передовыми технологиями и участие в интересных проектах"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-brand-dark rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-brown-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-brand-dark font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{benefit.title}</h3>
                <p className="text-brand-dark-gray-200 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vacancies Section */}
      <section id="vacancies-section" className="relative bg-brand-dark py-16">
        <div className="max-w-base mx-auto relative z-10 px-4 md:px-12 lg:px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-oswald font-medium uppercase text-white mb-4">
              Открытые вакансии
            </h2>
            <p className="text-lg text-brand-dark-gray-200 max-w-2xl mx-auto">
              Выберите подходящую вакансию и отправьте свое резюме. Мы рассмотрим каждого кандидата!
            </p>
          </div>

          {/* Vacancies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockVacancies.map((vacancy) => (
              <div key={vacancy.id} className="bg-brand-dark-gray rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
                        {vacancy.title}
                      </h3>
                      <p className="text-brand-brown-100 text-sm font-medium">
                        {vacancy.location}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-brand-dark-gray-200 text-sm leading-relaxed mb-4 line-clamp-3">
                    {vacancy.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-brand-dark-gray-200 text-xs">Опыт:</span>
                      <span className="text-white text-sm font-medium">{vacancy.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-brand-dark-gray-200 text-xs">Дата:</span>
                      <span className="text-white text-sm font-medium">{formatDate(vacancy.date)}</span>
                    </div>
                  </div>

                  {/* Salary and Apply */}
                  <div className="flex items-center justify-between">
                    <div className="text-brand-brown-100 font-semibold text-lg">
                      {vacancy.salary}
                    </div>
                    <Button 
                      variant="primary"
                      onClick={() => alert('Функция отправки резюме будет добавлена позже')}
                      className="px-6 py-2 text-sm"
                    >
                      Откликнуться
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="text-center mt-16">
            <div className="bg-brand-dark-gray rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-white text-2xl font-oswald font-medium uppercase mb-4">
                Не нашли подходящую вакансию?
              </h3>
              <p className="text-brand-dark-gray-200 text-lg mb-6">
                Отправьте свое резюме в свободной форме, и мы рассмотрим вас для будущих вакансий
              </p>
              <Button 
                variant="primary"
                onClick={() => alert('Функция отправки резюме будет добавлена позже')}
                className="px-8 py-4 text-lg"
              >
                Отправить резюме
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 