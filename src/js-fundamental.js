// Slide 13: JavaScript Environments
console.log("Hello from the browser!");

// Slide 14: Adding JavaScript to Websites
// (Ini lebih cocok ditunjukkan di index.html, tapi kita simulasikan di sini)
const simulateScriptTag = () => {
  console.log("This is like adding JS via <script> tag!");
};
simulateScriptTag();

// Slide 15: Variables and Constants
let name = "Max"; // Can change
const age = 30;   // Cannot change
name = "Anna";    // OK
console.log("Name:", name); // "Anna"
// age = 31;      // Error!
console.log("Age:", age);   // 30

// Slide 16: Functions and Arrow Functions
function greet(name) {
  return "Hello, " + name;
}
const greetArrow = (name) => "Hello, " + name;
console.log(greet("Max"));      // "Hello, Max"
console.log(greetArrow("Max")); // "Hello, Max"

// Slide 17: Objects
const user = {
  name: "Max",
  age: 30,
  greet() {
    console.log("Hi, I’m " + this.name);
  }
};
console.log("User name:", user.name); // "Max"
user.greet();                         // "Hi, I’m Max"

// Slide 18: Arrays
const hobbies = ["Sports", "Cooking"];
console.log("First hobby:", hobbies[0]); // "Sports"
hobbies.push("Reading");
console.log("All hobbies:", hobbies);    // ["Sports", "Cooking", "Reading"]

// Slide 19: Control Structures
const password = "Hello";
if (password === "Hello") {
  console.log("Access granted");
} else {
  console.log("Access denied");
}
const numbers = [1, 2, 3];
for (const num of numbers) {
  console.log("Number:", num); // 1, 2, 3
}

// Slide 20: Modern JavaScript Features
// Destructuring
const [first, second] = ["Sports", "Cooking"];
console.log("First hobby (destructured):", first); // "Sports"
// Spread Operator
const moreHobbies = [...hobbies, "Reading"];
console.log("More hobbies with spread:", moreHobbies); // ["Sports", "Cooking", "Reading", "Reading"]