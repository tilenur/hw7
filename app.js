// Функция getInfo
function getInfo({ name, age, city }) {
    return `Имя: ${name}, Возраст: ${age}, Город: ${city}`;
}

const user = {
    name: "Baktybek",
    age: 18,
    city: "Bishkek",
};
console.log(getInfo(user));
// "Имя: Baktybek, Возраст: 18, Город: Bishkek"

// Функция mergeArrays
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
// [1, 2, 3, 4, 5, 6]

// Функция getFirstAndRest
function getFirstAndRest([first, ...rest]) {
    return `Первый элемент: ${first}, Остальные: [${rest.join(", ")}]`;
}
console.log(getFirstAndRest([10, 20, 30, 40]));
// "Первый элемент: 10, Остальные: [20, 30, 40]"
