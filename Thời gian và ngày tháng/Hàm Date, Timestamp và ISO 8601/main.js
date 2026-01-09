// - Date
// - Timestamp: UTC (lưu trữ trong db)
// - ISO 8601

// 1. Date Object

const now = new Date();  // Thời gian hiện tại
const specific = new Date('2024-12-25');   // Ngày cụ thể
const custom = new Date(2024, 11, 25);     // Năm, tháng (0-11), ngày

console.log(now);


// Methods thường dùng
now.getFullYear()   // 2026
now.getMonth()      // 0 (tháng 1, vì đếm từ 0)
now.getDate()       // 9
now.getDay()        // 4 (thứ 5, 0=Chủ nhật)
now.getHours()      // 14

// 2. Timestamp (Unix Timestamp)

// Số milliseconds kể từ January 1, 1970 00:00:00 UTC

// Lấy timestamp
const timestamp = Date.now();              // 1736410245000
const fromDate = new Date().getTime();     // 1736410245000

console.log(timestamp);  // 1736410245000

// Chuyển timestamp → Date
const date = new Date(1736410245000);
console.log(date);  // Thu Jan 09 2026 14:30:45

// Timestamp tính bằng GIÂY (Unix epoch)
const unixSeconds = Math.floor(Date.now() / 1000);
console.log(unixSeconds);  // 1736410245

// Ưu điểm:

// Dễ so sánh (chỉ cần so sánh số)
// Dễ lưu trữ trong database
// Không phụ thuộc timezone

// 3. ISO 8601
// Chuỗi định dạng chuẩn quốc tế cho ngày giờ

// Format: YYYY-MM-DDTHH:mm:ss.sssZ
const iso = new Date().toISOString();
console.log(iso);  // "2026-01-09T07:30:45.123Z"

// Các phần của ISO string:
// 2026-01-09  → Ngày (YYYY-MM-DD)
// T           → Ký tự phân cách
// 07:30:45    → Giờ (HH:mm:ss)
// .123        → Milliseconds
// Z           → UTC timezone (hoặc +07:00 cho timezone khác)

// Parse ISO string
const parsed = new Date("2026-01-09T07:30:45.123Z");

// ISO với timezone
const withTZ = "2026-01-09T14:30:45+07:00";  // GMT+7


// Date.now()
// Date.parse()
// Date.UTC()

// => 3 phương thức này đều trả về timestamp

// const fromDate = new Date().getTime();     // 1736410245000