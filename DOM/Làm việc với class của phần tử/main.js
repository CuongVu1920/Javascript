const heading = document.querySelector('#heading');

// heading.className = "underline"; => thay the tat ca class hien tai

// console.log(heading.classList);

// add, contains, remvove, replace, toggle

// add
heading.classList.add('underline', "class2");


// contains

console.log(heading.classList.contains('underline')); // true
console.log(heading.classList.contains('italicxyz')); // false

// replace

// heading.classList.replace('red', 'blue');

// toggle(class , true || false) true thì add vào, false thì xóa
// heading.classList.toggle("active", true);
// heading.classList.toggle("active", true); 
// heading.classList.toggle("active");
// heading.classList.toggle("active");


// VD1:
const btn = document.querySelector("#btn");

btn.addEventListener('click', () => {
  heading.classList.toggle("right");
  
})



