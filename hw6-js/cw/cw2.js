// 2. Каждое число в квадрат

// Напишите функцию, которая принимает число и возводит каждую цифру этого числа в квадрат.

// Пример:
// squareDigits(9119) //811181 так как 9^2 равно 81 и 1^2 равно 1.

// ###########

function calcFunc(number) {
  let stringArr = number.toString();
  let numArr = stringArr.split("");
  let mapArr = numArr.map((n) => n * n);
  let toStringArr = mapArr.join("");
  return toStringArr;
}

console.log(calcFunc(229));
