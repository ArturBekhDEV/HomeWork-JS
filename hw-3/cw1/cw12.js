// 12*. Запросите у пользователя число и проверьте есть ли оно в массиве
// Если есть, то сколько раз встречается

let number = +prompt("Tell me number?");

let arr = [1, 2, 3, 4, 5, 6, 2, 2, 8, 4, 4, 4];

const findTimesArr = function (arr, number) {
  let count = 0;
  arr.forEach((v) => v === number && count++);
  return count;
};

console.log(findTimesArr(arr, number));

for (let i = 0; i < arr.length; i++) {
  if (number === arr[i]) {
    alert(
      "Number is here and its for " + findTimesArr(arr, number) + " times!"
    );
  }
}
