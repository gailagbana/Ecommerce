import React from "react";
import "./index.css";

export const TextInput = ({ placeholder, width }) => {
  return (
    <div style={{ width: width }}>
      <input placeholder={placeholder} style={{ width: "100%" }} />
    </div>
  );
};
export default TextInput;
