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


// sendRequest("GET", './partials/header.html')
//   .then((responseText) => {
//     header.innerHTML = responseText;
//   })
//   .catch((error) => {
//     console.log(error);
//   })


// sendRequest("GET", './partials/footer.html')
//   .then((responseText) => {
//     footer.innerHTML = responseText;
//   })
//   .catch((error) => {
//     console.log(error);
//   })

// sendRequest("GET", 'https://api01.f8team.dev/api/products').then((responseText) => {

//   const products = JSON.parse(responseText).data.items;
//   console.log(products);
  
//   products.forEach((product) => {
//     const li = document.createElement('li');
//     li.textContent = product.title;


//     productList.appendChild(li);
//   });

// });

// function getFirstProvin() {
//   return sendRequest('GET', 'https://api01.f8team.dev/api/address/provinces')
//     .then((result) => result.data[0])
// }


const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hehehe")
  }, 2000);
})


Promise.resolve("hehe").then(result => console.log(result));
Promise.reject("ahuhu").catch(error => console.log(error));



// ----------------- Promise all -----------------

// Promise.all([
//   sendRequest("GET", './partials/header.html'),
//   sendRequest("GET", './partials/footer.html'),
//   timeoutPromise
// ])
//   .then(result => {
//     header.innerHTML = result[0];
//     footer.innerHTML = result[1];
//   })
//   .catch((error) => {
//     console.log(error);
//   })

// ----------------- Promise all -----------------

// ----------------- allSettled -----------------

// Promise.allSettled([
//   sendRequest("GET", './partials/header.html'),
//   sendRequest("GET", './partials/footer.html'),
//   timeoutPromise
// ])
//   .then((result) => {
//     console.log(result);
//   })

 /**
  * - Promise.allSettled() là một phương thức tĩnh của Promise đc sử dụng để "chờ tất cả các promise hoàn thành"
  *   (bất kể chúng thành công hay thất bại), khác với Promise.all() sẽ dừng ngay khi có một promise bị reject.
  * 
  * - Đặc điểm chính:
  *   1. chờ tất cả promise hoàn thành
  *     - Không dừng lại khi có promise bị reject
  *     - Trả về kết quả của tất cả promise dù thành công hay thất bại
  * 
  * - So sánh với Promise.all()
  * 
  * Promise.all() 
  *   - sẽ dừng ngay khi timeoutPromise reject sau 2 giây
  *   - không thực hiện được việc load header và footer
  */
// ----------------- Promise allSettled -----------------


// ----------------- Promise race -----------------

/**
 * Promise.race() là một phương thức tĩnh của Promise được sử dụng để "đua" giữa các promise - trả về kết quả của promise
 * nào hoàn thành đầu tiên (Resolve or reject)
 * 
 * Đặc điểm chính:
    1. Chỉ quan tâm promise đầu tiên
      Trả về ngay khi có promise đầu tiên hoàn thành
      Các promise còn lại vẫn chạy song song nhưng không ảnh hưởng kết quả
    2. Kết quả trả về
      Nếu promise đầu tiên thành công → trả về resolved với giá trị đó
      Nếu promise đầu tiên thất bại → trả về rejected với lỗi đó
    
 */


// Promise.race([
//   sendRequest("GET", './partials/header.html'),
//   sendRequest("GET", './partials/footer.html'),
//   timeoutPromise
// ])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })

// ----------------- Promise race -----------------





// function getFirstDistrict(provinceId) {
//   return sendRequest("GET", `https://api01.f8team.dev/api/address/districts?province_id=${provinceId}`)
//     .then((result) => result.data[0]);
// }

// function getFirstWard(districtId) {
//   return sendRequest('GET', `https://api01.f8team.dev/api/address/wards?district_id=${districtId}`)
//     .then((result) => result.data[0]);
// }


// getFirstProvin()
//   .then((province) => {
//     return getFirstDistrict(province.province_id)
//   })
//   .then((district) => {
//     return getFirstWard(district.district_id)
//   })
//   .then((result) => {
//     console.log(result);
//   });
  


