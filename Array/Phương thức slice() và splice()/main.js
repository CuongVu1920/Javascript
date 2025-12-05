// -- Phương thức slice() -- 

/**
 *  - Phương thức slice() tạo một bản sao hoặc trích xuất một phần của mảng ban đầu mà không làm thay đổi mảng ban đầu. Nó trả về
 *    một mảng mới chứa các phần tử được trích xuất từ mảng gốc
 * 
 * Cú pháp: array.slice(start, end);
 *  - slice(): Trích xuất toàn bộ mảng.
 *  - slice(start): trích xuất mảng bắt đầu từ chỉ số "start" đến cuối mảng
 *  - slice(start, end): trích xuất một phần của mảng từ chỉ số "start" đến trước chỉ số "end".
 */

// VD1:

let fruits = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Papaya"
];

let result = fruits.slice(2, 4);

console.log(result); // (2) ['Mango', 'Orange']

/**
 * - slice() rất hữu ích khi bạn cần tạo 1 bản sao nhanh chóng của một phần mảng mà không muốn thay đổi mảng gốc. Nó cho phép bạn
 *  + trích xuất một phần của mảng mà không gây ảnh hưởng đến mảng ban đầu
 *  + tạo bản sao của mảng để thực hiện thao tác trên đó mà không làm ảnh hưởng dữ liệu mảng ban đầu.
 */

//# Cách làm việc với slice()
 
// 1. Tạo bản sao của toàn bộ mảng

let numbers = [1, 2, 3, 4];

let copyOfNumbers = numbers.slice();

console.log(copyOfNumbers); // (4) [1, 2, 3, 4] => lúc này việc chỉnh sửa vào mảng copyOfNumbers không ảnh hưởng tới mảng gốc.

// 2. Trích xuất một phần của mảng: bạn có thể trích xuất một phần của mảng bằng cách chỉ định chỉ số bắt đầu và kết thúc giống như ví dụ đầu

// 3. Sử dụng chỉ số âm: slice() cũng hỗ trợ chỉ số âm, nơi -1 đại diện cho phần tử cuối cùng của mảng.

// VD

  let numbers2 = [1,2,3,4,5];

  let result2 = numbers2.slice(-3); 

  console.log(result2); // (3) [3, 4, 5]

  /**
   * - Ví dụ, bạn có thể có một danh sách thông báo và chỉ muốn hiển thị 5 thông báo mới nhất trên giao diện bạn có thể sử dụng array.slice(-5)
   *   để lấy ra mảng mới gồm 5 phần tử cuối cùng của mảng.
   */
  

// -- Phương thức splice() -- 

/**
 * - Phương thức splice() được sử dụng để thêm hoặc loại bỏ các phần tử trong một mảng, nó hữu ích khi muốn thêm và loại bỏ phần tử tại bất
 *   kỳ vị trí nào trong mảng. Phương thức này sẽ sửa đổi vào mảng ban đầu.
 * 
 * - Cú pháp:
 *        array.splice(start, deleteCount, item1, item2, ...);
 * 
 * + start: chỉ định vị trí bắt đầu thêm hoặc loại bỏ phần tử trong mảng. Nếu vị trí này âm thì "start" sẽ được tính từ cuối mảng
 * + deleteCount(tùy chọn): số lượng phần tử cần loại bỏ, bắt đầu từ vị trí "start". Nếu "deleteCount" bị bỏ qua hoặc lớn hơn số phần
 *   tử còn lại từ vị trí "start" đến cuối mảng, thì tất cả các phần tử từ "start" đến cuối mảng sẽ bị loại bỏ. Nếu deleteCount là 0, 
 *   phương thức này sẽ không xóa bất kỳ phần tử nào nhưng vẫn có thể thêm các phần tử mới vào mảng tại vị trí chỉ định.
 * + item1, item2, ... (tùy chọn): các phần tử cần được thêm vào mảng, bắt đầu từ vị trí start. 
 *   Nếu không có phần tử nào được thêm, splice() chỉ đơn giản loại bỏ các phần tử khỏi mảng.
 * 
 */

// #Cách làm việc với splice()

// 1. Thêm phần tử vào mảng

 /**
  * - để thêm một hoặc nhiều phần tử vào mảng, bạn chỉ cần đặt deleteCount thành 0 và thêm các phần tử sau đó.
  */

 // VD: 

  let numbers3 = [1, 2, 4, 5];

  // Thêm số 3 vào vị trí index 2
  numbers3.splice(2, 0, 3); 

  console.log(numbers3); // (5) [1, 2, 3, 4, 5]

  /**
   * - Trường hợp thêm một hoặc nhiều phần tử vào đầu mảng hoặc cuối mảng bạn có thể dùng "unshift()" và "push" cho ngắn gọn và đơn giản.
   *   Tuy nhiên, trường hợp cần thêm một or nhiều phần tử vào các vị trí khác bạn sẽ cần sử dụng tới "splice()".
   */

  // 2. Loại bỏ phần tử từ mảng

  /**
   * - bạn có thể loại bỏ phần tử khỏi mảng bằng cách chỉ định số lượng phần tử cần loại bỏ mà không cần thêm phần tử mới
   */

  let animals = ["dog", "cat", "chicken", "fizz"];

  animals.splice(1, 2);

  console.log(animals); // (2) ['dog', 'fizz']

  /**
   * Sử dụng shift() và pop() chỉ hiệu quả trong tình huống cần loại bỏ một phần tử ở đầu hoặc cuối mảng. 
   * Trong tình huống cần loại bỏ một hoặc nhiều phần tử liên tiếp nhau ở các vị trí khác bạn sẽ cần sử dụng tới splice().
   */
  

  // 3. Thay thế phần tử trong mảng

   let animals2 = ["dog", "cat", "chicken", "fizz"];

   animals2.splice(1, 2, "meo meo", "ga");

   console.log(animals2); // (4) ['dog', 'meo meo', 'ga', 'fizz']

  // ---Note---: 
  // - Đừng sử dụng delete để xóa phần tử trong mảng sẽ tạo ra “lỗ trống”. 
  //   Hãy dùng splice() để loại bỏ phần tử mà không để lại “lỗ trống”.
   
  
