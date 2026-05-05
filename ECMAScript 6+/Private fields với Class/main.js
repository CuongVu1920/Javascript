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
