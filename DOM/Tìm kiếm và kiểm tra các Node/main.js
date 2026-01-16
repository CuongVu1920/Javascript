// getElementsByClassName,
// getElementByTagName,
// querySelector,
// querySelectorAll

// matches
// closest,
// contains

const box1 = document.querySelector("#box-1");

console.log(box1.getElementsByClassName("item")); // HTMLCollection(3) [div.item, div.item, div.item]
console.log(box1.getElementsByTagName("div")); // HTMLCollection(3) [div.item, div.item, div.item]
console.log(box1.querySelector("div")); // div.item
console.log(box1.querySelectorAll("div")); // NodeList(3) [div.item, div.item, div.item]


// #matches

/**
 * - Phương thức matches() kiểm tra xem một phần tử DOM có khớp với một CSS selector cụ thể hay không.
 * - Cú pháp: element.matches(selector)
 *  + Tham số: selector - chuỗi CSS selector
 *  + Trả về: true nếu phần tử khớp với selector, false nếu không
 */

// VD:

// console.log(box1.matches(".item")); // false
// console.log(box1.matches("div")); // true
// console.log(box1.matches("[id='box-1']")); // true
// console.log(box1.matches("[id='box-2']")); // false
// console.log(box1.matches("#box-1")); // true
// console.log(box1.matches("#box-2")); // false
// console.log(box1.matches("div[id='box-1']")); // true

// #closet

/**
 * - Phương thức closest() tìm kiếm phần tử cha (ancestor) gần nhất khớp với CSS selector, bao gồm cả chính phần tử đó.
 * - Cú pháp: element.closest(selector)
 *  + Tham số: selector - chuỗi CSS selector
 *  + Trả về: Phần tử DOM khớp với selector, hoặc null nếu không tìm thấy
 */

console.log(box1.closest("div[id='box-1']")); // div#box-1
console.log(box1.closest("body")); // body
console.log(box1.closest("h1")); // null
console.log(box1.closest(".item2")); // null

// VD2:

const button = document.querySelector('#btn');

console.log(button.closest('.card')); // <div class="card">
console.log(button.closest('.container')); // <div class="container">
console.log(button.closest('button')); // chính nó <button id="btn">
console.log(button.closest('.not-exist')); // null

// ##contains

/**
 * - Phương thức contains() kiểm tra xem một phần tử DOM có chứa một phần tử khác hay không (bao gồm cả chính nó)
 * - Cú pháp: node.contains(otherNode)
 *  + Tham số: otherNode - phần tử cần kiểm tra
 *  + Trả về: true nếu otherNode là con/cháu của node hoặc chính node, false nếu không
 */


const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const grandchild = document.querySelector('#grandchild');

console.log(parent.contains(child)); // true
console.log(parent.contains(grandchild)); // true
console.log(child.contains(grandchild)); // true
console.log(child.contains(parent)); // false
console.log(parent.contains(parent)); // true (chính nó)
