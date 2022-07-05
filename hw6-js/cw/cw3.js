// 3.	Заменить все элементы

// Напишите функцию replaceAll, которая принимает первым параметром массив элементов, вторым параметром - элемент, который нужно заменить и третьим -
// элемент, который должен заменить второй элемент.
// Пример:
//  replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]

// ###########

let arr = [1, 2, 2, 9, 2, 3, 6];
function replaceAll(arr, oldEl, newEl) {
  let newArr = arr.indexOf(oldEl);
  console.log(newArr);
  let arrSplice = arr.splice([newArr], 1, newEl);
  return arrSplice;
}

console.log(replaceAll(arr, 9, 4));
