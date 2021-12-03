// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User (id, name, surename, email, phone) {
    this.id = id;
    this.name = name;
    this.surename = surename;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [
    new User(10, 'vitya1', 'Sgugu', 'ert45@gmail.com', +380987631235),
    new User(1, 'vitya2',  'Dovhij', 'ert42@gmail.com', +380987653235),
    new User(3, 'vitya3',  'Hnojmml','ert25@gmail.com', +380987351235),
    new User(2, 'vitya4',  'Gnkjkj','ert42@gmail.com', +380987351235),
    new User(4, 'vitya5',  'Ohjbjjknk','e3t45@gmail.com', +380987351235),
    new User(7, 'vitya6',  'Bjkpokp','ert4g@gmail.com', +380987653235),
    new User(8, 'vitya7', 'Ybjnkmlk', 'ertv5@gmail.com', +380987651233),
    new User(6, 'vitya8', 'Inkml', 'ertt5@gmail.com', +380987671235),
    new User(5, 'vitya9',  'Fhkjl;','ere45@gmail.com', +380987657235),
    new User(9, 'vitya10', 'Pijjokk', 'ert95@gmail.com', +380987657235),
];
console.log(users);

// - Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)
let filterUsers = users.filter(value => value.id % 2 === 0);
console.log(filterUsers);

// або

let filterUsers2 = users.filter((item) => {
    if (item.id % 2 === 0) {
        return item
    }
});
console.log(filterUsers2);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
filterUsers.sort((a, b) => a.id - b.id);
console.log(filterUsers.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor (id, name, email, phone, order) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this. order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    new Client(1, 'Victor', 'ugjh@gmail.com', '+380979997773', ['headphone', 'smartphone', 'USB_driver']),
    new Client(2, 'Olga', 'hiu@gmail.com', '+380979997773', ['headphone', 'smartphone', 'USB_driver']),
    new Client(3, 'Ujen', 'dfb@gmail.com', '+380979997773', ['headphone', 'smartphone', 'USB_driver']),
    new Client(4, 'Dima', 'w78h@gmail.com', '+380979997773', ['headphone', 'smartphone', 'USB_driver']),
    new Client(5, 'Anrderw', 'vc7@gmail.com', '+380979997773', ['headphone', 'smartphone', 'USB_driver']),
    new Client(6, 'Oleg', 'uon2@gmail.com', '+380979997773', ['headphone', 'smartphone', 'USB_driver']),
    new Client(7, 'Vasya', 'vhi7@gmail.com', '+380979997773', ['headphone', 'smartphone', 'USB_driver']),
    new Client(8, 'Piter', 'pjk8@gmail.com', '+380979997773', ['headphone', 'smartphone', 'USB_driver']),
    new Client(9, 'Maxim', 'um678@gmail.com', '+380979997773', ['headphone', 'smartphone', 'USB_driver']),
    new Client(10, 'Sergay', 'io9o@gmail.com', '+380979997773', ['headphone', 'smartphone', 'USB_driver']),
];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
clients.sort((a, b) => a.order.length - b.order.length);