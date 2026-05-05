// Private field

class User {
    #password;
    constructor(email, password) {
        this.email = email;
        this.#password = password;
    }

    
    checkPassword(input) {
        return this.#password === input;
    }
}

const user = new User("user@example.com", "password123");

console.log(user.#password); // Output: password123
console.log(user.checkPassword("password123")); // Output: true
console.log(user.checkPassword("wrongpassword")); // Output: false


// Ví dụ về speard và rest 

function sum(...numbers) { // đây là rest
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5)); // Output: 9


// ví dụ về spread

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2]; // đây là spread
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// Shorthand properties: {name, age} thay vì {name: name, age: age}
// Shorthand methods: {add(a, b) { return a + b }}
// Computed properties: {[dynamicKey]: value}


// ví dụ: Shorthand properties

const name = "Alice";
const age = 30;

const userInfo = { name, age }; // Shorthand properties
console.log(userInfo); // Output: { name: 'Alice', age: 30 }

// ví dụ: Shorthand methods

const calculator = {
    add(a, b) { // Shorthand method
        return a + b;
    }
};

console.log(calculator.add(5, 3)); // Output: 8


// ví dụ: Computed properties

const dynamicKey = "email";
const value = "user@example.com";
const user = {
    [dynamicKey]: value
};
console.log(user); // Output: { email: 'user@example.com' }


// Optional Chaining & Nullish Coalescing:

// ?.: Truy cập an toàn - user?.address?.street
// ??: Gán mặc định chỉ với null/undefined - value ?? "default"


// Ví dụ về Optional Chaining

const user = {
    name: "Alice",
    address: {
        street: "123 Main St",
        city: "Anytown"
    }
}

console.log(user?.address?.street); // Output: "123 Main St"
console.log(user?.contact?.phone); // Output: undefined

// => Optional chaining giúp tránh lỗi khi truy cập vào các thuộc tính không tồn tại, thay vì trả về lỗi, nó sẽ trả về undefined.

// Ví dụ về Nullish Coalescing

const input = null;
const defaultValue = "Default Value";

const result = input ?? defaultValue; // Output: "Default Value"
console.log(result);

const anotherInput = 0;
const anotherResult = anotherInput ?? defaultValue; // Output: 0
console.log(anotherResult);

// => Nullish coalescing chỉ gán giá trị mặc định khi giá trị là null hoặc undefined, không phải là falsy như 0, "", false.

/**
 * nghĩa là Nullish Coalescing sẽ chỉ gán giá trị mặc định khi giá trị là null hoặc undefined, 
 * trong khi các giá trị falsy khác như 0, "", false sẽ được giữ nguyên. 
 * Điều này giúp tránh việc gán giá trị mặc định không mong muốn khi giá trị thực tế là một giá trị falsy hợp lệ.
 * 
 *  - nó sẽ ưu tiên giá trị thực tế nếu nó không phải là null hoặc undefined, ngay cả khi nó là một giá trị falsy như 0, "", hoặc false.
 * - nếu giá trị thực tế là null hoặc undefined, thì nó sẽ gán giá trị mặc định.
 * 
 * Ví dụ:
 * const input = 0;
 * const defaultValue = "Default Value";
 * const result = input ?? defaultValue; // Output: 0
 * console.log(result);
 * 
 * Trong ví dụ này, mặc dù input là 0 (một giá trị falsy), nhưng vì nó không phải là null hoặc undefined, nên result sẽ được gán giá trị 0 thay vì "Default Value".
 * 
 * Nếu chúng ta sử dụng toán tử || thay vì ??, thì kết quả sẽ khác:
 * const result = input || defaultValue;
 * console.log(result); // Output: "Default Value"
 * 
 * Trong trường hợp này, vì input là 0 (một giá trị falsy), nên result sẽ được gán giá trị 
 * "Default Value" thay vì 0, điều này có thể không mong muốn nếu chúng ta muốn giữ nguyên giá trị 0.
 * 
 * Do đó, Nullish Coalescing giúp chúng ta kiểm soát tốt hơn khi nào nên gán giá trị mặc định, 
 * chỉ trong trường hợp giá trị thực tế là null hoặc undefined, mà không ảnh hưởng đến các giá trị falsy hợp lệ khác.
 * 
 */