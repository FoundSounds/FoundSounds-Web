// @flow
import React from "react";
import PropTypes from "prop-types";

type propTypes = {
  label: string,
  text: string,
  type: string,
  id: string,
  value: string,
  handleChange: PropTypes.func,
};

const Input = ({
  label, text, type, id, value, handleChange,
}: propTypes) => (
  <div className="form-group">
    <label id={id} htmlFor={label}>
      {text}
      <input
        type={type}
        className="form-control"
        id={id}
        value={value}
        onChange={handleChange}
        required
      />
    </label>
  </div>
);
export default Input;
