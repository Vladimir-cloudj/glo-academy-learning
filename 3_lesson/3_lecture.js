let answer = confirm("Вы согласны?") ? "Вы согласились." : "Вы отменили выполнение."
console.log(answer);

let answer2 = confirm("Вы согласны?");
console.log(answer2);

console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(false));

console.log(!!(NaN));

console.log(parseInt(answer));//возвращает целое число
console.log(parseFloat(answer));
