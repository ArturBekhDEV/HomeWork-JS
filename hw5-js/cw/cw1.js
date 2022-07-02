// 1.  Обрезать строку (первый аргумент), если она длиннее заданной максимальной длины строки (второй аргумент). Вернуть усеченную строку с ... окончанием.

// function truncateString(str, num) {
//     // your code here

//     return str;
// }

// truncateString("A-tisket a-tasket A green and yellow basket", 8);

// ###########

function truncateString(str, num) {
  let arrString = str.split("");
  let stringSplice = arrString.splice(0, num);
  let stringArr = stringSplice.join("") + "...";
  console.log(stringArr);
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
