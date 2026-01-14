// HTMLCollection, NodeList và Array

// HTMLCollection

// Live collection - tự động cập nhật khi DOM thay đổi
// Chỉ chứa phần tử HTML (element nodes)
// Có thể truy cập bằng index hoặc name/id
// Không có các phương thức mảng (forEach, map, filter...)
// Trả về bởi: getElementsByTagName(), getElementsByClassName(), element.children

// NodeList

// Có thể live (từ childNodes) hoặc static (từ querySelectorAll())
// Chứa mọi loại node (elements, text, comments...)
// Có phương thức forEach() nhưng không có map, filter, reduce...
// Trả về bởi: querySelectorAll(), childNodes

// Array

// Mảng thực sự của JavaScript
// Static - không tự động cập nhật
// Có đầy đủ các phương thức mảng
// Cần chuyển đổi từ HTMLCollection/NodeList

// Chuyển đổi sang Array:

// // Cách 1: Array.from()
// const arr1 = Array.from(collection);

// // Cách 2: Spread operator
// const arr2 = [...nodeList];

// // Cách 3: Array.prototype.slice
// const arr3 = Array.prototype.slice.call(collection);