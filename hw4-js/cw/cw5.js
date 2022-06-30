// 5.	Напишите функцию, которая сгенерирует массив рандомных чисел (на 10 элементов) от -10 до 10
// Выведите массив в консоль
// Посчитайте сумму позитивных чисел из массива и выведите ее в консоль

// ########

function randomArr() {
  let newArr = [];

  for (let i = 0; i < 5; i++) {
    let randomNumberPlus = Math.floor(Math.random() * 10);
    let randomNumberMinus = Math.floor(Math.random() * -10);
    let collectArr = newArr.push(randomNumberMinus, randomNumberPlus);
  }
  console.log(newArr); // Сам эррей

  let positiveNumber = 0;
  for (i = 0; i < newArr.length; i++) {
    if (newArr[i] > 0) {
      positiveNumber = positiveNumber + newArr[i];
    }
  }
  return positiveNumber; // Значення суми
}
console.log(randomArr());
