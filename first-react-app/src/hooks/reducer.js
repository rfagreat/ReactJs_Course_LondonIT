// counterReducer.js
/**
 * Reducer function for managing a counter state.
 *
 * @param {object} state - The current state of the counter.
 * @param {object} action - The action to be performed on the state.
 * @returns {object} The new state of the counter.
 *
 * Example usage:
 * const initialState = { count: 0 };
 * const newState = counterReducer(initialState, { type: "INCREMENT" });
 * console.log(newState); // { count: 1 }
 */
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
/**
 * Reducer function for managing a todo list state.
 *
 * @param {object} state - The current state of the todo list.
 * @param {object} action - The action to be performed on the state.
 * @returns {object} The new state of the todo list.
 *
 * Example usage:
 * const initialState = { tasks: [] };
 * const newState = todoReducer(initialState, { type: "ADD_TASK", payload: "Buy milk" });
 * console.log(newState); // { tasks: [{ id: 1234567890, text: "Buy milk", completed: false }] }
 */
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
