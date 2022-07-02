// 6. (*) Для задания 3 создать метод, позволяющий отсортировать массив сотрудников по одному из свойств: name, sName, age, occupation, salary.
// Параметр для сортировки принимается от пользователя.
// После выполнения функции — вывести информацию о сотрудниках.

let arr = [
  (firstWorker = {
    name: "Artur",
    sName: "Bekh",
    age: 28,
    occupation: "designer",
    salary: 5000,
  }),
  (secondWorker = {
    name: "Vitya",
    sName: "Nevajno",
    age: 18,
    occupation: "engineer",
    salary: 6000,
  }),
  (thridWorker = {
    name: "Kolya",
    sName: "Familiya",
    age: 38,
    occupation: "CEO",
    salary: 15000,
  }),
];

let ask = prompt("Tell me what you want?");

let sortFunc = function (ask) {
  if (ask === "name") {
    let showName = arr.forEach((el, index) => console.log(arr[index].name));
    return showName;
  } else if (ask === "age") {
    let showAge = arr.forEach((el, index) => console.log(arr[index].age));
    return showAge;
  } else if (ask === "sname") {
    let showsName = arr.forEach((el, index) => console.log(arr[index].sName));
    return showsName;
  } else if (ask === "occupation") {
    let showOccupation = arr.forEach((el, index) =>
      console.log(arr[index].occupation)
    );
    return showOccupation;
  } else if (ask === "salary") {
    let showSalary = arr.forEach((el, index) => console.log(arr[index].salary));
    return showSalary;
  } else return alert("You should type correect word!");
};

sortFunc(ask);

// Не знаю чи правильно вирішив це завдання..
