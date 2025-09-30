// Thuộc tính: 

/**
 * Thuộc tính là các giá trị lưu trữ trong object. mỗi thuộc tính có một tên (key) và một giá trị (value) tương ứng. giá trị của thuộc tính
 * có thể là bất kỳ kiểu dữ liệu nào trong Javascript, kể cả là một object khác.
 */

// Ví dụ: Object dog đơn giản với các thuộc tính

const dog = {
    name: 'Buddy', // key: name, value: 'Buddy'
    age: 3,        // key: age, value: 3
    breed: 'Golden Retriever', // key: breed, value: 'Golden Retriever'
};

// truy cập thuộc tính
console.log(dog.name);  // Buddy
console.log(dog['age']); // 3


// #Method - phương thức:

/**
 * Phương thức là các hàm được định nghĩa bên trong một object. chúng thường được sử dụng để thực hiện các hành động liên quan đến object đó.
 * Phương thức có thể truy cập và thao tác với các thuộc tính của object thông qua từ khóa this.
 */

// Ví dụ: Object cat với phương thức meow

const cat = {
    name: 'Whiskers',
    age: 2,
    meow: function() { // phương thức meow
        console.log(`${this.name} says Meow!`);
    },
};

// gọi phương thức
cat.meow(); // Whiskers says Meow!