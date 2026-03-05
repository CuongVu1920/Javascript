function sendRequest(method, url) {
  return new Promise((resolve, reject)=> {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.send();
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 400) {
        const contentType = xhr.getResponseHeader('content-type');
        const isJson = contentType && contentType.includes('application/json');

        if (isJson) {
          try {
            resolve(JSON.parse(xhr.responseText));
          }catch(error) {
            reject("Invalid JSON format!")
          }
        }else {
          resolve(xhr.responseText);
        }
         
      } else {
        reject(`HTTP code: ${xhr.status}`);
      }
    };

    xhr.onerror = () => {
      reject("Network error!!")
    };
  });
};

const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const productList = document.querySelector(".product-list");

// console.log(productList);


sendRequest("GET", './partials/header.html')
  .then((responseText) => {
    header.innerHTML = responseText;
  })
  .catch((error) => {
    console.log(error);
  })


sendRequest("GET", './partials/footer.html')
  .then((responseText) => {
    footer.innerHTML = responseText;
  })
  .catch((error) => {
    console.log(error);
  })

// sendRequest("GET", 'https://api01.f8team.dev/api/products').then((responseText) => {

//   const products = JSON.parse(responseText).data.items;
//   console.log(products);
  
//   products.forEach((product) => {
//     const li = document.createElement('li');
//     li.textContent = product.title;


//     productList.appendChild(li);
//   });

// });

function getFirstProvin() {
  return sendRequest('GET', 'https://api01.f8team.dev/api/address/provinces')
    .then((result) => result.data[0])
}

function getFirstDistrict(provinceId) {
  return sendRequest("GET", `https://api01.f8team.dev/api/address/districts?province_id=${provinceId}`)
    .then((result) => result.data[0]);
}

function getFirstWard(districtId) {
  return sendRequest('GET', `https://api01.f8team.dev/api/address/wards?district_id=${districtId}`)
    .then((result) => result.data[0]);
}


getFirstProvin()
  .then((province) => {
    return getFirstDistrict(province.province_id)
  })
  .then((district) => {
    return getFirstWard(district.district_id)
  })
  .then((result) => {
    console.log(result);
  });
  


