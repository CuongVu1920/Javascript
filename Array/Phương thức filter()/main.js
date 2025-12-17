// #Phương thức filter

/**
 * - Phương thức filter() tạo 1 mảng mới chứa tất cả các phần tử thỏa mãn điều kiện. Phương thức này không thay đổi mảng gốc mà chỉ
 *   trả về một mảng mới.
 * 
 * - Cú pháp: let newArray = array.filter(callbackFunction, thisValue);
 */

// VD:
    let numbers = [-1, -2, 3, 4, 5, 6];

    // Lọc tất cả các phần tử chẵn
    let result = numbers.filter(function(number) {
      return number % 2 == 0;
    })

    console.log(result);

    // lọc số nguyên dương

    let result2 = numbers.filter(number => {
      return number > 0;
    })

    console.log(result2);

// VD2: Lọc - lấy ra phần tử không trùng lặp

  let items = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "orange"
  ];

  let result3 = items.filter((item, index, arr) => {
    return arr.indexOf(item) === index;
  })

  console.log(result3);
  
    
    