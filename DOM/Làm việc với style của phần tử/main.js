const heading = document.querySelector('#heading');

// console.log(heading);

// Chỉ quan lý CSS dạng inline

console.log(heading.style);
console.log(heading.style.color);
console.log(heading.style.fontSize); // "" (viết CSS kiểu internal)

// Lấy hết css inline đang có
console.log(heading.style.cssText); // color: red; font-size: 50px;

// Sửa

heading.style.color = "green";
heading.style.backgroundColor = "#cccc";

// Thêm nhiều
Object.assign(heading.style, {
  color: "red",
  fontStyle: "italic",
})

// Kết hợp đối tượng
// Object.assign(target, source)

// target: Đối tượng đích (ở đây là heading.style)
// source: Đối tượng nguồn chứa các thuộc tính cần copy (object chứa các CSS properties)

// Phương thức này sẽ copy tất cả thuộc tính từ object nguồn sang object đích, và trả về object đích sau khi đã được cập nhật.