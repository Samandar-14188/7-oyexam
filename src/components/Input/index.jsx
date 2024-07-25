import React from "react";

const Input = ({ type, label, className, placeholder, value, onChange }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
