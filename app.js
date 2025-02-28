// Задание 1
const arr = ['apple', 'banana', 'cherry', 'date'];
for (const fruit of arr) {
    console.log(fruit);
}

// Задание 2
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let password = '';
for (let i = 0; i < 8; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
}
console.log("Сгенерированный пароль:", password);

// Задание 3
const person = { name: "Aibek", age: 25, country: "Kyrgyzstan" };
const { name, age } = person;
console.log("Имя:", name, "Возраст:", age);

// Задание 4
const car1 = { brand: "Toyota", year: 2015 };
const car2 = { brand: "Honda", year: 2020 };
const newCar = { ...car1, ...car2 };
console.log("Объединённый объект:", newCar);

// Задание 5
const values = [10, "hello", 25, "world", 30, false, 50, "JS"];
const numbers = values.filter(value => typeof value === 'number');
console.log("Массив с числами:", numbers);

