// 4.	Напишите функцию, которая будет обрабатывать url, удаляя в нем всё после знака #

// Примеры:

// removeUrlAnchor('www.codewars.com#about')
// // returns 'www.codewars.com'

// // returns 'www.codewars.com?page=1'
// removeUrlAnchor('www.codewars.com?page=1')

// www.codewars.com#about

function calculateUrl(url) {
  let stringToArr = url.split("");
  let findIndex = url.indexOf("#");
  let deleteSomething = stringToArr.splice([findIndex]);
  return stringToArr.join("");
}

console.log(calculateUrl("www.codewars.33com#aboutdededed"));
