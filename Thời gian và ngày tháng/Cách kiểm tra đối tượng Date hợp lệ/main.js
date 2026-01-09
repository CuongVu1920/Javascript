let date = new Date("10:10 20/10/2010");

console.log(isNaN(date)); // không hợp lệ thì sẽ trả về true


let makeDate = new Date();

console.log(isNaN(makeDate)); // false (hợp lệ)

