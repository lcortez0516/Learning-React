import React from "react";
import { useState } from "react";
import Prompt from "./Prompt";

const Modal = () => {
  const [copied, setCopied] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigator.clipboard.writeText(inputText).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(true);
      }, 3000);
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">
          <input
            type="text"
            id="input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </label>
        <button type="submit"> Copy</button>
      </form>

      <Prompt copied={copied} />
    </div>
  );
};

export default Modal;
