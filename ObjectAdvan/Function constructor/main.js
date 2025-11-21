// Tom và Jerry

/**
 * Health / HP: Máu
 * Attack power/ATK: Tấn công,
 * defense: phòng thủ
 */

// Function/ Object constructor (Hàm tạo - bản thiết kế đối tượng)

// Bản thiết kế nhân vật
function Character(name, hp, atk, defense) {
  this.name = name;
  this.hp = hp;
  this.atk = atk;
  this.defense = defense;
  this.attack = function (target) {
    const damage = Math.max(this.atk - target.defense, 0);
    target.hp -= damage;
    console.log(`${this.name} "phang" ${target.name} với ${damage} sát thương, khiến cho ${target.name} còn ${target.hp} máu`);
  };

  this.isAlive = function () {
    return this.hp > 0;
  }
}

// Tạo ra nhân vật Tom
const tom = new Character("Tom", 1000, 50, 5);

// Tạo ra nhân vật Jerry
const jerry = new Character("Jerry", 500, 20, 20);

let round = 1;
while(tom.isAlive() && jerry.isAlive()) {
  console.log(`Round - ${round}:`);
  
  if(round % 2 === 0) {
    tom.attack(jerry);
  }else {
    jerry.attack(tom);
  }

  round++;
}

if(tom.isAlive()) {
  console.log(`${tom.name} là kẻ chiến thắng`);
}else {
  console.log(`${jerry.name} là kẻ chiến thắng`);
}