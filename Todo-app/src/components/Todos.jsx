import React, { useEffect, useState } from "react";
import "../style.css";
import TodoItem from "./TodoItem";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addNewTodo = () => {
    if (!input.length) return;
    setTodos([...todos, input]);
    setInput("");
  };

  const removeTodo = (itemIndex) => {
    console.log(itemIndex);
    setTodos(todos.filter((item, index) => index != itemIndex));
  };

  return (
    <div className="todo-container">
      <h1>Hello, Lester</h1>

      <input
        className="input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addNewTodo} className="btn">
        Add
      </button>
      <div className="todos">
        {todos &&
          todos.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              index={index}
              removeTodo={removeTodo}
            />
          ))}
      </div>
    </div>
  );
};

export default Todos;
