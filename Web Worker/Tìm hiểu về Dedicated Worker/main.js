// Web worker
const worker1 = new Worker('./worker1.js');

worker1.onmessage = (e) => {
    console.log(e.data);
}

const button = document.querySelector("#button");

button.addEventListener("click", () => {
    worker1.postMessage(3e9);
})