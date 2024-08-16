// Specifying attributes and children

import React from "react";
/**
 * Creates a new Button React element with event.
 *
 * @param {string} type - The type of element to create (e.g. 'div', 'span','Button', etc.)
 * @param {object} props - Specifying Attributes (Props) An object containing the props to pass to the element
 * @param {any} children - The children of the element (can be a string, a React element, or an array of React elements)
 * @returns {ReactElement} - The newly created React element
 */

// Function to create and return the React element
const ButtonElement = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return React.createElement(
    "button",
    {
      onClick: handleClick, //event handler
      className: "btn btn-primary", //setting class
      style: {
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
      }, //setting styles
    }, // props and  attributes
    "Click Me" // children this can be string,element or multiple elements.
  );
};

export default ButtonElement;
