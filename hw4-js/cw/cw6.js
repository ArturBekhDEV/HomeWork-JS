// 6.	Напишите функцию, которая сгенерирует массив рандомных чисел (кол-во элементов в массиве вводит пользователь) от -10 до 10
// Определите наименьшее и наибольшее число в массиве.
// Массив, минимальное и максимальное число - вывести в консоль.

// ########

function randomNum() {
  let newArr = [];

  for (i = 0; i < 10; i++) {
    let num = +prompt("tell me number");
    if (num < 10 && num > -10) {
      newArr.push(num);
    }
  }
  let positiveNumber = 0;
  for (i = 0; i < newArr.length; i++) {
    if (newArr[i] > 0) {
      positiveNumber = positiveNumber + newArr[i];
    }
  }

  let negariveNumber = 0;
  for (i = 0; i < newArr.length; i++) {
    if (newArr[i] < 0) {
      negariveNumber = negariveNumber - -newArr[i];
    }
  }
  console.log(newArr);
  console.log(negariveNumber, positiveNumber);
  //   return negariveNumber, positiveNumber;
}

console.log(randomNum());
