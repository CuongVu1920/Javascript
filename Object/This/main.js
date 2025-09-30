// Từ khóa this là gì ?

/**
 * This là một từ khóa trong javascript, tham chiếu đến đối tượng mà nó thuộc về. giá trị của this phụ thuộc vào ngữ cảnh mà nó được sử dụng.
 * nghĩa là nó có thể thay đổi tùy thuộc vào cách mà function chứa nó đuợc gọi.
 */

// Ví dụ 1: Sử dụng this tham chiếu tới đối tượng mà nó thuộc về

const person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log(this);
  },
  info: {
    name: "Info",
    getName: function() {
      console.log(this);
    }
  }
};

person.greet(); // Output: { name: 'John', age: 30, greet: [Function: greet], info: { name: 'Info', getName: [Function: getName] } }

person.info.getName(); // Output: { name: 'Info', getName: [Function: getName] }


// Ví dụ 2:

const person2 = {
  name: "Alice",
  age: 25,
 getFullName: function() {
    return this.name + " Smith";
  }
};

console.log(person2.getFullName()); // Output: Alice Smith


// Tại sao phải sử dụng this

/**
 * Sử dụng this giúp code trở nên linh hoạt và tái sử dụng được trong các ngữ cảnh khác nhau.
 * Nó cho phép các phương thức và hàm hoạt động trên các đối tượng khác nhau mà không cần phải hardcode tên đối tượng cụ thể.
 */