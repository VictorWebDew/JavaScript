// - Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';

function normalizer (name) {
    name .replaceAll('..', ' ').replaceAll('---', ' ').replaceAll('__', ' ');
}
document.write(normalizer);

//  - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function random(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
    return arr;
}
console.log(random);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let arrayRandom = random();
arrayRandom.sort((a,b) => a - b);
arrayRandom.sort((a,b) => b - a);
console.log(arrayRandom);

// або

let arrayRandom2 = (length, data) => {
    let arr2 = [];
    for(let i =0 ; i < length; i++) {
        arr2.push(Math.round(Math.random() * data));
    }
    return arr2.sort((a,b) => a - b);
}
console.log(arrayRandom2(0, 30));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати його за допомоги filter, залишивши тільки парні числа
function myArr(length, data) {
    let arrRoundNum = [];
    for(let i = 0; i < length; i++) {
        arrRoundNum.push(Math.round(Math.random() * data));
    }
    return arrRoundNum.filter(value => value % 2 ===0);
}
console.log(myArr(1, 100));

// або

let myArr2 = arrayRandom2(40);
myArr2.filter(value => value % 2 === 0);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let myArray2 = randomArr(30);
myArray2.map(value => value + '');
console.log(myArray2());

// або

let myArray3 = (length, data) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.radnom() * data));
    }
    return arr.map(value => value.toString());
}
console.log(myArray3(0, 50));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
function sortNums(numbers, direction) {
    let array = [];
    if (direction === 'grow') {
        array = numbers.sort((a, b) => a - b);
    } else if (direction === 'subside') {
        array = numbers.sort((a,b) => b - a);
    }
    return array;
}

sortNums(numbers, direction);

// - є масив
// -- відсортувати його за спаданням за monthDuration
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
coursesAndDurationArray.filter(studing => studing.monthDuration > 5);
console.log(coursesAndDurationArray.sort((a, d) => a.monthDuration - b.monthDuration));
console.log(coursesAndDurationArray.filter(studing => studing.monthDuration > 5));



