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
// o Classes and Inheritance
// o Static Methods and Properties
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
