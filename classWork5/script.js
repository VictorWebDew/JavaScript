// //  створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
const min = (first, second, third) => {
    if (first < second && first < third) {
        document.write(first);
        console.log(first);
    } else if (second < first && second < third) {
        document.write(second);
        console.log(second);
    } else {
        document.write(third);
        console.log(third);
    }
};
min(30, 70, 50);

// // створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
const max = (first, second, third) => {
    if (first > second && first > third) {
        document.write(first);
        console.log(first);
    } else if (second > first && second > third) {
        document.write(second);
        console.log(second);
    } else {
        document.write(third);
        console.log(third);
    }
}
max(70, 80, 100);

// // створити функцію яка повертає найбільше число з масиву
let array = [432, 756, 12, 34, 756, 'bjnkjmk'];

let maxArr = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
document.write('<h3>Найбільший ел. в масиві: ${maxArr(array)}</h3>');

// // створити функцію яка повертає найменьше число з масиву
let array2 = [789, 90, 67, 9, 789];

const arrMin = (arr) => {
    let min = arr[0];
    for (const eachItem of arr) {
        if(eachItem < min) {
            min = eachItem;
        }
    }
    return min;
}
document.write('<h3>Найменший ел. в масиві: ${arrMin(array2}</h3>');

// // створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arrNumbers = [1,2, 3, 4, 5, 6, 7, 9, 8, 10];

const sumFunction = (arr) => {
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }
    return sum;
}
document.write(sumFunction(arrNumbers));

// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arrDigits = [21, 534, 2, 54, 9];

const averageMath = (arr) => {
    let sum = 0;
    for (let eachEl of arr) {
        sum += eachEl;
    }
    return sum/arr.length;
}
document.write(averageMath(arrDigits));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
const minMax = (...item) => {
    let min = item[0];
    let max = item[0];
    for (const element of item) {
        if(element > max) {
            max = element;
        } if (element < min) {
            min = element;
        }
    }
    console.log(max);
    return min;
}
document.write('Найменше число' + minMax(90, 5, -789, 87, -7, 10));

// - створити функцію яка заповнює масив рандомними числами
const functionRandom = (randomizer) => {
    let arr = [];
    for (let eachItem of randomizer) {
        arr.unshift(Math.floor(Math.random() * 100));
    }
    return arr;
}
document.write(functionRandom(56));

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
const randomizer = (length, limit) => {
    let arrRandom = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.raund(Math.random() * 100));
    }
    return arrRandom;
}
document.write(randomizer(25, 100));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let array3 = [1, 2, 3, 4, 5];

const viceVersa = (arr) => {
    let reverseArr = [];
    for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
        reverseArr[ri] = arr[i];
    }
    return reverseArr;
}
console.log(viceVersa(array3));
