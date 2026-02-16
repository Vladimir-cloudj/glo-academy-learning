"use strict";
// объявление переменных
// --------------------
let title
let screens
let screenPrice
let adaptive
let service1
let servicePrice1
let service2
let servicePrice2

let rollback = 10;
let allServicePrices
let fullPrice
let formattedTitle
let servicePercentPrice
// --------------------
// описание функций
// --------------------
const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function () {
    title = prompt("Как называется ваш проект?", "калькулятор верстки");
    screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, Сложные"
    );
    // screenPrice = +prompt("Сколько будет стоить данная работа", 15000);
    // 1
    let screenPriceInput
    do {
      screenPriceInput = prompt("Сколько будет стоить данная работа", 15000);
      screenPrice = Number(screenPriceInput);
      if (!isNumber(screenPrice)) {
        alert("Введите число")
      }
    } while (!isNumber(screenPrice));

    // while (!isNumber(screenPrice)) {
    //   screenPrice = prompt("Сколько будет стоить данная работа", 15000);
    // }


    adaptive = confirm("Нужен ли будет адаптив на сайте?");
}

const getAllServicePrices = function () {
    let sum = 0
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен", "метрика");
        } else {
            service2 = prompt("Какой дополнительный тип услуги нужен", "отправка форм");
        }
        // 2
        let servicePriceInput
        do {
          servicePriceInput = prompt("Сколько это будет стоить?", 1000);
        let currentPrice = Number(servicePriceInput)
        if (isNumber(currentPrice)) {
          sum += currentPrice;
          if (i === 0) {
            servicePrice1 = currentPrice
          } else {
            servicePrice2 = currentPrice
          }
          break
        } else {
          alert("введите число")
        }
        // sum += +prompt("Сколько это будет стоить?", 1000);
    } while (true)
    }
    return sum;
};

function getFullPrice() {
  // 3
  const basePrice = typeof screenPrice === "number" && !isNaN(screenPrice) ? screenPrice : 0;
  const additionalServices = typeof allServicePrices === "number" && !isNaN(allServicePrices) ? allServicePrices : 0  
  return basePrice + additionalServices;
}

function getTitle() {
  // 3
  if (typeof title !== "string") {
    console.log("название не является строкой");
    return "";
  }
  const trimmedTitle = title.trim();
  if (trimmedTitle.length === 0) return "";
  // 3
  return trimmedTitle[0].toUpperCase() + trimmedTitle.slice(1).toLowerCase();
}

function getServicePercentPrices() {
  // 3
  if (typeof fullPrice !== "number" || isNaN(fullPrice)) {
    console.log("стоимость разработки не число");
    return 0
  }
  return fullPrice - fullPrice * (rollback / 100);
}

const showTypeOf = function (variable) {
  console.log(`Тип данных переменной ${variable}`, typeof variable);
};

const getRollbackMessage = function (price) {
  // 3
  if (typeof price !== "number" || isNaN(price)) {
    console.log("переменная стоимость разработки не число");
    return "неверный формат \"стоимость разработки\"";
  }
  if (price >= 30000) {
    return "Даем скидку в 10% ";
  } else if (price > 15000 && price < 30000) {
    return "Даем скидку в 5% ";
  } else if (price >= 0 && price < 15000) {
    return "Скидка не предусмотрена ";
  } else {
    return "Что-то пошло не так ";
  }
};
// --------------------
// вызов функций
// --------------------
asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
formattedTitle = getTitle();
servicePercentPrice = getServicePercentPrices();



// выводим необходимые данные
showTypeOf(formattedTitle, "formattedTitle");
showTypeOf(screenPrice, "screenPrice");
showTypeOf(adaptive, "adaptive");

console.log(screens);
console.log("allServicePrices", allServicePrices);
console.log("servicePercentPrice", servicePercentPrice);

// 
console.log("service1:", service1, "(type:", typeof service1, ")");
console.log("servicePrice1:", servicePrice1, "(type:", typeof servicePrice1, ")");
console.log("service2:", service2, "(type:", typeof service2, ")");
console.log("servicePrice2:", servicePrice2, "(type:", typeof servicePrice2, ")");
console.log("fullPrice:", fullPrice, "(type:", typeof fullPrice, ")");

// 

// console.log("Стоимость верстки экранов " + screenPrice + " рублей/долларов/гривен/юаней");
// console.log("Стоимость разработки сайта " + fullPrice + " рублей/долларов/гривен/юаней");
