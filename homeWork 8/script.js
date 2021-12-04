//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

let contentID = document.getElementById('content');
console.log(contentID.innerText);

// -- отримує текст з блоку з id "rules"

let rules = document.getElementById('rules');
console.log(rules.innerText);

// або

let rules2 = document.getElementById('rules').innerText;
console.log(rules2);

// -- замініть текст параграфа з id 'content' на будь-який інший

let newContent = document.getElementById('content').innerText = 'someNewText';


// -- замініть текст параграфа з id 'rules' на будь-який інший

let newContent2 = document. getElementById('rules').innerText = 'newText';

// -- змініть кожному елементу колір фону на червоний

let bg = document.body.children;
for (let item of children) {
    item.style.background = 'red';
}

// -- змініть кожному елементу колір тексту на синій

let textColor = document.body.children;
for (let item of children) {
    item.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let cList = document.getElementById('rules').classList;
console.log(cList);

// або

let cList2 = document.getElementById('rules');
console.log(cList.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let changeColor = document.getElementsByClassName('fc_rules');
for (let item of fc_rules) {
    item.style.color = 'red';
}