function Animal(name, age) {
  this.name = name;
  this.age = age;

  this.speak = function() {
    console.log(`${this.name} kêu...`);
    
  }
}

Animal.prototype.speak = function() {
    return `${this.name} kêu`
}

function Cat(name, age) {
  Animal.call(this, name, age);

  this.speak = () => {
    const sound = Animal.prototype.speak.call(this);
    console.log(`${sound} meo meo...`);
  };
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

function Dog(name, age) {
  Animal.call(this, name, age);

  this.speak = () => {
    const sound = Animal.prototype.speak.call(this);
    console.log(`${sound} wood wood123...`);
  };
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const tom = new Cat("Tom", 1);
const nick = new Dog("Nick", 2);

console.log(tom);
console.log(nick);
tom.speak();
nick.speak();
