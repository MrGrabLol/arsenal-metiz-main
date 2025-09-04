"use client";

import Image from "next/image";
import Button from "../components/shared/ui/Button";

export default function ContactsPage() {
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
              <span className="text-brand-brown-100">Контакты</span> компании
            </h1>
            <p className="max-w-[600px] mx-auto text-sm lg:text-lg leading-relaxed text-brand-dark-gray-200">
              Свяжитесь с нами любым удобным способом. Мы всегда готовы ответить на ваши вопросы и помочь с выбором продукции.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="relative bg-brand-dark-gray text-white py-16">
        <div className="max-w-base mx-auto relative z-10 px-4 md:px-12 lg:px-4">

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Main Office */}
            <div className="bg-brand-dark rounded-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-brand-brown-100 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17L12 23L3 10C3 5.58172 6.58172 2 11 2H13C17.4183 2 21 5.58172 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-oswald font-medium uppercase text-white">Главный офис</h3>
                  <p className="text-brand-brown-100 text-lg">г. Солнечногорск</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-brown-100 mt-1">
                    <path d="M17.5 2.5H2.5V17.5H17.5V2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 7.5H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 10H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 12.5H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="text-brand-dark-gray-200 text-sm">Адрес</p>
                    <p className="text-white">г. Солнечногорск, ул. Промышленная, д. 15</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-brown-100 mt-1">
                    <path d="M2.5 5.83333C2.5 4.91286 3.24619 4.16667 4.16667 4.16667H15.8333C16.7538 4.16667 17.5 4.91286 17.5 5.83333V14.1667C17.5 15.0871 16.7538 15.8333 15.8333 15.8333H4.16667C3.24619 15.8333 2.5 15.0871 2.5 14.1667V5.83333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 5.83333L10 10.8333L2.5 5.83333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="text-brand-dark-gray-200 text-sm">Email</p>
                    <a href="mailto:info@arsenal-metiz.ru" className="text-brand-brown-100 hover:text-brand-brown transition-colors duration-200">
                      info@arsenal-metiz.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-brown-100 mt-1">
                    <path d="M17.5 15.8333C17.5 16.7538 16.7538 17.5 15.8333 17.5H4.16667C3.24619 17.5 2.5 16.7538 2.5 15.8333V4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5H15.8333C16.7538 2.5 17.5 3.24619 17.5 4.16667V15.8333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.8333 7.5L12.5 10L15.8333 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="text-brand-dark-gray-200 text-sm">Телефон</p>
                    <a href="tel:+7 (499) 503-73-63" className="text-brand-brown-100 hover:text-brand-brown transition-colors duration-200">
                      +7 (499) 503-73-63
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-brown-100 mt-1">
                    <path d="M10 2.5C14.1421 2.5 17.5 5.85786 17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 6.66667V10L12.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="text-brand-dark-gray-200 text-sm">Режим работы</p>
                    <p className="text-white">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-white">Сб-Вс: Выходной</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Moscow Office */}
            <div className="bg-brand-dark rounded-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-brand-brown-100 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17L12 23L3 10C3 5.58172 6.58172 2 11 2H13C17.4183 2 21 5.58172 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-oswald font-medium uppercase text-white">Офис в Москве</h3>
                  <p className="text-brand-brown-100 text-lg">г. Москва</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-brown-100 mt-1">
                    <path d="M17.5 2.5H2.5V17.5H17.5V2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 7.5H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 10H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 12.5H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="text-brand-dark-gray-200 text-sm">Адрес</p>
                    <p className="text-white">г. Москва, ул. Тверская, д. 25, стр. 1</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-brown-100 mt-1">
                    <path d="M2.5 5.83333C2.5 4.91286 3.24619 4.16667 4.16667 4.16667H15.8333C16.7538 4.16667 17.5 4.91286 17.5 5.83333V14.1667C17.5 15.0871 16.7538 15.8333 15.8333 15.8333H4.16667C3.24619 15.8333 2.5 15.0871 2.5 14.1667V5.83333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 5.83333L10 10.8333L2.5 5.83333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="text-brand-dark-gray-200 text-sm">Email</p>
                    <a href="mailto:moscow@arsenal-metiz.ru" className="text-brand-brown-100 hover:text-brand-brown transition-colors duration-200">
                      moscow@arsenal-metiz.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-brown-100 mt-1">
                    <path d="M17.5 15.8333C17.5 16.7538 16.7538 17.5 15.8333 17.5H4.16667C3.24619 17.5 2.5 16.7538 2.5 15.8333V4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5H15.8333C16.7538 2.5 17.5 3.24619 17.5 4.16667V15.8333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.8333 7.5L12.5 10L15.8333 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="text-brand-dark-gray-200 text-sm">Телефон</p>
                    <a href="tel:+7 (495) 123-45-67" className="text-brand-brown-100 hover:text-brand-brown transition-colors duration-200">
                      +7 (495) 123-45-67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-brown-100 mt-1">
                    <path d="M10 2.5C14.1421 2.5 17.5 5.85786 17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 6.66667V10L12.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="text-brand-dark-gray-200 text-sm">Режим работы</p>
                    <p className="text-white">Пн-Пт: 9:00 - 19:00</p>
                    <p className="text-white">Сб: 10:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Form Section */}
      <section className="relative bg-brand-dark py-16">
        <div className="max-w-base mx-auto relative z-10 px-4 md:px-12 lg:px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-oswald font-medium uppercase text-white mb-4">
              Напишите нам
            </h2>
            <p className="text-lg text-brand-dark-gray-200 max-w-2xl mx-auto">
              Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-brand-dark-gray rounded-lg p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-brand-dark border border-brand-dark-gray-200 rounded-lg text-white placeholder-brand-dark-gray-200 focus:outline-none focus:border-brand-brown-100 transition-colors duration-200"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 bg-brand-dark border border-brand-dark-gray-200 rounded-lg text-white placeholder-brand-dark-gray-200 focus:outline-none focus:border-brand-brown-100 transition-colors duration-200"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-brand-dark border border-brand-dark-gray-200 rounded-lg text-white placeholder-brand-dark-gray-200 focus:outline-none focus:border-brand-brown-100 transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Сообщение</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-brand-dark border border-brand-dark-gray-200 rounded-lg text-white placeholder-brand-dark-gray-200 focus:outline-none focus:border-brand-brown-100 transition-colors duration-200 resize-none"
                    placeholder="Опишите ваш вопрос или задачу..."
                  ></textarea>
                </div>
                <div className="text-center">
                  <Button 
                    variant="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Форма будет отправлена позже');
                    }}
                    className="px-12 py-4 text-lg"
                  >
                    Отправить сообщение
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 