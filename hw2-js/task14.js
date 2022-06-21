// 1. Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, вывести сообщение "Ошибка". Числа принять от пользователя.

let num1 = +prompt("number 1 ?");
let num2 = +prompt("number 2 ?");
let num3 = +prompt("number 3 ?");

let avarageNumber = (num1 + num2 + num3) / 3;
console.log(avarageNumber);

if (num1 === num2 || num2 === num3) {
  alert("Error!");
}
