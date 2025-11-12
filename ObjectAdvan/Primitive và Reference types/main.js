
// Cách giải quyết khi cần sao chép sâu (deep copy) là sử dụng hàm structuredClone() có sẵn trong JavaScript.

let person = {
  name: "John",
  info: {
    id: 1234
  }
};
let personCopy = structuredClone(person);

console.log(person.info === personCopy.info); // false