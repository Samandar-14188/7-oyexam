import React from "react";

const RadioInput = ({ label, checked, onChange }) => {
  return (
    <div className="radio-container">
      <div className="RadioInput-wrapper">
        <input
          type="radio"
          id={label}
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor={label}>{label}</label>
      </div>
    </div>
  );
};

export default RadioInput;
