// Phương thức bind

/**
 * - phương thức bind tạo ra một hàm mới mà khi được gọi, từ khóa this sẽ được tham chiếu bởi đối tượng đã cho.
 *  - bind() không gọi hàm ngay lập tức mà trả về một hàm mới với this đã được thiết lập sẵn.
 * - Cú pháp:
 *    const newFunc = oldFunction.bind(thisArg[, arg1[, arg2[, ...]]]);
 */

 // VD1: 
  const person1 = {
    firstName: 'John',
    greet: function(greeting) {
      console.log(`${greeting}, my name is ${this.firstName}`)
    }
  };

  const greetJohn = person1.greet.bind(person1, 'Hello')

  greetJohn();

 // VD2:

    const person2 = {
      firstName: "John",
      lastName: "Doe",
      fullName: function() {
        return this.firstName + " " + this.lastName;
      }
    }

    const member = {
      firstName: "Jane",
      lastName: "Smith"
    }

    // Tạo hàm mới với context cố định
    const getMemberName = person2.fullName.bind(member);
    getMemberName(); // "Jane Smith"

 /**
  * phương thức bind rất hữu ích khi bạn cần một hàm luôn được gọi với cùng một giá trị của this, đặc biệt trong các trường hợp như:
  *  - chỉ định rõ ràng ngữ cảnh "this" cho hàm. 
  *  - "Mượn" các phương thức từ đối tượng khác. 
  */


