// # Phương thức map()

/**
 * - phương thức map() trả về một mảng mới từ mảng hiện tại bằng cách áp dụng một hàm cho mỗi phần tử của mảng ban đầu, mỗi phần tử tương
 *   ứng trong mảng mới được trả về bởi callback. Phương thức này không thay đổi mảng hiện tại mà trả về một mảng mới.
 * 
 * Cú pháp:
   let newArray = array.map(callbackFunction(element, index, array) {
        // Trả về giá trị mới cho mỗi phần tử trong mảng mới
    }, thisValue);
 */ 

  // VD

  const numbers = [1, 2, 3, 4];

  const result = numbers.map(num => num * 2);
  console.log(result); //(4) [2, 4, 6, 8]

  // => Phương thức map được sử dụng khi bạn muốn chuyển đổi các giá trị trong một mảng mà không làm thay đổi mảng gốc.

  // Các cách làm việc với map

    // Chuyển đổi một mảng số thành một mảng chuỗi

    const numbers2 = [1, 2, 3];

    const result2 = numbers2.map(String);

    console.log(result2); // (3) ["1", "2", "3"]

    // Tính giá sau thuế cho mỗi mặt hàng

    const prices = [100, 150, 200];
    const taxRate = 0.1; // 10%

    const result3 = prices.map(price => price + price* taxRate);

    console.log(result3); // (3) [110, 165, 220]

    // Tạo các phần tử HTML từ một mảng dữ liệu

    const items = ['Apple', 'Banana', 'Orange'];

    const result4 = items.map(item => `<li>${item}</li>`);
  
    const html = `<ul>${result4.join('')}</ul>`;

    console.log(html); // <ul><li>Apple</li><li>Banana</li><li>Orange</li></ul>


    // Tạo ra một mảng chứa tên các người dùng

    const users = [
      { name: "Alice", age: 22 },
      { name: "Bob", age: 24 },
      { name: "John", age: 26 }
    ];

    const names = users.map(user => user.name);

    console.log(names); // (3) ["Alice", "Bob", "John"]
    
    
    


  