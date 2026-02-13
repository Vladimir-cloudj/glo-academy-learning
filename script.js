// 1) Создание переменных
const title = "сайт-визитка";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 100;
const rollback = 15;
const fullPrice = 150;
const adaptive = true;

// 2) Работа с переменными
console.log("Тип данных переменной title:", typeof title);
console.log("Тип данных переменной fullPrice:", typeof fullPrice);
console.log("Тип данных переменной adaptive:", typeof adaptive);

console.log("Длина строки пременной screens:", screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);

const screensArray = screens.toLowerCase().split(", ")
console.log("Массив типов экранов:", screensArray);


const rollBack = fullPrice * (rollback/100);
console.log("Процент отката посреднику за работу:", rollBack);

