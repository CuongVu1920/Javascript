/**
 * Vấn đề ở bài này là nếu muốn lấy tất cả các CSS đang được áp dụng mà trong đó external sử dụng !important đè inline
 */


const h1 = document.getElementById('heading');
 
console.log(h1.style.color); // red => hiển thị color của inline


// sử dụng hàm toàn cục getComputedStyle()
console.log(getComputedStyle(h1).color);

console.log(getComputedStyle(h1, "::before").content); // "hello: "
console.log(getComputedStyle(h1, "::before").width); // 100px


