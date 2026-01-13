// document.getElementById() - trả về 1 phần tử
// document.getElementsByTagName() - trả về 1 danh sách
// document.getElementsByClassName() - trả về 1 danh sách


// document.querySelector() - trả về 1 phần tử
// document.querySelectorAll() - trả về 1 danh sách

const result = document.querySelector("#heading");

console.log(result);

const titleNotABC = document.querySelector(".title:not(.abc");

console.log(titleNotABC);

