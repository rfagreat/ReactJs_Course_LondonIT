import React, { useCallback, useMemo, useState } from "react";

/**
 * A React component that demonstrates the use of `useMemo` to memoize an expensive computation.
 *
 * The `ExpensiveComponent` takes two props `a` and `b` and computes their sum using an expensive calculation.
 * The result is memoized using `useMemo` so that it's only recomputed when the dependencies `a` and `b` change.
 *
 * @example
 * <ExpensiveComponent a={10} b={20} onCompute={(a, b) => a + b} /> // Computes and displays the sum of 10 and 20
 * @param {number} a The first number to add
 * @param {number} b The second number to add
 * @param {function} onCompute A function that computes the sum of `a` and `b`
 * @returns {JSX.Element} A React element displaying the computed value
 */
const ExpensiveComponent = ({ a, b }) => {
  /**
   * Memoize the compute function to prevent recreation on every render
   *
   * @param {number} a The first number to add
   * @param {number} b The second number to add
   * @returns {number} The sum of `a` and `b`
   */
  const computeExpensiveValue = useCallback((a, b) => {
    // Simulate an expensive calculation
    for (let i = 0; i < 1000; i++) {}
    return a + b;
  }, []);

  /**
   * Memoize the result of `computeExpensiveValue` using `useMemo`.
   * The dependencies are `a` and `b`, so the memoized value will only be recomputed when they change.
   */
  const result = useMemo(
    () => computeExpensiveValue(a, b),
    [a, b, computeExpensiveValue]
  );

  return <div>Computed Value: {result}</div>;
};

/**
 * A React component that demonstrates the use of `useState` to manage a counter state.
 *
 * The `Counter` component renders an `ExpensiveComponent` with fixed props `a={10}` and `b={20}`,
 * and a button that increments the counter state when clicked.
 *
 * @example
 * <Counter /> // Renders an ExpensiveComponent with a counter button
 */
const Counter = () => {
  /**
   * Use `useState` to manage a counter state, initialized to 0.
   */
  const [count, setCount] = useState(0);

  return (
    <div>
      <ExpensiveComponent a={10} b={20} />
      <button onClick={() => setCount(count + 1)}>Re-render</button>
    </div>
  );
};

export default Counter;
