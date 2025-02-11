import React, { useContext } from "react";

import { nameData, ageData } from "../App";
const ComponentB = () => {
  const name = useContext(nameData);
  const age = useContext(ageData);
  return (
    <div>
      <h1>
        My name is {name} and I am {age} years old
      </h1>
    </div>
  );
};

export default ComponentB;
