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
import MyFirstelement from "./elements/element";
import Login from "./pages/Login";

function App() {
  const user = {
    name: "John Doe",
    isLoggedIn: true,
    isAdmin: true,
  };

  return (
    <React.Fragment>
      {/*Use of LOGICAL AND operator to conditional render*/}
      {user.isLoggedIn && MyFirstelement}

      {(user.isLoggedIn || user.isAdmin) && <p>{user.name}</p>}

      {/*Use of LOGICAL AND and NOT operator*/}
      {!user.isLoggedIn && <Login />}

      {/* {user.isLoggedIn ? MyFirstelement : <Login />} */}
    </React.Fragment>
  );
}

export default App;
