// 1)
const input = document.getElementById('text');
const btn = document.getElementById('btn');
const square = document.getElementById('square');

changeColor = function () {
    if (input.value == 'red') {
        square.style.backgroundColor = 'red';
    } else if (input.value == 'blue') {
        square.style.backgroundColor = 'blue';
    } else if (input.value == 'green') {
        square.style.backgroundColor = 'green';
    }
}

btn.addEventListener('click', changeColor)

// 2)
const e_btn = document.getElementById('e_btn');

console.dir(e_btn);

e_btn.style = 'display: none'


// 3)
const range = document.getElementById('range');
const circle = document.getElementById('circle');
const rangeSpan = document.getElementById("range-span");

const changeRange = function (event) {
    rangeSpan.innerHTML = event.target.value,
    circle.style.height = event.target.value + 'px',
    circle.style.width = event.target.value + 'px'
}

range.addEventListener('change', changeRange)
