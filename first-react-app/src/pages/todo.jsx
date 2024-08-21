// Todo page to demonstrate the hooks
import React, { useReducer, useState, useMemo, useCallback } from "react";
import { todoReducer, counterReducer } from "../hooks/reducer";
// import { counterReducer } from "../hooks/reducer";

const ChildComponent = React.memo(({ onIncrement }) => {
  console.log("ChildComponent rendered");

  return (
    <button className="increment-button" onClick={onIncrement}>
      Increment
    </button>
  );
});

const TodoPage = () => {
  const [count, setCount] = useState(0);

  const [counterState, counterDispatch] = useReducer(counterReducer, {
    count: 0,
  });
  const [todoState, todoDispatch] = useReducer(todoReducer, { tasks: [] });
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText.trim()) {
      todoDispatch({ type: "ADD_TASK", payload: taskText });
      setTaskText("");
    }
  };

  const handleRemoveTask = (id) => {
    todoDispatch({ type: "REMOVE_TASK", payload: id });
  };

  const handleToggleTask = (id) => {
    todoDispatch({ type: "TOGGLE_TASK", payload: id });
  };

  // In this example, the filteredItems value is memoized using useMemo.
  // The filtering operation is only performed when the items or filterText values change,
  // which can significantly improve the performance of the component,
  // especially if the list of items is large or the filtering operation is expensive.

  const [items, setItems] = useState([
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 20 },
    { id: 3, name: "Item 3", price: 30 },
    { id: 4, name: "Item 4", price: 40 },
  ]);

  const [filterText, setFilterText] = useState("");

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [items, filterText]);

  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="todo-page">
      <h1>Use Reducer</h1>
      <h1 className="count-display">Count: {counterState.count}</h1>
      <div className="button-group">
        <button
          className="btn"
          onClick={() => counterDispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
        <button
          className="btn"
          onClick={() => counterDispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
        <button
          className="btn"
          onClick={() => counterDispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </div>
      <div className="todo-list">
        <h1>To-Do List</h1>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Add a new task"
          className="task-input"
        />
        <button onClick={handleAddTask} className="add-task-btn">
          Add Task
        </button>
        <ul className="task-list">
          {todoState.tasks.map((task) => (
            <li key={task.id} className="task-item">
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
                className="task-text"
              >
                {task.text}
              </span>
              <button
                onClick={() => handleToggleTask(task.id)}
                className="toggle-task-btn"
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => handleRemoveTask(task.id)}
                className="remove-task-btn"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      <h1>Use useMemo/useCallback Hooks</h1>

      <div className="hooks-box">
        <div className="parent-component">
          <ChildComponent onIncrement={handleIncrement} />
          <p className="count">Count: {count}</p>
        </div>

        <div className="item-list-component">
          <input
            type="text"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder="Filter items..."
            className="filter-input"
          />
          <ul className="item-list">
            {filteredItems.map((item) => (
              <li key={item.id} className="item">
                <span className="item-name">{item.name}</span>
                <span className="item-price">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
