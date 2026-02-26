// XHR - XMLHttpRequest
// fetch

// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://127.0.0.1:5501/BatDongBo/T%C3%ACm%20hi%E1%BB%83u%20v%E1%BB%81%20XHR/partials/header.html', true);
// xhr.send();


// biết được khi nào thì xong
// xhr.onload = function () {
//   if (xhr.status >= 200 && xhr.status <= 400) {
//     console.log(xhr.responseText);
//   }
// }


// xhr.onreadystatechange = function() {
//   if (xhr.onreadystatechange === 4 && xhr.status === 200) {
//     console.log(xhr.responseText);
//   }
// }

// console.log(123);

function sendRequest(method, url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.send();

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status <= 400) {
      if(typeof callback === 'function') {
        callback(xhr.responseText);
      }
      
    }
  };
};

const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const productList = document.querySelector('.product-list');


sendRequest('GET', 'http://127.0.0.1:5501/BatDongBo/T%C3%ACm%20hi%E1%BB%83u%20v%E1%BB%81%20XHR/partials/header.html', (responseText) => {
  console.log(responseText);
  header.innerHTML = responseText;
})

sendRequest('GET', 'http://127.0.0.1:5501/BatDongBo/T%C3%ACm%20hi%E1%BB%83u%20v%E1%BB%81%20XHR/partials/footer.html', (responseText) => {
  console.log(responseText);
  footer.innerHTML = responseText;
})

sendRequest('GET', 'https://api01.f8team.dev/api/products', (responseText) => {
  const respone = JSON.parse(responseText);
  const products = respone.data.items;

  products.forEach((product) => {
    const item = document.createElement('li');
    item.textContent = product.title;

    productList.appendChild(item);
  });
  
  
})