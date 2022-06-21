// 1. Напишите цепочку операторов if / else if, чтобы выполнить следующие условия (num вводит пользователь), результат вывести в консоль:
// (бонус через тернарный оператор)
// num < 5 - "Tiny"
// num < 10 - "Small"
// num < 15 - "Medium"
// num < 20 - "Large"
// num >= 20 - "Huge"

let num = +prompt("press a number");

if (num < 5) {
  alert("tiny");
} else if (num < 10) {
  alert("Small");
} else if (num < 15) {
  alert("Medium");
} else if (num < 20) {
  alert("Large");
} else if (num >= 20) {
  alert("Huge");
}
