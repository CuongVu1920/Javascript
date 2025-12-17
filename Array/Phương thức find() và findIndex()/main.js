// #Phương thức find()

/**
 * - phương thức find() được sử dụng để tìm phần tử đầu tiên trong mảng thỏa mãn một hàm kiểm tra nhất định.
 *   Nếu không có phần tử nào thỏa mãn, phương thức này trả về "undefined".
 * - Khi nào sử dụng: hữu ích khi bạn cần tìm một phần tử duy nhất trong mảng thỏa mãn một điều kiện nhất định,
 *   ví dụ tìm người dùng có tuổi 18 trong danh sách.
 * 
 * - Cú pháp: const foundElement = array.find(callbackFunction, thisValue);
 */

// Ví dụ:

  const numbers = [4, 10, 18, 5, 24, 78];
  const result = numbers.find(function(number) {
    return number >  10;
  });

  console.log(result);
  

// VD Tìm người dùng đầu tiên có tuổi trên 21

const users = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 22 },
  { name: "Carol", age: 19 }
];
const result2 = users.find(user => user.age > 21);

console.log(result2);

// VD Tìm sản phẩm đầu tiên có giá dưới 50$

const products = [
  { name: "Toaster", price: 100 },
  { name: "Blender", price: 45 },
  { name: "Kettle", price: 60 }
];
const result3 = products.find(product => product.price < 50);

console.log(result3);


// #Phương thức findLast()

/**
 * - Phương thức findLast() tìm phần tử đầu tiên tính từ 
 *   cuối mảng thỏa mãn hàm kiểm tra đã cho. Nếu không tìm thấy phần tử nào, nó trả về undefined.
 * 
 * - findLast() hoạt động tương tự như find(), điểm khác biệt duy nhất là tìm kiếm bắt đầu từ cuối mảng trở về đầu mảng.
 */


// VD Tìm bài viết cuối cùng được viết bởi tác giả “John Doe”

  const articles = [
    { title: "Summer Vacations", author: "Jane Doe" },
    { title: "Winter Festivals", author: "John Doe" },
    { title: "Autumn Recipes", author: "John Doe" }
  ];
  const result4 = articles.findLast(article => article.author === "John Doe");
  console.log(result4);


// #Phương thức findIndex()

/**
 * - Phương thức findIndex() trả về chỉ mục của phần tử đầu tiên trong mảng thỏa mãn hàm kiểm tra cung cấp.
 *   Nếu không có phần tử nào thỏa mãn, nó trả về -1.
 * - Khi nào sử dụng: cực kỳ hữu ích khi bạn cần biết vị trí của một phần tử thỏa mãn điều kiện nhất định trong mảng để có thể sử dụng
 *   ví trí đó cho các mục đích khác, như xóa hoặc thay thế phần tử.
 * 
 * - Cú pháp: const foundIndex = array.findIndex(callbackFunction, thisValue);
 */
  
// Ví dụ:

  const numbers5 = [4, 10, 18, 5, 24, 78];
  const result5 = numbers.findIndex(num => num > 10);

  console.log(result5); // 2

// VD Tìm chỉ mục của sản phẩm đầu tiên có tồn kho dưới 10 đơn vị

const inventories = [
  { product: "Pen", stock: 15 },
  { product: "Notebook", stock: 8 },
  { product: "Eraser", stock: 20 }
];

const result6 = inventories.findIndex(inven => inven.stock < 10);

console.log(result6); // 1;

// Phương thức findLastIndex là gì?
// findLastIndex() là phương thức tìm chỉ mục của phần tử đầu tiên tính từ cuối mảng thỏa mãn một hàm kiểm tra. 
// Giống như findIndex, nếu không tìm thấy phần tử nào, phương thức này trả về -1.


  

