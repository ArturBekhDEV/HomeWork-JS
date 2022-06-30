//     5.  Создать игру "Камень-Ножницы-Бумага".
//     Выбор компьютера определяется строкой:

//     var computerChoice = Math.random();
//     alert(computerChoice);

//     let comp = getComputerChoice();
//     let user = getUserChoice();
//     function game(comp, user) {

//     }

//     Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
//     Запросить у пользователя один из трех вариантов "Камень-Ножницы-Бумага"
//     Сравнить ответ пользователя и компьютера, определить кто выиграл (или ничья)
//     Спросить пользователя, хочет ли он повторить, если "да", запустить игру заново
// -->

function getUserChoice() {
  prompt("Kamen/Nojnicu/Bumaga?");
  let number = Math.random();
  return number;
}
function getComputerChoice() {
  let numberComp = Math.random();
  return numberComp;
}

let comp = getComputerChoice();
let user = getUserChoice();

function game(comp, user) {
  if (comp > user) {
    alert("You Win!");
  } else alert("Comp Win");
}

game(comp, user);
