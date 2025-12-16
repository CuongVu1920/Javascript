// array.forEach(callback, thisValue);

const obj = {
  numbers: [1, 2, 3],
  add(number) {
    this.numbers.push(number);
  },
  import(numbers) {
    numbers.forEach(this.add, this);
  }
};

obj.add(4);
obj.add(5);
obj.import([6, 7, 8])


console.log(obj.numbers);
