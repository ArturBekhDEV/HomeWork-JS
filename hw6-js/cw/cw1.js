// 1.	Часы
// Напишите функцию, которая принимает на вход количeство часов, минут и секунд, и преобразует полученное время в миллисекунды.

// Пример:
// past(0, 1, 1) == 61000

// ###########

function timeCalculate(hours, min, sec) {
  let time = ((hours * 60 + min) * 60 + sec) * 1000;
  return time;
}

console.log(timeCalculate(10, 1, 1));
