// . Остановите цикл, когда i = 7 и выведите в консоль все числа до 7 пропустив 3.
//   // for (var i = 0; i < 10; i++) {}

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  } else if (i === 8) {
    break;
  }

  console.log(i);
}
