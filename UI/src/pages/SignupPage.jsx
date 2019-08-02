import React from 'react';
import { connect } from 'react-redux';

import Input from '../components/Input';
import ButtonInput from '../components/ButtonInput';
import SignupFormFooter from '../components/SignupFormFooter';
import AuthFormHeader from '../components/AuthFormHeader';
import Loader from '../components/Loader';
import AuthFormFooter from '../components/AuthFormFooter';
import {
  signupUser,
  handleEmail,
  handlePassword,
  handleFirstname,
  handleLastname,
} from '../actions/auth.actions';
import serverCall from '../services/serverCall';
import { signupUrl } from '../services/servicesUrls';
import redirectToDashboard from '../helpers/redirectToDashboard';
import '../index.css';


class SignupPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail(e) {
    const { value } = e.target;
    const { dispatch } = this.props;
    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const error = validEmail.test(value) ? '' : 'Enter a valid email address';

    dispatch(handleEmail({ email: value, error }));
  }

  handleFirstName(e) {
    const { value } = e.target;
    const { dispatch } = this.props;
    const validName = /^[a-zA-Z ]{2,30}$/;
    const error = validName.test(value) ? '' : 'Enter a valid first name';

    dispatch(handleFirstname({ firstName: value, error }));
  }

  handleLastName(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    const validName = /^[a-zA-Z ]{2,30}$/;
    const error = validName.test(value) ? '' : 'Enter a valid last name';

    dispatch(handleLastname({ lastName: value, error }));
  }

  handlePassword(e) {
    const { value } = e.target;
    const { dispatch } = this.props;
    const passwordLength = value.length;
    const msg = 'Password must be not be less than 6 characters';
    const error = passwordLength > 5 && passwordLength < 21 ? '' : msg;

    dispatch(handlePassword({ password: value, error }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { signupDetails, errors } = this.props;

    const {
      firstName,
      lastName,
      email,
      password,
    } = signupDetails;

    const {
      firstName: firstNameError,
      lastName: lastNameError,
      email: emailError,
      password: passwordError,
    } = errors;

    const isValidInput = (
      firstName && lastName && email && password && !emailError && !passwordError && !firstNameError && !lastNameError
    );

    if (isValidInput) {
      const signupData = signupDetails;
      const signupPayload = {
        url: signupUrl,
        data: signupData,
        method: 'POST',
      };

      serverCall(signupPayload)
        .then((res) => {
          const { dispatch } = this.props;
          const { data } = res;
          const { type } = data[0];
          const { history } = this.props;
          dispatch(signupUser(data[0]));
          redirectToDashboard(type, history);
        });
    } else {
      const msg = 'Fill out all fields';
      console.log(msg);
    }
  }

  render() {
    const { signupDetails, errors, response } = this.props;
    const {
      email,
      password,
      firstName,
      lastName,
    } = signupDetails;
    const {
      email: emailError,
      password: passwordError,
      firstName: firstNameError,
      lastName: lastNameError,
      form,
    } = errors;

    const responseMessage = form || response;
    return (
      <div className="page-wrapper page-wrapper--bg l-flex">
        <Loader />
        <div className="form-wrapper">
          <AuthFormHeader res={responseMessage} />
          <form className="reg-form l-center">

            <Input
              inputType="text"
              name="firstname"
              title="First name"
              error={firstNameError}
              value={firstName}
              placeholder="Enter first name"
              handleChange={this.handleFirstName}
            />

            <Input
              inputType="text"
              name="lastname"
              title="Last name"
              error={lastNameError}
              value={lastName}
              placeholder="Enter last name"
              handleChange={this.handleLastName}
            />

            <Input
              inputType="email"
              name="email"
              title="Email"
              error={emailError}
              value={email}
              placeholder="Enter your email"
              handleChange={this.handleEmail}
            />

            <Input
              inputType="password"
              name="password"
              title="Password"
              error={passwordError}
              value={password}
              placeholder="Enter your password"
              handleChange={this.handlePassword}
            />

            <ButtonInput
              inputType="button"
              name="signup-button"
              defaultValue="Sign up"
              action={this.handleSubmit}
            />

            <SignupFormFooter />
          </form>
          <AuthFormFooter />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signupDetails: state.auth.newSignup,
  errors: state.auth.errors,
  response: state.auth.response,

});

export default connect(mapStateToProps)(SignupPage);
