// Tom và Jerry

/**
 * Health / HP: Máu
 * Attack power/ATK: Tấn công,
 * defense: phòng thủ
 */

const tom = {
  name: "Tom",
  hp: 1000,
  atk: 50,
  defense: 5,
  attack(target) {
    const damage = Math.max(this.atk - target.defense, 0);
    target.hp -= damage;
    console.log(`${this.name} "phang" ${target.name} với ${damage} sát thương, khiến cho ${target.name} còn ${target.hp} máu`);
  },
  isAlive() {
    return this.hp > 0;
  }
}

const jerry = {
  name: "Jerry",
  hp: 500,
  atk: 20,
  defense: 20,
  attack(target) {
    const damage = Math.max(this.atk - target.defense, 0);
    target.hp -= damage;
    console.log(`${this.name} "phang" ${target.name} với ${damage} sát thương, khiến cho ${target.name} còn ${target.hp} máu`);
  },
  isAlive() {
    return this.hp > 0;
  }
}


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