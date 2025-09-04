"use client";

import { useState } from "react";
import NewsCard from "../components/shared/NewsCard";
import Button from "../components/shared/ui/Button";

// Моковые данные для новостей
const mockNews = [
  {
    id: 1,
    title: "Запуск нового производства сварочной проволоки",
    description: "Мы рады сообщить о запуске нового высокотехнологичного производства сварочной проволоки, которое позволит нам увеличить объемы выпуска продукции на 40%.",
    date: "2024-01-15",
    image: "/assets/images/news.png",
    isFeatured: true
  },
  {
    id: 2,
    title: "Новые стандарты качества продукции",
    description: "Внедрены новые международные стандарты качества, что подтверждает высокий уровень нашей продукции на мировом рынке.",
    date: "2024-01-10",
    image: "/assets/images/news.png",
    isFeatured: false
  },
  {
    id: 3,
    title: "Расширение экспортных поставок",
    description: "Успешно расширены поставки нашей продукции в страны Европейского Союза и Азии.",
    date: "2024-01-05",
    image: "/assets/images/news.png",
    isFeatured: false
  },
  {
    id: 4,
    title: "Инновационные технологии в производстве",
    description: "Внедрены передовые технологии автоматизации, что значительно повысило эффективность производства.",
    date: "2024-01-01",
    image: "/assets/images/news.png",
    isFeatured: false
  },
  {
    id: 5,
    title: "Сертификация новой продукции",
    description: "Получены все необходимые сертификаты для новой линейки сварочных материалов.",
    date: "2023-12-28",
    image: "/assets/images/news.png",
    isFeatured: false
  },
  {
    id: 6,
    title: "Партнерство с ведущими вузами",
    description: "Подписаны соглашения о сотрудничестве с ведущими техническими университетами страны.",
    date: "2023-12-25",
    image: "/assets/images/news.png",
    isFeatured: false
  },
  {
    id: 7,
    title: "Экологическая сертификация",
    description: "Наша продукция получила экологический сертификат, подтверждающий соответствие международным стандартам.",
    date: "2023-12-20",
    image: "/assets/images/news.png",
    isFeatured: false
  },
  {
    id: 8,
    title: "Участие в международной выставке",
    description: "Успешное участие в крупнейшей международной выставке сварочных технологий в Германии.",
    date: "2023-12-15",
    image: "/assets/images/news.png",
    isFeatured: false
  }
];

export default function NewsPage() {
  const [showAllNews, setShowAllNews] = useState(false);

  const featuredNews = mockNews.find(news => news.isFeatured);
  const recentNews = mockNews.filter(news => !news.isFeatured).slice(0, 3);
  const allNews = mockNews.filter(news => !news.isFeatured);

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
              <span className="text-brand-brown-100">Новости</span> компании
            </h1>
            <p className="max-w-[600px] mx-auto text-sm lg:text-lg leading-relaxed text-brand-dark-gray-200">
              Будьте в курсе последних событий, достижений и инноваций в нашей компании
            </p>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="relative bg-brand-dark-gray py-16">
        <div className="max-w-base mx-auto relative z-10 px-4 md:px-12 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured News Card - Large */}
            {featuredNews && (
              <div className="lg:col-span-2">
                <NewsCard 
                  news={featuredNews} 
                  variant="large"
                />
              </div>
            )}
            
            {/* Recent News Cards - Small */}
            <div className="space-y-3">
              {recentNews.map((news) => (
                <NewsCard 
                  key={news.id} 
                  news={news} 
                  variant="small"
                />
              ))}
            </div>
          </div>

          {/* Show All Button */}
          <div className="text-center mt-16">
            <Button 
              variant="primary" 
              onClick={() => setShowAllNews(!showAllNews)}
              className="px-12 py-4 text-lg"
            >
              {showAllNews ? "Скрыть все" : "Показать все"}
            </Button>
          </div>
        </div>
      </section>

      {/* All News Grid Section */}
      {showAllNews && (
        <section className="relative bg-brand-dark py-16">
          <div className="max-w-base mx-auto relative z-10 px-4 md:px-12 lg:px-4">
            <h2 className="text-white text-center mb-12">
              <span className="text-brand-brown-100">Все</span> новости
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allNews.map((news) => (
                <NewsCard 
                  key={news.id} 
                  news={news} 
                  variant="grid"
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
} 