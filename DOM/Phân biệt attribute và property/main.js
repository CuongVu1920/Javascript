const h1 = document.querySelector("h1");

console.log(h1.title);

// - Attribute (thuộc tính của cái thẻ) - mang tính tĩnh (không thay đổi ) - Dữ liệu khởi tạo cho phần tử
// - Property (thuộc tính của object) - mang tính động (sự thay đổi)       - Dữ liệu hiện tại của phần tử

/**
 * Note: 
 *  - sửa property có thể sửa attribute, và ngược lại (không phải trường hợp nào cũng v)
 */

// VD1:

h1.title = "New title"; // sửa property và do attribute đồng bộ với property nên attribute trong DOM bị thay đổi theo

// VD2:

const email = document.querySelector("#email");

console.log(email); // input#email

// email.value => là property

// email.value = 'nguyenvana@gmail.com' → bạn đang thay đổi PROPERTY, còn ATTRIBUTE thì KHÔNG thay đổi. (<input type="email" id="email" value="abc@gmail.com">)


// email.setAttribute("value", "cuongvu@gmail.com") -> thay đổi ATTRIBUTE thì PROPERTY cũng thay đổi


// Trường hợp 1: Chưa có tương tác nào

// const email = document.querySelector('input');

// // Ban đầu
// console.log(email.getAttribute('value')); // "old@gmail.com"
// console.log(email.value);                  // "old@gmail.com"

// // Set attribute → Property TỰ ĐỘNG cập nhật
// email.setAttribute('value', 'cuongvu@gmail.com');

// console.log(email.getAttribute('value')); // "cuongvu@gmail.com" ✅
// console.log(email.value);                  // "cuongvu@gmail.com" ✅

// #Trường hợp 2: Đã thay đổi property trước đó

// const email = document.querySelector('input');

// // Bước 1: Thay đổi PROPERTY trước
// email.value = 'user-typed@gmail.com';

// console.log(email.getAttribute('value')); // "old@gmail.com" (không đổi)
// console.log(email.value);                  // "user-typed@gmail.com"

// // Bước 2: Bây giờ thử set ATTRIBUTE
// email.setAttribute('value', 'cuongvu@gmail.com');

// console.log(email.getAttribute('value')); // "cuongvu@gmail.com" ✅ Attribute đổi
// console.log(email.value);                  // "user-typed@gmail.com" ❌ Property KHÔNG đổi!

// Tại sao lại như vậy?
// Khi input đã bị "dirty" (property đã thay đổi qua user input hoặc JavaScript), trình duyệt sẽ:

// Ngắt kết nối giữa attribute value và property value
// Property value bây giờ độc lập, không còn sync với attribute nữa
// Attribute chỉ còn vai trò lưu "giá trị mặc định" cho form.reset()

// giải thích ở note 2.0