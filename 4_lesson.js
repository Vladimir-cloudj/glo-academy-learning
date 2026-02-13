"use strict";
// ========== Получение данных от пользователя ==========
const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?");
// Стоимость верстки экранов (цикл do while)
let screenPrice;
do {
  const input = prompt("Сколько будет стоить данная работа?");
  screenPrice = Number(input);
  if (isNaN(screenPrice) || screenPrice <= 0) {
    alert("Пожалуйста, введите корректное положительное число!");
  }
} while (isNaN(screenPrice) || screenPrice <= 0);
// Проверка на адаптив
const adaptivePrompt = prompt("Нужен ли адаптив на сайте?");
const adaptive =
  adaptivePrompt.toLowerCase() === "да" ||
  adaptivePrompt.toLowerCase() === "yes" ||
  adaptivePrompt.toLowerCase() === "true" ||
  adaptivePrompt.toLowerCase() === "1";
// Дополнительные услуги
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = Number(prompt("Сколько это будет стоить?"));
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = Number(prompt("Сколько это будет стоить?"));
// Константа для отката посреднику
const rollback = 15;

// ========== 1) Функция получения суммы всех дополнительных услуг (function expression) ==========
const getAllServicePrices = function () {
  // Проверка что цены являются числами
  const price1 =
    typeof servicePrice1 === "number" && !isNaN(servicePrice1)
      ? servicePrice1
      : 0;
  const price2 =
    typeof servicePrice2 === "number" && !isNaN(servicePrice2)
      ? servicePrice2
      : 0;
  return price1 + price2;
};
// Результат сохраняем в переменную
const allServicePrices = getAllServicePrices();

// ========== 2) Функция получения полной стоимости (function declaration) ==========
function getFullPrice() {
  // Проверка типов данных
  const basePrice =
    typeof screenPrice === "number" && !isNaN(screenPrice) ? screenPrice : 0;
  const services =
    typeof allServicePrices === "number" && !isNaN(allServicePrices)
      ? allServicePrices
      : 0;
  return basePrice + services;
}
// Результат сохраняем в переменную
const fullPrice = getFullPrice();

// ========== 3) Функция форматирования названия проекта ==========
function getTitle() {
  // Проверка что это строка
  if (typeof title !== "string") {
    return "Без названия";
  }
  // Убираем пробелы в начале и конце, затем первый символ в верхний регистр, остальные в нижний
  const trimmedTitle = title.trim();
  if (trimmedTitle.length === 0) return "Без названия";

  return (
    trimmedTitle.charAt(0).toUpperCase() + trimmedTitle.slice(1).toLowerCase()
  );
}
// Результат сохраняем в переменную
const formattedTitle = getTitle();

// ========== 4) Функция расчета стоимости за вычетом отката ==========
function getServicePercentPrices() {
  // Проверка типа данных
  if (typeof fullPrice !== "number" || isNaN(fullPrice)) {
    console.error("Ошибка: полная стоимость не является числом");
    return 0;
  }
  const rollbackAmount = fullPrice * (rollback / 100);
  return Math.ceil(fullPrice - rollbackAmount);
}
// Результат сохраняем в переменную
const servicePercentPrice = getServicePercentPrices();
// ========== Вспомогательные функции ==========
function showTypeOf(variableName, variableValue) {
  console.log(`Тип данных переменной ${variableName}:`, typeof variableValue);
}
function getRollbackMessage(price) {
  // Проверка типа данных
  if (typeof price !== "number" || isNaN(price)) {
    return "Ошибка: неверный формат цены";
  }
  if (price > 30000) {
    return "Даем скидку в 10%";
  } else if (price > 15000 && price <= 30000) {
    return "Даем скидку в 5%";
  } else if (price >= 0 && price <= 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
}

// ========== 5) Вывод в консоль (только требуемые) ==========
// Вызовы функции showTypeOf
console.log("=== Типы данных ===");
showTypeOf("title", title);
showTypeOf("fullPrice", fullPrice);
showTypeOf("adaptive", adaptive);
console.log("");
// Вывод строки с типами экранов для разработки
console.log("=== Типы экранов для разработки ===");
console.log(screens);
console.log("");
// Сообщение о скидке пользователю (вызовы функции getRollbackMessage)
console.log("=== Скидка ===");
console.log(getRollbackMessage(fullPrice));
console.log("");
// Стоимость за вычетом процента отката посреднику (вызовы функции getServicePercentPrices)
console.log("=== Стоимость за вычетом отката ===");
console.log(
  `Итоговая стоимость за вычетом отката посреднику: ${servicePercentPrice} рублей`
);
console.log("");
// Вспомогательный вывод для проверки
console.log("=== Дополнительная информация ===");
console.log("Название проекта:", formattedTitle);
console.log("Адаптив:", adaptive ? "Да" : "Нет");
console.log("Стоимость верстки экранов:", screenPrice, "рублей");
console.log("Стоимость дополнительных услуг:", allServicePrices, "рублей");
console.log("Полная стоимость:", fullPrice, "рублей");
console.log("Процент отката посреднику:", rollback, "%");
console.log("Сумма отката:", Math.ceil(fullPrice * (rollback / 100)), "рублей");
