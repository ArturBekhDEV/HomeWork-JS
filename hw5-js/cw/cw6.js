// 6.	Сколько чашек кофе мы можем сделать?

// Напишите функцию, которая принимает один аргумент - количество кофейных зерен.
// По условию - из 5 кофейных зерен можно сделать 1 чашку кофе.
// Если зерен на чашку кофе не хватает - попросите у пользователя еще.
// Верните количество чашек с кофе, которые можно сделать из того кол-ва зерен, что у вас уже имеется.
// Те зерна, которые остались должны быть учтены при следующей готовке (используйте глобальную переменную)

// Например вызовите подряд несколько раз функцию, с разными значениями:
// doCoffee(10)    => "Приготовлено чашек кофе: 2, осталось зерен: 0";
// doCoffee(4)		=> "Можно еще зерен?" => "Приготовлено чашек кофе: 1, осталось зерен: 2";
// doCoffee(3)		=> "Приготовлено чашек кофе: 1, осталось зерен: 0";
// -->

function doCoffee(qtyCoffe) {
  if (qtyCoffe % 5 === 0) {
    alert("We made" + qtyCoffe / 5 + "coffe cups");
  }
  if (qtyCoffe / 5 < 1) {
    prompt("give more beans!");
  } else {
    let caps = Math.floor(qtyCoffe / 5);
    let beansLeft = qtyCoffe - caps * 5;
    alert("cups of coffee " + caps + " Beans left " + beansLeft);
  }
}
doCoffee(13);
