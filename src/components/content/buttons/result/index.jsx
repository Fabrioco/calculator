import { useContext } from "react";
import { Handles } from "../../../../context/handleAdd";

export const Result = () => {
  const { handleCalcular } = useContext(Handles);

  return (
    <button id="btn_result" onClick={handleCalcular}>
      =
    </button>
  );
};
