import React from 'react';
import '../index.css';

const SignupPage = () => {
  return (
    <div className="page-wrapper page-wrapper--bg l-flex">
      <div id="animated-loader" className="loader-modal">
        <div className="loader">
          <img src="imgs/logo.png" alt="logo" />
        </div>
      </div>
      <div className="form-wrapper">
        <div className="form-wrapper__heading m-pri-bg">
          <h1 className="form-wrapper__title h-30 l-text-center"><a className="home-link" href="index.html">Bankr</a></h1>
        </div>
        <p className="alert-message m-text-center" id="message-box">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <form className="reg-form l-center" action method>
          <label className="reg-form__label" htmlFor="firstname">First name</label>
          <input className="reg-form__input" type="text" name="firstname" id="firstname" />
          <label className="reg-form__label" htmlFor="lastname">Last name</label>
          <input className="reg-form__input" type="text" name="lastname" id="lastname" />
          <label className="reg-form__label" htmlFor="email">Email address</label>
          <input className="reg-form__input" type="email" name="email" id="email" />
          <label className="reg-form__label" htmlFor="password">Password</label>
          <input className="reg-form__input" type="password" name="password" id="password" />
          <input className="reg-form__button" type="button" defaultValue="Sign up" id="signup-button" />
          <div className="reg-form__link-wrapper">
            <p className="reg-form__text" id="question">Already have an account?</p>
            <a className="reg-form__link m-pri-color" href="sign-in.html"> Login instead</a>
          </div>
        </form>
        <footer className="page-footer page-footer--small page-footer--small-text">
          <p className="page-footer__text">Copyright © Bankr 2019</p>
        </footer> 
      </div>   
    </div>
  );
};

export default SignupPage;
