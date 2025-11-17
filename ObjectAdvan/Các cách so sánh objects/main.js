/**
 * Cách 1: sử dụng toán tử ===
 */

// Cách 2: Sử dụng JSON.stringify để so sánh nội dung

let student1 = { id: 1, name: "Bob" };
let student2 = { id: 1, name: "Bob" };

console.log(JSON.stringify(student1) === JSON.stringify(student2)); // true

/**
 * Tuy nhiên, điểm yếu của phương pháp này là khi các thuộc tính và giá trị giống nhau, 
 * nhưng thứ tự khác nhau sẽ cho kết quả false. Khi đó, chúng ta có thể sử dụng đệ quy để so sánh sâu (deep compare). 
 * Để đơn giản, ta có thể sử dụng _.isEqual() của thư viện Lodash.
 */

// # Dùng thư viện bên ngoài như Lodash

let obj1 = { part: { id: 10, name: 'Top' } };
let obj2 = { part: { id: 10, name: 'Top' } };

console.log(_.isEqual(obj1, obj2)); // true