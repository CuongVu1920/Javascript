const link = document.getElementById('link');

link.addEventListener('click', function(event) {

    if(!event.target.href.startsWith('https://fullstack.edu.vn')) {
        event.preventDefault();
        window.open(event.target.href);
    }
});

// window.open(event.target.href);// mở URL trong tab mới
// window.location.assign(event.target.href); // nghĩa là chuyển hướng trang hiện tại đến URL mới

  // if(!event.target.href.startsWith('https://fullstack.edu.vn')) {
  //       event.preventDefault();
  //       window.open(event.target.href);
  //   }

  // nghĩa là kiểm tra nếu href của thẻ a không bắt đầu bằng 'https://fullstack.edu.vn' thì sẽ ngăn chặn hành vi mặc định 
  // của thẻ a bằng cách sử dụng event.preventDefault  (chuyển hướng trang hiện tại) và thay vào đó mở liên kết trong một tab mới.