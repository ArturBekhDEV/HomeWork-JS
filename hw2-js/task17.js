// 4. Дано два числа A и B где (A < B).
// Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В.
// Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В.

let numberA = 10;
let numberB = 20;
let sum = 0;

for (let i = numberA + 1; i < numberB; i++) {
  console.log(i);
}
console.log("*************");
for (let i = numberA + 1; i < numberB; i++) {
  if (i % 2) {
    console.log(i);
  }
}
