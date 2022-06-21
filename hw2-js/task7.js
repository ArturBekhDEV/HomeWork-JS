// Напишите код, который будет спрашивать логин с помощью prompt.

// 			Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// 			Пароль проверять так:
// 			Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// 			Иначе – «Неверный пароль»,
// 			При отмене – «Отменено».

// 			Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращает null.

let login = prompt("Tell me your login");
let password = "1111";

if (login === "admin") {
  let password = prompt("Tell me your password");
  if (password === "" || password === null) {
    alert("Cancelled!");
  } else if (password != "1111") {
    alert("I dont know you!");
  } else if (password === "1111") {
    alert("Im ready for work");
  }
} else alert("cancelled!");
