// 2. Создать объект Calculator, который должен содержать методы для расчета суммы, разности, произведения и частного двух чисел.
// Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
// В зависимости от принятого знака операции, вызвать соответствующий метод.

let num1 = +prompt("Tell me first Number");
let num2 = +prompt("Tell me second Number");
let someSign = prompt("Tell me what i should do?");

let calculatorObj = {
  sum: function (x, y) {
    return x + y;
  },
  devide: function (x, y) {
    return x / y;
  },
  minus: function (x, y) {
    return x - y;
  },
  multiplication: function (x, y) {
    return x * y;
  },
};

function calculator(num1, num2, someSign) {
  if (someSign === "+") {
    return calculatorObj.sum(num1, num2);
  } else if (someSign === "-") {
    return calculatorObj.minus(num1, num2);
  } else if (someSign === "/") {
    return calculatorObj.devide(num1, num2);
  } else if (someSign === "*") {
    return calculatorObj.multiplication(num1, num2);
  }
}

console.log(calculator(num1, num2, someSign));
