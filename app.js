// //console.log("Hello World!")
// //var name = "Alice";   // Function-scoped, hoisted - avoid in modern JS
// //let age = 25;    // Block-scoped, can be reassigned
// const PI = 3.14159;   // Block-scoped, cannot be reassigned

// let score = 0;
// score = 10;   //OK - reassignment allowed for let

// const MAX = 100;
// // MAX = 200;   //TypeError: Assignment to constant variable

// let homeAddress = "58 Somerset Terrace";   // Declared a new variable named homeAddress and assigned it my home address.
// let userAge = "30";   // Declared a new variable named userAge and assigned it the value of 30.   
// console.log(typeof homeAddress)

// // Arithmetic'
// 5 + 3 // 8  10 - 4 // 6   4 * 3 // 12
// 9 / 2 // 4.5  9 % 2 // 1  2 ** 3 // 8

// // Comparison - always perfer === over ==
// 5 === 5  // true  5 !== 3 // true (strict: checks type + value)
// 5 == "5" // true  5 === "5" // false (loose vs strict)
// 10 > 3   // true  4 <= 4   // true

// // Logical 
// true && false // false   true || false // true  !true // false

// // Assignment shorthands
// let x = 10;  x +=5; // 15   x -= 2; // 13   x *= 2; // 26

// const msg = "Hello, JavaScript!";

// msg.length                 // 18
// msg.toUpperCase()          // "HELLO, JAVASCRIPT!"
// msg.toLowerCase()          // "hello, javascript!"
// msg.includes("Java")       // true
// msg.startsWith("He")       // true
// msg.indexOf("Java")        // 7
// msg.slice(7, 17)           // "JavaScript"
// msg.replace("Hello", "Hi") // "Hi, JavaScript!"
// msg.split(", ")            // ["Hello", "JavaScript!"]
// "  hi  ".trim()            // "hi"

 

// console.log(msg.replace("Hello", "Hi"))

// const name = "Ali";
// const age = 25;

// // Old way - concatentaion (error-prone)
// const msg1 = "Hello, " + name + "! You are " + age + " years old.";

// // New way - template literal (clean and readable)
// const msg2 = `Hello, ${name}! You are ${age} years old.`;

// // Multi-line stings
// const html = `
//   <div class="card">
//     <h2>${name}</h2>
//     <p>Age: ${age}</p>
//   </div>
// `;

// // Any expression words inside ${}
// const total = `Price: ${(12.99 * 3).toFixed(2)}`;  //"Price: 38.97"

const msg = "Hello, JavaScript!";
console.log(msg)
console.log(`The length of message is = ${msg.length}`);

let fullName = "Ali Kahwaji";

// if / else if / else
const score = 75;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("Below C");
}

// switch - great for exact matches
const day = "Monday";
switch (day) {
    case "Monday":
    case "Tuesday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    default:
        console.log("Midweek");    
}
// Falsy values in JS (everything else is truthy): false | 0 | '' (empty string) | null | undefined | NaN