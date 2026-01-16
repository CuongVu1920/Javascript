const h1 = document.createElement("h1");
const text = document.createTextNode("Hello");
const comment = document.createComment("Something...");
const title = document.createAttribute("title");
const fragment = document.createDocumentFragment();

console.log(h1.nodeName); // H1
console.log(h1.nodeType); // 1

console.log(text.nodeName); // #text
console.log(text.nodeType); // 3

console.log(comment.nodeName); // #comment
console.log(comment.nodeType); // 8

console.log(title.nodeName); // title
console.log(title.nodeType); // 2

console.log(text.nodeType === Node.TEXT_NODE); // true

