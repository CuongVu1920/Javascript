// #NaN là gì?
// NaN (Not-a-Number) là một giá trị đặc biệt trong JavaScript biểu thị một kết quả không phải là số hợp lệ. 
// Thường xuất hiện khi thực hiện các phép toán không hợp lệ, chẳng hạn như chia 0 cho 0 hoặc chuyển đổi chuỗi không phải là số sang số.

// VD:

console.log(0 / 0); // NaN
console.log(parseInt('abc')); // NaN

/**
 * # Tại sao cần kiểm tra NaN?
 *  - Khi làm việc với dữ liệu số hoặc các phép toán, bạn cần kiểm tra NaN để xử lý lỗi hoặc kiểm soát logic chương trình.
 *      + tránh các lỗi logic khi xử lý số liệu
 *      + xử lý dữ liệu đầu vào k hợp lệ
 */

// VD:

  function double(value) {
    return isNaN(value) ? "Invalid input" : value * 2;
  }

let input1 = parseInt('abc'); // NaN
let input2 = parseInt('2');   // 2

console.log(double(input1)); // "Invalid input"
console.log(double(input2)); // 4


// # Cách kiểm tra NaN

  // # Sử dụng isNaN()

  /**
   * - isNaN() là hàm chuẩn của Javascript để kiểm tra một giá trị có phải NaN hay không.
   *      console.log(isNaN(NaN)); // true
   * - Tuy nhiên, cần lưu ý rằng isNaN sẽ chuyển đổi giá trị sang kiểu số trước khi kiểm tra nên có thể dẫn tới kết quả k như ý muốn.
   *      console.log(isNaN("abc")); // true
   * 
   *  - Ví vậy cần kết hợp thêm kiểm tra kiểu dữ liệu mới đảm bảo tính chính xác.
   *    let x = "abc";
        console.log(typeof x === 'number' && isNaN(x)); // false
   * 
   */


  // # Sử dụng Number.isNaN()

  // Number.isNaN() kiểm tra giá trị có phải là NaN một cách chính xác hơn so với isNaN(). 
  // Hàm này chỉ trả về true nếu giá trị thực sự là NaN.

  console.log(Number.isNaN(NaN)); // true
  console.log(Number.isNaN("abc")); // false

  // Number.isNaN() không thực hiện chuyển đổi kiểu dữ liệu trước khi kiểm tra như isNaN().

  // # Sử dụng Object.is(NaN, value);

  // Object.is() là phương pháp kiểm tra tương đương với phép so sánh nghiêm ngặt ===, nhưng nó xử lý NaN đúng như mong đợi.

  // console.log(Object.is(NaN, NaN)); // true
  // console.log(Object.is(NaN, 42)); // false
  
  


  

