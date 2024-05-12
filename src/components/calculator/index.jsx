import React, { useState } from "react";
import { buttonsNumber, buttonsOperations } from "../../data/buttons";

export const Calculator = () => {
  const [resultDisplay, setResultDisplay] = useState(0);

  const handleOperation = (op) => {
    switch (op) {
      case "+":
        alert("oi");
        break;
    }
  };

  return (
    <div className="container">
      <div className="display">{resultDisplay}</div>
      <div className="buttons">
        <button>AC</button>
        <div className="operations">
          {buttonsOperations.map((operation, idx) => (
            <button key={idx} onClick={() => handleOperation(operation)}>
              {operation}
            </button>
          ))}
        </div>
        <div className="numbers">
          {buttonsNumber.map((num, idx) => (
            <button key={idx}>{num}</button>
          ))}
        </div>
        <button>=</button>
      </div>
    </div>
  );
};
