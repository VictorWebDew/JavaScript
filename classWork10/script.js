//    - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//        Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//    Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

document.getElementById('btn').onclick = function() {
    let input1 = document.forms.f1.input1.value;
    let input2 = document.forms.f1.input2.value;
    let input3 = document.forms.f2.input3.value;
    let input4 = document.forms.f2.input4.value;
    console.log(input1,input2, input3, input4);
};

//    - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//        При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let form = document.forms['inputContainer'];
form.onsubmit = function (e) {
    e.preventDefault();
    let rows = +form.rows.value;
    let columns = +form.columns.value;
    let content = form.content.value;
    console.log(rows, columns, content);

    let table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            let td = document.createElement('td');
            td.innerText = content;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    document.body.appendChild(table);
};

// - Сворити масив не цензцрних слів.
//        Сворити інпут текстового типу.
//        Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.


/*
let badWords = ['ламмер', 'дурік', 'невакцінований'];
let wordChecker = document.getElementById('wordChecker');
wordChecker.onclick = function() {
    let word = document.getElementById('word').value;
    for (const badWord of badWords) {
        if (badWord === badWords) {
            alert('Не вживай поганих слів');
        }
    }
}
*/

//        Перевірку робити при натисканні на кнопку


let badWords = ['ламмер', 'дурік', 'невакцінований'];
let wordChecker = document.getElementById('wordChecker');
wordChecker.onclick = function() {
    let fraze = document.getElementById('word').value;
    for (const badWord of badWords) {
        if (fraze.includes(badWord)) {
            alert('Не вживай поганих слів');
        }
    }
}