// Callback (gọi lại): function
// => hàm đgl callback khi hàm được truyền làm đối số của hàm khác

function handle() {
  console.log("Do something...");
}

// setTimeout(handle, 3000);

function run(cb) {
  cb();
};

run(handle);