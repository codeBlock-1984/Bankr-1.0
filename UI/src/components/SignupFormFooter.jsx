import React from 'react';

import FormLink from './FormLink';

const SignupFormFooter = () => {
  return (
    <div className="input-wrapper">
      <div className="reg-form__link-wrapper">
        <p className="reg-form__text" id="question">Already have an account?</p>
        <FormLink page={'/signin'} title={'Login instead'} />
      </div>
    </div>  
  );
};

export default SignupFormFooter;



