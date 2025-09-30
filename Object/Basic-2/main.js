// #Destructuring

/**
 * cho phép bạn trich xuất các giá trị từ mảng hoặc thuộc tính từ đối tượng và gán chúng cho các biến riêng biệt.
 */

// Ví dụ 1:

const person = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    }
};

// Trich xuất các thuộc tính từ đối tượng person
const { name: fullName, address: { city, country } } = person;

console.log(fullName); // Output: John
console.log(city); // Output: New York
console.log(country); // Output: USA
// console.log(address); // Output: undefined // Vì address không được trích xuất trực tiếp

// Ví dụ 2: Trích xuất từ mảng

const numbers = [1, 2, 3, 4, 5];

// Trích xuất các phần tử từ mảng
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]


// # Enhanced Object Literals

/**
 * Cung cấp cú pháp ngắn gọn và tiện lợi hơn để định nghĩa các đối tượng trong JavaScript.
 * Giúp code trở nên sạch sẽ và dễ đọc hơn.
 */

// Ví dụ 1: Định nghĩa đối tượng với cú pháp truyền thống

const ten = "Alice";
const age = 25;

const person1 = {
    ten: ten,
    age: age,
}

console.log(person1); // Output: { ten: 'Alice', age: 25 }

// Sử dụng broberty shorthand
const person2 = {
    ten,
    age,
}

console.log(person2); // Output: { ten: 'Alice', age: 25 }


//  Ví dụ 2:  Method shorthand (viết tắt phương thức)

const person3 = {
    ten: "Bob",
    age: 28,
    // Phương thức với cú pháp truyền thống
    greet: function() {
        console.log("Hello, my name is " + this.ten);
    },
    // Phương thức với cú pháp viết tắt
    info() {
        console.log(`Name: ${this.ten}, Age: ${this.age}`);
    }
};

person3.greet(); // Output: Hello, my name is Bob
person3.info(); // Output: Name: Bob, Age: 28

// Computed property names (tên thuộc tính động)

/**
 * Cho phép bạn sử dụng biểu thức trong ngoặc ngoặc vuông [] để đặt tên cho thuộc tính của đối tượng.
 */

const propertyName = "dynamicKey";

const obj = {
    [propertyName + 1]: "This is a dynamic value",
    fistName: "Charlie"
};

console.log(obj); // Output: { dynamicKey: 'This is a dynamic value', fistName: 'Charlie' }
