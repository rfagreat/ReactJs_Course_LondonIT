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
// o Rest and Spread Operators ✅
// o Classes and Inheritance ✅
// o Static Methods and Properties ✅
// o Iterators and Iterables
// o Generators

// o Classes and Inheritance
console.log(
  "<--------------------------Classes and Inheritance----------------------------->"
);

// Classes in js:
// Classes are blueprints or templates for creating objects.Classes are used to define the properties and methods of an object.
// Classes in JavaScript are a template for creating objects. They encapsulate data with code to work on that data.
// In JavaScript, classes are primarily syntactic sugar over the existing prototype-based inheritance, but they make the code easier to understand and work with.

// Inheritance is a mechanism by which one class can inherit properties and methods from another class.
// This allows for code reuse and can make your codebase more manageable.

class Animal {
  constructor(name, animalType, sound) {
    this.name = name;
    this.animalType = animalType;
    this.sound = sound;
  }

  animalDetail() {
    return `This animal belongs to ${this.animalType} has name ${this.name} and make sound like ${this.sound}`;
  }
}

//step 1: initializing animal class with name cat
const cat = new Animal("Tom", "Mammal", "meo meo ....");

console.log("cat ::>", cat, "\n");

const catDetails = new Animal("Tom", "Mammal", "meo meo ....").animalDetail();
console.log("cat-details ::>", catDetails, "\n");

// Inheritance
// Inheritance is a mechanism by which one class can inherit properties and methods from another class(Parent class).
// The class that inherits the properties and methods is called the child class or subclass.

class Dog extends Animal {
  constructor(name, animalType, sound, color) {
    super(name, animalType, sound);
    this.color = color;
  }
  speak() {
    const color = this.color;
    const name = this.name;
    const type = this.animalType;
    console.log(
      `This is a dog belongs to ${type} has name ${name} and make sound like ${this.sound} and has color ${color}\n`
    );
  }
}
const dog = new Dog("Bulldog", "Mammal", "wof wof wof", "brown");
console.log("parent method call", dog.animalDetail(), "\n");
dog.speak();

// o Static Methods and Properties

// Static methods and properties are methods and properties that belong to the class itself, not to instances of the class.

// Example
class Calculator {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }
}

console.log("addition ::>", Calculator.add(4, 9), "\n");
console.log("subtraction ::>", Calculator.subtract(9, 5), "\n");

// Static properties
class Circle {
  //static property
  static pi = 3.14159;

  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    // area of circle = pie r square
    return Circle.pi * this.radius * this.radius;
  }
}

const circle = new Circle(5);
console.log("area of circle ::>", circle.getArea()); // Output: 78.53975

// o Iterators and Iterables
// Iterators and iterables are used to loop over data structures such as arrays, objects, and sets.

// Iterables:
// An iterable is an object that implements the @@iterator method, meaning it has a Symbol.iterator property.
//  This method should return an iterator, which can then be used to step through the items of the iterable.

// Examples of Iterables:
// 1.Arrays
// 2. Sets
// 3. Maps
// 4. Strings
// 5. DOM collections (e.g., NodeList, HTMLCollection)

// Example of an Iterable (Array):

const numbers = [1, 2, 3];
for (const number of numbers) {
  console.log("loop one number::>", number); // Output: 1, 2, 3 (in sequence)
}

// OR
for (let i = 0; i < numbers.length; i++) {
  console.log("loop two number::>", numbers[i]); // Output: 1, 2, 3 (in sequence)
}

// In this example, the array of numbers is an iterable, and the for...of loop/for-loop is used to iterate over its elements.

// Example of set/object
const obj = { name: "john", age: 34, address: "street 1 London" };

for (const key in obj) {
  console.log("key:", key); // Output: key: name, key: age, key: address
  console.log("value:", obj[key]); // Output: value: john, value: 34, value: street 1 London
}

// Iterators:
// An iterator is an object that conforms to the iterator protocol, which means it has a next() method that returns an object with two properties:

// value: the next value in the sequence.
// done: a boolean indicating whether the iteration is complete (i.e., whether there are more values to iterate over).
// Iterators: Objects that follow the iterator protocol. They have a next() method that returns an object with value and done properties.

// Example of Iterators 1:

function makeCounter() {
  // initial count
  let count = 0;
  //  closure property and making cache in back of the scene using closure
  return {
    next() {
      count++;
      return { value: count, done: count > 5 };
    },
  };
}

const counter = makeCounter();

console.log(counter.next()); // Output: { value: 1, done: false }
console.log(counter.next()); // Output: { value: 2, done: false }
console.log(counter.next()); // Output: { value: 3, done: false }
console.log(counter.next()); // Output: { value: 4, done: false }
console.log(counter.next()); // Output: { value: 5, done: false }
console.log(counter.next(), "\n"); // Output: { value: 6, done: false }

// The makeCounter function returns an iterator with a next() method.
// Each call to next() returns the next number in the sequence and indicates whether the iteration is complete using the done property.

// Example 2 of Iterators:
function makeRangeIterator(start = 0, end = 10, step = 1) {
  let current = start;
  let last = end;

  return {
    next() {
      if (current < last) {
        let value = current;
        current += step;
        return { value: value, done: false };
      } else {
        return { done: true };
      }
    },
  };
}

const it = makeRangeIterator(1, 5);

console.log(it.next()); // Output: { value: 1, done: false }
console.log(it.next()); // Output: { value: 2, done: false }
console.log(it.next()); // Output: { value: 3, done: false }
console.log(it.next()); // Output: { value: 4, done: false }
console.log(it.next(), "\n"); // Output: { value: undefined, done: true }
