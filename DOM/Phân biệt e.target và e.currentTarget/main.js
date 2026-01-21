// target trả về phần tử nơi phát ra sự kiện
// currentTarget trả về phần tử đang lắng nghe sự kiện


const parent = document.querySelector('#parent');

parent.addEventListener('click', function(e) {
  console.log('e.target:', e.target); // trả về đối tượng phát ra sự kiện
  console.log('e.currentTarget:', e.currentTarget); // trả về đối tượng đang lắng nghe sự kiện
});