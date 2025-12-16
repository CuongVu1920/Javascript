
Array.prototype.forEach2 = function(callback, thisValue) {

  const length = this.length;
  for(let i = 0; i < length; i++) {
    if(i in this) {
       callback.call(thisValue, this[i], i, this);
    }
  }
  
}

const colors = ['red', 'green', 'blue'];

// forEach2

// array.forEach2(function(current, index, arr) {}, thisValue);



colors.forEach2(function(color, index, arr) {
  console.log(color);
  console.log(index);
  console.log(arr);
  console.log(this);
  
  
}, { id: 123});