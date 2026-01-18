// Fragment

const box = document.querySelector("#box");
const heading = document.querySelector("#heading");

// Nodes
const text = document.createTextNode("Text...");
const comment = document.createComment("Something");
const p = document.createElement("p");
p.textContent = "Something text...";


// Create fragment
const container = document.createDocumentFragment();

// text, comment, p -> fragment
container.append(p, text, comment);

// fragment -> box (before heading)
box.insertBefore(container, heading)


// Đứng từ Node cha lấy ra các danh sách các Node con
console.log(box.childNodes); // NodeList(6) [text, p, text, comment, h1#heading, text] 

/**
 * Lưu ý: dấu xuống trong thì vẫn được coi là một childNode dạng text
 */

console.log(box.firstElementChild);
console.log(box.lastElementChild);

// #Học cách đứng từ 1 Node lấy ra được Node ở trước hoặc ở sau nó

console.log(text.previousSibling); // <p>Something text...</p>
console.log(text.previousElementSibling); // p

// #Tìm Node cha từ Node con

console.log(text.parentElement);
console.log(text.parentNode);




