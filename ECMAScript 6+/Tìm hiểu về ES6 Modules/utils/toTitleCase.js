export default function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => {
            if (word.length === 0) return '';
            return word[0].toUpperCase() + word.slice(1);
        })
        .join(' ');
}

/**
 * Hàm toTitleCase nhận một chuỗi và chuyển đổi nó thành dạng Title Case, tức là mỗi từ trong chuỗi sẽ có chữ cái đầu tiên viết hoa và các chữ cái còn lại viết thường.
 * 
 * Ví dụ:
 * toTitleCase("hello world") sẽ trả về "Hello World"
 * toTitleCase("javascript is awesome") sẽ trả về "Javascript Is Awesome"
 * 
 * Hàm sử dụng phương thức replace với biểu thức chính quy để tìm tất cả các từ trong chuỗi và áp dụng hàm chuyển đổi cho từng từ.
 */