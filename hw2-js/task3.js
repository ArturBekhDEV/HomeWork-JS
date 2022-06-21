// 3. Перепишите с тернарным оператором
// if (a > b) {
//     max = a;
// } else {
//     max = b;
// }

//console.log(max);

let a = +prompt("tell me number A");
let b = +prompt("tell me number of B");

let max;

a > b ? (max = a) : (max = b);

console.log(max);
