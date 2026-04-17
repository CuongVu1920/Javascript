// importScripts("./helper.js")

// setTimeout(() => {
//     console.log("DONE");
// }, 2000)

self.onmessage = (e) => {
    console.log(e.data);


    self.postMessage(e.data)
    self.close();
}