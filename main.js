function sendRequest(method, url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.send();
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 400) {
      if (typeof callback === 'function') {
          callback(xhr.responseText);
      }
    }
  }
};

console.log("JS loaded");

const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const productList = document.querySelector(".product-list");

// console.log(productList);


sendRequest("GET", './partials/header.html', (responseText) => {
  header.innerHTML = responseText;
})

sendRequest("GET", './partials/footer.html', (responseText) => {
  footer.innerHTML = responseText;
})

sendRequest("GET", 'https://api01.f8team.dev/api/products', (responseText) => {
  const products = JSON.parse(responseText).data.items;
  console.log(products);
  
  products.forEach((product) => {
    const li = document.createElement('li');
    li.textContent = product.title;


    productList.appendChild(li);
  });
  
})










// XHR - XMLHttpRequest
// const xhr = new XMLHttpRequest();

// cấu hình => xhr.open("GET", './partials/header.html', true) // false - gửi yêu cầu đồng bộ, true - bất đồng bộ (Với việc gọi)

/**
 * nếu là false, chạy đồng bộ thì có thể "console.log(xhr.responseText);" ra dữ liệu luôn
 * nếu là false, chạy bất đồng bộ thì có thể "console.log(xhr.responseText);" không ra dữ liệu luôn
 *  - phải dùng phương thức xhr.onload = function() {
 *      console.log(xhr.responseText);
 *  }
 *  - Hàm xhr.onload dùng để xử lý dữ liệu khi request hoàn tất thành công.
 *  - 
 * 
 */

// để gọi => xhr.send();



// Vì bạn đang dùng xhr.open("GET", './partials/header.html', true) với tham số true (chạy bất đồng bộ), 
// nên:

// xhr.send() gửi request nhưng không chờ kết quả trả về
// Code tiếp tục chạy (console.log(123) sẽ in ra trước)
// Khi server trả dữ liệu về → xhr.onload mới được gọi
// xhr.responseText chứa nội dung của file header.html
// Tóm lại: xhr.onload là callback để nhận và xử lý dữ liệu từ request bất đồng bộ. 
// Nếu dùng đồng bộ (false), bạn có thể lấy xhr.responseText ngay sau xhr.send() mà không cần onload.



/**
 *  Hàm xhr.onreadystatechange được gọi mỗi khi trạng thái của request thay đổi.
 *  Khác biệt với onload:
 *  - onload: Chỉ chạy 1 lần khi request hoàn tất thành công
 *  - onreadystatechange: Chạy nhiều lần mỗi khi readyState thay đổi
 * 
 *  Các trạng thái readyState:
 *  - 0 - UNSENT: chưa gọi open()
 *  - 1 - OPENED: đã gọi open()
 *  - 2 - HEADERS_RECEIVED: đã nhận headers 
 *  - 3 - LOADING: đang tải dữ liệu
 *  - 4 - DONE: hoàn tất
 * 
 *  Cách sử dụng đúng
 *    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr.responseText); // Chỉ xử lý khi hoàn tất và thành công
        }
}
 */