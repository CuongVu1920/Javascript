const html = document.documentElement; // Lấy phần tử <html> || querySelector('html')

console.log("html.scrollTop:", html.scrollTop); // Lấy vị trí cuộn dọc hiện tại của trang (tính từ đầu trang)
console.log("html.scrollLeft:", html.scrollLeft); // Lấy vị trí cuộn ngang hiện tại của trang (tính từ đầu trang)

console.log("html.clientHeight:", html.clientHeight); // Chiều cao hiển thị của trang (không bao gồm phần cuộn) tính từ phần tử <html> 
                                                      // tới mép dưới của cửa sổ trình duyệt

// muốn kiểm tra trang web có bị cuộn dọc hay không => so sánh scrollHeight và clientHeight
if (html.scrollHeight > html.clientHeight) {
  console.log("Trang web có thể cuộn dọc");
} else {
  console.log("Trang web không thể cuộn dọc");
}


// #Cuộn nội dung tới vị trí bạn muốn

// html.scrollTo(0, 100); // Cuộn trang web tới vị trí y = 100px (tính từ đầu trang)
// html.scrollBy(0, 100); // Cuộn trang web xuống thêm 100px (tính từ vị trí cuộn hiện tại)
// html.scrollTo(2000, 100); // Cuộn trang web tới vị trí x = 200px, y = 100px (tính từ đầu trang) => để kiểm tra tham số x dùng scrollLeft

// tham số object

// html.scrollTo({
//   top: 0,
//   left: 0,
//   behavior: "smooth" // Cuộn mượt mà
// });

// #html.scrollIntoView() => Cuộn trang web để phần tử html hiển thị trong cửa sổ trình duyệt

const h2 = document.querySelector("#scroll-to");

h2.scrollIntoView(); // Cuộn trang web để phần tử h2 hiển thị trong cửa sổ trình duyệt

h2.scrollIntoView({
  behavior: "smooth", // Cuộn mượt
  block: "center",   // Căn giữa theo chiều dọc
  inline: "center"   // Căn giữa theo chiều ngang
});

// block: "start" | "center" | "end" | "nearest"
// inline: "start" | "center" | "end" | "nearest"

