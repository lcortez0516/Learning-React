import React from "react";
import { createPortal } from "react-dom";

const Prompt = ({ copied }) => {
  return createPortal(
    <section>{copied && <h1>HOtdog</h1>}</section>,
    document.querySelector("#container")
  );
};

export default Prompt;
