// Tung đồng xu

function tungDongXu() {
  return Math.random() < 0.5 ? "ngửa" : "úp";
}

console.log(tungDongXu());


function vongQuayManMay() {
  const gifts = [
    { name: 'Iphone', weight: 1 },       // 1% 
    { name: 'Ipad', weight: 2 },         // 2%
    { name: 'SamSung', weight: 5 },      // 5%
    { name: 'Chai nhựa', weight: 12 },   // 12%
    { name: 'Chúc bạn may mắn lần sau!', weight: 80 } // 80%
  ];


  const totalWeight = gifts.reduce((sum, gift) => {
    return sum + gift.weight
  }, 0);

  
  let random = Math.random() * totalWeight;

  
  

  for (const gift of gifts) {
      if(random < gift.weight) {
        return gift.name;
      }

      random -= gift.weight;
  }

}

console.log(vongQuayManMay());

