// Class cơ bản trong ES6 - So sánh với function constructor truyền thống

// Function constructor truyền thống

function Animal(name) {
    this.name = name; // thuộc tính instance
}

// thêm method vào prototype để tất cả instance chia sẻ
Animal.prototype.speak = function() {
   return `${this.name} makes a sound.`;
};

const cat = new Animal("Cat");
console.log(cat.name); // Cat
console.log(cat.speak()); // Cat makes a sound.

// ES6 Class

class AnimalClass {
    constructor(name) {
        this.name = name; // thuộc tính instance
    }
    
    speak() {
        return `${this.name} makes a sound.`;
    }
}

const dog = new AnimalClass("Dog");
console.log(dog.name); // Dog
console.log(dog.speak()); // Dog makes a sound.

// Ví dụ 2:

class Counter {
    value = 0;

    increment() {
        this.value++;
    }
}

const counter = new Counter();
console.log(counter);
console.log(counter.value); // 0
counter.increment();
console.log(counter.value); // 1

// Trong ví dụ này, `value` là một thuộc tính instance được khởi tạo trực tiếp trong class, 
// không cần phải đặt trong constructor. Mỗi instance của Counter sẽ có giá trị riêng biệt cho `value`.