const h1 = document.querySelector('h1');
const img = document.querySelector('img');

console.log(h1.id);
console.log(h1.className);

// h1.id = "something";
// h1.className = "okela hẹ hẹ"
// h1.title = "Hello";
// h1.style = "color: red; font-weight: 600; background-color: blue;";

console.log(h1.src); // undefined
h1.src = 'https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/SunnyDayV3.svg'; //k thêm vào thẻ h1

img.src = 'https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/SunnyDayV3.svg';



// Không phải thuộc tính nào cũng dùng được cho mọi thẻ 

// Không xóa được thuộc tính, nên chúng ta thay thế nó bằng chuỗi rỗng 

// h1.id = "";
// h1.className = ""

const a = document.querySelector(".click");
 
console.log(a.href);  // http://127.0.0.1:5500/DOM/Qu%E1%BA%A3n%20l%C3%BD%20HTML%20attributes%20c%E1%BB%A7a%20ph%E1%BA%A7n%20t%E1%BB%AD/abc.html


// Cách lấy ra 

console.log(h1.getAttribute("id")); // heading
console.log(h1.getAttribute("class")); // title1 title2
console.log(a.getAttribute("href")); // ./abc.html


// Sửa
h1.setAttribute("id", "something")
h1.setAttribute("class", "something-else")

// Kiểm tra có tồn tại k

console.log(h1.hasAttribute("id")); // true

// xóa

h1.removeAttribute("id"); // <h1 class="something-else">Hello Cuong Vu</h1>

// toggle Attribute

// toggleAttribute() là phương thức để bật/tắt một attribute trên phần tử HTML.

/**
 * Cú pháp:
 *    element.toggleAttribute(name);
      element.toggleAttribute(name, force);

  Cách hoạt động:
    Nếu attribute không tồn tại → thêm attribute
    Nếu attribute đã tồn tại → xóa attribute
    Trả về true nếu attribute có sau khi toggle, false nếu không
*/

  // VD1:

  const btn = document.querySelector("button");

  btn.onclick = function() {
    h1.toggleAttribute("hidden");
    
  }







