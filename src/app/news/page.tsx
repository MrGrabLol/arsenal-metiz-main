"use client";

import { useState } from "react";
import NewsCard from "../components/shared/NewsCard";
import Button from "../components/shared/ui/Button";

// Моковые данные для новостей
const mockNews = [
  {
    id: 1,
    title: "Запуск нового металлургического производства",
    description: "Мы рады сообщить о запуске нового высокотехнологичного производства, которое будет заниматься выплавкой сталей для сварочной проволоки, в том числе легированных и коррозионностойких марок.",
    date: "2025-06-15",
    image: "/assets/images/news.png",
    isFeatured: true
  },
  {
    id: 2,
    title: "Запуск производства электроэрозионной проволоки",
    description: "Это новое направление, которое расширит ассортимент предприятия и откроет возможности работы с высокоточным оборудованием.",
    date: "2025-03-27",
    image: "/assets/images/news.png",
    isFeatured: false
  },
  {
    id: 3,
    title: "Международная выставка MetalExpo 2025",
    description: "Участие в этой выставке станет возможностью представить нашу продукцию и найти новые партнерские связи.",
    date: "2025-07-02",
    image: "/assets/images/news.png",
    isFeatured: false
  },
  {
    id: 4,
    title: "«Арсенал-Метиз»: от модернизации к производству будущего",
    description: "Интервью с директором по развитию компании «Арсенал-Метиз»",
    date: "2025-09-30",
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