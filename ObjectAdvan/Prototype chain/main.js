// Prototype chain

function Character(name) {
  this.name = name;
}

Character.prototype.sayHi = function() {
  console.log(`Hello, my name is ${this.name}`);
}

// console.log(Character.prototype);

const tom = new Character("Tom");
// console.log(tom);
// console.log(tom.__proto__);

/**
 * 
 - tom.__proto__
 * __proto__ là thuộc tính tham chiếu đến prototype của object
  Nó cho biết object đó được kế thừa từ đâu
 */

 /**
  * tom.__proto__.constructor.
 
  * => tom.__proto__ → trỏ đến Person.prototype
       tom.__proto__.constructor → trỏ đến hàm Person (hàm tạo)
  */

  // #Chuỗi kế thừa  - có ông tổ Object (Object.prototype)

  /**
   * - Mọi object đều kế thùa từ ông tổ Object (Object.prototype)
   */

  // VD:

    const person = {
      name: "John"
    };

    // console.log(person.__proto__ === Object.prototype); // true => kế thừa từ ông tổ Object.prototype

  // Các object được tạo từ hàm tạo, trước tiên thì nó sẽ kế thừa chính cái hàm tạo đó.

  // VD:

    console.log(Number.prototype);

    const obj = new Number(999);

    console.log(obj.__proto__ === Number.prototype); // true
    console.log(obj.__proto__.__proto__ === Object.prototype); // true
    


    
  