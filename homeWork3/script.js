/* --створити масив з:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль */

let integers  = [5, 4, 3, 2, 1];
console.log(integers);
console.log(integers[0]);
console.log(integers[1]);
console.log(integers[2]);
console.log(integers[3]);
console.log(integers[4]);

let strings = ['a', 'b', 'c', 'd', 'e'];
console.log(strings);
console.log(strings[0]);
console.log(strings[1]);
console.log(strings[2]);
console.log(strings[3]);
console.log(strings[4]);

let bool = [true, false, true, false, true];
console.log(bool[0]);
console.log(bool[1]);
console.log(bool[2]);
console.log(bool[3]);
console.log(bool[4]);

/* Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль */

let arr = [];
arr[0] = 50;
arr[1] = 'html';
arr[2] = 'css';
arr[3] = 'js';
arr[4] = 10;

/*  За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині */

for (let i = 0; i < 10; i++) {
    document.write('<div>');
        document.write('uygukhkjh');
    document.write('</div>');
}

/* За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині */

for (let i = 0; i < 10; i++) {
    document.write('<div>');
    document.write('index ' + i);
    document.write('</div>');
}

/*  За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині. */

let i = 0;
while (i < 20) {
    document.write('<h1>Hi!</h1>')
    i++;
}

/*  За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині. */

let i = 0;
while (i < 20) {
    document.write('<h1>hi! ${i + 1}</h1>');
    i++;
}

/* Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі. */

let numbers = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
for (i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    console.log(number);
}
/* або через цикл while */
let numbers = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
i = 0;
let number = numbers[i];
while (i < numbers.length) {
    i++;
}
document.write(number);

/* Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі. */
let text = ['a', 'b', 'c', 'd', 'e', '5', '6', '7', '8', '9', '10'];
for (let i = 0; i < text.length; i++) {
    let txt = text[i];
    console.log(txt);
}

/* або через while */

let text = ['a', 'b', 'c', 'd', 'e', '5', '6', '7', '8', '9', '10'];
let i = 0;
while (i < text.length) {
    i++;
}
console.log(text[i]);

/* Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі. */

let data = [1, 2, 3, 4, 5, 'Victor', 'Olga', 'love', true, '!'];

for (let i = 0; i < data.length; i++) {
    let specificData = data[i];
    consol.log(specificData);
}

/* Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи */

let combination = [1, 2, 3, 4, 5, 'hj', 'bhj', 'bhj', false, true];
for (let i = 0; i > combination.length; i++) {
    let combo = combination[i];
    if (typeof combo === 'boolean') {
        console.log(combo);
    }
}

/* Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи */
let combination = [1, 2, 3, 4, 5, 'hj', 'bhj', 'bhj', false, true];
for (let i = 0; i < combination.length; i++) {
    let combo = combination[i];
    if (typeof combo === 'number') {
        console.log(combo);
    }
}

/* Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи */

let combination = [1, 2, 3, 4, 5, 'hj', 'bhj', 'bhj', false, true];
for (let i = 0; i < combination.length; i++) {
    let combo = combination[i];
    if (typeof combo === 'string') {
        console.log(combo);
    }
}

/*  Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі. */

let mix = [1, 2, 3, 4, 5, true, false, 'hkj', 'sdf', '89'];
for (let i = 0; i < mix.length; i++) {
    console.log(i);
}

/* Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write */

let mix2 = [1, 2, 3, 4, 5, true, false, 'hkj', 'sdf', '89'];
for (let i = 0; i > 10; i++) {
    let item = mix2[i];
    console.log(item);
}
document.write('item');

/* Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write */

let mix3 = [1, 2, 3, 4, 5, true, false, 'hkj', 'sdf', '89'];
for (let i = 0; i > 100; i++) {
    let item = mix3[i];
    console.log(item);
}
document.write('item');

/* Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write */

let mix4 = [1, 2, 3, 4, 5, true, false, 'hkj', 'sdf', '89'];
for (let i = 0; i > 100; i +=2) {
    let item = mix4[i];
    console.log(item);
}
document.write('S{item}');

/* Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write */

for (let i = 0; i < 100; i++) {
    if(i % 2 === 0 && i !== 0) {
        console.log(i);
    }
}

/* Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write */


for (let i = 0; i < 100; i++) {
    if(i % 3 === 0 && i !== 0) {
        console.log(i);
    }
}










