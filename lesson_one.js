// Instructions and pre-requisite:

// 1. Make sure you have Node.js installed preferably LTS version on your system.You can download it from the official Node.js website: https://nodejs.org/en/download/ type (node --version) to verify node is installed.
// 2. Install VS Code: Install Visual Studio Code (VS Code) from the official website: https://code.visualstudio.com/ OR any other IDE
// 3. Install the Code Runner extension if you haven't already.
// 4. Write your JavaScript code
// 5. Press F5 or CTRL+F5 or click the "Run without debugging" OR "start debugging" button in the top menu to execute this file.
// 6. You should see the output "hello world !!" in the terminal or output panel.

console.log("hello world !!");

// ES6 features we will discuss in this lesson
// o Intro about js:
// JavaScript, often abbreviated as JS, is a programming language that helps make websites interactive.
// It's what allows web pages to respond to user actions, like clicking a button,
// filling out a form, or displaying dynamic content like animations or pop-up messages.
// JavaScript runs directly in your web browser, meaning it can change the way a page looks or behaves without needing to reload.
// It's a key tool for building modern, user-friendly websites and is widely used alongside HTML and CSS.

// o Nodejs:

// Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
// It allows developers to run JavaScript on the server-side, making it a popular choice for building server-side
// applications, such as web servers, APIs, and microservices.
// Node.js provides an event-driven, non-blocking I/O model that makes it lightweight and efficient,
// ideal for real-time web applications.
// It also has a vast ecosystem of packages and modules that can be easily installed and used in projects
// , making it a popular choice for building scalable and maintainable applications.

// o Arrow Functions and Template Literals ✅
// o Rest and Spread Operators
// o Classes and Inheritance
// o Static Methods and Properties
// o Iterators and Iterables
// o Generators

// o Arrow Functions:
// Arrow functions are a concise way to write function expressions in JavaScript and were introduced in ES6.
// They have a shorter syntax than traditional function expressions and can be used in a variety of situations.
// You don't need the function keyword, the return keyword, and the curly brackets.
// Arrow functions are often used when you need to pass a function as an argument to another function or
// return a function from a function.
// Difference with traditional function: "Hoisting", "this" keyword
// They are also useful when you need to create a small, one-time-use function.

// Here is an example of an arrow function:
// () => result

// step-1 const sum;
//step-2 const sum = () => result
//step-3 const sum = (a, b) => a + b
console.log(
  "<--------------------------Arrow functions section----------------------------->"
);

// console.log("Addition result before ::>", add(3, 4));

const add = (a, b) => a + b;

console.log("Addition result ::>", add(3, 4));
// Outputs: 7

// use of return keyword
const addUsingReturn = (a, b) => {
  // checking a and b is number
  if (typeof a !== "number" || typeof b !== "number") {
    return null;
  }
  return a + b;
};
console.log("addition Return result with error ::>", addUsingReturn("5", 4));
// Outputs: null because of string input "5"

console.log("AdditionUsing Return result ::>", addUsingReturn(5, 4));
// Outputs: 9

// It's equivalent to the following traditional function expression:

function sum(a, b) {
  return a + b;
}

console.log(
  "<--------------------------Template Literals section----------------------------->"
);

// o Template Literals:

// Template literals are a feature of JavaScript that allows you to create strings using a more readable syntax
// Template literals are a way to embed expressions within string literals, using backticks (`) instead of single or double quotes.
// They are similar to string concatenation, but they are more concise and easier to read.
// Here is an example of using template literals to create a string:
const name = "John";
const age = 30;
// concatenation
const person = "My name is " + name + " and I am " + age + " years old.";
console.log("concatenations section ::>", person);
// Outputs: My name is John and I am 30 years old.

// template literals
const personTemplate = `My name is ${name} and I am ${age} years old.`;
console.log("Template literals section ::>", personTemplate);
// Outputs: My name is John and I am 30 years old.

// o Rest and Spread Operators
console.log(
  "<--------------------------Rest and Spread Operators section----------------------------->"
);
