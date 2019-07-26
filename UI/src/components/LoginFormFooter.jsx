import React from 'react';
import { Link } from 'react-router-dom';

const LoginFormFooter = () => {
  return (
    <div className="input-wrapper">
      <span className="reg-form__link-wrapper">
        <p className="reg-form__text" id="question">Don't have an account?</p>
        <Link className="reg-form__link m-pri-color" to="/signup">Sign up instead</Link>
      </span>
    </div>  
  );
};

export default LoginFormFooter;
