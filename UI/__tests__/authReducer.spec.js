import authReducer from '../src/reducers/auth.reducer';
import {
  HANDLE_EMAIL,
  HANDLE_PASSWORD,
  HANDLE_FIRSTNAME,
  HANDLE_LASTNAME,
  HANDLE_FORM,
  LOGIN_USER,
  SIGNUP_USER,
  RESET_AUTH,
} from '../src/actions/actionTypes';

const initialState = {
  user: {},
  newLogin: {
    email: '',
    password: '',
  },
  newSignup: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
  loginErrors: {
    email: '',
    password: '',
    form: null,
  },
  signupErrors: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    form: null,
  },
  signupResponse: null,
  loginResponse: null,
};

describe('Action Reducer', () => {
  it('returns the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });


  it('handles HANDLE_EMAIL', () => {
    expect(authReducer(undefined, {
      type: HANDLE_EMAIL,
      emailData: { email: 'kelly@gmail.com', login: 'login', error: 'error' },
    })).toEqual({
      ...initialState,
      newLogin: { ...initialState.newLogin, email: 'kelly@gmail.com' },
      loginErrors: { ...initialState.loginErrors, email: 'error', form: null },
    });

    expect(authReducer(undefined, {
      type: HANDLE_EMAIL,
      emailData: { email: 'kelly@gmail.com', error: 'error' },
    })).toEqual({
      ...initialState,
      newSignup: { ...initialState.newSignup, email: 'kelly@gmail.com' },
      signupErrors: { ...initialState.signupErrors, email: 'error', form: null },
    });
  });

  it('handles HANDLE_PASSWORD', () => {
    expect(authReducer(undefined, {
      type: HANDLE_PASSWORD,
      passwordData: { password: 'kelly@gmail.com', login: 'login', error: 'error' },
    })).toEqual({
      ...initialState,
      newLogin: { ...initialState.newLogin, password: 'kelly@gmail.com' },
      loginErrors: { ...initialState.loginErrors, password: 'error', form: null },
    });

    expect(authReducer(undefined, {
      type: HANDLE_PASSWORD,
      passwordData: { password: 'kelly@gmail.com', error: 'error' },
    })).toEqual({
      ...initialState,
      newSignup: { ...initialState.newSignup, password: 'kelly@gmail.com' },
      signupErrors: { ...initialState.signupErrors, password: 'error', form: null },
    });
  });

  it('handles HANDLE_FIRSTNAME', () => {
    expect(authReducer(undefined, {
      type: HANDLE_FIRSTNAME,
      firstNameData: { firstName: 'kelly', error: 'error' },
    })).toEqual({
      ...initialState,
      newSignup: { ...initialState.newSignup, firstName: 'kelly' },
      signupErrors: { ...initialState.signupErrors, firstName: 'error', form: null },
    });
  });

  it('handles HANDLE_LASTNAME', () => {
    expect(authReducer(undefined, {
      type: HANDLE_LASTNAME,
      lastNameData: { lastName: 'kelly', error: 'error' },
    })).toEqual({
      ...initialState,
      newSignup: { ...initialState.newSignup, lastName: 'kelly' },
      signupErrors: { ...initialState.signupErrors, lastName: 'error', form: null },
    });
  });

  it('handles HANDLE_FORM', () => {
    expect(authReducer(undefined, {
      type: HANDLE_FORM,
      formData: { login: 'login', message: 'error' },
    })).toEqual({
      ...initialState,
      loginErrors: {
        ...initialState.loginErrors,
        form: 'error',
      },
    });

    expect(authReducer(undefined, {
      type: HANDLE_FORM,
      formData: { message: 'error' },
    })).toEqual({
      ...initialState,
      signupErrors: {
        ...initialState.signupErrors,
        form: 'error',
      },
    });
  });

  it('handles RESET_AUTH', () => {
    expect(authReducer(undefined, {
      type: RESET_AUTH,
    })).toEqual({
      ...initialState,
    });
  });

  it('handles LOGIN_USER', () => {
    expect(authReducer(undefined, {
      type: LOGIN_USER,
      login: { data: { name: 'kelly' }, message: 'success' },
    })).toEqual({
      ...initialState,
      user: { name: 'kelly' },
      loginResponse: 'success',
    });
  });

  it('handles SIGNUP_USER', () => {
    expect(authReducer(undefined, {
      type: SIGNUP_USER,
      signup: { data: { name: 'kelly' }, message: 'success' },
    })).toEqual({
      ...initialState,
      user: { name: 'kelly' },
      signupResponse: 'success',
    });
  });
});
