//console.log("Hello World!")
var name = "Alice";   // Function-scoped, hoisted - avoid in modern JS
let age = 25;    // Block-scoped, can be reassigned
const PI = 3.14159;   // Block-scoped, cannot be reassigned

let score = 0;
score = 10;   //OK - reassignment allowed for let

const MAX = 100;
// MAX = 200;   //TypeError: Assignment to constant variable

let homeAddress = "58 Somerset Terrace";   // Declared a new variable named homeAddress and assigned it my home address.
let userAge = "30";   // Declared a new variable named userAge and assigned it the value of 30.   
console.log(typeof homeAddress)

// Arithmetic'
5 + 3 // 8  10 - 4 // 6   4 * 3 // 12
9 / 2 // 4.5  9 % 2 // 1  2 ** 3 // 8

// Comparison - always perfer === over ==
5 === 5  // true  5 !== 3 // true (strict: checks type + value)
5 == "5" // true  5 === "5" // false (loose vs strict)
10 > 3   // true  4 <= 4   // true

// Logical 
true && false // false   true || false // true  !true // false

// Assignment shorthands
let x = 10;  x +=5; // 15   x -= 2; // 13   x *= 2; // 26

const msg = "Hello, JavaScript!";

msg.length                 // 18
msg.toUpperCase()          // "HELLO, JAVASCRIPT!"
msg.toLowerCase()          // "hello, javascript!"
msg.includes("Java")       // true
msg.startsWith("He")       // true
msg.indexOf("Java")        // 7
msg.slice(7, 17)           // "JavaScript"
msg.replace("Hello", "Hi") // "Hi, JavaScript!"
msg.split(", ")            // ["Hello", "JavaScript!"]
"  hi  ".trim()            // "hi"

console.log("The length of message is = " + msg.length) 

console.log(msg.replace("Hello", "Hi"))