// 3.	Допишите функцию, которая определит, парное ли число (решение должно быть в одну строку).
// Функция должна вернуть "Even" или "Odd";

// function isEven(num) {
//     // your code here
// }

function calcFunc(num) {
  return num % 2 === 0 ? "even" : "odd";
}

console.log(calcFunc(1));
