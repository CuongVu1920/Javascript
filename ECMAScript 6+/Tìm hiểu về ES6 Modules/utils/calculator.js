const calculator = {
    multiply(a, b) {
        return a * b;
    }
};

export default calculator;

/**
 * Lưu ý: 
 *  Một module có thể có một export default và nhiều export thường. 
 *  Khi import, chúng ta có thể đặt tên bất kỳ cho export default, nhưng phải sử dụng đúng tên khi import các export thường.
 * 
 * - default export: chỉ có một default export trong một module, được sử dụng khi muốn export một giá trị chính hoặc một đối tượng duy nhất.
 * - named export: có thể nhiều named export trong một module, được sử dụng khi muốn export nhiều giá trị hoặc chức năng khá nhau.
 */