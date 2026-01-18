const box = document.querySelector(".box");

// Client: content + padding - scrollbar (nếu có) => trả về số nguyên
console.log("clientHeight: " + box.clientHeight); // 110
console.log("clientWidth: " + box.clientWidth); // 100

// Offset: content + padding + boder +  scrollbar  => trả về số nguyên
console.log("offsetHeight: " + box.offsetHeight); // offsetHeight: 110
console.log("offsetWidth: " + box.offsetWidth); // offsetWidth: 100

// Rect: content + padding + boder +  scrollbar  (display) => trả về số thực
const rect = box.getBoundingClientRect();

console.log(rect); // DOMRect {x: 8, y: 8, width: 100, height: 110, top: 8, …}
console.log(rect.width);
console.log(rect.height);

