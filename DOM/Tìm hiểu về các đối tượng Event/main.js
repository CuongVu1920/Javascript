const button = document.getElementById('button');

button.onclick = function(event) {
    console.log('Button clicked!');
    console.log(event);
    
}

button.addEventListener('click', function(event) {
    console.log('Button clicked - addEventListener!');
    console.log(event);
});

// Từ khóa this trong hàm xử lý sự kiện
button.onclick = function(event) {
    console.log("this:", this); // this tham chiếu đến button
    this.style.backgroundColor = 'red';
}