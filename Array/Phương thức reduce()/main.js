  
  Array.prototype.myReduce = function(callback, initialValue) {

    // 'this' ở đây chính là mảng gọi hàm myReduce

    let accumulator = initialValue; // Giá trị tích lũy
    let startIndex = 0; // vị trí bắt đầu

    // Nếu không có initialValue, lấy phần tử đầu tiên làm accumulator
    if(accumulator === undefined) {
      accumulator = this[0];
      startIndex = 1;
    }

    const length = this.length;
    for(let i = startIndex; i < length; i++) {
      if(i in this ) {
        accumulator = callback.call(undefined, accumulator, this[i], i, this);
      }
    }
    return accumulator;
  }


// #Phương thức reduce() là gì?

/**
 * - phương thức reduce() là một phương thức của mảng trong JS, dùng để thực hiện một hàm lên từng phần tử của mảng (từ trái sang phải)
 *   để rút ra một giá trị duy nhất. Nó thường được dùng để rút ra một giá trị duy nhất. Nó thường được dùng để tính
 *   tổng, tính tích hoặc kết hợp các phần tử của mảng theo cách thức tùy ý.
 * 
 * - Cú pháp:
          const result = array.reduce(callbackFunction(accumulator, currentValue, currentIndex, array) {
            // Trả về giá trị tích lũy
          }, initialValue);

    - accumulator: giá trị tích lũy được trả lại từ lần gọi hàm trước. Trong lần gọi đầu tiên, nếu initialValue được cung cấp,
                   accumulator sẽ bằng initialValue, nếu không sẽ bằng phần tử đầu tiên của mảng.
    - currentValue: giá trị của phần tử hiện tại đang được xử lý trong mảng.
    - currentIndex: (tùy chọn): Index của phần tử hiện tại đang được xử lý. Nếu
    - initialValue: được cung cấp, duyệt từ index 0; nếu không, duyệt từ index 1.
    - array (tùy chọn): Mảng mà reduce() đang được áp dụng.
    - initialValue (tùy chọn): Giá trị khởi tạo ban đầu cho accumulator. Nếu không cung cấp, 
      accumulator sẽ nhận giá trị của phần tử đầu tiên trong mảng, và duyệt mảng bắt đầu từ phần tử thứ hai (index 1).

    - Phương thức reduce sẽ bỏ qua các phần tử trống (empty element) trong mảng.
  
 */

  const numbers = [1, 2, 3, 4];
  const sum = numbers.myReduce((total, number, index, arr ) => {
    console.log(`Index ${index}: total = ${total}, number = ${number}`);
    return total + number;
  }, 0); // initialValue là 0

  console.log(sum); // Kết quả: 10

  /**
   * - trong ví dụ trên, reduce() tính tổng các số trong mảng "numbers". Với mỗi lần lặp, hàm được gọi và giá trị của total và number được in ra.
   *   giá trị khởi tạo 0 cho total được sử dụng trong lần gọi đầu tiên của hàm.
   * 
   * - Sử dụng reduce() không chỉ giúp bạn tính toán các kết quả từ một mảng, mà còn cho phép bạn thực hiện các xử lý 
   *   phức tạp hơn như chuyển đổi cấu trúc dữ liệu, tổng hợp thông tin, và hơn thế nữa.
   */

// #Các cách làm việc với reduce()

  //Tính tổng sản phẩm

  const products = [
    { name: "iPhone", price: 100 },
    { name: "iPad", price: 200 },
    { name: "Macbook", price: 300 }
  ];

  const total = products.myReduce((sum, product) => {
    return sum + product.price;
  }, 0);

  console.log(total); // 600

  // Tính tổng giá trị đơn hàng

  const order = {
  code: "#DH001",
    products: [
      { name: "iPhone", price: 100, quantity: 1 },
      { name: "iPad", price: 200, quantity: 3 },
      { name: "Macbook", price: 300, quantity: 2 }
    ]
  };

  const total2 = order.products.reduce((sum, product) => {
    return sum + product.price;
  }, 0);

  console.log(total2); // 600

  // Tạo một object với các giá trị ban đầu và số lần xuất hiện

  const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

  const count = items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    
    return acc;
  }, {});


  console.log(count);


  