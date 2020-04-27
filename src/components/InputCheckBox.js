import React, { PropTypes } from "react";

const InputCheckBox = ({ name, checked, onChange, value }) => {
  console.log(checked);
  return (
    <div className="InputCheckBox">
      <div className="checkbox">
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <label>{name}</label>
      </div>
    </div>
  );
};

export default InputCheckBox;
