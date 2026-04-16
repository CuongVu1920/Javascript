// Main Thread <------------------> Worker 1 (Other thread)

// postMessage(data): gửi
// onmessage: nhận (lắng nghe)

self.onmessage = (e) => {
    const length = e.data;
    let total = 0;
    for(let i = 0; i < length; i++) {
        total += i;
    }

    self.postMessage(total);
}