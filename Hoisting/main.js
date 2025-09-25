// Hoisiting - đưa khai báo biến lên đầu phạm vi

// function (declared function) được hoisting
// var, let, const (variable) được hoisting

// Ví dụ 1: Hoisting với function

greeting(); // Xin chào

function greeting() {
    console.log("Xin chào"); 
}   

/**
 * Kết quả thực tế là: hàm greeting được đưa lên đầu phạm vi
 * function greeting() {
 *      console.log("Xin chào");
 * }
 * greeting();
 */

// Ví dụ 2: Hoisting với var

console.log(age); // undefined

var age = 18;   // undefined vì var được hoisting lên đầu phạm vi nhưng mà hoisting chỉ đưa khai báo lên đầu phạm vi chứ không đưa giá trị lên

/**
 * vì var được hoisting (đưa lên đầu phạm vi) nên kết quả trả về là undefined
 */

// Ví dụ 3: Hoisting với let, const

console.log(month);

let month = 12; // ReferenceError: Cannot access 'month' before initialization

// vì let, const được hoisting (đưa lên đầu phạm vi) nhưng nó lưu vào một vùng gọi là Temporal 
// Dead Zone (TDZ) nên khi truy cập vào biến month trước khi khởi tạo sẽ báo lỗi ReferenceError

// Ví dụ 4: Hoisting trong phạm vi hàm và phạm vi toàn cục

var fullName = "Nguyễn Văn A"; // Biến toàn cục
console.log(fullName); // Nguyễn Văn A

function getName() {
    console.log(fullName); // undefined vì biến fullName trong hàm được hoisting lên đầu hàm
    var fullName = "Trần Thị B";    
    console.log(fullName); // Trần Thị B
}

getName();

// Ví dụ 4.1

function run() {
    function sum(a, b) {
        return a + b;
    }

    return sum(2, 3);
 }


const result = run();
console.log(result); // 5


// Ví dụ 4.2

function run2() {
    greeting();

    function greeting() {
        console.log("Xin chào");
    }
}

run2(); // Xin chào
greeting(); // ReferenceError: greeting is not defined

// Vì hàm greeting được khai báo trong phạm vi hàm run2 nên nó chỉ có thể được gọi bên trong hàm run2 mà thôi
// Gọi hàm greeting bên ngoài hàm run2 sẽ báo lỗi ReferenceError: greeting is not defined

// Ví dụ 5: Hoisting trong expression function

sayeHello(); // TypeError: sayeHello is not a function

var sayeHello = function() {
    console.log("Hello");
}

sayeHello(); // Hello

/**
 * Kết quả thực tế:

 * var sayeHello; // biến sayeHello được hoisting lên đầu phạm vi với giá trị là undefined
 * sayeHello(); // TypeError: sayeHello is not a function vì sayeHello hiện tại là undefined
 * sayeHello = function() {
 *     console.log("Hello");
 * }
 * sayeHello(); // Hello
 */