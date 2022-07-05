// 3. Используйте метод some внутри функции checkPositive, чтобы проверить, является ли какой-либо элемент в arr положительным. Функция должна возвращать логическое значение.

function checkPositive(arr) {
  let bbb = arr.some(function (item) {
    if (item > 0) {
      return true;
    } else false;
  });
  console.log(bbb);
}
checkPositive([-1, -2, -3, -4, 5]);
// console.log(checkPositive([1, 2, 3, -4, 5]));
