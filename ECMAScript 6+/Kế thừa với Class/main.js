// function Animal(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Animal.prototype.speak = function() {
//     console.log(`${this.name} says hello!`);
// };

// function Cat(name, age, breed) {
//     Animal.call(this, name, age); // Gọi constructor của Animal
//     this.breed = breed;
// }

// Cat.prototype = Object.create(Animal.prototype); // Kế thừa prototype của Animal nghĩa là Cat sẽ có tất cả các phương thức của Animal
// Cat.prototype.constructor = Cat; // Đặt lại constructor

// Cat.prototype.speak = function() {
//     console.log(`${this.name} says meow!`);
// };

/**
 * Tại sao phải create và constructor?
 * Khi chúng ta tạo một đối tượng mới bằng cách sử dụng Object.create, 
 * chúng ta đang tạo ra một đối tượng mới có prototype là đối tượng được truyền vào.
 * Tuy nhiên, khi chúng ta tạo một đối tượng mới bằng cách sử dụng Object.create, 
 * constructor của đối tượng mới sẽ không được thiết lập đúng, nó sẽ trỏ đến Object thay vì Cat.
 * Điều này có thể gây ra những vấn đề khi chúng ta muốn kiểm tra kiểu của đối tượng hoặc khi chúng ta muốn 
 * sử dụng constructor để tạo ra các đối tượng mới. Bằng cách đặt lại constructor, 
 * chúng ta đảm bảo rằng constructor của đối tượng mới sẽ trỏ đến Cat,
 * giúp chúng ta kiểm tra kiểu của đối tượng một cách chính xác và sử dụng constructor để tạo ra các đối tượng mới một cách dễ dàng hơn.
 * 
 */

// const tom = new Cat('Tom', 3, 'Siamese');

// console.log(tom);
// tom.speak(); // Tom says hello!



// Thay thế cách viết bằng classes

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name} says hello!`);
    }
}

class Cat extends Animal {
    constructor(name, age, breed) {
        super(name, age); // Gọi constructor của lớp cha
        this.breed = breed;
    }
    
    speak() {
        console.log(`${this.name} says meow!`);
    }
}

const tom2 = new Cat('Tom', 3, 'Siamese');
console.log(tom2);
tom2.speak(); // Tom says meow!