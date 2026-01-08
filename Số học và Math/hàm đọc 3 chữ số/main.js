// 1.234.567: một triệu hai trăm ba mươi bốn nghìn năm sáu muơi bảy đồng.
const unitTexts = [
  '',
  'một',
  'hai',
  'ba',
  'bốn',
  'năm',
  'sáu',
  'bảy',
  'tám',
  'chín',
]



function readThreeDigits(number) {
  const hundrens = Math.floor(number / 100);
  const remainder = number % 100;
  const tens = Math.floor(remainder / 10);
  const units = remainder % 10; 

  let result = "";

  if(hundrens > 0) {
    result += unitTexts[hundrens] + " trăm ";
  }

  if(tens > 1) {
    result += unitTexts[tens] + " mươi ";
  }else if(tens === 1) {
    result += "mười ";
  }

  if(tens > 1 && units === 1) {
    result += "mốt";
  }else if(tens > 1 && units === 5) {
    result += "lăm";
  }else if(units > 0) {
    result += unitTexts[units];
  }

  return result.trim() + " đồng";
}




// function readMoney(number) {
//   // ...
// }

// console.log(readMoney(1234567)); // một triệu hai trăm ba mươi bốn nghìn năm sáu muơi bảy đồng.

// -1: một (triệu)
// - 234: hai trăm ba mươi bốn (nghìn)
// - 567: năm sáu muơi bảy (đồng).


// console.log(readThreeDigits(1)); // một đồng
console.log(readThreeDigits(5)); // năm đồng
console.log(readThreeDigits(10)); // mười đồng
// console.log(readThreeDigits(11)); // mười một đồng
console.log(readThreeDigits(41)); // bốn mươi mốt đồng
console.log(readThreeDigits(55)); // năm mươi lăm đồng
// console.log(readThreeDigits(100)); // một trăm đồng
// console.log(readThreeDigits(111)); // một trăm linh một đồng
// console.log(readThreeDigits(234)); // hai trăm ba mươi bốn đồng
// console.log(readThreeDigits(367)); // ba trăm sáu mươi bảy đồng

