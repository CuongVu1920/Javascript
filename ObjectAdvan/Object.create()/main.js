// Object.create()

/**
 * Object.create() là một phương thức trong JavaScript dùng để tạo một 
 * đối tượng mới sử dụng một đối tượng đã tồn tại làm prototype của đối tượng mới tạo.
 */

/**
 * Cú pháp
 *  Object.create(proto)
    Object.create(proto, propertiesObject)

    Tham số

    - proto: Đối tượng sẽ trở thành prototype của đối tượng mới tạo
    - propertiesObject (tùy chọn): Đối tượng chứa các mô tả thuộc tính để thêm vào đối tượng mới
 */

  // Ví dụ Cơ bản

  // Tạo đối tượng prototype
  const animal = {
    type: 'animal',
    speak() {
      return `${this.name} phát ra âm thanh`;
    }
  };

  // Tạo đối tượng mới với animal làm prototype
  const dog = Object.create(animal);
  dog.name = 'Buddy';
  dog.breed = 'Golden Retriever';

  // console.log(dog.speak()); // "Buddy phát ra âm thanh"
  // console.log(dog.type);    // "animal" (kế thừa)
  // console.log(Object.getPrototypeOf(dog) === animal); // true

  // VD2:

    // ---TH1: function constructor

    // function Character(name, hp, atk) {
    //   this.name = name;
    //   this.hp = hp;
    //   this.atk = atk;
    // }

    // Character.prototype.attack = function(target) {
    //   target.hp = -this.atk;
    // }

    // const tom = new Character("Tom", 100, 20);
    // const jerry = new Character("Jerry", 80, 10);

    // console.log(tom);
    // console.log(jerry);

    // ---TH2: Object.create()

    const prototype = {
      attack(target) {
        target.hp -= this.atk;
      }
    };

    const tom = Object.create(prototype)

    tom.name = "Tom";
    tom.hp = 100;
    tom.atk = 20;

    // console.log(tom.__proto__ === prototype); // true
    
    const jerry = Object.create(prototype)

    jerry.name = "jerry";
    jerry.hp = 80;
    jerry.atk = 10;

    // console.log(tom);
    // console.log(jerry);


  // VD3: ghi đè phương thức trong Object.create()

    // Prototype cha
    const animals = {
      name: 'Động vật',
      speak() {
        return `${this.name} kêu`;
      },
      move() {
        return `${this.name} đang di chuyển`;
      }
    };

    // Tạo đối tượng con và ghi đè phương thức
    const dog = Object.create(animals);
    dog.name = 'Chó';

    // Ghi đè phương thức speak
    dog.speak = function() {
      return `${this.name} sủa: Gâu gâu!`;
    };

    console.log(dog.speak()); // "Chó sủa: Gâu gâu!" (ghi đè)
    console.log(dog.move());  // "Chó đang di chuyển" (kế thừa)
        

    