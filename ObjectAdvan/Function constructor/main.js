// Tom và Jerry(counterRate: 0.8)

/**
 * Health / HP: Máu
 * Attack power/ATK: Tấn công,
 * defense: phòng thủ
 */

// Function/ Object constructor (Hàm tạo - bản thiết kế đối tượng)

// Bài tiếp theo - Phát triển chỉ số "phản công"

// Bản thiết kế nhân vật
function Character(name, hp, atk, defense,speed, counterRate) {
  this.name = name;
  this.hp = hp;
  this.atk = atk;
  this.speed = speed;
  this.defense = defense;
  
  this.counterRate = counterRate;
  this.attack = function (target) {
    const damage = Math.max(this.atk - target.defense, 0);
    target.hp -= damage;
    console.log(`${this.name} "phang" ${target.name} với ${damage} sát thương, khiến cho ${target.name} còn ${target.hp} máu`);

    // Xử lý target phản công
    if(target.isAlive() && Math.random() < target.counterRate) {
      const counterDamage = Math.max(target.atk - this.defense, 0);
      this.hp -= counterDamage;
      console.log(`${target.name} "phản công" ${this.name} với ${counterDamage} sát thương, khiến cho ${this.name} còn ${this.hp} máu`);
    }
  };

  this.isAlive = function () {
    return this.hp > 0;
  }
}

// Tạo ra nhân vật Tom
const tom = new Character("Tom", 1000, 50, 5, 30, 0.5);

// Tạo ra nhân vật Jerry
const jerry = new Character("Jerry", 500, 20, 20,10, 0.2);

function battle(char1, char2) {
  let round = 1;

  while (char1.isAlive() && char2.isAlive()) {
    console.log(`Round: ${round}`);
    
    if(char1.speed >= char2.speed)
      char1.attack(char2);
      if(char2.isAlive()) {
        char2.attack(char1);
      }else {
        char2.attack(char1);
        if(char1.isAlive()) {
          char1.attack(char2);
        }
      }

      round++;
  }

  const winer = char1.isAlive() ? char1 : char2;
  console.log(`${winer.name} là kẻ chiến thắng`);
  return winer;
}

battle(tom, jerry)

