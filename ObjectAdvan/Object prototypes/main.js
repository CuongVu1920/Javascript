// Khi muốn thêm phương thức vào các hàm có sẵn trong javascript thì phải thêm qua prototype

// VD

Number.prototype.moneyFormat = function() {
  return `${this}đ`;
}

let number = new Number(999);

console.log(number.moneyFormat()); // 999đ



