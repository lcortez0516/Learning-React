import React, { useState, useReducer } from "react";

const initialVal = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.val };
    case "decrement":
      return { ...state, count: state.count - action.val };
    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

const Counter = () => {
  const [input, setInput] = useState("");
  const [counter, dispatch] = useReducer(reducer, initialVal);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <p>{counter.count}</p>

      <button
        onClick={() => {
          console.log(setInput(parseInt(input)));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          if (input && parseInt(input)) {
            Number(input);
            dispatch({ type: "increment", val: input });
          }
        }}
      >
        -
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default Counter;
