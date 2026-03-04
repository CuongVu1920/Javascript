function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url, true);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 400) {
        resolve(xhr.responseText)
      } else {
        reject('Network error!')
      }
    }
  })
};



sendRequest("GET", 'https://api01.f8team.dev/api/address/provinces')
  .then((responseText) => {
    const provinces = JSON.parse(responseText).data;
    const firstProvince = provinces[0];
  
    
    return sendRequest(
      'GET',
      `https://api01.f8team.dev/api/address/districts?province_id=${firstProvince.province_id}`
    );

  })
  .then((responseText) => {
    const districts = JSON.parse(responseText).data;
    const firstDistrict = districts[0];

    return sendRequest(
        'GET',
        `https://api01.f8team.dev/api/address/wards?province_id=${firstProvince.province_id}&district_id=${firstDistrict.district_id}`
      );
  })
  .then((responseText) => {
    const wards = JSON.parse(responseText).data;
    const firstWard = wards[0];

    console.log(firstWard);
  })
  .catch((error) => {
    console.log(error);
  })


// Promise

// 1. Pending => đang chờ kết quả của lời hứa
// 2.resolve(); => Promise {<fulfilled>: undefined} => lời hứa được thực hiện
// 3.rejected => từ chối lời hứa

const promise = new Promise((resolve, reject) => {
  resolve("Em ơi, anh ở dưới nhà rồi!");
  // reject("Ôi em ơi, anh ngủ quên mất!!");
})

// Chain
promise
  .then((result) => {
    console.log("DONE 1", result);
  })
  .then((result) => {
    console.log("DONE 2", result);
  })
  .catch((error) => {
    console.log("Error: ", error);
    
  })
