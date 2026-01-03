// UTF - 8

 // Unicode Transformation Format

 // Unicode: Universal Code

 // "A" -> 65
 // "B" -> 66
 // "C" -> 67
 // ...
 // "Z" -> 90


 // "a" -> 97
 // "b" -> 98
 // "c" -> 99
 // ...
 // "z" -> 122

 let char = "J";

 console.log(char >= "A" && char <= "Z"); // true

 // A - Z

let code = char.charCodeAt(0);

console.log(code >= 65 && code <= 90); // true



 console.log("ABC".charCodeAt(0)); // 65
 console.log("ABC".charCodeAt(1)); // 66

 console.log(String.fromCharCode(65, 90)); // AZ
 
 