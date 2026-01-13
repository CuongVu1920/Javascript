// Phân biệt outerHTML và innerHTML

// innerHTML - Nội dung bên trong:

// Chỉ lấy/thay đổi nội dung bên trong một phần tử
// Không bao gồm chính thẻ đó
// Khi gán giá trị mới, phần tử gốc vẫn giữ nguyên

// outerHTML - Toàn bộ phần tử:

// Lấy/thay đổi toàn bộ phần tử bao gồm cả chính thẻ đó
// Bao gồm cả thẻ mở, thẻ đóng và các thuộc tính
// Khi gán giá trị mới, phần tử gốc bị thay thế hoàn toàn

const div = document.getElementById('myDiv');

// innerHTML
console.log(div.innerHTML);
// Kết quả: "<p>Xin chào</p>"

// outerHTML
console.log(div.outerHTML);
// Kết quả: '<div id="myDiv" class="container"><p>Xin chào</p></div>'

// Thay đổi innerHTML - giữ nguyên thẻ div
div.innerHTML = '<span>Nội dung mới</span>';
// Kết quả: <div id="myDiv" class="container"><span>Nội dung mới</span></div>

// Thay đổi outerHTML - thay thế cả thẻ div
div.outerHTML = '<section>Phần tử mới</section>';
// Kết quả: <section>Phần tử mới</section>
// (thẻ div không còn tồn tại)

// Lưu ý quan trọng: Sau khi thay đổi outerHTML, biến tham chiếu ban đầu vẫn trỏ đến phần tử cũ (đã bị xóa khỏi DOM), 
// nên bạn cần lấy lại tham chiếu mới nếu muốn tiếp tục thao tác.


// VD2:

const parent = document.querySelector('#parent');

console.log(parent.innerHTML);
console.log(parent.outerHTML);


parent.innerHTML = "<i>Cuong Vu</i>";

{/* <div id="parent">
  <i>Cuong Vu</i>
</div> */}

parent.outerHTML = "<i>Cuong Vu</i>"

{/* <i>Cuong Vu</i> */}