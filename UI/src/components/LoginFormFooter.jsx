import React from 'react';

import FormLink  from './FormLink';

const LoginFormFooter = () => {
  return (
    <div className="input-wrapper">
      <span className="reg-form__link-wrapper">
        <p className="reg-form__text" id="question">Don't have an account?</p>
        <FormLink page={'/signup'} title={'Sign up instead'} />
      </span>
    </div>  
  );
};

export default LoginFormFooter;
