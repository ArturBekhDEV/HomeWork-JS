// 2. Напишите функцию подсчета градусов Фаренгейта при входящем параметре температуры в цельсиях.
// Алгоритм пересчета из градусов Цельсия в градусы Фаренгейта - это температура в градусах Цельсия, умноженная на 9/5 плюс 32.

// ########

let ask = prompt("tell me number");

let tempFunc = function (temp) {
  let temperature = (temp * 9) / 5 + 32;
  return temperature;
};

console.log(tempFunc(ask));
