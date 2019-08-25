import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';

import LoginView, { LoginPage } from '../src/pages/LoginPage';
import configureStore from '../src/store/configureStore';

const store = configureStore({
  loginDetails: {
    email: 'example@yahoo.com',
    password: 'password',
  },
  errors: {
    email: 'invalid email',
    password: 'invalid password',
  },
  response: 'login successful',
});

const loginDetails = {
  email: 'example@yahoo.com',
  password: 'password',
};
const errors = {
  email: 'invalid email',
  password: 'invalid password',
};
const response = 'login successful';

const props = {
  dispatch: jest.fn(),
  loginUser: jest.fn(),
  handleEmail: jest.fn(),
  handlePassword: jest.fn(),
  handleForm: jest.fn(),
  loginDetails,
  errors,
  response,
};

describe('LoginPage', () => {
  let app;
  let res;

  describe('Normal component', () => {
    beforeEach(() => {
      app = shallow(
        <LoginPage
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

    it('has a handleSubmit method', () => {
      const event = { preventDefault: jest.fn() };
      res.handleSubmit(event);
    });
  });

  describe('Connected Component', () => {
    beforeEach(() => {
      app = shallow(
        <LoginView
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
      expect(res.find('Input').length).toBe(2);
    });

    it('renders a ButtonInput', () => {
      expect(res.find('ButtonInput').length).toBe(1);
    });

    it('renders a LoginFormFooter', () => {
      expect(res.find('LoginFormFooter').length).toBe(1);
    });

    it('renders a AuthFormFooter', () => {
      expect(res.find('AuthFormFooter').length).toBe(1);
    });
  });
});
