/* створити ф-цію яка обчислює та повертає площу прямокутника */
let myRectangle = (a, b) => {
    return a * b;
}
console.log(15, 20);

/* створити ф-цшю яка обчислює та повертає площу круга */
let myCircle = (r) => {
    let radius = r ** 2;
    return 3.14 * radius;
}
console.log(myCircle(30));

// // Створити ф-цшю яка обчислює та повертає площу циліндру
const myCylinder = (r, h) => {
    return 2 * 3.14 * r * h;
}
console.log(myCylinder(15, 15));

// // Створити ф-цію яка приймає масив та виводить кожен його елемент
let array = [21, 'this is me', 65, 2, 89];

const functionArray = (array) => {
    for(let each of array) {
        let eachItem = (each[i]);
        console.log(eachItem);
    }
}
functionArray(eachItem);

// // Створити ф-цію яка створює параграф з текстом. Текст задати через фргумент
let paragraph = (text) => {
    document.write('<p>${text}</p>');
    document.write('<p>${text}</p>');
    document.write('<br>');

    for (let i = 0; i < text.length; i++) {
        document.write('<p>${text[i]}</p>');
}
}
paragraph('no text');

// // Створити ф-цшю яка створює ul з трьома ел. li. Текст li задати через фргумент всім однаковий
const ul = (argument) => {
    document.write('<ul>');
        document.write('<li>${argument}</li>');
        document.write('<li>${argument}</li>');
        document.write('<li>${argument}</li>');
    document.write('</ul>');
}
ul('text');

// // Створити ф-цшю яка створює ul з трьома ел. li. Текст li задати через аргумент всім однаковий. К-сть li визначається другим агрументом, який є числовим (використовувати цикл)
const dataUl = (text, number) => {
    document.write('<ul>');
        for (let i = 0; i < number.length; i++) {
            document.write('<li>${text}</li>');
        }
    document.write('</ul>');
}
dataUl('empty li', 3);

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let myArray = [79, 456, 'some text', true];

const someData = (array) => {
    document.write('<ul>');
        for (let i = 0; i > array.length; i++) {
            document.write('<li>${array[i]}</li>');
        }
    document.write('</ul>');
}
someData(myArray);

// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let dataArray = [{id: 1, name: 'Victor', age: 23}, {id:2, name: 'Olga', age: 19}, {id: 3, name: 'Ujen', age: 21}];

let objArray = (array) => {
    for (const eachData of array) {
        document.write('<div>');
            document.write('<div>${eachData.id}.${eachData.name}.${eachData.age}</div>');
        document.write('</div>');
    }
}
objArray(dataArray);