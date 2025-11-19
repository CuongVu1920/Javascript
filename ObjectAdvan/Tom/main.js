// Tom và Jerry

/**
 * Health / HP: Máu
 * Attack power/ATK: Tấn công
 */

const tom = {
  name: "Tom",
  hp: 200,
  atk: 50,
  attack(target) {
    target.hp = target.hp - this.atk;
    console.log(`${this.name} "phang" ${target.name} với ${this.atk} sát thương, khiến cho ${target.name} còn ${target.hp} máu`);
  },
  isAlive() {
    return this.hp > 0;
  }
}

const jerry = {
  name: "Jerry",
  hp: 2000,
  atk: 20,
  attack(target) {
    target.hp = target.hp - this.atk;
    console.log(`${this.name} "phang" ${target.name} với ${this.atk} sát thương, khiến cho ${target.name} còn ${target.hp} máu`);
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