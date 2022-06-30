// 7.	Напишите функцию, которая проверят, делится ли число на два других числа.
// Сигнатура метода:
// function isDivisible(num, x, y) {

// }

// num: 15
// x: 3
// y: 5

// =>

// где num - проверяемое число,
//     х - первое число для проверки,
//     y - второе число для проверки

// Если num делиться на оба числа без остачи - вывести true
// Если num неделиться на оба числа - вывести "не делиться на х и у" (вместо х и у подставить соответствующие числа)
// Если num неделиться на одно из числе - вывести "не делиться на х|y" (вместо х и у подставить соответствующие числа)

// ########

let num = 15;
let x = 3;
let y = 5;

function isDivisible(num, x, y) {
  if (num % x === 0 && num % y === 0) {
    return true;
  } else if (num % x != 0 && num % y != 0) {
    return "не делиться на y и x";
  } else if (num % x === 0) {
    return "делится на x";
  } else if (num % y === 0) {
    return "делится на y";
  }
}

console.log(isDivisible(15, 3, 5));
