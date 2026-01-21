const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const button = document.querySelector('#button');

parent.addEventListener('click', function(event) {
  // console.log(event);
  console.log("parent clicked");
  
  
});

child.addEventListener('click', function(event) {
  
  // console.log(event);
  console.log("child clicked");
});

button.addEventListener('click', function(event) {
  event.stopPropagation();
  // console.log(event);
  console.log("button clicked");
});

// Sự kiện nổi bot (Event bubbling) là gì?
/**
 * Sự kiện nổi bọt (Event bubbling) là một cơ chế trong DOM (Document Object Model) của trình duyệt web, 
  trong đó sự kiện được kích hoạt trên một phần tử con sẽ "nổi bọt" lên các phần tử cha của nó trong cây DOM. 
  Điều này có nghĩa là khi bạn nhấp vào một phần tử con, sự kiện sẽ được xử lý trước tiên trên phần tử con đó, 
  sau đó sẽ được truyền lên phần tử cha và tiếp tục lên các phần tử cha khác cho đến khi đạt đến gốc của cây DOM.
 */

// Ví dụ: Khi bạn nhấp vào một nút bên trong một thẻ div, sự kiện click sẽ được xử lý trước tiên trên nút,
// sau đó sẽ nổi bọt lên thẻ div và cuối cùng lên tài liệu gốc (document).

// Lợi ích của sự kiện nổi bọt:
/**
 * 1. Quản lý sự kiện dễ dàng hơn: Bạn có thể gán một trình xử lý sự kiện cho một phần tử cha thay vì gán cho từng phần tử con.
 * 2. Tăng hiệu suất: Giảm số lượng trình xử lý sự kiện cần thiết, giúp cải thiện hiệu suất của trang web.
 * 3. Tính linh hoạt: Cho phép bạn dễ dàng thêm hoặc loại bỏ các phần tử con mà không cần phải thay đổi mã xử lý sự kiện.
 */

// Tóm lại, sự kiện nổi bọt là một cơ chế quan trọng trong DOM giúp quản lý sự kiện hiệu quả và linh hoạt hơn trong các ứng dụng web.