class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  
  speak() {
    return `${this.name} barks`;
  }
  
  getInfo() {
    return `${super.speak()} (${this.breed})`;
  }
}

const dog = new Dog('Buddy', 'Golden');
console.log(dog.getInfo());

// Output:
// Buddy barks (Golden)