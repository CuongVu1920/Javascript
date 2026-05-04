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

// Getters và Setters trong ES6 Class

class Person {
    constructor(name) {
        this._name = name; // sử dụng _ để đánh dấu thuộc tính private
    }
    
    get name() {
        return this._name.trim();
    }

    set name(newName) {
        if (newName.length > 0) {
            this._name = newName;
        } else {
            console.error("Name cannot be empty.");
        }
    }
}

const person = new Person("   Alice       ");
console.log(person.name); // Alice
person.name = "Bob"; // dùng setter để thay đổi tên
console.log(person.name); // Bob -> Alice đã được thay thế bằng Bob và được trim trước khi trả về.
person.name = ""; // Name cannot be empty.


// Static method và Properties trong ES6 Class

class MathUtils {
    static PI = 3.14159;
    
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.add(2, 3)); // 5

// Static method và properties thuộc về class chứ không phải instance, 
// nên chúng ta có thể truy cập trực tiếp qua tên class mà không cần tạo instance.