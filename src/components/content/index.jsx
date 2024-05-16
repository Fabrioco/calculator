import React, { useState } from "react";
import { buttonsNumber, buttonsOperations } from "../../data/buttons";
import { Display } from "./display";
import { Buttons } from "./buttons";

export const Calculator = () => {
  return (
    <div className="container">
      <Display />
      <Buttons />
    </div>
  );
};
