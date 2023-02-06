import React, { Component } from "react";

const Input = ({ name, label, value, error, onchange }) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          value={value}
          onChange={onchange}
          id={name}
          name={name}
          type="text"
          className="form-control"
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
