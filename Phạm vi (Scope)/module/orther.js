export let myVar = "Biến trong module orther.js";

console.log(myVar);

export function myFunction() {
  console.log("Hàm trong module orther.js");
}

export function sum(a, b) {
  return a + b;
}
