"use strict";
// объявление переменных
// --------------------
const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  service1: '',
  servicePrice1: 0,
  service2: '',
  servicePrice2: 0,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  formattedTitle: '',
  servicePercentPrice: 0,
  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "калькулятор верстки");
    appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");
    let screenPriceInput;
    do {
      screenPriceInput = prompt("Сколько будет стоить данная работа", 15000);
      appData.screenPrice = Number(screenPriceInput);
      if (!appData.isNumber(appData.screenPrice)) {
        alert("Введите число");
      }
    } while (!appData.isNumber(appData.screenPrice));
    appData.adaptive = confirm("Нужен ли будет адаптив на сайте?");
  },
    getAllServicePrices: function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
        appData.service1 = prompt("Какой дополнительный тип услуги нужен", "метрика");
        } else if (i === 1) {
        appData.service2 = prompt(
            "Какой дополнительный тип услуги нужен",
            "отправка форм"
        );
        }
        let servicePriceInput;
        do {
        servicePriceInput = prompt("Сколько это будет стоить?", 1000);
        let currentPrice = Number(servicePriceInput);
        if (appData.isNumber(currentPrice)) {
            sum += currentPrice;
            if (i === 0) {
            appData.servicePrice1 = currentPrice;
            } else if (i === 1) {
            appData.servicePrice2 = currentPrice;
            }
            break;
        } else {
            alert("введите число");
        }
        } while (true);
    }
    return sum;
    },
    getRollbackMessage: function (price) {
    if (typeof price !== "number" || isNaN(price)) {
        console.log("переменная стоимость разработки не число");
        return 'неверный формат "стоимость разработки"';
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
    },
    getServicePercentPrices: function () {
    if (typeof appData.fullPrice !== "number" || isNaN(appData.fullPrice)) {
        console.log("стоимость разработки не число");
        return 0;
    }
    return appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
    },
    getTitle: function () {
    if (typeof appData.title !== "string") {
        console.log("название не является строкой");
        return "";
    }
    const trimmedTitle = appData.title.trim();
    if (trimmedTitle.length === 0) return "";
    return trimmedTitle[0].toUpperCase() + trimmedTitle.slice(1).toLowerCase();
    },
    getFullPrice: function() {
    const basePrice =
        typeof appData.screenPrice === "number" && !isNaN(appData.screenPrice)
        ? appData.screenPrice
        : 0;
    const additionalServices =
        typeof appData.allServicePrices === "number" &&
        !isNaN(appData.allServicePrices)
        ? appData.allServicePrices
        : 0;
    return basePrice + additionalServices;
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    showTypeOf: function (variable) {
        console.log(`Тип данных переменной ${variable}`, typeof variable);
    },
    start:function () {
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.formattedTitle = appData.getTitle();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.logger();
    },
    logger: function () {
        for (let key in appData) {
            if (typeof appData[key] !== 'function') {
                console.log(`Значение ключа ${key} равно ${appData[key]}`);
            } else {
                console.log(`Метод ${key}: [Function]`);
                
            }
        }
    }
};
// --------------------
// описание функций
// --------------------


// --------------------
// вызов функций
// --------------------
appData.start();
// appData.asking();
// appData.allServicePrices = appData.getAllServicePrices();
// appData.fullPrice = getFullPrice();
// appData.formattedTitle = getTitle();
// appData.servicePercentPrice = getServicePercentPrices();

// выводим необходимые данные
// console.log(appData.fullPrice);
// console.log(appData.servicePercentPrice);

