"use client";

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, BookOpen, Shield, Phone, Mail, MapPin, Calendar, TrendingUp, Award } from "lucide-react"
import { useState } from "react";

export default function FacultyHomePage() {
  const [showAllPrograms, setShowAllPrograms] = useState(false);
  const year = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
              src="/images/top_logo.png"
              alt="Логотип факультета"
              width={80}
              height={80}
              className="rounded-lg"
              />
              <div>
              <h1 className="text-xl font-bold text-slate-800">ОмГУ им. Ф.М. Достоевского</h1>
              <p className="text-sm text-blue-600 font-medium">Факультет цифровых технологий и кибербезопасности</p>
              </div>
            </div>
            <a
              href="https://distabit.omsu.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Button className="bg-teal-500 hover:bg-teal-600">
              Подать документы
            </Button>
            </a>
            </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center space-x-8 py-3">
            <a href="#programs" className="hover:text-teal-300 transition-colors">
              Направления
            </a>
            <a href="#admission" className="hover:text-teal-300 transition-colors">
              Поступление
            </a>
            <a href="#about" className="hover:text-teal-300 transition-colors">
              О факультете
            </a>
            <a href="#research" className="hover:text-teal-300 transition-colors">
              Наука
            </a>
            <a href="#contacts" className="hover:text-teal-300 transition-colors">
              Контакты
            </a>
            <a href="#students" className="hover:text-teal-300 transition-colors">
              Студентам
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                {(() => {
                const startDate = new Date(year, 4, 26); // 26 мая
                const endDate = new Date(year, 6, 25);   // 25 июля
                const now = new Date();

                if (now >= startDate && now <= endDate) {
                  return <Badge className="bg-teal-500 text-white mb-4">Набор {year}</Badge>;
                } else {
                  const timeDiff = startDate.getTime() - now.getTime();
                  const daysToStart = Math.ceil(timeDiff / (1000 * 3600 * 24));
                  return <Badge className="bg-blue-500 text-white mb-4">До набора {daysToStart} дней</Badge>;
                }
                })()}
                <h2 className="text-4xl font-bold mb-6">
                Добро пожаловать на факультет цифровых технологий и кибербезопасности!
                </h2>
              <p className="text-xl mb-8 text-blue-100">
                Готовим специалистов в области информационных технологий, программирования, кибербезопасности и цифровых
                коммуникаций
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://omsu.ru/entrance/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Button
              size="lg"
             className="bg-teal-500 hover:bg-teal-600">
              Узнать о поступлении
            </Button>
            </a>
             <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white bg-transpar</p>ent hover:bg-white hover:text-blue-600"
                >
                  Виртуальная экскурсия
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/Nabor.png"
                alt="Студенты факультета"
                width={800}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info for Applicants */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-800">Ключевая информация для абитуриентов</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-teal-200">
              <CardHeader>
                <Calendar className="w-8 h-8 text-teal-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Прием документов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">до 25 июля {year}</p>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-200">
              <CardHeader>
                <BookOpen className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Направления</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">6 программ бакалавриата и магистратуры</p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200">
              <CardHeader>
                <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Зарплата выпускников</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">от 127 000 руб.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-orange-200">
              <CardHeader>
                <Award className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Трудоустройство</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">95% выпускников</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
<section id="programs" className="py-16 bg-slate-50">
  <div className="container mx-auto px-4">
    <h3 className="text-3xl font-bold text-center mb-12 text-slate-800">Направления подготовки</h3>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Показываются сразу */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <Shield className="w-8 h-8 text-blue-600 mb-2" />
          <CardTitle>Компьютерная безопасность</CardTitle>
          <CardDescription>Анализ безопасности компьютерных систем</CardDescription>
          <CardDescription>Специалитет</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>• Кибербезопасность</li>
            <li>• Разработка программного обеспечения</li>
            <li>• Аудит безопасности</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <BookOpen className="w-8 h-8 text-teal-600 mb-2" />
          <CardTitle>Информатика и вычислительная техника</CardTitle>
          <CardDescription>Технологии разработки программного обеспечения</CardDescription>
          <CardDescription>Бакалавриат</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>• QA-инженерия</li>
            <li>• Системная аналитика</li>
            <li>• Разработка web- и мобильных приложений</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <Users className="w-8 h-8 text-green-600 mb-2" />
          <CardTitle>Прикладная математика и информатика</CardTitle>
          <CardDescription>Программирование и информационные технологии</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>• Разработка баз данных</li>
            <li>• Data Science</li>
            <li>• Математическое моделирование</li>
          </ul>
        </CardContent>
      </Card>

      {/* Показываются после раскрытия плашек */}
      {showAllPrograms && (
        <>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <BookOpen className="w-8 h-8 text-indigo-600 mb-2" />
              <CardTitle>Прикладная математика и информатика (3 курс)</CardTitle>
              <CardDescription>Прикладная математика и искусственный интеллект</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Нейросети</li>
                <li>• Анализ статистических данных</li>
                <li>• Машинное обучение</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <BookOpen className="w-8 h-8 text-indigo-600 mb-2" />
              <CardTitle>Прикладная информатика</CardTitle>
              <CardDescription>Разработка приложений, компьютерный дизайн и цифровые стартапы</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Проектирование пользовательских интерфейсов (UI/UX)</li>
                <li>• Автоматизация бизнес-процессов</li>
                <li>• Создание цифровых продуктов и MVP</li>
              </ul>
            </CardContent>
          </Card>
        </>
      )}
    </div>

    <div className="text-center mt-8">
      <Button
        className="bg-blue-600 hover:bg-blue-700"
        onClick={() => setShowAllPrograms((prev) => !prev)}
      >
        {showAllPrograms ? "Скрыть направления" : "Все направления подготовки"}
      </Button>
    </div>
  </div>
</section>


      {/* Admission Section */}
      <section id="admission" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-slate-800">Поступление</h3>
              <div className="space-y-6">
                <Card className="border-l-4 border-l-blue-600">
                  <CardHeader>
                    <CardTitle className="text-lg">Очное обучение</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-2">Бакалавриат: 4 года</p>
                    <p className="text-slate-600 mb-2">Магистратура: 2 года</p>
                    <p className="text-slate-600 mb-2">Специалитет: 5.5 лет</p>
                    <p className="text-sm text-slate-500">Бюджетные и платные места</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-teal-600">
                  <CardHeader>
                    <CardTitle className="text-lg">Заочное обучение</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-2">Ускоренное обучение: 3,5 года</p>
                    <p className="text-slate-600 mb-2">Стандартное: 4,5 года</p>
                    <p className="text-sm text-slate-500">Для работающих специалистов</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-slate-800">Необходимые документы</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Аттестат о среднем общем образовании
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Результаты ЕГЭ (математика, русский язык, информатика/физика)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Паспорт и фотографии
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Медицинская справка
                </li>
              </ul>

              <div className="mt-8 p-6 bg-teal-50 rounded-lg">
                <h5 className="font-semibold text-teal-800 mb-2">Приемная комиссия</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-slate-600">
                    <MapPin className="w-4 h-4 mr-2 text-teal-600" />4 корпус ОмГУ, ауд. 102
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Phone className="w-4 h-4 mr-2 text-teal-600" />
                    22-22-09
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Mail className="w-4 h-4 mr-2 text-teal-600" />
                    admission@omsu.ru
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Audience Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-800">Информация для всех</h3>

          {/* Tabs for different audiences */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center mb-8 border-b">
              <button className="px-6 py-3 font-medium text-blue-600 border-b-2 border-blue-600 bg-white">
                Студентам
              </button>
              <button className="px-6 py-3 font-medium text-slate-600 hover:text-blue-600 bg-white">
                Преподавателям
              </button>
              <button className="px-6 py-3 font-medium text-slate-600 hover:text-blue-600 bg-white">Гостям</button>
            </div>

            {/* Students Section */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Calendar className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle>Расписание занятий</CardTitle>
                  <CardDescription>Актуальное расписание лекций и практик</CardDescription>
                </CardHeader>
                <CardContent>
                <a
              href="https://eservice.omsu.ru/schedule/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Button className="bg-teal-500 hover:bg-teal-600">
              Открыть расписание
            </Button>
            </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BookOpen className="w-8 h-8 text-teal-600 mb-2" />
                  <CardTitle>Электронные ресурсы</CardTitle>
                  <CardDescription>Библиотека, курсы, методические материалы</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <a href="https://e.lanbook.com/" className="block text-blue-600 hover:underline">
                      • Электронная библиотека
                    </a>
                    <a href="https://eos.omsu.ru/Plates/DigitalLibrary" className="block text-blue-600 hover:underline">
                      • LMS система
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Award className="w-8 h-8 text-green-600 mb-2" />
                  <CardTitle>Стипендии и льготы</CardTitle>
                  <CardDescription>Академические и социальные стипендии</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>• Академическая: до 15 000 руб.</p>
                    <p>• Социальная: до 8 000 руб.</p>
                    <p>• Именные стипендии</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="w-8 h-8 text-purple-600 mb-2" />
                  <CardTitle>Студенческая жизнь</CardTitle>
                  <CardDescription>Организации, мероприятия, спорт</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>• Студенческий совет</p>
                    <p>• IT-клубы и хакатоны</p>
                    <p>• Спортивные секции</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MapPin className="w-8 h-8 text-orange-600 mb-2" />
                  <CardTitle>Общежития</CardTitle>
                  <CardDescription>Размещение и условия проживания</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>• 3 общежития ОмГУ</p>
                    <p>• От 2 500 руб./месяц</p>
                    <p>• Wi-Fi, кухни, прачечная</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <TrendingUp className="w-8 h-8 text-indigo-600 mb-2" />
                  <CardTitle>Практики и стажировки</CardTitle>
                  <CardDescription>Партнеры и возможности трудоустройства</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>• Яндекс, VK, Сбер</p>
                    <p>• Местные IT-компании</p>
                    <p>• Стартап-инкубаторы</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-800">Преимущества факультета</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">Современное оборудование</h4>
              <p className="text-sm text-slate-600">Лаборатории кибербезопасности, серверные, суперкомпьютер</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h4 className="font-semibold mb-2">Опытные преподаватели</h4>
              <p className="text-sm text-slate-600">Кандидаты и доктора наук, практикующие специалисты</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">Актуальные программы</h4>
              <p className="text-sm text-slate-600">Обновляемые курсы по современным технологиям</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">Высокое трудоустройство</h4>
              <p className="text-sm text-slate-600">95% выпускников находят работу по специальности</p>
            </div>
          </div>
        </div>
      </section>

      {/* News and Events */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-800">Новости факультета</h3>
              <div className="space-y-6">
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold mb-2">Хакатон "Цифровой прорыв 2024"</h4>
                        <p className="text-sm text-slate-600 mb-2">
                          Студенты факультета заняли призовые места в региональном этапе всероссийского хакатона
                        </p>
                        <span className="text-xs text-slate-500">15 ноября 2024</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold mb-2">Новая лаборатория ИИ</h4>
                        <p className="text-sm text-slate-600 mb-2">
                          Открытие современной лаборатории искусственного интеллекта и машинного обучения
                        </p>
                        <span className="text-xs text-slate-500">8 ноября 2024</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold mb-2">Партнерство с Яндексом</h4>
                        <p className="text-sm text-slate-600 mb-2">
                          Подписано соглашение о сотрудничестве в области подготовки IT-специалистов
                        </p>
                        <span className="text-xs text-slate-500">1 ноября 2024</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-800">Ближайшие события</h3>
              <div className="space-y-4">
                <Card className="border-l-4 border-l-blue-600">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">День открытых дверей</h4>
                      <Badge variant="outline">25 дек</Badge>
                    </div>
                    <p className="text-sm text-slate-600">Презентация программ, экскурсии, встречи с преподавателями</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-teal-600">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Научная конференция</h4>
                      <Badge variant="outline">15 янв</Badge>
                    </div>
                    <p className="text-sm text-slate-600">
                      "Современные тенденции в области информационной безопасности"
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-600">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">IT-ярмарка вакансий</h4>
                      <Badge variant="outline">20 фев</Badge>
                    </div>
                    <p className="text-sm text-slate-600">Встреча студентов с представителями IT-компаний</p>
                  </CardContent>
                </Card>

                <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-slate-800">Для гостей факультета</h4>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                      <span>Экскурсии по лабораториям (по предварительной записи)</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-teal-600" />
                      <span>Открытые лекции каждую пятницу в 14:00</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-green-600" />
                      <span>Консультации: +7 (3812) 22-22-09</span>
                    </div>
                  </div>
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700" size="sm">
                    Записаться на экскурсию
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research and Publications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-800">Наука и исследования</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Научный журнал</CardTitle>
                <CardDescription>"Математические структуры и моделирование"</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Прием статей в области математики, информатики и вычислительной техники
                </p>
                <Button variant="outline" size="sm">
                  Подать статью
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-8 h-8 text-teal-600 mb-2" />
                <CardTitle>Лаборатория кибербезопасности</CardTitle>
                <CardDescription>Исследования в области защиты информации</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>• Анализ уязвимостей</p>
                  <p>• Разработка средств защиты</p>
                  <p>• Криптографические методы</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>Студенческие проекты</CardTitle>
                <CardDescription>Участие в исследованиях и разработках</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>• Гранты для студентов</p>
                  <p>• Конкурсы научных работ</p>
                  <p>• Публикации в журналах</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h5 className="font-semibold mb-4">Факультет ЦТК</h5>
              <p className="text-slate-300 text-sm">Омский государственный университет им. Ф.М. Достоевского</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Быстрые ссылки</h5>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <a href="https://eservice.omsu.ru/schedule/#/" className="hover:text-teal-400">
                    Расписание
                  </a>
                </li>
                <li>
                  <a href="https://e.lanbook.com/" className="hover:text-teal-400">
                    Электронная библиотека
                  </a>
                </li>
                <li>
                  <a href="https://eservice.omsu.ru/" className="hover:text-teal-400">
                    Студенческий портал
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-sm text-slate-300">
                <p>ул. Нефтезаводская, 11</p>
                <p>г. Омск, 644077</p>
                <p>+7 (3812) 22-22-09</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>&copy; {year} ОмГУ им. Ф.М. Достоевского. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
