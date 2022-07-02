// 5. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов
// будет добавлять новое свойство "salary", хранящее зарплату сотрудника.
// Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
//     • "director" — 3000;
//     • "manager" — 1500;
//     • "programmer" — 2000;
//     • для остальных значений — 1000.
// После выполнения функции — вывести информацию о сотрудниках.
let ask1 = prompt("Your name?");
let ask2 = prompt("Your sname?");
let ask3 = prompt("Your birth?");
let ask4 = prompt("Your occupation?");

let arrPerson = [
  (firstPerson = {
    name: ask1,
    sName: ask2,
    age: ask3,
    occupation: ask4,
  }),
];

let salary = function (arr) {
  let earn;

  if (ask4 === "director") {
    earn = 3000;
  } else if (ask4 === "manager") {
    earn = 1500;
  } else if (ask4 === "programmer") {
    earn = 2000;
  }

  let arrPersonNew = arr.map((a) => ({ ...a, earn: earn }));
  return arrPersonNew;
};

console.log(salary(arrPerson));
