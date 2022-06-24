// 11. Подмассив наибольшей суммы
// Определите максимальную сумму в подмассиве

// Setup
let a = [
  [1, -10, 4, 5],
  [1, 5, 5, 3],
  [-1, 8, 4, 1],
  [1, -10, -4, 5],
  [1, 10, 4, 0],
];
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
let sum4 = 0;
let sum5 = 0;

for (let i = 0; i < a[0].length; i++) {
  sum1 = sum1 + a[0][i];
}
console.log(sum1);

for (let i = 0; i < a[0].length; i++) {
  sum2 = sum2 + a[1][i];
}
console.log(sum2);

for (let i = 0; i < a[0].length; i++) {
  sum3 = sum3 + a[2][i];
}
console.log(sum3);

for (let i = 0; i < a[0].length; i++) {
  sum4 = sum4 + a[3][i];
}
console.log(sum4);

for (let i = 0; i < a[0].length; i++) {
  sum5 = sum5 + a[4][i];
}
console.log(sum5);
