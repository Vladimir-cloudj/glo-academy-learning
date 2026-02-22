'use strict';
// примитив
let name = 'Alex'

// объект
// первый тип создания объектов
let person = {
  name: 'Alex',
  age: 25,
  job: 'Frontend'
}
// второй тип создания объектов
let jobs = new Object()
// 

let job = {
  position: 'developer'
}
person.hobby = 'football'
person.job = job

// console.log(person.age);
// console.log(person['hobby']);

// const say = function (str) {
//   console.log(str);
// }
// person.say = say
// функция внутри объекта называется методом
person.say = function (str) {
  console.log(str);
}
// массивы
// вместо ключа использует порядковый индекс
let array = [1, 2, 3, 4]
array.length // длина массива

// методы массивов
// методы которые меняют исходный массив
array.push(5) // добавляет элемент в конец массива
array.unshift(0) // добавляет элемент в начало массива
// console.log(array);
array.pop() // удаляет последний элемент массива
array.shift() // удаляет первый элемент массива
// console.log(array);
array.sort() // сортирует массив по возрастанию
array.reverse() // сортирует массив по убыванию

// методы которые не меняют исходный массив
// console.log(array.join(' ')); // превращает массив в строку c ' '

// перебор объектов и массивов 

let obj = {
  name: 'Alex',
  age: 25,
  isStudent: false
}
// перебор через цикл for in
for (let key in obj) {
  // console.log("key:" + key +" " + "value:" + obj[key]);
}
Object.keys(obj)

// console.log(array);
// перебор через цикл for of (значения массива)
for (let key of array) {
  // console.log(array[key]);
}
// перебор через цикл for in (индексы массива)
for (let key in array) {
  // console.log(array[key]);
}
// удаление элемента из массива
delete array[2] // удаляет элемент с индексом 2
// при выводе этого массива вместо удаленного элемента - empty
// при этом индексы других элементов сохраняются
// для удаления элементов из массива лучше использовать другие методы

// удаление элемента из объекта
delete obj.age // удаляет свойство age из объекта obj
// от свойства не остается ничего.

//---------------- псевдомассивы ---------------
const func = function (a, b, c, d) {
  console.log(arguments); // псевдомассив 'arguments'. применять не рекомендуется
}
// func(1, 2, 3, 4)

const books = [
  {
    id: 0,
    name: "Дорога домой",
    author: "Виталий Зыков",
    price: 1200,
  },
  {
    id: 1,
    name: "Война за выживание",
    author: "Виталий Зыков",
    price: 1500,
  },
  {
    id: 2,
    name: "Мир бесчисленных островов",
    author: "Виталий Зыков",
    price: 1300,
  },
  {
    id: 3,
    name: "Далекая страна",
    author: "Александр Кош",
    price: 950,
  },
  {
    id: 4,
    name: "Адреналин",
    author: "Александр Кош",
    price: 1650,
  },
];
// добавление и удаление элементов
// CONCAT arr.concat(arg1, arg2, ...) метод возвр новый массив из исходного массива и добаленных элементов ]
// const newArr = books.concat({id: 5, name: 'О чудный новый свет', author: 'Новый автор', price: 1000})

// console.log(newArr);

// SLICE arr.slice(start, end) возвращает новый массив из исходного массива с началом start и концом end
// const newArr = books.slice(1, 3)
// console.log(newArr);

// SPLICE arr.splice(start, deleteCount, item1, item2, ...) возвращает новый массив из удаленных элементов, изменяет исходный массив!
// const newArr = books.splice(1, 3, {id: 5, name: 'О чудный новый свет', author: 'Новый автор', price: 1000})
// console.log(newArr);
// console.log(books);

// поиск элементов в массивах
// FIND ищет первое совпадение если находит(true) - возвращает элемент, если нет - undefined
// let result = books.find(function (item, id, array) {
//   return item.id === 2
// })
// console.log(result);

// FINDINDEX ищет первое совпадение если находит(true) - возвращает индекс элемента, если нет - -1
// let result = books.findIndex(function (item, id, array) {
//   if (item.price < 1000) {
//     return true
//   }
// })
// console.log(result);

// МЕТОДЫ ПЕРЕБОРА И ПРЕОБРАЗОВАНИИ МАССИВОВ
// forEach позволяет пройтись по массиву и выполнить действие с каждым элементом
// важно - он изменяет исходный массив. не создает новый
// books.forEach(function (item, id, array) {
//   item.location = 'RU'
// })
// console.log(books);

// map позволяет пройтись по массиву и создать новый массив с измененными элементами
// важно - он не изменяет исходный массив. создает новый
// let result = books.map(function (item, id, array) {
//   item.location = "RU";
//     return item
// })
// console.log(result);

// filter позволяет пройтись по массиву и создать новый массив с элементами, которые удовлетворяют условию
// важно - он не изменяет исходный массив. создает новый
// если ничего не найдено - вернет пустой массив
// let result = books.filter(function (item, id, array) {
//     return item.author === 'Виталий Зыков'
// })
// console.log(result);

// reduce позволяет пройтись по массиву, сверить условия и посчитать что-то в исходном массиве
// let result = books.reduce(function (acc, item, id, array) {
//   if (item.price > 1000) {
//     return acc + item.price
//   } else {
//     return acc
//   }
// }, 0)
// console.log(result);

// reduceRight тоже самое, только с конца массива
// let result = books.reduceRight(function (acc, item, id, array) {
//   if (item.price > 1000) {
//     return acc + item.price
//   } else {
//     return acc
//   }
// }, 0)
// console.log(result);




