import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../components/Input';
import ButtonInput from '../components/ButtonInput';
import Loader from '../components/Loader';
import LoginFormFooter from '../components/LoginFormFooter';
import '../index.css';
import AuthFormHeader from '../components/AuthFormHeader';
import AuthFormFooter from '../components/AuthFormFooter';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newLogin: {
        email: '',
        password: ''
      },
      errors: {
        email: '',
        password: '',
        form: ''
      },
      response: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
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
        newLogin: { ...previousState.newLogin, email: value }      
      }), () => console.log(this.state.newLogin));
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
        newLogin: { ...previousState.newLogin, password: value }      
      }), () => console.log(this.state.newLogin));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state.newLogin;
    const { email: emailError, password: passwordError } = this.state.errors;
    if (email && password && !emailError && !passwordError) {
      const loginData = this.state.newLogin;
      console.log(loginData);
      const loginUrl = 'https://bankr-server.herokuapp.com/api/v1/auth/signin';
      const loginOptions = {
        method: 'POST',
        body: JSON.stringify(loginData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      };
    
      fetch(loginUrl, loginOptions)
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
      const msg = 'Both fields are required'
      this.setState(previousState => ({
        errors: { ...previousState.errors, form: msg }      
      }), () => console.log(this.state.errors));
    }
  }


  render() {
    const responseMessage = this.state.errors.form || this.state.response; 
    return (
      <div className="page-wrapper page-wrapper--bg l-flex">
        <Loader/>
        <div className="form-wrapper">
          <AuthFormHeader res={responseMessage} />
          <form className="reg-form l-center">
            <Input
              inputType={'email'}
              name={'email'}
              title={'Email'}
              error={this.state.errors.email}
              value={this.state.newLogin.email}
              placeholder={'Enter your email'}
              handleChange={this.handleEmail}
            />

            <Input
              inputType={'password'}
              name={'password'}
              title={'Password'}
              error={this.state.errors.password}
              value={this.state.newLogin.password}
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

export default LoginPage;
