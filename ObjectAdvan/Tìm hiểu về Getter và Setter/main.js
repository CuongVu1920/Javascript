// #Getter và Setter

/**
 * - Getter: phương thức đặc biệt để đọc giá trị của một thuộc tính như thể đó là property thông thường
 * - Setter: phương thức đặc biệt để gán giá trị cho thuộc tính, có thể kèm logic kiểm tra hoặc xử lý trước khi lưu 
 */

/**
 * #Tác dụng chính:
 *  - kiểm soát cách dữ liệu được đọc/ghi
 *  - ẩn chi tiết lưu trữ nội bộ
 *  - thêm logic xử lý khi truy cập hoặc thay đổi dữ liệu
 */

// #Cú pháp trong object literal


// #Thuộc tính tính toán từ dữ liệu khác

// const cartItem = {
//   price: 20000,
//   quantity: 3,

//   get total() {
//     return this.price * this.quantity;
//   }
// };

// console.log(cartItem.total); // 60000

// # Ẩn cấu trúc lưu trữ

const settings = {
  _data: {},

  get theme() {
    return this._data.theme || 'light';
  },

  set theme(value) {
    if (!['light', 'dark'].includes(value)) {
      throw new Error('Theme không hợp lệ');
    }
    this._data.theme = value;
  }
};

console.log(settings.theme); // "light"
settings.theme = 'dark';
console.log(settings.theme); // "dark"

//  => Ý nghĩa: bên ngoài chỉ làm việc với theme, không cần biết dữ liệu thật được lưu ở _data.