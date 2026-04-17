/**
 * - clone ra object mới với tham chiếu mới
 * - không truyền được hàm, mà worker phải import từ file nào đó
 *  - có thể đóng worker bằng 2 cách:
 *      + ở trong file main.js: worker1.terminate();
 *      + ở trong file worker: selft.close()
 *  - có thể kiểm tra xem new Worker đã import đúng file chưa bằng cách: worker1.onerror = () => {
 *      something...
 *  
 * }
 */ 



let a = 123;

const worker1 = new Worker("./woker1.js");

worker1.onerror = () => {
    console.log("1234sde");
    
}

const button = document.querySelector("#button");

let obj = {
    name: "John"
}

worker1.onmessage = (e) => {
    console.log(obj === e.data);

    // worker1.terminate();
}

button.addEventListener("click", () => {
    worker1.postMessage(obj);
});
