// Execution Context (ngữ cảnh thực thi)

// 1. Global Execution context
var firstName = "Cuong";
let lastName = "Vu";
const age = 18;

function add(a, b) {
    const sum = a + b;
    return sum;
}

// 2. function execution context
const result1 = add(1, 2); // Function Execution Context #1
const result2 = add(2, 2); // Function Execution Context #2
const result3 = add(3, 2); // Function Execution Context #3


// 3. eval execution context

// Execution Context là môi trường mà code được thực thi, quản lý phạm vi biến, hàm, và giá trị this.

// JavaScript sử dụng Stack để quản lý các Execution Context: Global nằm dưới cùng, 
// mỗi lần gọi hàm sẽ đẩy Function Execution Context lên trên.
// Giúp phân biệt phạm vi biến, tránh xung đột và hỗ trợ tính năng như closure.

// Tóm lại, Execution Context giúp JavaScript xác định code nào đang chạy, biến nào có thể truy cập, 
// và quản lý quá trình thực thi một cách hiệu quả.


// ---------Execution context trong JavaScript gồm 3 thành phần chính------------:

/**
 * 1. Variable Enviroment (Môi trường biến): lưu trữ các biến, hàm, 
 *    và thông tin scope (var và function declarations)
 * 2. Lexcial Enviroment (môi trường từ vựng) 
 *  - Lưu trữ thông tin về phạm vi (scope) và môi trường liên hệ giữa các biến, 
 *    hàm với scope bên ngoài (biến let, const và function parameters - có tham số)
 * 3. This Binding:
 *      Xác định giá trị của từ khóa this trong execution context hiện tại.
 *  
 */