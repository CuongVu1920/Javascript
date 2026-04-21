// #Array Destructuring

const color = ['red', 'green', 'blue'];

const [first, second, third] = color;

console.log(first); // red
console.log(second); // green
console.log(third); // blue

// + Hoán đổi 2 biến
let a = 1;
let b = 2;
[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1

// + Bỏ qua phần tử
const numbers = [1, 2, 3, 4, 5];
const [one, , three] = numbers;

console.log(one); // 1
console.log(three); // 3

// Destructuring với Object

const person = {
    name: 'Alice',
    age: 30,
    city: 'New York',
    country: "Vietnam"
};

const { name, age, city } = person;

console.log(name); // Alice
console.log(age); // 30
console.log(city); // New York

// + Đổi tên biến
const { name: fullName } = person;
console.log(fullName); // Alice

// + Giá trị mặc định
const { country = 'USA' } = person;
console.log(country); // USA

// + Destructuring trong lồng nhau

const user = {
    info: {
        name: 'Bob',
        age: 25
    }
};

const { info: { name: userName, age: userAge } } = user;

console.log(userName); // Bob
console.log(userAge); // 25

// + Destructuring trong hàm

function greet({ name, age }) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

greet(person); // Hello, my name is Alice and I am 30 years old.

// + Destructuring với API fetch

const respone = {
    data: {
        id: 1,
        title: 'Destructuring in JavaScript',
        getSummary() {
            return `${this.id}: ${this.title}`;
        }
    }
}

const { data: { id, title, getSummary } } = respone;

console.log(id); // 1
console.log(title); // Destructuring in JavaScript
getSummary(); // 1: Destructuring in JavaScript 