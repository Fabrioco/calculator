import React, { useContext } from "react";
import { buttonsOperations } from "../../../../data/buttons";
import { Handles } from "../../../../context/handleAdd";

export const Operations = () => {
  const { handleClear, handleOperation } = useContext(Handles);

  return (
    <div className="operations">
      <button id="clear_operation" onClick={handleClear}>
        AC
      </button>
      {buttonsOperations.map((operation, idx) => (
        <button
          key={idx}
          onClick={() => handleOperation(operation)}
          className="btn_operation"
        >
          {operation}
        </button>
      ))}
    </div>
  );
};
