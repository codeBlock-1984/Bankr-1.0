import React from 'react';
import { Link } from 'react-router-dom';

const SignupFormFooter = () => {
  return (
    <div className="input-wrapper">
      <div className="reg-form__link-wrapper">
        <p className="reg-form__text" id="question">Already have an account?</p>
        <Link className="reg-form__link m-pri-color" to="/signin"> Login instead</Link>
      </div>
    </div>  
  );
};

export default SignupFormFooter;



