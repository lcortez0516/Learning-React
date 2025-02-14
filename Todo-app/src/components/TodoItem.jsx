import React, { useState } from "react";

const TodoItem = ({ item, removeTodo, index }) => {
  return (
    <div className="each-todo">
      <div className="center">
        <input className="checkbox" type="checkbox" />
        <p>{item}</p>
      </div>

      <button className="delete" onClick={() => removeTodo(index)}>
        delete
      </button>
    </div>
  );
};

export default TodoItem;
