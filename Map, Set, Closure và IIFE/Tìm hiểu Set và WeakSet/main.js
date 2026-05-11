// Set, WeakSet

/**
 * Set là một tập hợp các giá trị duy nhất, không có thứ tự và có thể chứa bất kỳ loại dữ liệu nào. 
 * Set cung cấp các phương thức để thêm, xóa và kiểm tra sự tồn tại của phần tử trong tập hợp.
 * WeakSet là một tập hợp các đối tượng yếu, không có thứ tự và chỉ chứa các đối tượng.
 * WeakSet không giữ tham chiếu mạnh đến các đối tượng, điều này có nghĩa là 
 * nếu một đối tượng trong WeakSet không còn được tham chiếu ở nơi khác, nó có thể bị thu gom rác (garbage collected) 
 * và tự động bị xóa khỏi WeakSet.
 */

console.log([1, 2, 3, 3, 3 , 4, 4]); // Mảng có các phần tử trùng lặp
console.log(new Set([1, 2, 3, 3, 3 , 4, 4])); // Set sẽ loại bỏ các phần tử trùng lặp và chỉ giữ lại các phần tử duy nhất

console.log([...new Set([1, 2, 3, 3, 4, 5, 5 , 1])]); // (5) [1, 2, 3, 4, 5]

const obj = new Set( [1, 2, 3, 4, 5] );

console.log(obj.has(3)); // true
console.log(obj.has(6)); // false

obj.add(6);
console.log(obj.has(6)); // true

console.log(obj);


obj.delete(2);
console.log(obj.has(2)); // false

// obj.clear();
// console.log(obj.size); // 0


// WeakSet chỉ chứa các đối tượng và không có phương thức clear() hoặc size,

// Ví dụ về WeakSet:
const obj1 = { name: 'Object 1' };
const obj2 = { name: 'Object 2' };

const obj3 = new WeakSet([obj1, obj2, obj1, obj2]); // WeakSet sẽ loại bỏ các phần tử trùng lặp và chỉ giữ lại các phần tử duy nhất

console.log(obj3);
console.log(obj3.has(obj1)); // true
console.log(obj3.has(obj2)); // true



