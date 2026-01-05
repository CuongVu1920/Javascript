// #Infinity là gì?

/**
 * - Infinity là một giá trị đặc biệt trong Javascript đại diện cho một số lớn hơn vô hạn (dương vô cùng),
 *   Tương tự, -Infinity đại diện cho một số nhỏ vô hạn (âm vo cùng).
 * - Cú pháp:
 *      let positiveInfinity = Infinity;
 *      let negativeInfinity = -Infinity;
 * 
 * - Infinity và -Infinity thường được trả về trong một số trường hợp sau:
 *    + khi chia một số dương cho 0
 *    + Khi chi một số âm cho 0
 *    + Khi một phép tính số học vượt quá giá trị lớn nhất/nhỏ nhất có thể biểu diễn trong JavaScript.
 *    + Các phép toán với Infinity hoặc -Infinity cũng sẽ trả về Infinity hoặc -Infinity tương ứng.
 */

// VD:

  console.log(1 / 0); // Infinity
  console.log(-1 / 0); // -Infinity
  console.log(10 ** 1000); // Infinity
  console.log(-(10 ** 1000)); // -Infinity

  /**
   * # Cách kiểm tra số hữu hạn
   *    - isFinite là hàm dùng để kiểm tra xem một giá trị có phải là số hữu hạn hay không. Nếu giá trị là
   *      một số hữu hạn (không phải Infinity, -Infinity, hoặc NaN), hàm sẽ trả về true. Ngược lại hàm sẽ trả về false.
   */

  console.log(isFinite(100)); // true
  console.log(isFinite(Infinity)); // false
  console.log(isFinite(NaN)); // false
  console.log(isFinite(-Infinity)); // false

  /**
   * Note: Dùng "isFinite" với giá trị không phải số có thể trả về kết quả không mong muốn do Js tự động chuyển đổi kiểu.
   *       Vì vậy, bạn có kết hợp typeof hoặc dùng Number.isFinite để kiểm tra chính xác số hữu hạn.
   */

  // Tự động ép kiểu sang số
  console.log(isFinite("100")); // true
  console.log(isFinite("abc")); // false
  
  console.log(isFinite(true)); // true (true được chuyển thành 1)
  console.log(Number.isFinite(true)); // false
  

  // # Tại sao cần sử dụng infinity

  /**
   * Trường hợp cần dùng:
   *    - Khi muốn biểu diễn một giá trị lớn vô hạn hoặc nhỏ vô hạn trong các phép tính.
   *    - Trong các thuật toán cần so sánh.
   */
  
  // VD1: Tìm giá trị lớn nhất trong mảng:

  function findMax(input) {
    let max = -Infinity;

    for(let i = 0; i < input.lenth; i++) {
      if(input[i] > max) {
        max = input[i];
      }
    }
    return max;
  }

  // VD2: Tìm giá trị nhỏ nhất trong mảng:

  function findMin(input) {
    let min = Infinity;

    for (let i = 0; i < input.length; i++) {
      if (input[i] < min) {
        min = input[i];
      }
    }

    return min;
  }
  

