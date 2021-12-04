// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
/* максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
- changeYear (newValue) - змінює рік випуску на значення newValue
- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
 */
function Car(model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.drive = function () {
      console.log('швидкість $(this.maxSpeed) за годину');
    };
    this.info = function () {
        console.log('модель - ${this.model}, виробник - ${this.producer}, рік - ${this.year}, максимальна швидкість - ${this.maxSpeed}, обєм двигуна - ${this.volume}');
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CerClass {
    constructor (model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.valume = volume;
    }

    drive () {
        console.log('швидкість $(this.maxSpeed) за годину');
    };
    info () {
        console.log('модель - ${this.model}, виробник - ${this.producer}, рік - ${this.year}, максимальна швидкість - ${this.maxSpeed}, обєм двигуна - ${this.volume}');
    }
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    changeYear (newValue) {
        this.year = newValue;
    }
    addDriver (driver) {
        this.driver = driver;
    }
}

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor (name, age, legSize) {
        this.name = name;
        this.age = age;
        this.legSize = legSize;
    }
}

let cinderella = [
    new Cinderella('Cinderella1', 21, 35),
    new Cinderella('Cinderella2', 19, 33),
    new Cinderella('Cinderella3', 23, 31),
    new Cinderella('Cinderella4', 35, 34),
    new Cinderella('Cinderella5', 37, 39),
    new Cinderella('Cinderella6', 41, 41),
    new Cinderella('Cinderella7', 35, 37),
    new Cinderella('Cinderella8', 44, 42),
    new Cinderella('Cinderella9', 27, 27),
    new Cinderella('Cinderella10', 18, 21)
];
console.log(cinderella);

// Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let prince = new Prince('Shrek', 50, 41);
let cinderella = cinderella.find(value => value.legSize === prince.shoe);



