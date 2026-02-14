'use strict'

let title = prompt("Как называется ваш проект?", "калькулятор верстки")
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");
let screenPrice = +prompt("Сколько будет стоить данная работа", 15000);
let adaptive = confirm("Нужен ли будет адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен", "метрика");
let servicePrice1 = +prompt("Сколько это будет стоить?", 1000);
let service2 = prompt("Какой дополнительный тип услуги нужен", "отправка форм");
let servicePrice2 = +prompt("Сколько это будет стоить?", 2000);
let rollback = 10

// 1) function expression Функция выражение для суммы дополнительных услуг
const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};
let allServicePrices = getAllServicePrices();

// 2) function declaration Функция объявление для полной стоимости
function getFullPrice () {
  return screenPrice + allServicePrices
}
let fullPrice = getFullPrice()

// 3) Функция для форматирования заголовка
function getTitle () {
  // Убираем пробелы в начале и конце, затем первый символ в верхний регистр, остальные в нижний
  const trimmedTitle = title.trim()
  if (trimmedTitle.length === 0) return "" // Обработка пустой строки после trim
  return trimmedTitle[0].toUpperCase() + trimmedTitle.slice(1).toLowerCase()
}
let formattedTitle = getTitle()

// 4) Функция для расчета стоимости за вычетом отката
function getServicePercentPrices () {
  return fullPrice - (fullPrice * (rollback / 100))
}
let servicePercentPrice = getServicePercentPrices()

const showTypeOf = function (variable) {
  console.log(`Тип данных переменной ${variable}`, typeof variable)
}

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10% "
  } else if (price > 15000 && price < 30000) { // Исправлено && -> &&
    return "Даем скидку в 5% "
  } else if (price >= 0 && price < 15000) { // Исправлено && -> &&
    return "Скидка не предусмотрена "
  } else {
    return "Что-то пошло не так "
  }
}

// 5) выводим необходимые данные
showTypeOf(formattedTitle);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens);
console.log(allServicePrices);
console.log(servicePercentPrice);

// console.log("Стоимость верстки экранов " + screenPrice + " рублей/долларов/гривен/юаней");
// console.log("Стоимость разработки сайта " + fullPrice + " рублей/долларов/гривен/юаней");

