console.log("Hello World!")
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
