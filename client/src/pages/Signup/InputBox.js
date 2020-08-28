import React from "react";

const InputBox = ({ type, name, placeholder, icon, changeHandler }) => {
  return (
    <div className="input-box" onClick={divertFocusToInput}>
      <div className="input-box__icon">{icon}</div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => changeHandler(e)}
      />
    </div>
  );
};

const divertFocusToInput = (e) => {
  e.currentTarget.getElementsByTagName("input")[0].focus();
};

export default InputBox;
