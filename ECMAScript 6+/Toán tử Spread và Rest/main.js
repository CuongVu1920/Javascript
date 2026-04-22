/**
 * 1. Speard Operator - trải dữ liệu từ một mảng hoặc đối tượng thành các phần tử riêng biệt
 */

const arr1 = [1, 2];
const arr2 = [3, 4];

const combinedArr = [...arr1, ...arr2];

console.log(combinedArr); // [1, 2, 3, 4]

const original = [1, 2, 3];
const copy = [...original];

copy.push(4);

console.log(copy); // [1, 2, 3, 4]
console.log(original); // [1, 2, 3]

// Truyền mảng thành các tham số

const numbers = [1, 2, 3];
const max = Math.max(...numbers); // tương đương với Math.max(1, 2, 3)

console.log(max); // 3

// Trải Object

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinedObj = { ...obj1, ...obj2 };

console.log(combinedObj); // { a: 1, b: 2, c: 3, d: 4 }

// # 2. Rest Operator - gom dữ liệu từ nhiều phần tử thành một mảng hoặc đối tượng

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30 )); // 60

/**
 * rest sẽ gom các tham số thành một mảng, vì vậy chúng ta có thể sử dụng các phương thức mảng như reduce để tính tổng
 */

// Array destructuring với rest

const [first, ...rest] = [1, 2, 3, 4, 5];

console.log(first); // 1
console.log(rest); // [2, 3, 4, 5]


// Object destructuring với rest

// const user2 = {
//     name: 'Alice',
//     age: 30,
//     city: 'New York'
// };

// const { name, ...rest } = user2;

// console.log(name); // 'Alice'
// console.log(rest); // { age: 30, city: 'New York' }


// VD: spear

const arr3 = [1, 2, 3];
const newArr = [0, ...arr3, 4];

console.log(newArr); // [0, 1, 2, 3, 4]

// VD: rest

function multiply(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier);
}

console.log(multiply(2, 1, 2, 3)); // [2, 4, 6]


/**
 * cách phân biệt: 
 *  - Spread operator: trải dữ liệu từ một mảng hoặc đối tượng thành các phần tử riêng biệt
 *  - Rest operator: gom dữ liệu từ nhiều phần tử thành một mảng hoặc đối tượng
 *  - Spread thường được sử dụng khi chúng ta muốn kết hợp hoặc sao chép mảng/đối tượng, 
 *      trong khi rest thường được sử dụng khi chúng ta muốn gom các tham số thành một mảng hoặc đối tượng
 */

// VD: tình huống thực tế khi sử dụng spread và rest trong lập trình thực tế

// Spread: Kết hợp mảng

const fruits = ['apple', 'banana'];
const vegetables = ['carrot', 'broccoli'];

const food = [...fruits, ...vegetables];

console.log(food); // ['apple', 'banana', 'carrot', 'broccoli']

// Rest: Hàm nhận nhiều tham số
function createUser(name, age, ...hobbies) {
    return {
        name, age, hobbies
    };
}

const user = createUser('Cuong Vu', 23, 'football', "đánh cầu", "hát", "đá bóng");

console.log(user); 


// Spread: Sao chép đối tượng

const user1 = {
    name: 'Alice',
    age: 30,
    is_student: true
}

const Cuong = { ...user1, name: 'Cuong Vu', age: 23 };
    
console.log(Cuong); // { name: 'Cuong Vu', age: 23, is_student: true }

/**
 * - rest: là gom dữ liệu thành 1 mảng hoặc đối tượng, thường được sử dụng trong hàm để gom các tham số thành một mảng hoặc đối tượng
 * - spread: là trải dữ liệu từ một mảng hoặc đối tượng thành phần tử riêng biệt, thường được sử dụng để kết hợp hoặc sao chép mảng và đối tượng.
 */