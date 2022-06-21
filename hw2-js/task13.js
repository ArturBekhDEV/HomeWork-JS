// 13. Перепишите код с использованием одной конструкции switch:
// if (number === 0) {
//     alert('Вы ввели число 0');
// }

// if (number === 1) {
//     alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//     alert('Вы ввели число 2, а может и 3');
// }

const number = +prompt("Введите число между 0 и 3", "");

switch (number) {
  case 0:
    alert("you pass 0");
    break;
  case 1:
    alert("you pass 1");
    break;
  case 2:
  case 3:
    alert("you pass 2, maybe 3");
    break;
}
