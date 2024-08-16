/**
 * JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.
 * It is not a separate language, but rather a way to write React elements, which are the building blocks of a React application.
 * JSX is not required for React, but it is the most common way to write React code.
 *
 * Example:
 * ```
 * const element = <div>Hello World!</div>;
 * ```
 * In this example, the JSX syntax `<div>Hello World!</div>` is used to create a React element that represents a `div` HTML element with the text "Hello World!".
 */
import React from "react";
/**
 * Creates a new React element.
 *
 * @param {string} type - The type of element to create (e.g. 'div', 'span', etc.)
 * @param {object} props - An object containing the props to pass to the element
 * @param {any} children - The children of the element (can be a string, a React element, or an array of React elements)
 * @returns {ReactElement} - The newly created React element
 */
const MyFirstelement = React.createElement(
  "div", //type
  {
    className: "container",
    style: {
      backgroundColor: "lightblue",
      padding: "20px",
      borderRadius: "5px",
    },
  }, //props
  // "Hello World!" //children
  React.createElement(
    "h1",
    {
      style: {
        color: "darkblue",
        fontSize: "24px",
        textAlign: "center",
      },
    },
    "Hello, World!"
  ), //children
  React.createElement("p", null, "This is a paragraph.") //children
);

export default MyFirstelement;
