// Garbage Collection (GC) 

/**
 * # Garbage Collection là gì?
 *  - Garbage Collection (GC) là cơ chế tự động dọn dẹp bộ nhớ Js. Hãy tưởng tượng bạn đang nấu ăn trong bếp - bạn dùng xong nồi niêu,
 *    xoong chảo thì cần rửa sạch để có chỗ cho lần sau. GC trong Js cũng vậy, nó tự động "rửa sạch" những vùng nhớ không còn được sử dụng
 *    để chương trình có thể sử dụng lại bộ nhớ đó cho các tác vụ khác.
 * 
 *  - Điểm khác biệt là trong C hay C++, bạn phải tự quản lý bộ nhớ, tức là bạn phải nhớ để giải phóng bộ nhớ khi không còn sử dụng nữa. 
 *      Trong khi đó, GC trong Js sẽ tự động làm điều này cho bạn.
 **/

/**
 * # Tạ sao cần Garbage Collection?
 *   - Khi code Js chạy, mọi biến, object, function đều chiếm một vùng nhớ. Nếu không có GC, bộ nhớ sẽ cứ tăng dần cho đến khi hết, làm ứng dụng
 *     crash hoặc chậm như rùa bò.
 * 
 *    Ví dụ: Không có GC, code này sẽ làm tràn bộ nhớ:
 */

function createData() {
    const hugeArray = new Array(1000000).fill('some data');
     // Nếu không có GC, hugeArray vẫn chiếm bộ nhớ
     // ngay cả khi function kết thúc và không còn sử dụng hugeArray nữa
}

for (let i = 0; i < 100; i++) {
    createData();
    // Mỗi lần gọi createData, một mảng lớn được tạo ra và chiếm bộ nhớ
    // Nếu không có GC, bộ nhớ sẽ tăng dần và cuối cùng sẽ hết
}

/**
 *  # Cách Garbage Collection hoạt động?
 *    - JS sử dụng thuật toán Mark-and-Sweep (đánh dấu và quét) làm cơ chế chính:
 *          1. Mark (Đánh dấu): GC sẽ duyệt qua tất cả các biến, object, function đang được sử dụng và đánh dấu chúng là "đang sử dụng".
 *          2. Sweep (Quét): Sau khi đánh dấu xong, GC sẽ quét qua bộ nhớ và giải phóng những vùng nhớ không được đánh dấu, tức là những thứ không còn
 *             được sử dụng nữa.
 * 
 *    - Ngoài ra, còn có các thuật toán khác như Reference Counting (đếm tham chiếu), nhưng Mark-and-Sweep là phổ biến nhất trong các trình duyệt hiện đại.
 * 
 *  # Kết luận:
 *    - Garbage Collection giúp quản lý bộ nhớ hiệu quả, tránh tình trạng tràn bộ nhớ và giúp ứng dụng chạy mượt mà hơn. Tuy nhiên, nó cũng
 */

// Ví dụ về việc GC tự động dọn dẹp bộ nhớ:

let user = {
    name: "John",
    age: 30
};

let admin = user; // admin cũng tham chiếu đến object user

user = null; // user không còn tham chiếu đến object nữa
// Tuy nhiên, admin vẫn tham chiếu đến object đó, nên GC sẽ không dọn dẹp bộ nhớ

admin = null; // admin cũng không còn tham chiếu đến object nữa
// Lúc này, GC sẽ đánh dấu object là "không sử dụng" và sẽ dọn dẹp bộ nhớ trong lần quét tiếp theo

