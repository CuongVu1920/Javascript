// myForEach

Array.prototype.myForEach = function(callback, thisArg) {
  const length = this.length;
  for(let i = 0; i < length; i++) {
    if(i in this) {
      callback.call(thisArg, this[i], i, this);
    }
  }
}



const arr = [1, 2, 3];

arr.forEach((num) => {
  console.log(num * 2);
});

arr.myForEach((num) => {
  console.log(num * 2);
}); 


// 2. myMap()

Array.prototype.myMap = function(callback, thisArg) {
  const length = this.length;
  const result = new Array(length);

  for(let i = 0; i < length; i++) {
    result[i] = callback.call(thisArg, this[i], i, this);
  }

  return result;
}


const mappedArr = arr.map((num) => {
  return num * 2;
});

console.log(mappedArr); (3) [2, 4, 6];

const mappedArr2 = arr.myMap((num) => {
  return num * 2;
});

console.log(mappedArr2); (3) [2, 4, 6];


// myFilter() - CHUẨN

Array.prototype.myFilter = function(callback, thisArg) {
  const length = this.length;
  const result = [];
  
  for(let i = 0; i < length; i++) {
    let element = this[i];
    if(callback.call(thisArg, this[i], i, this)) {
      result.push(element);
    }
  }
  return result;
}



const arr3 = [1, 2, 3, 4, 5];

const filteredArr = arr3.filter((num) => {
  return num % 2 === 0;
});

console.log(filteredArr); // (2) [2, 4]


const filter2 = arr3.filter((num) => {
  return num % 2 === 0;
})

console.log(filter2);


// Find

Array.prototype.myFind = function(callback, thisArg) {
  const length = this.length;

  for(let i = 0; i < length; i++) {
    if(callback.call(thisArg, this[i], i, this)) {
      return this[i];
    }
  }

  return "undefined";
}


const obj = { minAge: 18 };

const users = [
    { name: 'An', age: 15 },
    { name: 'Bình', age: 20 },
    { name: 'Chi', age: 25 }
];

const adult = users.find(function(user) {
    return user.age >= this.minAge;
}, obj);

console.log(adult);

const adult2 = users.myFind(function(user) {
    return user.age >= this.minAge;
}, obj);

console.log(adult2); // { name: 'Bình', age: 20 }

// mySome và myEvery

Array.prototype.mySome = function(callback, thisArg) {
  const length = this.length;

  for(let i = 0; i < length; i++) {
    if(callback.call(thisArg, this[i], i, this)) {
      return true;
    }
  }
  return false;
}


Array.prototype.myEvery = function(callback, thisArg) {
  const length = this.length;
  
  for(let i = 0; i < length; i++) {
    if(!callback.call(thisArg, this[i], i, this)) {
      return false;
    }
  }
  return true;
}

// findIndex

Array.prototype.myFindIndex = function(callback, thisArg) {
  const length = this.length;
  
  for(let i = 0; i < length; i++) {
    if(callback.call(thisArg, this[i], i, this)) {
      return i;
    }
  }
  return -1;
}


