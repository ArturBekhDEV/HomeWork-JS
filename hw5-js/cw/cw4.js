// 4.  Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// ###########

let obj = {
  //   name: "Hello",
  //   surname: "Artur",
};

function isEmpty(obj) {
  if (Object.keys(obj).length) {
    return true;
  } else return false;
}

console.log(isEmpty(obj));
