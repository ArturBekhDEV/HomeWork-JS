// 4. Напишите функцию которая возвращает длину самого длинного слова в предложении.
// Ваш ответ должен быть числом.
// "The quick brown fox jumped over the lazy dog" => 6

let word = "The quick brown fox jumped over the lazy dog";

let longestWordFunc = function (arg) {
  let arrWord = arg.split(" ");
  let wordLong = "";
  for (let i = 0; i < arrWord.length; i++) {
    if (wordLong.length < arrWord[i].length) {
      wordLong = arrWord[i];
    }
  }
  return wordLong;
};

console.log(longestWordFunc(word));
