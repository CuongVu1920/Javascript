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
];

const scaleText = ["", "nghìn", "triệu", "tỷ"]



function readThreeDigits(number, hasScale = false) {
    const hundreds = Math.floor(number / 100);
    const remainder = number % 100;
    const tens = Math.floor(remainder / 10);
    const units = remainder % 10;

    let result = "";

    if (hundreds > 0) {
        result += unitTexts[hundreds] + " trăm ";
    }else if(hasScale) {
      result += "không trăm ";
    }

    if (tens > 1) {
        result += unitTexts[tens] + " mươi ";
    }else if(tens === 1) {
        result += "mười ";
    }else if(hasScale && tens === 0) {
      result += "lẻ ";
    }

    if(tens > 1 && units === 1) {
        result += "mốt";
    }else if(tens >= 1 && units === 5) {
        result += "lăm";
    }else if (units > 0) {
        result += unitTexts[units];
    }

    return result.trim();
}





// function readMoney(number) {
//   // ...
// }

// console.log(readMoney(1234567)); // một triệu hai trăm ba mươi bốn nghìn năm sáu muơi bảy đồng.

// console.log(readThreeDigits(1)); // một đồng
// console.log(readThreeDigits(5)); // năm đồng
// console.log(readThreeDigits(10)); // mười đồng
// console.log(readThreeDigits(11)); // mười một đồng
// console.log(readThreeDigits(41)); // bốn mươi mốt đồng
// console.log(readThreeDigits(55)); // năm mươi lăm đồng
// console.log(readThreeDigits(100)); // một trăm đồng
// console.log(readThreeDigits(111)); // một trăm linh một đồng
// console.log(readThreeDigits(234)); // hai trăm ba mươi bốn đồng
// console.log(readThreeDigits(367)); // ba trăm sáu mươi bảy đồng


// 1002 : không trăm mười hai
// console.log(readThreeDigits(2)); hai
// console.log(readThreeDigits(2, true)); // không trăm lẻ hai
// console.log(readThreeDigits(15, true)); // không trăm mười lăm
// console.log(readThreeDigits(11, true)); 


// 1015 : không trăm mười lăm


function readMoney(number) {
  if(number === 0) return "không đồng";

  let index = 0;
  let result = '';
  lastIndex = Math.floor(String(number).length / 3);

  do {
    const threeDigits = number % 1000;
    const hasScale = index !== lastIndex;
    const text = readThreeDigits(threeDigits, hasScale);

    if(threeDigits > 0) {
      const unit = scaleText[index];
      result = `${text} ${unit} ${result}`;
    }
    
    number = Math.floor(number / 1000);
    
    index++;
  } while (number > 0);

  return result.trim() + " đồng";
}

// console.log(readMoney(1234567)); // một triệu hai trăm ba mươi bốn nghìn năm trăm sáu mươi bảy đồng
// console.log(readMoney(2));
// console.log(readMoney(10));
// console.log(readMoney(100));
// console.log(readMoney(1000));
// console.log(readMoney(10000));
// console.log(readMoney(100000));
// console.log(readMoney(1000000));
// console.log(readMoney(10000000000));
console.log(readMoney(1222002)); // một nghìn không trăm lẻ hai đồng




// -1: một (triệu)
// - 234: hai trăm ba mươi bốn (nghìn)
// - 567: năm sáu muơi bảy (đồng).