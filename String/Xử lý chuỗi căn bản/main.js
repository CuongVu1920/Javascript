// #concat() là gì?

/**
 * - Phương thức concat() được sử dụng để nối hai hoặc nhiều chuỗi với nhau.
 * - Cú pháp: let newString = str1.concat(str2, str3, ..., strN);
 */

  // VD:

  let greeting = "Hello, ";
  let name = "Alice";
  let fullGreeting = greeting.concat(name);

  console.log(fullGreeting);

  // Phương thức concat() hữu ích khi bạn cần nối nhiều chuỗi lại với nhau mà không cần dùng dấu cộng (+).

  // Bài toán ví dụ
    // Nối tên và họ của một người:

    let firstName = "John";
    let lastName = "Doe";
    let fullName = firstName.concat(" ", lastName);

    console.log(fullName);

// #slice() là gì?

/**
 * - Phương thức slice() được sử dụng để trích xuất một phần của chuỗi cha và trả về chuỗi con mới.
 * - Cú pháp: let newString = str.slice(startIndex, endIndex);
 */

// VD1:

let text = "Hello, World!".to
let result = text.slice(0, 5);

console.log(result); // Hello

// => Phương thức slice() hữu ích khi bạn cần lấy một phần của chuỗi theo vị trí bắt đầu và kết thúc.

// VD2: Lấy từ đầu tiên trong câu:

let sentence = "Javascript is fun";
let fristWord = sentence.slice(0, 10);

console.log(fristWord); // Javascript

// VD3: Lấy từ cuối cùng trong câu:

let text1 = "Hello, World!";
let tail = text1.slice(-6, -1);
console.log(tail); // World

// #substring() là gì?

/**
 * - Phương thức substring() được sử dụng để trích xuất các ký tự trong chuỗi giữa hai chỉ mục.
 * - cú pháp: let newString = str.substring(startIndex, endIndex);
 */

// VD1:

  let text2 = "Hello, World!";
  let result2 = text.substring(0, 5);
  console.log(result2); // Hello
  
  // => Phương thức substring() hữu ích khi bạn cần lấy một phần của chuỗi giữa hai chỉ mục.

// VD2: Lấy từ nằm giữa hai chỉ số:

let text3 = "Hello, World!";
let middle = text.substring(7, 12);

console.log(middle); // World

// #split() là gì?

/**
 * - phương thức split() được sử dụng để chia một chuỗi thành một mảng các chuỗi con, dựa trên một ký tự phân tách
 * - Cú pháp: let newArray = str.split(separator, limit);
 */

// VD1:

let text4 = "apple, banana, cherry";
let result4 = text4.split(", ");

console.log(result4); // (3) ['apple', 'banana', 'cherry']

// => Phương thức split() hữu ích khi bạn cần tách một chuỗi thành các phần tử mảng dựa trên ký tự phân tách.

// VD2: Tách chuỗi thành mảng chứa các từ:

let sentence2 = "The quick brow fox";
let words = sentence2.split(" ");

console.log(words); // (4) ['The', 'quick', 'brow', 'fox']

// VD3: Tách chuỗi theo dấu phẩy:

let fruits = "apple,banana,cherry";
let fruitList = fruits.split(",");
console.log(fruitList);




