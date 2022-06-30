// 		8.	Сумма в диапазоне

//         Напишите 2 функции.
//         Первая функция генерирует массив на N рандомных чисел в диапазоне от A до B и возвращает его
//         Т.е. принимает 3 параметра и А не может быть больше чем B
//         Например: doSmth(8, 1, 10) -> [3, 2, 5, 4, 7, 1, 3, 10]

//         Вторая функция принимает массив рандомных чисел, индекс С которого начинать подсчет и индекс ПО который считать
//         Должна быть валидация индексов
//             - Чтобы не было отрицательных чисел
//             - Чтобы индекс не выходил за рамки допустимых индексов
//             - Чтобы первый индекс был меньше или равен второму

//         Пример вывода в консоль:
//         Массив: [.....] сгенерированный от A до B
//         Сумма чисел в диапазоне от индекса C по индекс D равна: 10
//  -->

function makeMassive(A, B) {
  var arr = [];
  if (A < B) {
    for (i = A; i < B; i++) {
      let randomNumber = Math.floor(Math.random() * 10);
      arr.push(randomNumber);
    }
  } else console.log("cant make this arr");
  return arr;
}
console.log(makeMassive(4, 14));

function indexCount(makeMassive, index) {
  for (i = 0; i < makeMassive[0]; i++) {
    if (makeMassive[i] < 0) {
      console.log("We dont have '-' numbers");
    } else if (makeMassive[i] > index) {
      console.log("This index is too much!");
    }
  }
}

let res = indexCount(makeMassive(4, 14), 13);
console.log(res);

/// ???
