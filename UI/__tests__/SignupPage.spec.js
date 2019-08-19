import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import SignupView, { SignupPage } from '../src/pages/SignupPage';
import configureStore from '../src/store/configureStore';

const store = configureStore({
  signupDetails: {
    email: 'example@yahoo.com',
    password: 'password',
    firstname: 'Michael',
    lastname: 'Bailey',
  },
  errors: {
    email: 'invalid email',
    password: 'invalid password',
    firstname: 'invalid firstname',
    lastname: 'invalid lastname',
  },
  response: 'signup successful',
});

const props = {
  dispatch: jest.fn(),
  loginUser: jest.fn(),
  handleEmail: jest.fn(),
  handlePassword: jest.fn(),
  handleForm: jest.fn(),
  handleFirstName: jest.fn(),
  handleLastName: jest.fn(),
  signupDetails: {
    email: 'example@yahoo.com',
    password: 'password',
    firstname: 'Michael',
    lastname: 'Bailey',
  },
  errors: {
    email: 'invalid email',
    password: 'invalid password',
    firstname: 'invalid firstname',
    lastname: 'invalid lastname',
  },
  response: 'signup successful',
};

describe('SignupPage', () => {
  let app;
  let res;

  describe('Normal component', () => {
    beforeEach(() => {
      app = shallow(
        <SignupPage
          {...props}
        />,
      );

      res = app.instance();
    });

    it('has a handleEmail method', () => {
      const event = { target: { name: 'email', value: 'kelly@gmail.com' } };
      res.handleEmail(event);
    });

    it('has a handlePassword method', () => {
      const event = { target: { name: 'password', value: 'kelly@gmail.com' } };
      res.handlePassword(event);
    });

    it('has a handleFirstName method', () => {
      const event = { target: { name: 'firstname', value: 'kelly' } };
      res.handleFirstName(event);
    });

    it('has a handleLastName method', () => {
      const event = { target: { name: 'lastname', value: 'kelly' } };
      res.handleLastName(event);
    });

    it('has a handleSubmit method', () => {
      const event = { preventDefault: jest.fn() };
      res.handleSubmit(event);
    });
  });

  describe('Connected Component', () => {
    beforeEach(() => {
      app = shallow(
        <SignupView
          store={store}
          dispatch={jest.fn()}
        />,
      );

      res = app.dive().dive();
    });

    it('renders successfully', () => {
      expect(app).toBeDefined();
    });

    it('renders a AuthFormHeader', () => {
      expect(res.find('AuthFormHeader').length).toBe(1);
    });

    it('renders a Loader', () => {
      expect(res.find('Loader').length).toBe(1);
    });

    it('renders a form', () => {
      expect(res.find('form').length).toBe(1);
    });

    it('renders a div', () => {
      expect(res.find('div').length).toBe(2);
    });

    it('renders a Input', () => {
      expect(res.find('Input').length).toBe(4);
    });

    it('renders a ButtonInput', () => {
      expect(res.find('ButtonInput').length).toBe(1);
    });

    it('renders a SignupFormFooter', () => {
      expect(res.find('SignupFormFooter').length).toBe(1);
    });

    it('renders a AuthFormFooter', () => {
      expect(res.find('AuthFormFooter').length).toBe(1);
    });
  });
});
