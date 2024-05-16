import React, { useContext } from "react";
import { Handles } from "../../../context/handleAdd";

export const Display = () => {
  const { resultDisplay } = useContext(Handles);
  return (
    <div className="display">
      <h1>{resultDisplay}</h1>
    </div>
  );
};
