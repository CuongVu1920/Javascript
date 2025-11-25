// Built-in Javascript Constructors: các hàm tạo có sẵn

// Các kiểu dùng nhiều: String, Number, Boolean, Array, Object, Function, v.v

/**
 *  - Ép kiểu: String(x), Number(x), Boolean(x)
 *  - Làm việc với array, object: Array, Object
 *      -- Array.isArray(x), x instanceof Array,...
 *      -- Object.assgin(x, y), Object.keys(x), Object.value(x), v.v
 *  - Function: Tạo hàm động (tạo hàm từ chuỗi)
 * 
 *  - null, undefined: không có hàm tương ứng
 *  - BigInt, Symbol: có hàm, không phải constructor:
 */

// console.log(new BigInt); // BigInt is not a constructor

// let str = new String("Hello");
// let num = new Number(123);
// let arr = new Array(1, 2, 3);
// let obj = new Object();
// let func = new Function("x", "y", "return x + y");

// Wrapper object (boxing) => nghĩa là giá trị nguyên thủy "Hello" đang được bao bọc bởi object
let str = new String('Hello');

console.log(str);

