// 3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный элемент массива заполнить подмассивом со значением 'odd', а чётный - 'even'.
// Размер каждого вложенного массива - 3.

let number = +prompt("tell me a number");

let arr = [];
let odd = "odd";
let even = "even";

for (let i = 0; i < number; i++) {
  arr.push(i + 1);

  if (arr[i] % 2 == 0) {
    let oddArr = [];
    oddArr.push("even", "even", "even");
    arr.splice(arr[i], 1, oddArr);
  } else if (arr[i] % 2 != 0) {
    let evenArr = [];
    evenArr.push("odd", "odd", "odd");
    arr.splice(arr[i], 1, evenArr);
  }
}

console.log(arr);
