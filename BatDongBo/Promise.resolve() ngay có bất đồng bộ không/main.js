console.log(1);


const promise = new Promise((resolve) => {
  resolve();
});

promise.then(() => {
  console.log(2);
})

console.log(3);
