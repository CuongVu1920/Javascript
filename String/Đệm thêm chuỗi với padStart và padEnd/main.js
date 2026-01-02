// String.prototype.padStart()
// String.prototype.padEnd()

let minutes = 6;
let seconds = 5;

// 06:05

minutes = `${minutes}`.padStart(2, '0');
seconds = `${seconds}`.padStart(2, '0');

console.log(`${minutes}:${seconds}`);

// VD2:

let cardNum = '00234589933';

console.log(cardNum.slice(-4).padStart(cardNum.length, "*"));


