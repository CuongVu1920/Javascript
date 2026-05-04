/**
 * Import tĩnh:
 *  
 * - Cú pháp: import { exportName } from 'module-name';
 * - Thường đặt ở đầu file, trước bất kỳ mã nào khác.
 * - Luôn tải module ngay khi chương trình bắt đầu chạy
 *  - Không thể đặt trong if, vòng lặp hoặc bên trong hàm
 *  - Ưu điểm:
 *      - Dễ đọc và hiểu cấu trúc của module
 *      - Hỗ trợ tree shaking (loại bỏ mã không sử dụng) trong quá trình build
 *  - Nhược điểm:
 *     - Không linh hoạt, không thể tải module theo điều kiện hoặc khi cần thiết
 *  - Ví dụ:
 *     import { add } from './math.js';
 * 
 *  Import động:
 * 
 * - Cú pháp: import('module-name').then(module => { ... });
 * - Chỉ tải khi code chạy đến dòng này
 * - Có thể dùng ở bất kỳ đâu: trong hàm, sự kiện click, xử lý đặc biệt
 * - giúp giảm dung liuowngj tải ban đầu và tăng tốc độ load trang
 */


const button = document.getElementById("button");

button.addEventListener("click", () => {
    import("./utils/math.js").then(module => {
        console.log(module);
        console.log(module.PI);
        console.log(module.add(2, 3));
    });
});



