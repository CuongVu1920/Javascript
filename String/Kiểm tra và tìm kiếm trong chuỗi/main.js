// #includes() là gì?

/**
 * - includes() là một phương thức sử dụng để kiểm tra xem một chuỗi con có tồn tại trong chuỗi gốc hay không:
 * - Cú pháp: 
 *          let bool = string.includes(searchString, position);
 * - Trong đó:
 *    + searchString: Chuỗi con cần tìm trong string.
 *    + position: (không bắt buộc, mặc định là 0): Vị trí bắt đầu tìm trong string.
 * - Trả về:
 *    + true nếu searchString xuất hiện trong string từ vị trí position trở đi.
 *    + false nếu không tìm thấy.
 */

// VD1:

  const str = "Hello, world!";

  console.log(str.includes('world')); // true
  console.log(str.includes("World!")); // false
  console.log(str.includes("world", 8)); // false

  // => includes() giúp kiểm tra nhanh chóng sự tồn tại của một chuỗi con trong chuỗi chính mà không cần phải viết nhiều code phức tạp.

// VD2: Kiểm tra xem một email có chứa ký tự ‘@’ không.

const email = "example@domain.com";

console.log(email.includes("@")); // true

// #indexOf() là gì?

/**
 * - indexOf() là một phương thức được sử dụng để tìm vị trí (chỉ mục) đầu tiên của một chuỗi con trong chuỗi gốc. Phương thức này trả về vị trí
 *   của chuỗi con hoặc -1 nếu không tìm thấy.
 * 
 * - Cú pháp: 
 *      let index = string.indexOf(searchValue, fromIndex);
 * - Giải thích:
 *  + searchValue: Chuỗi con cần tìm trong string.
 *  + fromIndex (không bắt buộc, mặc định là 0): Vị trí bắt đầu tìm trong string.
 * - Trả về:
 *  + Vị trí đầu tiên (chỉ mục mảng) của searchValue trong string, tính từ fromIndex.
 *  + -1 nếu không tìm thấy.
 */


// VD:

const str1 = "Hello, world!";

console.log(str.indexOf('world')); // 7
console.log(str.indexOf('World')); // -1
console.log(str.indexOf('o', 5)); // 8

// => indexOf() giúp xác định vị trí của một chuỗi con trong chuỗi chính, hữu ích khi cần biết vị trí bắt đầu của chuỗi con.

// VD1: Tìm vị trí đầu tiên của chữ “a” trong chuỗi.

const str2 = "banana";

console.log(str2.indexOf("a")); // 1

// VD2: Kiểm tra xem một từ có xuất hiện trong câu không và in ra vị trí của nó.

const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.indexOf("dog")); // 40

// #lastIndexOf() là gì? - tương tự như indexOf() nhưng thứ tự tìm bắt đầu từ -1 (string.length - 1)

// #startsWith() là gì?

/**
 * - #startsWith() là một phương thức được sử dụng để kiểm tra xem chuỗi có bắt đầu bằng chuỗi hay không?
 * - Cú pháp:
 *      let bool = string.startsWith(searchString, position);
 * - Giải thích:
 *    + searchString: Chuỗi con cần kiểm tra xem string có bắt đầu bằng nó không.
 *    + position (không bắt buộc, mặc định là 0): Vị trí bắt đầu kiểm tra trong string.
 * - Trả về:
 *    + true nếu string bắt đầu bằng searchString tại position.
 *    + false nếu không. 
 */

const str3 = "Hello, world!";

console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("world")); // false
console.log(str.startsWith("world", 7)); // true

// => startsWith() giúp kiểm tra nhanh chóng và hiệu quả xem một chuỗi có bắt đầu bằng một chuỗi con cụ thể không.

// VD1: Kiểm tra xem URL có bắt đầu bằng “https://” không.

const url = "https://example.com";

console.log(url.startsWith("https://")); // true

// VD2: Kiểm tra xem tên tập tin có bắt đầu bằng “report_” không.

const fileName = "report_2023.pdf";

console.log(fileName.startsWith("report_")); // true

// #endsWith() là gì?

/**
 * - endsWith() là một phương thức được sử dụng để kiểm tra xem chuỗi có kết thúc bằng chuỗi hay không.
 * - Cú pháp: 
 *        let bool = string.endsWith(searchString, length);
 * - Giải thích:
 *    + searchString: Chuỗi con cần kiểm tra xem string có kết thúc bằng nó không.
 *    + length (không bắt buộc, mặc định là string.length): Độ dài tối đa của string khi kiểm tra.
 * - Trả về:
 *    + true nếu string kết thúc bằng searchString trong phạm vi length.
 *    + false nếu không.
 */

// VD:

  const str5 = "Hello, world!";

  console.log(str.endsWith("world!")); // true
  console.log(str.endsWith("world")); // false
  console.log(str.endsWith("Hello", 5)); // true






  
  