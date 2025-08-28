import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, CheckCircle, Book, Calculator, TrendingUp } from 'lucide-react';

export default function MathTutorWebsite() {
  const [formData, setFormData] = useState({ name: '', contact: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Спасибо, ${formData.name}! Свяжемся с вами в ближайшее время.`);
    setFormData({ name: '', contact: '' });
  };

  const scrollToForm = () => {
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-4 leading-tight">
              Цвиренко Вадим<br />Витальевич
            </h1>
            <p className="text-xl md:text-2xl text-amber-700 mb-8 font-light">
              Учитель математики, репетитор,<br />
              автор курсов для школьников и абитуриентов
            </p>
            <button
              onClick={scrollToForm}
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Записаться на занятие
            </button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Calculator className="w-16 h-16 text-amber-600" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <TrendingUp className="w-20 h-20 text-orange-600" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">Обо мне</h2>
              <div className="prose prose-lg text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Опытный преподаватель математики с многолетним стажем работы в сфере образования. 
                  Специализируюсь на подготовке школьников и абитуриентов к важнейшим экзаменам.
                </p>
                <p className="mb-4">
                  Работаю репетитором в Казахстане, помогаю ученикам успешно сдавать ЕНТ, 
                  контрольные работы и участвовать в олимпиадных соревнованиях. 
                  Индивидуальный подход к каждому ученику — основа моей методики.
                </p>
                <p>
                  Верю, что математика может быть понятной и увлекательной для каждого. 
                  Моя цель — не просто подготовить к экзамену, а привить любовь к точным наукам.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-amber-200 to-orange-200 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <div className="w-32 h-32 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">ВЦ</span>
                  </div>
                  <p className="text-amber-800 font-semibold">Место для вашего фото</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Абонементы</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Пробное занятие", price: "Бесплатно", duration: "30 мин", popular: false },
              { title: "4 занятия", price: "12 000 ₸", duration: "1 раз в неделю", popular: false },
              { title: "8 занятий", price: "22 000 ₸", duration: "2 раза в неделю", popular: true },
              { title: "12 занятий", price: "30 000 ₸", duration: "3 раза в неделю", popular: false }
            ].map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${plan.popular ? 'ring-2 ring-amber-400 transform scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Популярный
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{plan.title}</h3>
                  <div className="text-3xl font-bold text-orange-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600 mb-4">{plan.duration}</p>
                  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-full font-semibold transition-colors duration-300">
                    Выбрать
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Мои курсы</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Подготовка к ЕНТ по математике",
                description: "Telegram-канал с видеоуроками, тестами и детальным разбором задач. Полная подготовка к экзамену.",
                icon: <CheckCircle className="w-8 h-8" />
              },
              {
                title: "Алгебра 8 класс: функции и графики",
                description: "Изучение функций с применением Desmos. Интерактивная визуализация математических понятий.",
                icon: <TrendingUp className="w-8 h-8" />
              },
              {
                title: "Геометрия без страха",
                description: "Наглядные объяснения, контрольные задания и постоянная онлайн-поддержка. Геометрия станет понятной!",
                icon: <Book className="w-8 h-8" />
              }
            ].map((course, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-amber-600 mb-4">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-3">{course.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{course.description}</p>
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300">
                  Подробнее
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 px-4 bg-gradient-to-br from-amber-100 to-orange-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-4xl font-bold text-center text-amber-900 mb-8">Записаться на занятие</h2>
            
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <div className="block text-amber-900 font-semibold mb-2">
                  Ваше имя
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-amber-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
                  placeholder="Введите ваше имя"
                />
              </div>
              
              <div className="mb-6">
                <div className="block text-amber-900 font-semibold mb-2">
                  Телефон / Telegram
                </div>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-amber-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
                  placeholder="+7 700 123 45 67 или @username"
                />
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-4 px-6 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Записаться
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contacts */}
      <footer className="bg-amber-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Контакты</h3>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="#" className="flex items-center gap-3 hover:text-amber-200 transition-colors duration-300">
              <MessageCircle className="w-6 h-6" />
              <span>Telegram</span>
            </a>
            
            <a href="#" className="flex items-center gap-3 hover:text-amber-200 transition-colors duration-300">
              <Phone className="w-6 h-6" />
              <span>Profi.ru</span>
            </a>
            
            <a href="#" className="flex items-center gap-3 hover:text-amber-200 transition-colors duration-300">
              <Mail className="w-6 h-6" />
              <span>Email</span>
            </a>
          </div>
          
          <div className="mt-8 pt-6 border-t border-amber-700">
            <p className="text-amber-200">
              © 2025 Цвиренко Вадим Витальевич. Репетитор математики в Казахстане.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}