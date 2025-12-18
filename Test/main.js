
  Array.prototype.mySome = function(callback, thisValue) {
    const length = this.length;

    for(let i = 0; i < length; i++ ) {
      if(i in this) {

        if(callback.call(thisValue, this[i], i, this)) {
          return true;
        }
      }
    }
    return false;
  }

  Array.prototype.myEvery = function(callback, thisValue) {
    const length = this.length;

    for(let i = 0; i < length; i++) {
      if(i in this) {
        if(!callback.call(thisValue, this[i], i, this)) {
          return false;
        }
      }
    }
    return true;
  }

  // ========== TEST CASES ==========

console.log('========== TEST EVERY ==========');

const numbers = [2, 4, 6, 8, 10];

// Test 1: Tất cả đều chẵn
console.log('Tất cả số chẵn?', numbers.myEvery(num => num % 2 === 0)); // true

// Test 2: Tất cả > 5
console.log('Tất cả > 5?', numbers.myEvery(num => num > 5)); // false

// Test 3: Mảng rỗng (luôn return true)
console.log('Mảng rỗng:', [].myEvery(num => num > 100)); // true

// Test 4: Với thisArg
const checker = {
  threshold: 5,
  check: function(num) {
    return num > this.threshold;
  }
};
console.log('Với thisArg:', numbers.myEvery(checker.check, checker)); // false


console.log('\n========== TEST SOME ==========');

const scores = [45, 60, 75, 30, 85];

// Test 1: Có số nào >= 80?
console.log('Có điểm >= 80?', scores.mySome(score => score >= 80)); // true

// Test 2: Có số nào > 100?
console.log('Có điểm > 100?', scores.mySome(score => score > 100)); // false

// Test 3: Mảng rỗng (luôn return false)
console.log('Mảng rỗng:', [].mySome(num => num > 0)); // false

// Test 4: Tìm phần tử cụ thể
const fruits = ['táo', 'chuối', 'cam'];
console.log('Có "cam"?', fruits.mySome(fruit => fruit === 'cam')); // true
console.log('Có "xoài"?', fruits.mySome(fruit => fruit === 'xoài')); // false


console.log('\n========== SO SÁNH VỚI BUILT-IN ==========');

const testArray = [1, 2, 3, 4, 5];

console.log('every - built-in:', testArray.every(n => n > 0)); // true
console.log('every - custom:', testArray.myEvery(n => n > 0)); // true

console.log('some - built-in:', testArray.some(n => n > 4)); // true
console.log('some - custom:', testArray.mySome(n => n > 4)); // true