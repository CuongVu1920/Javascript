// Closure

/**
 * Closure là gì?
 *  - Closure là một hàm "nhớ" được các biến từ môi trường xung quanh nó, ngay cả khi môi trường đó đã kết thúc.
 *  - giống như bạn đi học xa nhà nhưng vẫn nhớ được mật khẩu wifi nhà mình. Dù đã rời khỏi nhà (môi trường cũ), bạn vẫn giữ được thông tin đó
 */

// Ví dụ về Closure

function createCounter() {
    let count = 0; // Biến count được tạo ra trong môi trường của createCounter
    
    return function() { // Hàm này là một closure, nó "nhớ" biến count
        count++; // Tăng giá trị của count mỗi khi hàm được gọi
        console.log(count); // In ra giá trị hiện tại của count
    };
}

const counter = createCounter(); // Tạo một instance của counter

counter(); // In ra: 1
counter(); // In ra: 2
counter(); // In ra: 3

/**
 * Trong ví dụ trên, hàm trả về từ createCounter là một closure vì nó "nhớ" biến count. 
 * Mỗi lần gọi counter(), nó vẫn có thể truy cập và thay đổi giá trị của count, mặc dù createCounter đã hoàn thành thực thi.
 */

/**
 * - Closure là đặc tính tự nhiên và bắt buộc của tất cả các hàm trong Js - mỗi khi tạo hàm, Js engine tự động tạo closure chứa tất cả scope 
 *   mà hàm có thể truy cập. Bạn không thể tắt hoặc can thiệp vào cơ chế này, chỉ có thể hiểu và vận dụng nó một cách thông minh.
 * - Ngay cả hàm đơn giản nhất cũng có closure chứa ít nhất là global scope, 
 *   vì vậy closure là một phần không thể tách rời của cách hoạt động của hàm trong JavaScript.
 */
