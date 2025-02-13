import React from "react";
import { useReducer } from "react";
import { initialVal, reducer } from "./Reducer.js";

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialVal);

  const handleIncrement = () => {
    dispatch({ type: "increment" });
    console.log(state.count);
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default Counter;
