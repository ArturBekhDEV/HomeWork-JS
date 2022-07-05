// 2. Допишите функцию countOnline

let users = [
  {
    age: 27,
    online: false,
  },
  {
    age: 32,
    online: true,
  },
  {
    age: 48,
    online: false,
  },
  {
    age: 19,
    online: true,
  },
  {
    age: 19,
    online: true,
  },
  {
    age: 19,
    online: false,
  },
  {
    age: 19,
    online: false,
  },
  {
    age: 19,
    online: true,
  },
];

function countOnline(arr) {
  let onlineObj = arr.map((item) => item.online);
  let countOnlineArr = 0;
  for (i = 0; i < onlineObj.length; i++) {
    if (onlineObj[i] === true) {
      countOnlineArr++;
    }
  }
  console.log(countOnlineArr);
}
console.log(countOnline(users));

// якщо я правильно зрозумів завдання..
