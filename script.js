const lists = document.querySelectorAll('.list');
const elems = document.querySelectorAll('.elem');
console.log(lists, elems);

//удалить последний элемент списка[0]
elems[2].remove();
//добавить в конец списка[1] элемент[2]
lists[1].append(elems[2])
console.log(lists[1]);
//добавить в начало списка[1] элемент[3]
lists[1].prepend(elems[3]);
//добавить перед первым элементом списка[0] элемент[1]
lists[0].before(lists[1]);
//добавить после третьего элемента списка[0] элемент[4] 
elems[3].after(elems[4]);
//добавить после второго элемента списка[0] элемент[2]
//элемент[4] при этом полностью удаляется из DOM
elems[4].replaceWith(elems[2])

// клонирование элемента
const cloneElem = elems[3].cloneNode(true);
cloneElem.classList.add('green')
cloneElem.innerHTML = `<strong>Clone</strong>`
// cloneElem.textContent = 'Клон';
console.log(cloneElem);

lists[1].append(cloneElem);

// создание элементов
const newElem = document.createElement('li');
// добавление текста затирает старый контент
// newElem.textContent = 'step 6'
// newElem.classList.add('elem', 'green')

// lists[1].append(newElem);
// добавление текста без затирания старого контента
const title = document.getElementById('title');
// title.insertAdjacentText("beforebegin", "beforebegin");
// title.insertAdjacentText("afterend", "afterend");
// title.insertAdjacentText("beforeend", " beforeend");
// title.insertAdjacentText("afterbegin", "afterbegin ");

console.log(title);
// добавление элементов
// title.insertAdjacentElement("beforebegin", elems[0]);
// title.insertAdjacentElement("afterend", elems[1]);
// title.insertAdjacentElement("beforeend", elems[2]);
// title.insertAdjacentElement("afterbegin", elems[3]);

// добавление кусков верстки
// title.insertAdjacentHTML("beforebegin", '<span>step 1</span>');
// title.insertAdjacentHTML("afterend", "<span>step 2</span>");
// title.insertAdjacentHTML("beforeend", "<span>step 3</span>");
// title.insertAdjacentHTML("afterbegin", "<span>step 4</span>");

// можно добавить несколько элементов
// можно передать просто строку
lists[0].append(elems[4]);
// устарешие методы
// appendChild добавляет в конец списка один элемент
// нельзя добавить несколько элементов
// нельзя передать просто строку
// возвращает добавленный элемент
lists[0].appendChild(elems[5])


lists[0].before(elems[4]);
// зависит от родителя
// 
lists[1].insertBefore(elems[6], elems[7])


lists[0].replaceWith(elems[4]);
// зависит от родителя
//
lists[1].replaceChild(elems[6], elems[7]);


lists[0].remove(elems[4]);
// зависит от родителя
//
lists[1].removeChild(elems[6], elems[7]);


