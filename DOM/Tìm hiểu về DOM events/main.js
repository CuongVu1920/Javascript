// DOM events

const button = document.getElementById('myButton');

// Cách 1: sử dụng thuộc tính onclick

// button.onclick = function() {
//     alert('Button clicked!');
// }

// Cách 2: sử dụng addEventListener

const handleClick = function() {
    console.log("Button clicked via addEventListener!");
}

button.addEventListener('click', handleClick);

button.addEventListener('click', function() {
      console.log("Clicked 2");
  });
  
  button.addEventListener('click', function() {
        console.log("Clicked 3");
  });
    
  // Hủy bỏ sự kiện
  
  // button.removeEventListener('click', handleClick);


// Ví dụ về các sự kiện khác

const emailInput = document.getElementById('emailInput');

emailInput.addEventListener('change', function() {
    console.log('Input changed to: ' + emailInput.value);
});