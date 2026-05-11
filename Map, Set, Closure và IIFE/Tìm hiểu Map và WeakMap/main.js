// Map, WeakMap
const key1 = { name: "john" };
const key2 = { name: "doe" };

// const obj = {
//     1: "Value 1",
//     "1": "Value 2",
//     [key1]: "Value 3",
//     [key2]: "Value 4",
// }


const obj = new Map([
    [1, "Value 1"],
    ["1", "Value 2"],
    [key1, "Value 3"],
    [key2, "Value 4"],
])

obj.set(11, "Value 11");

console.log(obj); // Map(5) { 1 => 'Value 1', '1' => 'Value 2', { name: 'john' } => 'Value 3', { name: 'doe' } => 'Value 4', 11 => 'Value 11' }
console.log(Array.from(obj.keys())); // [ 1, '1', { name: 'john' }, { name: 'doe' }, 11 ]

// Array.form trả về một mảng mới từ một đối tượng có thể lặp lại hoặc một đối tượng giống mảng. 
// Trong trường hợp này, nó sẽ trả về một mảng chứa tất cả các khóa của Map obj.

console.log(obj.get(1));
console.log(obj.get("1"));
console.log(obj.get(key1));
console.log(obj.get(key2));

obj.delete(1);
obj.set(key1, "Value 3 Updated");
console.log(obj); // Map(4) { '1' => 'Value 2', { name: 'john' } => 'Value 3 Updated', { name: 'doe' } => 'Value 4', 11 => 'Value 11' }

// xóa tất cả phần tử trong Map -> obj.clear()
// obj.clear();


console.log(obj.entries()); // MapIterator { [ '1', 'Value 2' ], [ { name: 'john' }, 'Value 3 Updated' ], [ { name: 'doe' }, 'Value 4' ], [ 11, 'Value 11' ] }
console.log([...obj.entries()]);
console.log([...obj.keys()]); // [ '1', { name: 'john' }, { name: 'doe' }, 11 ]
console.log([...obj.values()]); // [ 'Value 2', 'Value 3 Updated', 'Value 4', 'Value 11' ]


// obj.forEach((value, key) => {
//     console.log(key, value);
// });

for (const [key, value] of obj) {
    console.log(key, value);
}
// 1. Map là một cấu trúc dữ liệu cho phép lưu trữ các cặp key-value, trong đó key có thể là bất kỳ kiểu dữ liệu nào (bao gồm cả object).
// 2. Map duy trì thứ tự chèn của các phần tử, có nghĩa là khi bạn lặp qua Map, các phần tử sẽ được trả về theo thứ tự chúng được thêm vào.
// 3. Map cung cấp các phương thức như set(), get(), delete(), has() để thao tác với các phần tử trong Map.
// 4. Map có thể được khởi tạo bằng cách sử dụng constructor Map hoặc bằng cách truyền một mảng chứa các cặp key-value vào constructor.


// WeakMap là một loại Map đặc biệt trong JavaScript, được thiết kế để lưu trữ các cặp key-value 
// mà trong đó key phải là một đối tượng (object). Điểm đặc biệt của WeakMap là nó cho phép các 
// phần tử được tự động thu hồi bộ nhớ khi không còn tham chiếu đến chúng nữa. Điều này có nghĩa 
// là nếu một đối tượng được sử dụng làm key trong WeakMap và không còn tham chiếu nào đến đối tượng đó, 
// thì phần tử tương ứng trong WeakMap sẽ bị xóa tự động để giải phóng bộ nhớ. 
// WeakMap không hỗ trợ các phương thức như keys(), values(), entries() hoặc forEach() vì tính chất yếu của nó, 
// và nó chỉ cung cấp các phương thức set(), get(), delete(), has() để thao tác với các phần tử trong WeakMap.


// Ví dụ về WeakMap:
const weakMap = new WeakMap([
    [key1, "Value 1"],
    [key2, "Value 2"],
]);

console.log("weakMap:", weakMap);

// for (const [key, value] of weakMap) {
//     console.log(key, value);
// }
// TypeError: weakMap is not iterable

// Lưu ý: WeakMap không thể lặp qua được vì nó không hỗ trợ các phương thức như keys(), values(), entries() hoặc forEach(). 
// Do đó, bạn không thể sử dụng vòng lặp for...of hoặc các phương thức lặp khác để truy cập các phần tử trong WeakMap.
