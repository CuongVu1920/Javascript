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
  
  
// -- Phương thức flat() --

  /**
   * Phương thức flat() được sử dụng để làm phẳng mảng lồng nhau thành một mảng duy nhất. Bạn có thể chỉ định mức độ làm phẳng bằng cách
   * cung cấp một tham số cho phương thức này.
   * 
   * - Cú pháp: let newArray = oldArray.flat(depth);
   *  
   * + dept: là mức độ làm phẳng, mặc định là 1. Để làm phẳng tối đa mảng, sử dụng "Infinity"
   */

  // VD:

    let arr = [1, 2, [3, 4, [5, 6]]];

    let flatArray = arr.flat(2);

    console.log(flatArray); // (6) [1, 2, 3, 4, 5, 6]