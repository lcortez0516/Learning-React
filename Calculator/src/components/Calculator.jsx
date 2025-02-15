import React from "react";
import "../style.css";
import { useState, useReducer } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState(0);

  const calculate = () => {
    if (!input.length) return;

    eval(input) && setAnswer(eval(input));
    setInput("");
  };

  return (
    <div className="container">
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={calculate}>=</button>
      <p>{answer}</p>
    </div>
  );
};

export default Calculator;
