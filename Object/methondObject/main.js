// Object.assign(target, …sources)

/**
 * - Phương thức Object.assgin cho phép bạn sao chép các thuộc tính từ một hoặc nhiều đối tượng nguồn (source objects) vào một đối tượng
 *  đích (target object)
 */

const target = { a: 1};
const source = { b: 2, c: 3};

const result = Object.assign(target, source, {
  d: 4
}, {
  e: 5
})

console.log(result);

