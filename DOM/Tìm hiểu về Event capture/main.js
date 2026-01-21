// #3 giai đoạn khi mà xảy ra một sự kiện (event) trong DOM:
// 1. Giai đoạn capturing (giai đoạn bắt đầu từ thẻ gốc document đi xuống đến thẻ đích)
// 2. Giai đoạn target (giai đoạn sự kiện xảy ra trên thẻ đích)
// 3. Giai đoạn bubbling (giai đoạn từ thẻ đích đi ngược lên thẻ gốc document)

// Mặc định, khi thêm sự kiện vào một phần tử trong DOM, sự kiện đó sẽ được lắng nghe trong giai đoạn bubbling.
// Tuy nhiên, ta có thể thay đổi điều này để lắng nghe sự kiện trong giai đoạn capturing bằng cách truyền thêm đối 
// số thứ ba là true vào phương thức addEventListener.

const parent = document.getElementById('parent');
const button = document.getElementById('button');

parent.addEventListener('click', function (e) {
  console.log('Parent clicked - capturing phase');

  e.stopPropagation(); // Ngăn chặn sự kiện tiếp tục lan truyền
}, true); // Thêm true để lắng nghe trong giai đoạn capturing

button.addEventListener('click', function (e) {
  console.log('Button clicked - target phase');
});

// Ví dụ 2:
const child = document.getElementById('child');

parent.addEventListener('click', function (e) {
  console.log('Parent clicked - capturing phase');
}, true); // Lắng nghe trong giai đoạn capturing

child.addEventListener('click', function (e) {
  console.log('Child clicked - target phase');
});

// Khi bạn click vào nút button trong ví dụ 1, bạn sẽ thấy thông báo từ sự kiện của parent được in ra trước, 
// chứng tỏ rằng sự kiện đã được lắng nghe trong giai đoạn capturing.

// Tương tự, khi bạn click vào phần tử child trong ví dụ 2, bạn sẽ thấy thông báo từ sự kiện của parent 
// được in ra trước, chứng tỏ rằng sự kiện đã được lắng nghe trong giai đoạn capturing.

// Lưu ý: Việc sử dụng capturing có thể làm phức tạp quá trình xử lý sự kiện,
// vì vậy hãy sử dụng nó một cách cẩn thận và chỉ khi thực sự cần thiết.

// Ung dụng thực tế của event capturing có thể bao gồm việc triển khai các hệ thống quản lý sự kiện phức tạp,
// nơi mà bạn muốn kiểm soát chính xác thứ tự xử lý sự kiện trên các phần tử cha con trong DOM. 
