// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

const arr = ['Main','Products','About us','Contacts'];
const divMenu = document.getElementsByClassName('menu')[0];
arr.forEach(item=>{
    const li = document.createElement('li');
    li.innerText = item
    divMenu.appendChild(li)

})


//////////////////////////////////////////////////////////////////
document.body.appendChild(document.createElement('hr'));
//////////////////////////////////////////////////////////////////


// Все робити за допомоги js.
// - створити блок,
let div = document.createElement('div');
//     - додати йому класи wrap, collapse, alpha, beta
div.classList.add('wrap', 'collapse', 'alpha', 'beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.background = 'gild';
div.style.fontSize = '24px';
div.style.color = 'brown';

div.innerText = 'Hello World';
// - додати цей блок в body.
document.body.appendChild(div);
// - клонувати його повністю, та додати клон в body.
document.body.appendChild(div);
const div2 = div.cloneNode(true);
document.body.appendChild(div2);

//////////////////////////////////////////////////////////////////
document.body.appendChild(document.createElement('hr'));
//////////////////////////////////////////////////////////////////

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли
for (let eachCourse of monthDuration) {
    let eachDiv = document.createElement('div');
    eachDiv.innerText = '${eachCourse.title} ${eachCourse.monthDuration}';
    document.body.appendChild(eachDiv);
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (let eachCourse of monthDuration) {
    let eachDiv = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.innerText = eachCourse.title;

    let p = document.createElement('p');
    p.innerText = eachCourse.monthDuration;
}

eachDiv.appendChild(h1,p);
document.body.appendChild(eachDiv);


//////////////////////////////////////////////////////////////////
document.body.appendChild(document.createElement('hr'));
//////////////////////////////////////////////////////////////////