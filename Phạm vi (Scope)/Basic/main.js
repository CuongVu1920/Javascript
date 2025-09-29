// #Phạm vi
/**
 *  Phạm vi (Scope) là khu vực code nơi một biến có thể được truy cập hoặc sử dụng. Hiểu về phạm vi bạn có thể phân biệt rõ ràng một biến
 *  hoặc hàm có thể truy cập và sử dụng ở những nơi nào trong code.
 */

// ##Phạm vi toàn cục (Global Scope)

/**
 * Một biến được khai báo ở ngoài mọi hàm và block (khối code) là một biến toàn cục. Nó có thể được truy cập và sử dụng từ 
 * bất kỳ đầu trong code, kể cả bên trong các hàm.
 */

// Ví dụ

// let globalVar = "Tôi là biến toàn cục";

// function showGlobalVar() {
//     console.log(globalVar); // Có thể truy cập biến toàn cục bên trong hàm
// }

// showGlobalVar(); // In ra: Tôi là biến toàn cục
// console.log(globalVar); // In ra: Tôi là biến toàn cục

// ##Phạm vi hàm (Function Scope)

/**
 * Trong Js, mỗi hàm tạo ra một phạm vi mới. Các biến được khai báo trong hàm (bao gồm các tham số của hàm) chỉ số
 * thể được truy cập trong phạm vi của hàm đó.
 */

// Ví dụ
function myFunction(param) {
    console.log(param); // In ra: Tôi là tham số
    let functionVar = "Tôi là biến trong hàm";
    console.log(functionVar); // In ra: Tôi là biến trong hàm
} 

myFunction("giá trị của param");
// console.log(functionVar); // Lỗi: functionVar is not defined

/**
 * Lưu ý: nếu đoạn code bên trên bị lỗi thì đoạn code bên dưới cũng sẽ không chạy được.
 */

//------------------------------------------------------------------------------------------------

// Ví dụ về 3 hàm lồng nhau

function hamOng() {
    let bienOng = "Biến trong hàm ông";
    console.log(bienOng); // In ra: Biến trong hàm ông
    
    function hamCha() {
        let bienCha = "Biến trong hàm cha";
        console.log(bienCha);
        
    
        function hamCon() {
            let bienCon = "Biến trong hàm con";
            console.log(bienCon);
        } 
        hamCon(); // In ra: Biến trong hàm con
        console.log(bienOng); // In ra: Biến trong hàm ông
        // console.log(bienCon); // Lỗi: bienCon is not defined
    }
    hamCha(); // In ra: Biến trong hàm cha    
}

hamOng();
// hamCha(); // Lỗi: hamCha is not defined

/**
 * Note: Trong trường hợp các hàm lồng nhau: hàm con có thể truy cập và sử dụng các biến được khai báo ở các hàm cha, 
         nhưng hàm cha không thể truy cập các biến được khai báo trong hàm con.
         Tương tự, hàm ông không thể truy cập các biến được khai báo trong hàm cha hoặc hàm con.
 */

// ##Phạm vi khối (Block Scope)

/**
 * Phạm vi khối có nghĩa là các biến được khai báo bên trong một khối code (thường là bên trong dấu ngoặc nhọn { } 
 * như trong if, for, while) chỉ có thể được truy cập và sử dụng bên trong khối đó.
 * Trong JavaScript, các biến được khai báo bằng từ khóa let hoặc const có phạm vi khối.
 */
 
// Ví dụ 1

if (true) {
    var blockVar = "Tôi là biến trong khối";
    console.log(blockVar); // In ra: Tôi là biến trong khối
}
// console.log(blockVar); // Lỗi: blockVar is not defined nếu dùng let hoặc const

// Ví dụ 2

function myFunction2() {
    if (true) {
        var blockVar2 = "Tôi là biến trong khối của hàm 2";
        console.log(blockVar2); // In ra: Tôi là biến trong khối của hàm
    }

    console.log(blockVar2); // In ra: Tôi là biến trong khối của hàm vì var không có phạm vi khối
}

myFunction2();
// console.log(blockVar2); // Lỗi: blockVar2 is not defined kể cả khi dùng var 
