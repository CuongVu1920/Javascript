// -- Phương thức concat() --

/**
 * - Phương thức concat() được sử dụng để nối 2 hoặc nhiều mảng lại với nhau và trả về một mảng mới mà không làm thay đổi các 
 *   mảng ban đầu.
 * 
 * - Cú pháp: let newArray = array1.concat(array2, array3, ..., arrayX);
 * - Phương thức concat() hữu ích khi bạn cần tạo ra một mảng mới từ các mảng hiện có mà không muốn thay đổi mảng gốc.
 */

// VD1:

  let fruits = ['apple', 'banana'];
  let vegetables = ['carrot', 'pea'];

  let combined = fruits.concat(vegetables);
  console.log(combined); // (4) ['apple', 'banana', 'carrot', 'pea']
  
  
