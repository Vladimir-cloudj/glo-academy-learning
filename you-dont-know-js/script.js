// const books = document.querySelectorAll(".book");
// const sortedBooks = Array.from(books).sort((a, b) => {
//   const titleA = a.querySelector("h2").textContent.trim();
//   const titleB = b.querySelector("h2").textContent.trim();
//   // Сортируем по номеру книги в строке (например, "Книга 1", "Книга 2", ...)
//   const numA = parseInt(titleA.match(/Книга (\d+)/)?.[1] || 0);
//   const numB = parseInt(titleB.match(/Книга (\d+)/)?.[1] || 0);
//   return numA - numB;
// });

// const booksContainer = document.querySelector(".books");
// booksContainer.innerHTML = ""; 
// sortedBooks.forEach((book) => booksContainer.appendChild(book));


// ----------1-------------
// 
// создание списка скниг
const books = document.querySelectorAll(".book");
// очищаем список
const booksContainer = document.querySelector(".books");
booksContainer.innerHTML = "";
// всталяем книги по порядку от первой до последней
booksContainer.append(books[1]);
booksContainer.append(books[0]);
booksContainer.append(books[4]);
booksContainer.append(books[3]);
booksContainer.append(books[5]);
booksContainer.append(books[2]);

// ----------2-------------
// заменяем фоновое изображение

// document.body.style.backgroundImage = 'none';
document.body.style.backgroundImage = 'url("image/you-dont-know-js.jpg")'; 



// ----------3-------------
// замена названия книги 3
const book3 = books[4];
const h3 = book3.querySelector("h2");
const title3 = h3.querySelector('a')
console.log(title3);
title3.innerHTML = `Книга 3. this и <b>Прототипы</b> Объектов`;

// books[4].h2:contains.textContent = "Книга 3. JavaScript для детей";


// ----------4-------------
// 
const adv = document.querySelector(".adv");
adv.remove();

// ----------5-------------
// 
const book2 = books[0]
const ul2 = book2.querySelector('ul')
const li2 = Array.from(ul2.children)
ul2.innerHTML = ''
const correct5 = [
    li2[0],
    li2[1],
    li2[3],
    li2[6],
    li2[8],
    li2[4],
    li2[5],
    li2[7],
    li2[9],
    li2[2],
    li2[10],
];
correct5.forEach((li) => ul2.append(li));


const book5 = books[5]
const ul5 = book5.querySelector("ul");
const li5 = Array.from(ul5.children);
ul5.innerHTML = "";
const correct3 = [
  li5[0],
  li5[1],
  li5[9],
  li5[3],
  li5[4],
  li5[2],
  li5[6],
  li5[7],
  li5[5],
  li5[8],
  li5[10],
];
correct3.forEach((li) => ul5.append(li));

// ----------6-------------
// 
const ul6 = books[2].querySelector("ul");
const lis6 = Array.from(ul6.children);
const newLi = document.createElement("li");
newLi.innerHTML = `<b>Глава 8: За пределами ES6</b>`;
ul6.insertBefore(newLi, lis6[9]);

