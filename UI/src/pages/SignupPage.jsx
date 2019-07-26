import React from 'react';

import Input from '../components/Input';
import ButtonInput from '../components/ButtonInput';
import SignupFormFooter from '../components/SignupFormFooter';
import AuthFormHeader from '../components/AuthFormHeader';
import Loader from '../components/Loader';
import AuthFormFooter from '../components/AuthFormFooter';
import '../index.css';


class SignupPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newSignup: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        form: ''
      },
      response: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail(e) {
    let value = e.target.value;
    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let error = validEmail.test(value)? '' : 'Enter a valid email address';

    this.setState(previousState => ({
      errors: { ...previousState.errors, email: error, form: '' }   
    }), () => console.log(this.state.errors));

    this.setState(previousState => ({
        newSignup: { ...previousState.newSignup, email: value }      
      }), () => console.log(this.state.newSignup));
  }

  handleFirstName(e) {
    let value = e.target.value;
    const validName = /^[a-zA-Z ]{2,30}$/;
    let error = validName.test(value)? '' : 'Enter a valid first name';

    this.setState(previousState => ({
      errors: { ...previousState.errors, firstName: error, form: '' }   
    }), () => console.log(this.state.errors));

    this.setState(previousState => ({
        newSignup: { ...previousState.newSignup, firstName: value }      
      }), () => console.log(this.state.newSignup));
  }

  handleLastName(e) {
    let value = e.target.value;
    const validName = /^[a-zA-Z ]{2,30}$/;
    let error = validName.test(value)? '' : 'Enter a valid last name';

    this.setState(previousState => ({
      errors: { ...previousState.errors, lastName: error, form: '' }   
    }), () => console.log(this.state.errors));

    this.setState(previousState => ({
        newSignup: { ...previousState.newSignup, lastName: value }      
      }), () => console.log(this.state.newSignup));
  }

  handlePassword(e) {
    let value = e.target.value;
    const passwordLength = value.length;
    const msg = 'Password must be not be less than 6 characters';
    let error = passwordLength > 5 && passwordLength < 21 ? '' : msg; 

    this.setState(previousState => ({
      errors: { ...previousState.errors, password: error, form: '' }   
    }), () => console.log(this.state.errors));

    this.setState(previousState => ({
        newSignup: { ...previousState.newSignup, password: value }      
      }), () => console.log(this.state.newSignup));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { firstName, lastName, email, password } = this.state.newSignup;
    const {
      firstName: firstNameError,
      lastName: lastNameError,
      email: emailError,
      password: passwordError
    } = this.state.errors;

    const isValidInput = (firstName && lastName && email && password && !emailError && !passwordError && !firstNameError && !lastNameError);

    if (isValidInput) {
      const signupData = this.state.newSignup;
      console.log(signupData);
      const signupUrl = 'https://bankr-server.herokuapp.com/api/v1/auth/signup';
      const signupOptions = {
        method: 'POST',
        body: JSON.stringify(signupData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      };
    
      fetch(signupUrl, signupOptions)
        .then(res => {
          res.json().then(
            data => {
              console.log(data);
              this.setState(previousState => ({
                response: data.message    
              }), () => console.log(this.state.response));
            }
          )
        })    
    } else {
      const msg = 'Fill out all fields'
      this.setState(previousState => ({
        errors: { ...previousState.errors, form: msg }      
      }), () => console.log(this.state.errors));
    }
  }

  render() {
    const responseMessage = this.state.errors.form || this.state.response; 
    return (
      <div className="page-wrapper page-wrapper--bg l-flex">
        <Loader />
        <div className="form-wrapper">
          <AuthFormHeader res={responseMessage} />
          <form className="reg-form l-center">
  
            <Input
              inputType={'text'}
              name={'firstname'}
              title={'First name'}
              error={this.state.errors.firstName}
              value={this.state.newSignup.firstName}
              placeholder={'Enter first name'}
              handleChange={this.handleFirstName}
            />
  
            <Input
              inputType={'text'}
              name={'lastname'}
              title={'Last name'}
              error={this.state.errors.lastName}
              value={this.state.newSignup.lastName}
              placeholder={'Enter last name'}
              handleChange={this.handleLastName}
            />
  
            <Input
              inputType={'email'}
              name={'email'}
              title={'Email'}
              error={this.state.errors.email}
              value={this.state.newSignup.email}
              placeholder={'Enter your email'}
              handleChange={this.handleEmail}
            />
  
            <Input
              inputType={'password'}
              name={'password'}
              title={'Password'}
              error={this.state.errors.password}
              value={this.state.newSignup.password}
              placeholder={'Enter your password'}
              handleChange={this.handlePassword}
            />
  
            <ButtonInput
              inputType={'button'}
              name={'signup-button'}
              defaultValue={'Sign up'}
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

export default SignupPage;
