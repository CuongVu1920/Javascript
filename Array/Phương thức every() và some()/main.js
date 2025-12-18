// #Phương thức every()

/**
 * every() là một phương thức kiểm tra xem tất cả các phần tử của mảng có thỏa mãn điều kiện được cung cấp bởi một hàm kiểm tra hay không.
 * Nếu tất cả phần tử thỏa mãn điều kiện, phương thức trả về "true"; ngược lại, nó trả về "false";
 * 
 * - Cú pháp:
 *  const bool = array.every(callbackFunction(element, index, array) {
      // Điều kiện kiểm tra
    }, thisValue);
 */

  const ages = [18, 20, 25, 30];

  // Kiểm tra toàn bộ phần tử có từ 18 trở lên không
  const result = ages.every(age => age >= 18);

  console.log(result); // true

  // Phương thức every hữu ích khi bạn cần xác định liệu tất cả các phần tử trong một mảng có đáp ứng một tiêu chuẩn nhất định hay không.
  // Nó được dùng để đảm bảo tính nhất quán của dữ liệu trong một tập hợp.

  // # Ví dụ sử dụng every

    // VD1: Kiểm tra xem tất cả các sản phẩm trong giỏ hàng có sẵn trong kho không

    const products = [
      { name: "Apple", stock: 10 },
      { name: "Cherry", stock: 5 },
      { name: "Banana", stock: 0 }
    ];

    const result2 = products.every((product) => {
      return product.stock > 0;
    }) 

    console.log(result2); // false

    // VD2: Đảm bảo rằng tất cả thành viên trong một nhóm đều từ 18 tuổi.

    const members = [
      { name: "Bob", age: 10 },
      { name: "John", age: 20 },
      { name: "Alice", age: 18 }
    ];

    const result3 = members.every((member) => {
      return member.age >= 18;
    })

    console.log(result3); // false
    
    