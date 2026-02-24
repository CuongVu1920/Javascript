// JSON - Javascript Object Notation

// JS -> JSON: JSON.stringify()
// JSON -> js: JSON.parse()

// ========== 1. JSON.stringify() ==========
// Chuyển đổi object/array JavaScript thành chuỗi JSON

const user = {
  name: "Nguyễn Văn A",
  age: 25,
  isStudent: true,
  hobbies: ["đọc sách", "chơi game", "du lịch"],
  address: {
    city: "Hà Nội",
    district: "Cầu Giấy"
  }
};

// Ví dụ 1: Chuyển object thành JSON string
const jsonString = JSON.stringify(user);
console.log(jsonString);
// {"name":"Nguyễn Văn A","age":25,"isStudent":true,"hobbies":["đọc sách","chơi game","du lịch"],"address":{"city":"Hà Nội","district":"Cầu Giấy"}}


// Ví dụ 2: Stringify với format đẹp (thêm indentation)
const prettyJson = JSON.stringify(user, null, 2);
console.log(prettyJson);
/*
{
  "name": "Nguyễn Văn A",
  "age": 25,
  "isStudent": true,
  ...
}
*/

// Ví dụ 3: Chỉ lấy một số key nhất định
const selectedJson = JSON.stringify(user, ["name", "age"]);
console.log(selectedJson); // {"name":"Nguyễn Văn A","age":25}

// Ví dụ 4: Stringify với replacer function
const customJson = JSON.stringify(user, (key, value) => {
  if (typeof value === "number") {
    return value * 2; // Nhân đôi các giá trị số
  }
  return value;
});
console.log(customJson);

// ========== 2. JSON.parse() ==========
// Chuyển đổi chuỗi JSON thành object/array JavaScript

const jsonData = '{"name":"Trần Văn B","age":30,"skills":["JavaScript","Python"]}';

// Ví dụ 1: Parse JSON string thành object
const parsedUser = JSON.parse(jsonData);
console.log(parsedUser);
console.log(parsedUser.name);   // Trần Văn B
console.log(parsedUser.skills); // ["JavaScript", "Python"]

// Ví dụ 2: Parse với reviver function
const jsonWithDate = '{"name":"Event","date":"2026-02-24"}';
const eventObj = JSON.parse(jsonWithDate, (key, value) => {
  if (key === "date") {
    return new Date(value); // Chuyển string thành Date object
  }
  return value;
});
console.log(eventObj.date); // Date object
console.log(eventObj.date.getFullYear()); // 2026

// Ví dụ 3: Parse JSON array
const jsonArray = '[1, 2, 3, "hello", true]';
const parsedArray = JSON.parse(jsonArray);
console.log(parsedArray); // [1, 2, 3, "hello", true]

// ========== Ứng dụng thực tế ==========

// Lưu dữ liệu vào localStorage
const settings = { theme: "dark", language: "vi" };
localStorage.setItem("settings", JSON.stringify(settings));

// Đọc dữ liệu từ localStorage
const savedSettings = JSON.parse(localStorage.getItem("settings"));
console.log(savedSettings);

// Clone deep một object (cách đơn giản)
const original = { a: 1, b: { c: 2 } };
const cloned = JSON.parse(JSON.stringify(original));
cloned.b.c = 100;
console.log(original.b.c); // 2 (không bị thay đổi)
console.log(cloned.b.c);   // 100