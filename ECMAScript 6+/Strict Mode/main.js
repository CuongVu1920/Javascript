// 'use strict'; // phải ở đầu file


/**
 * Tại sao cần Strict Mode?
 * Strict Mode giúp chúng ta viết code an toàn hơn, tránh được những lỗi không mong muốn.
 * Nó giúp phát hiện lỗi sớm hơn, dễ dàng debug và bảo vệ mã nguồn của chúng ta khỏi những hành vi không mong muốn.
 * Ngoài ra, Strict Mode còn giúp cải thiện hiệu suất của mã nguồn bằng cách loại bỏ một số tính năng không cần thiết.
 * 
 * Ví dụ: không sử dụng Strict Mode.
 * 
 *      x = 10; // Không khai báo biến, sẽ tạo ra biến toàn cục
 *      console.log(x); // 10
 * 
 * Ví dụ: sử dụng Strict Mode.
 * 
 *     'use strict';
 *     x = 10; // Lỗi: x is not defined
 *     console.log(x);
 * 
 * Như vậy, khi sử dụng Strict Mode, chúng ta sẽ nhận được lỗi 
 * ngay lập tức khi cố gắng sử dụng một biến chưa được khai báo, giúp chúng ta phát hiện 
 * lỗi sớm hơn và tránh được những vấn đề không mong muốn trong mã nguồn của mình.
 */

// Những cạm bẫy phổ biến trong JS thông thường

name = 'John'; // Không khai báo biến, sẽ tạo ra biến toàn cục
console.log(name); // John

function foo() {
    bar = 'Hello'; // Không khai báo biến, sẽ tạo ra biến toàn cục
}

// foo();
// console.log(bar); // Hello

// this; 
// Trong Strict Mode, this sẽ trả về undefined, trong khi không sử dụng Strict Mode, 
// this sẽ trả về đối tượng global (window trong trình duyệt)

// function test(a, a) { // Tham số trùng - không báo lỗi
//     return a;
// }

// Vấn đề: Code vẫn chạy được nhưng logic sai, khó debug, dễ gây rò rỉ bộ nhớ

// Cách bật Strict Mode

// #Trong file JS thông thường


let userName = 'Alice';

// # Trong function cụ thể

function oldCode() {
    x = 1; // Vẫn tạo ra biến toàn cục
}

function newCode() {
    'use strict';
    x = 1; // Lỗi: x is not defined
}

newCode(); // Lỗi: x is not defined

