// textContent
// innerText

// Hai thuộc tính textContent và innerText đều dùng để lấy/đặt nội dung văn bản của một phần tử, 
// nhưng có những khác biệt quan trọng:


// textContent

// Lấy tất cả nội dung văn bản, kể cả text trong các thẻ ẩn (display: none)
// Lấy cả nội dung trong thẻ <script> và <style>
// Không tính đến CSS styling
// Nhanh hơn vì không cần tính toán layout
// Trả về văn bản "thô" như trong HTML

// innerText

// Chỉ lấy văn bản hiển thị trên màn hình
// Bỏ qua các phần tử ẩn (display: none, visibility: hidden)
// Tính đến CSS styling
// Chậm hơn vì phải tính toán rendering
// Trả về văn bản như người dùng nhìn thấy
// Giữ lại format xuống dòng (line breaks)

const title = document.querySelector("#title");

// title.textContent = `<span>Hello Cuong Vu</span>`;

// console.log(title.textContent);
// console.log(title.innerText);

// Điểm khác nhau

console.log(title.textContent); //         Hello Cuong Vu         (có khoảng trắng => giữ lại)

// Khi css sử dụng display: none <span>Hello</span> Cuong Vu (thẻ span vị none)

// result:     Hello Cuong Vu (textContent vẫn hiển thị Hello)


console.log(title.innerText); // Hello Cuong Vu (có khoảng trắng => không giữ lại)

// Khi css sử dụng display: none <span>Hello</span> Cuong Vu (thẻ span vị none)

// result: Cuong Vu (innerText không hiển thị thẻ bị display: none)