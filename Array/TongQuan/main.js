// Tổng quan các phương thức
// làm việc với mảng.

// THÊM XÓA PHẦN TỬ

// ------#push---------

/**
 * - push() thêm một hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng
 * - Lưu ý: Mảng sẽ bị thay đổi khi gọi phương thức này
 */

// VD1: thêm một phần tử

  // let fruits = ["Apple", "Banana"];
  // let newLength = fruits.push("Cherry");

  // console.log(fruits); // => (3) ["Apple", "Banana", "Cherry"]
  // console.log(newLength); // => 3

// VD2: thêm nhiều phần tử

  // let fruits = ["Apple", "Banana"];
  // fruits.push("Cherry", "Dragonfruit", "Elderberry");

  // console.log(fruits); // (5) ["Apple", "Banana", "Cherry", "Dragonfruit", "Elderberry"]

// --------#pop()----------

/**
 * - pop() loại bỏ phần tử cuối cùng của mảng và trả về phần tử đó.
 * - Lưu ý: Mảng sẽ bị thay đổi khi gọi phương thức này
 */

// VD1: 

// let fruits = ["Apple", "Banana", "Cherry"];
// let lastFruits = fruits.pop();

// console.log(fruits); // (2) ['Apple', 'Banana']
// console.log(lastFruits); // Cherry

//-------#unshift()-----------

/**
 * - unshift(): thêm một hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng
 * - Lưu ý: Mảng sẽ bị thay đổi sau khi gọi method này.
 * - Ngoài ra, unshift() có thể nhận nhiều tham số hơn, tương ứng với số phần tử muốn thêm vào đầu mảng.
 */

 // VD1:

  // let fruits = ["Apple", "Banana"];
  // let newLength = fruits.unshift("Apple");

  // console.log(fruits); //  ['Apple', 'Apple', 'Banana']
  // console.log(newLength); // 3

// VD2:

// let numbers = [3, 4, 5];

// // Thêm 1 và 2 vào đầu mảng
// numbers.unshift(1, 2);

// console.log(numbers); // (5) [1, 2, 3, 4, 5]
  

//-------#shift()-----------

/**
 * - shift() loại bỏ phần tử đầu tiên của mảng và trả về phần tử đó
 * - Lưu ý: Mảng sẽ bị thay đổi sau khi gọi method này.
 */

  // VD1:

  // let fruits = ["Apple", "Banana", "Cherry"];
  // let fristFruits = fruits.shift();

  // console.log(fruits); // (2) ['Banana', 'Cherry']
  // console.log(fristFruits); // Apple


  // TÌM KIẾM VÀ KIỂM TRA PHẦN TỬ

  //-------#indexOf()-----------

  /**
   * - indexOf() tìm chỉ số đầu tiên của một phần tử trong mảng. Nếu không tìm thấy trả về -1.
   * - Lưu ý: So sánh giữa các phần tử là chính xác (strict equality), tức là cả kiểu dữ liệu và giá trị.
   * - Trường hợp sử dụng: Khi cần xác định vị trí của một phần tử trong mảng. Đặc biệt hữu ích khi kiểm tra xem một giá trị có tồn tại trong mảng hay không và biết được vị trí của nó.
   * - Ngoài ra, indexOf() có thể nhận thêm một tham số thứ hai, đó là vị trí bắt đầu tìm kiếm trong mảng.
   */

  // VD1:

    // let fruits = ["Apple", "Banana", "Cherry"];

    // console.log(fruits.indexOf("Banana")); // 1
    // console.log(fruits.indexOf("Mango")); // -1

  // VD2: thêm tham số thứ 2

  // let fruits = ["Apple", "Banana", "Cherry", "Apple"];

  // // Tìm "Apple" bắt đầu từ vị trí 2
  // console.log(fruits.indexOf("Apple", 2)); // 3

   //-------#lastIndexOf()-----------

   /**
    * - lastIndexOf() tìm chỉ số cuối cùng của một phần tử trong mảng. Nếu không tìm thấy, trả về -1
    * - Lưu ý: Tìm kiếm từ cuối mảng về đầu mảng.
    * - Ngoài ra, giống như indexOf(), lastIndexOf() cũng có thể nhận một tham số thứ hai là vị trí bắt đầu tìm kiếm, nhưng nó sẽ tìm từ cuối mảng lên.
    */

  // VD1:
    // let numbers = [1, 2, 3, 2, 1];
    // console.log(numbers.lastIndexOf(2)); // 3

  // VD2:

    // let numbers = [1, 2, 3, 4, 2, 5];

    // // Tìm "2" bắt đầu từ vị trí 4 về đầu mảng
    // console.log(numbers.lastIndexOf(2, 3)); // 1

  //-------#includes()-----------

  /**
   * - includes() kiểm tra xem một mảng có chứa một phần tử nhất định hay không, trả về true hoặc false.
   */


  // VD1:
  let numbers = [1, 2, 3, NaN];

  console.log(numbers.includes(2)); // true
  console.log(numbers.includes(4)); // false
  console.log(numbers.includes(NaN)); // true 

  /**
   * giá trị trả ra khi console.log(numbers.includes(NaN)); là true, mặc dù NaN không thể bằng chính nó
   */


  // CHUYỂN ĐỔI VÀ ĐẢO NGƯỢC MẢNG

  //-------#join()-----------

  /**
   * - join() nối tất cả các phần tử của mảng thành một chuỗi, với một dấu phân cách giữa chúng
   * - Lưu ý: Nếu mảng có phần tử undefined hoặc null, chúng sẽ được chuyển thành chuỗi rỗng trong chuỗi kết quả.
   */

  // VD

  let fruits = ["Apple", "Banana", "Cherry", null];

  console.log(fruits.join("-")); // Apple-Banana-Cherry

  //-------#reverse()-----------

  /**
   * reverse() đảo ngược thứ tự của một mảng và trả về mảng đã được đảo ngược.
   * - Lưu ý: Mảng sẽ bị thay đổi sau khi gọi method này.
   */

  let numbers1 = [1, 2, 3];

  // Đảo ngược thứ tự các phần tử
  const reversed = numbers1.reverse();

  console.log(numbers1); // (3) [1, 2, 3]
  console.log(reversed); // (3) [3, 2, 1]

  //-------#toString()-----------

  /**
   * toString() chuyển đổi mảng thành một chuỗi các giá trị, cách nhau bằng dấu phẩy.
   */

  let fruits2 = ["Apple", "Banana", "Cherry"];

  console.log(fruits2.toString()); // Apple,Banana,Cherry
  
  /**
   * + Các sai lầm thường gặp:
   *  - Quên rằng push(), pop(), unshift(), shift() và reverse() thay đổi mảng ban đầu
   *  - Sai lầm: sử dụng các phương thức với suy nghĩ mảng ban đầu không thay đổi, dẫn đến việc mất mát dữ liệu không mong muốn.
   */


  // Sử dụng indexOf() trên mảng có chứa NaN

   /**
    * - Sai lầm: indexOf() không thể tìm thấy NaN trong mảng vì NaN không bằng chính nó (NaN === NaN là false)
    * - Khắc phục: sử dụng includes() để xử lý trường hợp có NaN
    */

  


  
  