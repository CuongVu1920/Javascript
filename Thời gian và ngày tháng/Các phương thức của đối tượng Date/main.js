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











/** 
 * Returns a string indicating the time passed since a given ISO 8601 date.
 * Handles cases like minutes, hours, days, weeks, months, and years.
 * If less than 1 minute has passed, returns "Vừa xong".
 * @param {string} isoDate - ISO 8601 formatted date string
 * @returns {string} - a string describing the time elapsed (e.g., "5 minutes ago")
 */

function timeAgo(isoDate) {
  const date = new Date(isoDate);
  const now = new Date();

  if(isNaN(date)) {
    return "Ngày giờ không hợp lệ";
  }

  let secondsAgo = Math.floor((now - date) / 1000);
  if(secondsAgo < 60) {
    return "vừa xong";
  };

  const minutesAgo = Math.floor(secondsAgo / 60);
  if(minutesAgo < 60) {
    return `${minutesAgo} phút trước`;
  }

  const hoursAgo = Math.floor(minutesAgo / 60);
  if(hoursAgo < 24) {
    return `${hoursAgo} giờ trước`;
  } 

  const daysAgo = Math.floor(hoursAgo / 24);
  if(daysAgo < 7) {
    return `${daysAgo} ngày trước`;
  }

  const weeksAgo = Math.floor(daysAgo / 7);
  if(weeksAgo < 30) {
    return `${weeksAgo} tuần trước`
  };

  const monthsAgo = Math.floor(daysAgo / 30);
  if(daysAgo < 365) {
    return `${monthsAgo} tháng trước`;
  }

  const yearsAgo = Math.floor(daysAgo / 365);
  return `${yearsAgo} năm trước`;

}


// Sample usage
console.log(timeAgo("2020-09-10T15:20:00Z"));  // "x năm trước"

// Test Case 1: Ngày trong tương lai (negative time)
console.log(timeAgo("2026-12-31T00:00:00Z"));
// Kết quả: "-X giờ trước" hoặc "vừa xong" (tùy thuộc thời điểm hiện tại)
// ⚠️ Vấn đề: Hàm không xử lý ngày tương lai

// Test Case 2: Ngày không hợp lệ
console.log(timeAgo("invalid-date-string"));
// Kết quả mong đợi: "Ngày giờ không hợp lệ" ✅

// Test Case 3: Biên giới giữa tuần và tháng (khoảng 4 tuần)
console.log(timeAgo(new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString()));
// Khoảng 28 ngày = 4 tuần
// Kết quả: "4 tuần trước" ✅
// Nhưng nếu là 30 ngày:
console.log(timeAgo(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()));
// ⚠️ Vấn đề: Sẽ hiển thị "30 tuần trước" thay vì "1 tháng trước"
// Lỗi logic: if(weeksAgo < 30) nên là if(daysAgo < 30)

// Test Case 4: Đúng 0 giây (thời gian hiện tại chính xác)
console.log(timeAgo(new Date().toISOString()));
// Kết quả mong đợi: "vừa xong" ✅