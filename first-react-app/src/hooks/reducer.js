// Reducer
// Certainly! The useReducer hook is a powerful alternative to useState for managing more complex state logic in React components.
// It’s particularly useful when dealing with state that
// involves multiple sub-values or when the next state depends on the previous state.
// Here's an example of how you can use useReducer to manage a counter state:

// counterReducer.js
export const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// todoReducer.js
export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), text: action.payload, completed: false },
        ],
      };
    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
