import React from 'react';

const Input = (props) => {
  const {
    name,
    title,
    value,
    inputType,
    handleChange,
    placeholder,
    error,
  } = props;

  return (
    <div className="input-wrapper">
      <label
        className="reg-form__label"
        htmlFor={name}
      >
        {title}
      </label>
      <input
        className="reg-form__input"
        id={name}
        type={inputType}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        {...props}
      />
      <span className="reg-form__span alert-message m-error">
        {error}
        &nbsp;
      </span>
    </div>
  );
};

export default Input;
