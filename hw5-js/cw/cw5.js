// 5.	Будет ли место?

// Боб работает водителем автобуса. Он подъезжает к остановке и ему нужно посчитать, сколько пассажиров он может посадить в автобус.

// Напишите функцию, которая принимет три параметра:
// 1 - количество людей, которое вмещает автобус.
// 2 - число людей, находящихся в автобусе.
// 3 - люди, ожидающие на остановке.

// Если место для всех достаточно, то функция должна вернуть 0, иначе, она должна вернуть количество людей, которые не смогут поместиться.

// Примеры:
// enough(10, 5, 5);
// // 0, так как вместятся все
// enough(100, 60, 50);
// // 10, Не поместятся 10 из 50

// ###########

function enough(capicityInBus, peopleQtyBus, peopleInStation) {
  if (capicityInBus === peopleQtyBus + peopleInStation) {
    return 0;
  }
  return peopleQtyBus + peopleInStation - capicityInBus;
}

console.log(enough(10, 5, 1));
console.log(enough(100, 60, 50));