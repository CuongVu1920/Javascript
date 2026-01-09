console.log(Date.prototype);

let date = new Date(2012, 10, 20, 10, 20, 30, 56);

console.log(date.getFullYear()); // 2012
console.log(date.getMonth()); // 11
console.log(date.getDate()); // ngày 20
console.log(date.getDay()); // 2 =>  thứ 3 vì CN-0 T2-1 T3 - 2 ..
console.log(date.getHours()); // 10
console.log(date.getMinutes()); // 20
console.log(date.getSeconds()); // 30

date.setFullYear(2026, 11, 29);

console.log(date);

// getTime, getTimezoneOffset

const makeDate = new Date();

console.log("makeDate:", makeDate);
console.log(makeDate.getTime()); // phương thức getTime() trả về timestamp tương ứng cho object date. 

let date1 = new Date("2024-05-09T10:30:00Z")
let date2 = new Date("2024-05-09T10:00:00Z")

// >, >=, <, <=

console.log(date1 >= date2); // false

console.log(date1.getTime() === date2.getTime()); // true

console.log(date1.toString() === date2.toString()); // true

let date3 = new Date(date1.getTime() + 60 * 60 * 1000);

console.log(date1);
console.log(date3);


// VD:

console.log(new Date('2024-10-10T10:00:00Z').getTime());

// 1728554400000

const dateInterface = new Date(1728554400000);

console.log(dateInterface);


// Phương thức getTimezoneOffset()

// Phương thức getTimezoneOffset() trả về chênh lệch múi giờ giữa UTC (Coordinated Universal Time) và múi giờ địa phương, tính bằng phút.

let offset = date.getTimezoneOffset();

// Đặc điểm quan trọng:

// Trả về số phút, không phải giờ
// Giá trị dương nghĩa là múi giờ địa phương chậm hơn UTC
// Giá trị âm nghĩa là múi giờ địa phương nhanh hơn UTC

console.log(offset); // -420

// Chuyển sang giờ
let offsetHours = -offset / 60;
console.log(offsetHours); // 7 (UTC+7)











