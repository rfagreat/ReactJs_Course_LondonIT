import React, { useEffect, useState } from "react";

// Hooks were introduced in react 16 in functional components
function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  // Lifecycle of component
  // Perform side effects like API calls here

  useEffect(() => {
    console.log("component mounted");
    return () => {
      console.log("component unmounted");
    };
  }, []);

  return (
    <div>
      <p>Functional Component</p>
      <p>Count: {count}</p>
      <button onClick={handleClick} type="button">
        click me
      </button>
      ;
    </div>
  );
}

export default Counter;
