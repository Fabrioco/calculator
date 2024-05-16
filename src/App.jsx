import React from "react";
import { Calculator } from "./components/content/index";
import "./App.css";
import { HandleAdd } from "./context/handleAdd";

export default function App() {
  return (
    <HandleAdd>
      <Calculator />
    </HandleAdd>
  );
}
