// HTML DOM (Document Object Model) - mô hình thể các phần tử HTML dưới dạng đối tượng

// 1. Khái niệm Node trong HTMLNode trong HTML là đơn vị cơ bản trong DOM (Document Object Model), 
// đại diện cho mọi thành phần của tài liệu HTML. Mọi thứ trong HTML đều là node, bao gồm elements, text, comments, và nhiều loại khác.

// console.log(document);

// Element node
// Attribute node
// Text node


// Lưu ý khi lấy phần tử trong DOM 

// document.getElementById('elementId');

const h1 = document.getElementById('heading');

h1.innerText = "Hello Cuong Vu";


/**
 * Note: 
 *  - khi có 2 cái id trùng nhau thì nó sẽ trả về phần tử đầu tiên
 *  - document.getElementById('elementId'); trả về đối tượng chứa id của phần tử đó, không tìm được sẽ trả về null
 *  - chính cái nội dung của id sẽ tạo ra đối tượng mà chứa id đó
 */
