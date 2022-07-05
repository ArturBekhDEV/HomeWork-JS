// 7.	Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(users) {
  let ageMapUsers = users.map((item) => item.age);
  let sumArr = ageMapUsers.reduce((partialSum, a) => partialSum + a, 0);
  return sumArr;
}

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

console.log(getAverageAge(arr));
