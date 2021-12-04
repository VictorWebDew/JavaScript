// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

document.getElementById('main_header').classList.add('webDev');

// або

let change_main_header = document.getElementById('main_header');
change_main_header.classList.add('webDev');

// b) робить шириниу елементу ul 400px

document.getElementsByTagName('ul').style.width = '400px';

//  або

let eWidth = document.getElementsByTagName('ul');
eWidth.style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let linkListWidth = document.getElementsByClassName('linkList');
for (let each of linkList) {
    each.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

function getText(text) {
    document.getElementsByClassName('listElement2').innerText = text;
}

// e) отримує всі елементи li та змінює ім колір фону на сірий

let allli = document.getElementsByTagName('li');
for (let eachLi of allli) {
    eachLi.style.background = 'gray';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let allA = document.getElementsByTagName('a');
for (let eachA of allA) {
    eachA.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let listA = document.getElementsByTagName('a');
for (let eachA of listA) {
    if (eachA.innerText === 'link3') {
        eachA.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let aList = document.getElementsByTagName('a');
for (let eachA of aList) {
    let eachClassText = eachA.innerText;
    a.classList.add('eachClassText');
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let subHeader = document.getElementsByClassName('sub-header');
for (let each of subHeader) {
    each.style.background = prompt('what is your color?');
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

let allSubHeader = document.getElementsByClassName('sub-header');
for (let each of allSubHeader) {
    if (each.innerText === 'content 2 segment') {
        each.style.color = prompt('choose your color');
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

document.getElementsByClassName('content_1').innerText = prompt('enter your text', '');

// l) отримати елементи p та змінити їм padding на 20px

let pElement = document.getElementsByTagName('p');
for (let each of pElement) {
    each.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

document.getElementsByClassName('text2').innerText = 'web-Dew';