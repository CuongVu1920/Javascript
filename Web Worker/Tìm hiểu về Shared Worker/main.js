const sharedWorker = new SharedWorker("./shared-worker.js")

sharedWorker.onerror = () => {
    console.log("Error");
}

sharedWorker.port.onmessage = (e) => {
    console.log(e.data);
};

window.addEventListener("beforeunload", () => {
    sharedWorker.port.postMessage("__disconnect__");
})

const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");

increase.addEventListener("click", () => {
    sharedWorker.port.postMessage("increase")
})


decrease.addEventListener("click", () => {
    sharedWorker.port.postMessage("decrease")
})

