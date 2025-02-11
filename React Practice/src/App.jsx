import React from "react";
import ComponentA from "./components/ComponentA";
import { createContext } from "react";
import ComponentC from "./components/ComponentC";
import ComponentB from "./components/ComponentB";

export const nameData = new createContext();
export const ageData = new createContext();

const App = () => {
  const name = "Lester";
  const age = 25;
  return (
    <div>
      <nameData.Provider value={name}>
        <ageData.Provider value={age}>
          <ComponentC />
          <ComponentB />
        </ageData.Provider>
      </nameData.Provider>
    </div>
  );
};

export default App;
