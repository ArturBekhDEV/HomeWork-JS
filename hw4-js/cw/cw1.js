// 1. Напишите функцию, которая принимает массив в качестве аргумента.
// Используя slice(), извлеките информацию из массива аргументов и верните новый массив, содержащий элементы «warm» и «sunny».

// ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']

// ########

let arr = ["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"];

let myFunc = function (arg) {
  let newArr = arg.slice(2, 4);
  return newArr;
};

console.log(myFunc(arr));
