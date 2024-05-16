import { createContext, useState } from "react";

export const Handles = createContext({});

export const HandleAdd = ({ children }) => {
  const [resultDisplay, setResultDisplay] = useState("0");
  const [operation, setOperation] = useState(null);
  const [firstValue, setFirstValue] = useState("0");
  const [secondValue, setSecondValue] = useState(null);

  const handleNumber = (num) => {
    setFirstValue((antNum) => {
      if (antNum !== "0") {
        return antNum + num;
      } else {
        return num;
      }
    });
    setResultDisplay((antOperacao) => antOperacao + num);
  };

  const handleOperation = (op) => {
    setResultDisplay(firstValue + " " + op + " ");
    setOperation(op);
    setSecondValue(firstValue);
    setFirstValue("");
  };

  const handleCalcular = () => {
    if (!secondValue || !operation) {
      return;
    }
    const num1 = parseFloat(secondValue);
    const num2 = parseFloat(firstValue);

    let resultado;

    switch (operation) {
      case "+":
        resultado = num1 + num2;
        break;
      case "-":
        resultado = num1 - num2;
        break;
      case "/":
        if (num2 !== 0) {
          resultado = num1 / num2;
          parseFloat(resultado);
        } else {
          setResultDisplay("error");
          return;
        }
        break;
      case "*":
        resultado = num1 * num2;
        break;
      default:
        break;
    }

    setResultDisplay(
      secondValue + " " + operation + " " + firstValue + " = " + resultado
    );
    setFirstValue(resultado.toString());
    setOperation(null);
    setSecondValue(null);
  };

  const handleClear = () => {
    setFirstValue("0");
    setSecondValue(null);
    setResultDisplay("0");
    setOperation(null);
  };

  return (
    <Handles.Provider
      value={{
        resultDisplay,
        handleNumber,
        handleCalcular,
        handleClear,
        handleOperation,
      }}
    >
      {children}
    </Handles.Provider>
  );
};
