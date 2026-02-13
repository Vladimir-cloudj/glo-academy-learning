'use strict'

const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?");
const screenPrice = Number(prompt("Сколько будет стоить данная работа?"));

// Проверка на адаптив
const adaptivePrompt = prompt("Нужен ли адаптив на сайте?");
const adaptive =
  adaptivePrompt.toLowerCase() === "да" ||
  adaptivePrompt.toLowerCase() === "yes" ||
  adaptivePrompt.toLowerCase() === "true" ||
  adaptivePrompt.toLowerCase() === "1";

// Доп услуги
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = Number(prompt("Сколько это будет стоить?"));
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = Number(prompt("Сколько это будет стоить?"));

// Конст для отката посреднику
const rollback = 15;

// Вычисление итогa
const fullPrice = screenPrice + servicePrice1 + servicePrice2;

// Расчет стоимости за вычетом отката посреднику
const rollbackAmount = fullPrice * (rollback / 100);
const servicePercentPrice = Math.ceil(fullPrice - rollbackAmount);
console.log(
  `Стоимость за вычетом отката посреднику: ${servicePercentPrice} рублей`
);


// 10) Конструкция условий для скидок
console.log("\n--- Конструкция условий для скидок ---");
if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 && fullPrice <= 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice >= 0 && fullPrice <= 15000) {
  console.log("Скидка не предусмотрена");
} else {
  console.log("Что то пошло не так");
}

// вывод в консоль переменных
console.log("\n--- вывод в консоль переменных ---");
console.log("title:", title);
console.log("screens:", screens);
console.log("screenPrice:", screenPrice);
console.log("adaptive:", adaptive);
console.log("service1:", service1);
console.log("servicePrice1:", servicePrice1);
console.log("service2:", service2);
console.log("servicePrice2:", servicePrice2);
console.log("rollback:", rollback);
console.log("fullPrice:", fullPrice);
console.log("servicePercentPrice:", servicePercentPrice);