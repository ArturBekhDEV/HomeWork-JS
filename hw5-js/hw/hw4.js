// 4. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
// содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
// Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках.

let ask1 = prompt("Your name?");
let ask2 = prompt("Your sname?");
let ask3 = prompt("Your birth?");
let ask4 = prompt("Your occupation?");

var arrPerson = [
  (firstPerson = {
    name: ask1,
    sName: ask2,
    age: ask3,
    occupation: ask4,
  }),
];

let infoFunc = function () {
  let info = [
    console.log(arrPerson[0].name),
    console.log(arrPerson[0].sName),
    console.log(arrPerson[0].age),
    console.log(arrPerson[0].occupation),
  ];
  return info;
};

arrPerson.push(infoFunc());
