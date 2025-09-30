// #Object literal là gì? 

/**
 * Object literal trong Javascript là một cách để tạo ra môt object. Object này chứa một tập hợp các cặp key-value,
 * nơi key là một chuỗi (hoặc Symbol) và value có thẻ là bất kỳ giá trị nào trong Javascript.
 */

/**
 * Cú pháp:
 * const objectName = {
 *    key1: value1,
 *    key2: value2,
 *    ...
 * };
 */

// Vị dụ thực tế:
const person = {
    name: 'John Doe',
    age: 30,
};

// Định nghĩa cấu hình cho một ứng dụng

const appConfig = {
    appName: 'My Application',
    version: '1.0.0',
};

/**
 * Obect literal giúp tổ chức và lưu trữ dữ liệu một cách dễ dàng trong một cấu trúc. Nó rất hữu ích trong việc quản lý và truy cập dữ liệu một 
 * một cách tổ chức.
 */

// note: có một số cách tạo object khác như: hàm constructor, Object.create()...

//# Làm việc với Object (cơ bản)

// 1. Thêm cặp key-value mới

const car = {
  make: 'Toyota',
  model: 'Camry',
};

const property = "year";

car.color = 'blue'; // Thêm thuộc tính color
car[property  ] = 2020; // Thêm thuộc tính year

console.log(car); // { make: 'Toyota', model: 'Camry', color: 'blue', year: 2020 }

// 2. Truy cập giá trị của một thuộc tính và cập nhật giá trị

// truy cập
const person1 = {
  name: 'Alice',
  age: 25,
};

console.log(person1.name);
console.log(`person1 số: ${person1['age']}`);

// cập nhật
person1.age = 26;
person1['name'] = 'Bob';

console.log(person1); // { name: 'Bob', age: 26 }

// 3. Xóa một thuộc tính khỏi object

delete person1.age;

console.log(person1); // { name: 'Bob' }


// Sử dụng Object destructuring 

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925
};

const { title, author } = book;

console.log(title); // The Great Gatsby
console.log(author); // F. Scott Fitzgerald

// 4. Duyệt qua các cặp key - value trong object

const person2 = {
  name: 'Charlie',
  age: 28,
  city: 'New York'
};

for (const key in person2) {
  console.log(`${key}: ${person2[key]}`);
  
}

// Các sai lầm thường gặp

// 1. không kiểm tra sự tồn tại của key

if('age' in person2) {
  console.log(`Age: ${person2.age}`);
} else {
  console.log('Age key does not exist in person2 object');
}