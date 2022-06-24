// 10. Сумма введённых чисел

// Создайте массив
// Через цикл запрашивайте у пользователя цифры
// Заканчивайте запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитайте и верните сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

let arr = [];
let number;

for (let i = 0; i < Infinity; i++) {
  number = +prompt("Tell me your number?");
  if (number === 0) {
    alert("no number");
    break;
  }
  arr.push(number);
  const sumArr = arr.reduce((partialSum, a) => partialSum + a, 0);
  console.log(sumArr);
}
