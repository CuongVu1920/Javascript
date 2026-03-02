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

sendRequest('GET', 'https://api01.f8team.dev/api/address/provinces', (responseText) => {
  const provinces = JSON.parse(responseText).data;
  const firstProvince = provinces[0];

  sendRequest('GET', `https://api01.f8team.dev/api/address/districts?province_id=${firstProvince.province_id}`, (responseText) => {

    const districts = JSON.parse(responseText).data;
    const firstDistrict = districts[0];

    console.log(firstDistrict);

      sendRequest('GET', `https://api01.f8team.dev/api/address/wards?province_id=${firstProvince.province_id}&district_id=${firstDistrict.district_id}`, (responseText) => {

        const wards = JSON.parse(responseText).data;
        const firstWard = wards[0];

        console.log(firstWard);
        
      });  
  });
});


// Promise