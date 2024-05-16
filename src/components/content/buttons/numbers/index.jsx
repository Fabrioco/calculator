import { useContext } from "react";
import { buttonsNumber } from "../../../../data/buttons";
import { Handles } from "../../../../context/handleAdd";

export const Number = () => {
  const { handleNumber } = useContext(Handles);

  const handleAdd = (num) => {
    handleNumber(num);
  };

  return (
    <div className="numbers">
      {buttonsNumber.map((num, idx) => (
        <button key={idx} onClick={() => handleAdd(num)}>
          {num}
        </button>
      ))}
    </div>
  );
};
