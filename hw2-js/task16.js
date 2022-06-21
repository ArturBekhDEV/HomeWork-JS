// 3. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.

let num1 = +prompt("Number 1?");
let num2 = +prompt("Number 2?");
let num3 = +prompt("Number 3?");

if (num1 > num2 && num1 > num3) {
  alert(num1);
} else if (num2 > num1 && num2 > num3) {
  alert(num2);
} else if (num3 > num1 && num3 > num2) {
  alert(num3);
}
