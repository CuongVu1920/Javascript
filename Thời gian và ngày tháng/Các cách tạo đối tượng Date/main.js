let date = new Date(); // trả về đối tượng date đại diện cho thời điểm hiện tại

console.log(date); // Fri Jan 09 2026 07:33:05 GMT+0700 (Giờ Đông Dương)

// có thể chuyền vào đối tượng Date (định dạng tiêu chuẩn or timestamp)

let makeDate = new Date("2000-08-10"); 

console.log(makeDate); // Thu Aug 10 2000 07:00:00 GMT+0700 (Giờ Đông Dương)

let makeDate2 = new Date(2000, 1, 30);

console.log(makeDate2); // Wed Mar 01 2000 00:00:00 GMT+0700 (Giờ Đông Dương)


// Hãy trả về một đối tượng Date tương ứng với thời điểm 10:10:20 ngày 24/12/2023 giờ UTC.

function run() {
    let timestamp = Date.UTC(2023, 11, 24, 10, 10, 20);

    let date = new Date(timestamp);

    return date;
}

// Sample usage
console.log(run()); // Tương đương: Sun Dec 24 2023 10:10:20 GMT+0000 (UTC)