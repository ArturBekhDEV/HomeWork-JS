// 8.	Напишите функцию, которая принимает строку и удаляет в ней все дублирующиеся слова, оставляя тем самым только уникальные

// Пример:

// Input:

// Output:
// 'alpha beta gamma delta'

let str = "alpha beta beta gamma gamma gamma delta alpha beta";

function deleteWord(str) {
  let arr = str.split(" ");
  return arr;
}

function remove(arr) {
  let res = [];

  for (let word of arr) {
    if (!res.includes(word)) {
      res.push(word);
    }
  }
  return res;
}
console.log(remove(deleteWord(str)));
