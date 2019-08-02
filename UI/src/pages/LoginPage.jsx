import React from 'react';
import { connect } from 'react-redux';

import Input from '../components/Input';
import ButtonInput from '../components/ButtonInput';
import Loader from '../components/Loader';
import LoginFormFooter from '../components/LoginFormFooter';
import '../index.css';
import AuthFormHeader from '../components/AuthFormHeader';
import AuthFormFooter from '../components/AuthFormFooter';
import { loginUser, handleEmail, handlePassword } from '../actions/auth.actions';
import serverCall from '../services/serverCall';
import { loginUrl } from '../services/servicesUrls';
import redirectToDashboard from '../helpers/redirectToDashboard';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail(e) {
    const { value } = e.target;
    const { dispatch } = this.props;
    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const error = validEmail.test(value) ? '' : 'Enter a valid email address';

    dispatch(handleEmail({ email: value, error, login: 'login' }));
  }

  handlePassword(e) {
    const { value } = e.target;
    const { dispatch } = this.props;
    const passwordLength = value.length;
    const msg = 'Password must be not be less than 6 characters';
    const error = passwordLength > 5 && passwordLength < 21 ? '' : msg;

    dispatch(handlePassword({ password: value, error, login: 'login' }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { loginDetails, dispatch, errors } = this.props;
    const { email, password } = loginDetails;
    const { email: emailError, password: passwordError } = errors;
    if (email && password && !emailError && !passwordError) {
      const loginData = loginDetails;
      const loginPayload = {
        url: loginUrl,
        data: loginData,
        method: 'POST',
      };

      serverCall(loginPayload)
        .then((res) => {
          const { data } = res;
          const { type } = data[0];
          const { history } = this.props;
          dispatch(loginUser(data[0]));
          redirectToDashboard(type, history);
        });
    } else {
      const msg = 'Both fields are required';
      console.log(msg);
    }
  }


  render() {
    const { loginDetails, response, errors } = this.props;
    const { email, password } = loginDetails;
    const { email: emailError, password: passwordError, form } = errors;
    const responseMessage = form || response;

    return (
      <div className="page-wrapper page-wrapper--bg l-flex">
        <Loader />
        <div className="form-wrapper">
          <AuthFormHeader res={responseMessage} />
          <form className="reg-form l-center">
            <Input
              inputType={'email'}
              name={'email'}
              title={'Email'}
              error={emailError}
              value={email}
              placeholder={'Enter your email'}
              handleChange={this.handleEmail}
            />

            <Input
              inputType={'password'}
              name={'password'}
              title={'Password'}
              error={passwordError}
              value={password}
              placeholder={'Enter your password'}
              handleChange={this.handlePassword}
            />

            <ButtonInput
              inputType={'button'}
              name={'signin-button'}
              defaultValue={'Sign in'}
              action={this.handleSubmit}
            />

            <LoginFormFooter />
          </form>
          <AuthFormFooter />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginDetails: state.auth.newLogin,
  errors: state.auth.errors,
  response: state.auth.response,
});

export default connect(mapStateToProps)(LoginPage);
