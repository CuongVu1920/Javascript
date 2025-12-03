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


 // Phương thức call 

    /**
     * - phương thức call tương tự như bind ở điểm chỉ định ngữ cảnh this, call khác bind ở điểm thay vì trả về một hàm mới
     *   thì call sẽ thực hiện gọi hàm ngay.
     * 
     * - Cú pháp:
     *    myFunction.call(thisArg, [, arg1[, arg2[, ...]]]);
     */

    
  // VD1:

      function introduce(greeting, punctuation) {
          console.log(`${greeting}, tên của tôi là ${this.firstName}${punctuation}`);
      }

      const person = { firstName: 'Cuong' };

      introduce.call(person, "Xin chào", "!");

  // VD2:

      function isObject(value) {
        return Object.prototype.toString.call(value) === '[object Object]';
      };

      // const obj = { something: 'value.. '};

      // console.log(obj.toString()); // [object Object]
      

      console.log(isObject(123)); // false
      console.log(isObject({name: "John"})); // true
      console.log(isObject(null)); // false

  // Phương thức apply
   
    /**
     * - tương tự như call, điểm khác là apply nhận các đối số dưới dạng một mảng
     * - Cú pháp: 
     *    myFunction.apply(thisArg, [argsArray]);
     */

  
  // VD1:

      function introduce(greeting, punctuation) {
          console.log(`${greeting}, my name is ${this.firstName}${punctuation}`);
      }

      const person3 = { firstName: 'Huyen' };

      introduce.apply(person3, ['Hi', '.']);

    /**
     * Note:
     *   - bind(): không gọi hàm, copy ra hàm mới, bind sẵn các giá trị cho tham số của hàm. (bind() không chỉ thay đổi this, mà còn có thể "khóa sẵn" một số tham số cho hàm.)
     *   - call(): gọi hàm ngay, truyền đối số cách nhau bằng dấu (,)
     *   - apply(): gọi hàm ngay, truyền đối số dưới dạng một mảng
     * 
     *  => 
     *   - Cả 3 thằng đều chỉ định "this" sẽ tham chiếu tới đối tượng cụ thể
     *   - Đề không sử dụng được với Arrow function
     */

     // VD: bind sẵn các giá trị cho tham số của hàm.
     
      function cong(a, b, c) {
        return a + b + c;
      }

      // Bind sẵn tham số đầu tiên = 10
      const congVoi10 = cong.bind(null, 10);

      congVoi10(5, 3);  // 10 + 5 + 3 = 18
      congVoi10(2, 1);  // 10 + 2 + 1 = 13

      // Bind sẵn 2 tham số đầu
      const congVoi10Va5 = cong.bind(null, 10, 5);

      congVoi10Va5(3);  // 10 + 5 + 3 = 18
      congVoi10Va5(7);  // 10 + 5 + 7 = 22
    

    // VD2:

      function chaoHoi(loiChao, dau) {
        return `${loiChao}, ${this.ten}${dau}`;
      }

      const nguoi = { ten: 'An' };

      // Bind this và tham số đầu
      const chaoAn = chaoHoi.bind(nguoi, 'Xin chào');

      chaoAn('!');   // 'Xin chào, An!'
      chaoAn('?');   // 'Xin chào, An?'

      // Bind cả 2 tham số
      const xinChaoAn = chaoHoi.bind(nguoi, 'Xin chào', '!');

      xinChaoAn();   // 'Xin chào, An!'




