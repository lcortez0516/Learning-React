import React from "react";
import "../style.css";
import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  return (
    <div className="container">
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button>=</button>
    </div>
  );
};

export default Calculator;
