// - Знайти та вивести довижину настипних стрінгових значень
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javasctipt is cool'.length);

// - Перевести до великого регістру наступні стрінгові значення
let toUpper1 = 'hello world';
console.log(toUpper1.toUpperCase());

let toUpper2 = 'javascript is cool';
console.log(toUpper2.toUpperCase());

let toUpper3 = 'lorem ipsum';
console.log(toUpper3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
let toLower1 = 'HELLO WORLD';
console.log(toLower1.toLowerCase());

let toLower2 = 'LOREM IPSUM';
console.log(toLower2.toLowerCase());

let toLower3 = 'JAVASCRIPT IS COOL';
console.log(toLower3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let cleaning = ' dirty string   ';
console.log(cleaning.trim());

// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
let str = 'Каждый охотник желает знать';

let stringToArray = (str) => {
    return str.split(' ');
}
console.log(stringToArray(str));

// // або так:

function stringToArray (str) {
    return str.split(' ');
}
console.log(stringToArray (str));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
function delete_characters (str, length) {
    return str.substring(0, length);
}

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.\
// При цьому всі символи рядка необхідно перевести у верхній регістр.
let str = "HTML JavaScript PHP";

function insert_dash(str) {
    return str.replaceAll(' ', '_').toUpperCase();
}
console.log('insert_dash(str)');

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
function firstLetterCapital(str) {
    return str[0].toUpperCase() + str.slice(1);
}

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(0, 0);
}
document.write(capitalize('gjh jkjkj kjhjk'));
console.log(capitalize('gjh jkjkj kjhjk'));
