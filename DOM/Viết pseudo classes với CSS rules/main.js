// Pseudo classes/elements
// - :hover, ...
// - :before, ...

// document.styleSheets) => đối tượng quản lý tất cả các CSS INTERNAL VÀ EXTERNAL
console.log(document.styleSheets);

const style = document.styleSheets[0];

style.insertRule(`#heading:hover { color: red; }`, style.cssRules.length)

console.log(style);

