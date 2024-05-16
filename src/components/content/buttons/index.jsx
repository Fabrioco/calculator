import React from "react";
import { Operations } from "./operations/index.";
import { Number } from "./numbers";
import { Result } from "./result";

export const Buttons = () => {
  return (
    <div className="buttons">
      <Operations />
      <Number />
      <Result />
    </div>
  );
};
