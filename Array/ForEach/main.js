// ## forEach là gì ?

/**
 * - forEach là một phương thức trong javascript cho phép thực hiện một hàm lên mỗi phần tử của mảng. Phương thức này không trả về giá trị
 *   mới mà chỉ thực hiện hành động lặp và xử lý các phần tử của mảng.
 * - Cú pháp:
 *      array.forEach(function(currentValue, index, arr) {...}, thisValue);
 */

// Ví dụ

const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach(function(fruit, index) {
  console.log(fruit);
  console.log(index);
})


// VD2:

const numbers = [1, 2, 3, 4];
let total = 0; 

numbers.forEach(function(number) {
  total += number;
});

console.log(total); 

// VD3:

const users = [
  { name: 'Alice', age: 25},
  { name: 'Bob', age: 30}
];

users.forEach(function(user) {
  console.log(user.name); 
  delete user.age;
  user.address = "HaNoi";
})

console.log(users);
