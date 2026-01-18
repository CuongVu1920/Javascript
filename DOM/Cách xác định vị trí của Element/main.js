const box = document.querySelector(".box");

// position: static (default), relative, absolute, sticky, fixed (nếu khác static thì element sẽ tính khoảng cách từ thẻ cha gần nhất)
// margin collapse
// viewport

// Offset
console.log(box.offsetTop); // 8
console.log(box.offsetLeft); // 8


// React - luôn tính từ viewport
const react = box.getBoundingClientRect();

console.log(react);
