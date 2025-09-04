import Image from "next/image";
import Link from "next/link";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  isFeatured?: boolean;
}

interface NewsCardProps {
  news: NewsItem;
  variant: "large" | "small" | "grid";
}

export default function NewsCard({ news, variant }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (variant === "large") {
    return (
      <div className="bg-brand-dark rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
        <div className="relative h-72 md:h-96">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-brand-brown-100 text-sm font-medium">
              {formatDate(news.date)}
            </span>
            <span className="bg-brand-brown-100 text-brand-dark text-xs px-3 py-1 rounded-full font-medium">
              Главная новость
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 line-clamp-2">
            {news.title}
          </h3>
          <p className="text-brand-dark-gray-200 text-sm md:text-base leading-relaxed line-clamp-3">
            {news.description}
          </p>
          <Link 
            href={`/news/${news.id}`}
            className="inline-block mt-4 text-brand-brown-100 hover:text-brand-brown font-medium transition-colors duration-200"
          >
            Читать далее →
          </Link>
        </div>
      </div>
    );
  }

  if (variant === "small") {
    return (
      <div className="bg-brand-dark rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
        <div className="relative h-20">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <div className="p-2.5">
          <div className="flex items-center justify-between mb-1">
            <span className="text-brand-brown-100 text-xs font-medium">
              {formatDate(news.date)}
            </span>
          </div>
          <h4 className="text-white font-semibold text-xs mb-1 line-clamp-1">
            {news.title}
          </h4>
          <p className="text-brand-dark-gray-200 text-xs leading-tight line-clamp-2">
            {news.description}
          </p>
          <Link 
            href={`/news/${news.id}`}
            className="inline-block mt-1.5 text-brand-brown-100 hover:text-brand-brown text-xs font-medium transition-colors duration-200"
          >
            Читать далее →
          </Link>
        </div>
      </div>
    );
  }

  // Grid variant
  return (
    <div className="bg-brand-dark rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
      <div className="relative h-48">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-5">
        <span className="text-brand-brown-100 text-sm font-medium">
          {formatDate(news.date)}
        </span>
        <h3 className="text-white font-semibold text-lg mt-2 mb-3 line-clamp-2">
          {news.title}
        </h3>
        <p className="text-brand-dark-gray-200 text-sm leading-relaxed line-clamp-3">
          {news.description}
        </p>
        <Link 
          href={`/news/${news.id}`}
          className="inline-block mt-4 text-brand-brown-100 hover:text-brand-brown font-medium transition-colors duration-200"
        >
          Читать далее →
        </Link>
      </div>
    </div>
  );
} 