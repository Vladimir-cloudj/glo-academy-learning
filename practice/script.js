"use strict";
// ==============================
// Функция для GET-запроса (получение данных)
// ==============================
const getData = (url) => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
    }
    return response.json(); 
  });
};

// ==============================
// Функция для отправки данных (POST/PUT и т.д.)
// ==============================
const sendData = (url, data = {}, method = "POST") => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data), 
    headers: {
      "Content-type": "application/json; charset=UTF-8", 
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
    }
    return response.json();
  });
};

// ==============================
// Цепочка: получаем данные из db.json и отправляем на сервер
// ==============================
getData("db.json")
  .then((data) => {
    console.log("Данные из файла:", data);
    // Отправляем полученные данные на сервер
    return sendData("https://jsonplaceholder.typicode.com/posts", data, "POST");
  })
  .then((result) => {
    console.log("Ответ сервера:", result);
  })
  .catch((error) => {
    console.error("Ошибка:", error.message);
  });
