// Pass by value (truyền theo giá trị)

/**
 * 1. Khi truyền giá trị của 1 biến vào 1 hàm thì sẽ sao chép giá trị của biến: let y = x;
 * 2. Truyền bản sao vào bên trong hàm
 * #Đặc điểm: gán lại tham số trong hàm, không làm thay đổi biến ngoài hàm
 * 
 */
// Pass by reference (truyền theo tham chiếu)

/**
 * - Truyền trực tiếp tham chiếu của biến vào bên trong hàm.
 * # Đặc điểm: gán lại tham số trong hàm, ngay lập tức biến ngoài hàm cũng bị thay đổi
 * 
 */

function changeValue(y) {
  // y = { name: "Cuong"};
  y.name = "Cuong";
}

let x = {
  name: "John"
};

changeValue(x);

console.log(x);

