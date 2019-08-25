import React from 'react';
import { Link } from 'react-router-dom';

const ButtonInput = (props) => {
  const { name, defaultValue, action } = props;
  return (
    <div className="input-wrapper">
      <p className="reg-form__text forgot-password" id="password-reset">
        <Link className="reg-form__link m-sec-color" to="/signin">Forgot password?</Link>
      </p>
      <input
        className="reg-form__button"
        id={name}
        type="button"
        name={name}
        defaultValue={defaultValue}
        onClick={action}
        {...props}
      />
    </div>
  );
};

export default ButtonInput;
