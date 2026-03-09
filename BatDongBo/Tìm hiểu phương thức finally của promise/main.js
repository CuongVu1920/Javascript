function fetchData() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

console.log("Hiển thị loading");


fetchData()
  .then(() => {
    console.log("Hiển thị dữ liệu!");
    console.log("Tắt loading");
    
  })
  .catch(() => {
    console.log("Thông báo lỗi!!");
    console.log("Tắt loading");
  })
  .finally(() => {
    console.log("DONE");
  })

// Phương thức finally() của Promise
// Khái niệm
// finally() là phương thức được gọi sau khi Promise kết thúc, 
// bất kể kết quả là resolve (thành công) hay reject (thất bại). Nó luôn được thực thi.