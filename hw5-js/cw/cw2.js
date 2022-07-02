// 2.  Создайте функцию, которая просматривает массив (первый аргумент) и возвращает первый элемент в массиве, который проходит проверку на истинность (второй аргумент).
// Если ни один элемент не проходит тест, вернуть undefined.

// function findElement(arr, func) {
//     return item;
// }

// ###########

let arr = [1, 2, 3, 4, 5, 6, 7, "string", 8, 9, 10];
function findElement(arr, func) {
  let findElement = arr.indexOf(func);
  if (findElement === -1) {
    return undefined;
  } else return findElement;
}

console.log(findElement(arr, "string"));
