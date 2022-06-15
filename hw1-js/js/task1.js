let x1 = prompt("tell me x1?");
let x2 = prompt("tell me x2?");
let y1 = prompt("tell me y1?");
let y2 = prompt("tell me y2?");

let k = (y1 - y2) / (x1 - x2);
let b = y2 - k * x2;

console.log("y = " + k + "x + " + b);
