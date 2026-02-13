// JS là ngôn ngữ đơn luồng (Single thread)

// Đồng bộ: code chạy ngay, lần lượt

// console.log(1);
// console.log(2);
// console.log(3);

// Bất đồng bộ: code không chạy ngay, không lần lượt


// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 2000);

// console.log(3);


// Timer, DOM events
// fetch()


// Sync: đồng bộ

// - Task 1: 2s
// - Task 2: 2s
// - Task 3: 2s
// => 6s

// Async: đồng bộ

// - Task 1: 2s
// - Task 2: 2s
// - Task 3: 2s
// => 2s