// 1.1 Copy mảng (tránh tham chiếu)

const a = [1, 2, 3];
const b = [...a];

b.push(4);

console.log(a); // (3) [1, 2, 3]
console.log(b); // (4) [1, 2, 3, 4]

// 1.2 Gộp mảng

const arr1 = [1, 2];
const arr2 = [3, 4];

const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // (4) [1, 2, 3, 4]

// 1.3 Thêm phần tử vào mảng

const numbers = [2, 3, 4];
const newNumbers = [1, ...numbers, 5];
console.log(newNumbers); // (5) [1, 2, 3, 4, 5]

// 2. Spread operator với Object

// 2.1 Copy object
const user = { name: "An", age: 20 };
const copiedUser = { ...user, age: 21, location: "VN" };
console.log(copiedUser); // {name: 'An', age: 21, location: 'VN'}

// 2.2 Gộp object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const mergedObject = {...obj1, ...obj2};
console.log(mergedObject); // {a: 1, b: 2, c: 3, d: 4}

// Rest Parameters là gì?
// Rest parameters cho phép bạn nhận số lượng tham số không giới hạn dưới dạng một mảng.

// Cú pháp: ...tênBiến

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3));

