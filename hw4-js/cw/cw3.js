// 3. Напишите функцию которая бы переворачивала предоставленную строку
// Возможно, вам придется превратить строку в массив, прежде чем вы можете обратить его.
// Ваш результат должен быть строкой.
// "something"

// "test" => "tset"

let word = prompt("Tell me the word");

let reverseWordFunc = function (word) {
  let arr = word.split("");
  let arrReverse = arr.reverse();
  let stringArr = arrReverse.join("");
  return stringArr;
};

console.log(reverseWordFunc(word));
