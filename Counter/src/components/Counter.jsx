import React, { useReducer } from "react";
import "../style.css";
import { initialVal, reducer } from "./Reducer";

const Counter = () => {
  const [counter, dispatch] = useReducer(reducer, initialVal);

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <div className="container">
      <h1>{counter.count}</h1>
      <div className="btn-container">
        <button onClick={handleIncrement} className="btn">
          +
        </button>
        <button onClick={handleDecrement} className="btn">
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
