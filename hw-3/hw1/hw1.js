//

let arr = [1, 12, 3, 4, 5, 6, 7, 8, "fruits", 32, true];
let arr2 = [33, 21, undefined, "String", false, NaN];

//Concat

let newArr = arr.concat(arr2);
// console.log(newArr);

// join

let newArr2 = arr.join(arr2);
// console.log(typeof newArr2);

// slice

let newAarr3 = arr.slice(2, 6);
// console.log(newAarr3);

// sort

let newArr4 = arr.sort((a, b) => a - b);
// console.log(newArr4);

//push - pop

let newArr5 = arr.push("lala");
// console.log(arr);

let newArr6 = arr.pop();
// console.log(newArr6);
// console.log(arr);

// unshift /shift

// console.log(arr);
let newArr7 = arr.unshift(23);
// console.log(arr);

console.log(arr);
let newArr8 = arr.shift();
console.log(arr);
