// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let form1 = document.forms.form1;
form1.onsubmit = function(e) {
    e.preventDefault();
    let name = document.forms.form1.name.value;
    let age = document.forms.form1.age.value;
    console.log(name, age);
    localStorage.setItems(JSON.stringify('inputData',{name: name, age: age}));
};

// або можна ще так

let inputs = document.getElementsByTagName('input');
let name = inputs[0];
let age = inputs[1];
let button = document.getElementsByTagName('button')[0];
button.onclick = function(e) {
    e.preventDefault();
    let nameV = name.value;
    let ageV = age.value;
    localStorage.setItems('inputData2', JSON.stringify({name: name.value, age: age.value}));
}

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі

let form2 = document.forms.form2;
form2.onsubmit = function (e) {
    e.preventDefault();
    let model = this.model.value;
    let type = this.type.value;
    let volume = this.volume.value;
    let array = {model: model, type: type, volume: volume}
    let cars = JSON.parse(localStorage.getItem('cars'));
        console.log(cars);
    if (!cars) {
        cars = [];
        cars.push(array);
        localStorage.setItem('cars', JSON.stringify(cars));
    }else {
        cars.push(array);
        localStorage.setItem('cars', JSON.stringify(cars));
    }
};