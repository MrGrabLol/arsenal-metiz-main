"use client";

import { useState } from "react";
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
    title: "Оператор линии по производству сварочной проволоки",
    description: "Управление технологической линией, контроль качества продукции на этапах производства, соблюдение норм безопасности.",
    date: "2024-01-12",
    salary: "от 55 000 ₽",
    experience: "от 1 года",
    location: "г. Солнечногорск"
  },
  {
    id: 3,
    title: "Инженер по качеству",
    description: "Проведение входного и выходного контроля продукции, оформление документации, взаимодействие с надзорными органами и отделом производства.",
    date: "2024-01-10",
    salary: "от 70 000 ₽",
    experience: "от 2 лет",
    location: "г. Солнечногорск"
  },
  {
    id: 4,
    title: "Менеджер по продажам (B2B)",
    description: "Активное развитие клиентской базы, сопровождение сделок, участие в выставках и переговорах, выполнение плана продаж.",
    date: "2024-01-08",
    salary: "от 90 000 ₽ + бонусы",
    experience: "от 1 года",
    location: "г. Москва"
  },
  {
    id: 5,
    title: "Специалист по охране труда и промышленной безопасности",
    description: "Контроль соблюдения норм безопасности, проведение инструктажей, разработка мероприятий по улучшению условий труда.",
    date: "2024-01-03",
    salary: "от 75 000 ₽",
    experience: "от 2 лет",
    location: "г. Солнечногорск"
  }
];

export default function CareerPage() {
  const [applyModalVacancy, setApplyModalVacancy] = useState<string | null>(null);
  const [isSendResumeOpen, setIsSendResumeOpen] = useState(false);

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
              <span className="text-brand-brown-100">Карьера</span> в «АРСЕНАЛ-МЕТИЗ»
            </h1>
            <p className="max-w-[600px] mx-auto text-sm lg:text-lg leading-relaxed text-brand-dark-gray-200">
            Присоединяйтесь к нашей команде и станьте частью предприятия, которое создает надежные решения для ключевых отраслей промышленности.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="relative bg-brand-dark-gray text-white py-16">
        <div className="max-w-base mx-auto relative z-10 px-4 md:px-12 lg:px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-oswald font-medium uppercase mb-8">
            Команда, которой можно гордиться
            </h2>
            <div className="max-w-4xl mx-auto text-lg leading-relaxed text-brand-dark-gray-200">
              <p className="mb-6">
                Мы предлагаем сотрудникам стабильность, современные условия труда и возможности для профессионального роста. 
                У нас ценят инициативность, ответственность и стремление к развитию.
              </p>
              <p className="mb-6">
                В «Арсенал-Метиз» вы сможете реализовать свой потенциал, участвуя в интересных производственных и инженерных проектах, 
                повышать квалификацию и расти вместе с компанией.
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "Стабильность и уверенность",
                description: "Мы предлагаем официальное трудоустройство, достойную оплату и социальные гарантии"
              },
              {
                title: "Профессиональный рост",
                description: "Система обучения, наставничество и возможности повышения квалификации для сотрудников всех уровней"
              },
              {
                title: "Современные условия труда",
                description: "Безопасное производство, современное оборудование и комфортная рабочая среда"
              },
              {
                title: "Сильная команда",
                description: "У нас ценят инициативность и командный дух — вместе мы достигаем высоких результатов"
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
            Мы открыты для талантливых специалистов — выберите подходящую вакансию и отправьте своё резюме.            </p>
          </div>

          {/* Vacancies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockVacancies.map((vacancy) => (
              <div key={vacancy.id} className="bg-brand-dark-gray rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] h-full">
                <div className="p-6 h-full flex flex-col">
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
                  <div className="flex items-center justify-between mt-auto">
                    <div className="text-brand-brown-100 font-semibold text-lg">
                      {vacancy.salary}
                    </div>
                    <Button 
                      variant="primary"
                      onClick={() => setApplyModalVacancy(vacancy.title)}
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
              Отправьте своё резюме на нашу почту 📩 — мы обязательно рассмотрим его и свяжемся с вами при появлении подходящих предложений.              </p>
              <div className="flex justify-center">
                <Button 
                  variant="primary"
                  onClick={() => setIsSendResumeOpen(true)}
                  className="px-8 py-4 text-lg"
                >
                  Отправить резюме
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Apply Modal */}
      {applyModalVacancy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setApplyModalVacancy(null)}>
          <div className="bg-white rounded-lg max-w-md w-full p-6 text-center" onClick={(e) => e.stopPropagation()}>
            <div className="text-6xl mb-4">💼</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Отклик на вакансию</h3>
            <p className="text-gray-600 mb-1">{applyModalVacancy}</p>
            <p className="text-gray-600 mb-4">Функция подачи резюме будет реализована позже.</p>
            <Button variant="primary" onClick={() => setApplyModalVacancy(null)} className="w-full">Понятно</Button>
          </div>
        </div>
      )}

      {/* Send Resume Modal */}
      {isSendResumeOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setIsSendResumeOpen(false)}>
          <div className="bg-white rounded-lg max-w-md w-full p-6 text-center" onClick={(e) => e.stopPropagation()}>
            <div className="text-6xl mb-4">📩</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Отправить резюме</h3>
            <p className="text-gray-600 mb-4">Раздел отправки резюме будет добавлен позже. Следите за обновлениями.</p>
            <Button variant="primary" onClick={() => setIsSendResumeOpen(false)} className="w-full">Понятно</Button>
          </div>
        </div>
      )}
    </>
  );
} 