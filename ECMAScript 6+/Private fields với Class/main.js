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