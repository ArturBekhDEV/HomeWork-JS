// 9. Давайте произведём 5 операций с массивом.

// 9.1 Создайте массив styles с элементами «Джаз» и «Блюз».
// 9.2 Добавьте «Рок-н-ролл» в конец.
// 9.3 Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// 9.4 Удалите первый элемент массива и покажите его.
// 9.5 Вставьте «Рэп» и «Регги» в начало массива.

// -------------------------------------------------------------------

let styles = ["jazz", "blues"];
styles.push("rock-n-roll");
let newStyles = Math.floor(styles.length / 2);
styles[newStyles] = "classic";
console.log(styles);
let newStylesUpdate = styles.shift();
console.log(newStylesUpdate);
let newStylesUpdateAdd = styles.unshift("rap", "reggie");
console.log(styles);
