// document.createElement()

const div = document.createElement("div");

div.innerHTML = "<h1>Hello Cuong vu</h1>";

console.dir(div);

const body = document.querySelector("body");

console.log(body);

body.appendChild(div)

const parent = document.getElementById('parent');

parent.appendChild(div)

// parent.removeChild(div)


// Note:

// ####Dùng innerHTML####

// const container = document.querySelector('#app');

// container.innerHTML = `
//   <div class="card">
//     <h2>Tiêu đề</h2>
//     <p>Nội dung</p>
//   </div>
// `;

// ###########Dùng createElement:

const container = document.querySelector('#app');

const card = document.createElement('div');
card.className = 'card';

const title = document.createElement('h2');
title.textContent = 'Tiêu đề';

const text = document.createElement('p');
text.textContent = 'Nội dung';

card.appendChild(title);
card.appendChild(text);
container.appendChild(card);




// So sánh ưu nhược điểm

// 2. Ưu điểm của innerHTML
// ✅ Ngắn gọn, dễ đọc - Viết HTML như bình thường
// ✅ Nhanh hơn khi tạo nhiều elements cùng lúc
// ✅ Trực quan - Nhìn thấy cấu trúc HTML rõ ràng

// 3. Nhược điểm của innerHTML
// ❌ BẢO MẬT - Dễ bị tấn công XSS nếu chèn dữ liệu từ user:

// // NGUY HIỂM!
// const userInput = '<img src=x onerror="alert(\'Hacked!\')">';
// container.innerHTML = userInput; // Code độc được thực thi

// ❌ Mất event listeners:

// const btn = document.querySelector('#myBtn');
// btn.addEventListener('click', () => alert('Click!'));

// // Sau khi dùng innerHTML, event listener bị mất
// container.innerHTML = '<button id="myBtn">New Button</button>';
// // Click button không còn hoạt động!

// ❌ Hiệu năng kém khi cập nhật nhỏ:

// Browser phải parse lại toàn bộ HTML
// container.innerHTML += '<li>Item mới</li>';

// ✅4. Ưu điểm của createElement

// ✅ AN TOÀN hơn - Không bị XSS:
// const p = document.createElement('p');
// p.textContent = userInput; // Tự động escape HTML

// ✅ Giữ được event listeners
// ✅ Hiệu năng tốt khi thêm/sửa ít elements
// ✅ Kiểm soát tốt hơn - Có thể thao tác từng element



// 5. Khi nào dùng cái nào?
// Dùng innerHTML khi:

// Tạo HTML tĩnh, không có dữ liệu từ user
// Cần tạo nhiều elements cùng lúc
// Code đơn giản, không cần event listeners

// Dùng createElement khi:

// Làm việc với dữ liệu từ user (form, API...)
// Cần giữ event listeners
// Cần thao tác, cập nhật elements thường xuyên
// Ưu tiên bảo mật

// 6. Giải pháp kết hợp

// Dùng template literals + createElement
const createCard = (title, content) => {
  const card = document.createElement('div');
  card.className = 'card';
  
  // An toàn vì textContent tự escape HTML
  card.innerHTML = `
    <h2>${title}</h2>
    <p>${content}</p>
  `;
  
  return card;
};