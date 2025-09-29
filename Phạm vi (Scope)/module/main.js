import { myVar, myFunction, sum } from "./orther.js";
console.log(globalVar);

/**
 * Chốt lại: các biến ở phạm vi nhỏ hơn (local scope) có thể truy cập các biến ở phạm vi lớn hơn (global scope).
 * Ngược lại, các biến ở phạm vi lớn hơn không thể truy cập các biến ở phạm vi nhỏ hơn.
 */


console.log(myVar); 
myFunction();

console.log(sum(5, 10));


{
  function localFunction() {
    console.log("Hàm trong phạm vi local");
  }

  localFunction(); 
}

localFunction();