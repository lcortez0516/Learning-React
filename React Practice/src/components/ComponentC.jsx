import React from "react";
import { useContext } from "react";
import { nameData, ageData } from "../App";

const ComponentC = () => {
  const name = useContext(nameData);
  const age = useContext(ageData);
  return (
    <div>
      <h1>
        {name}
        {age}
      </h1>
    </div>
  );
};

export default ComponentC;
