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

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HANDLE_EMAIL':
      if (action.emailData.login) {
        return {
          ...state,
          newLogin: { ...state.newLogin, email: action.emailData.email },
          loginErrors: { ...state.loginErrors, email: action.emailData.error, form: null },
          loginResponse: null,
        };
      }
      return {
        ...state,
        newSignup: { ...state.newSignup, email: action.emailData.email },
        signupErrors: { ...state.signupErrors, email: action.emailData.error, form: null },
        signupResponse: null,
      };

    case 'HANDLE_PASSWORD':
      if (action.passwordData.login) {
        return {
          ...state,
          newLogin: { ...state.newLogin, password: action.passwordData.password },
          loginErrors: { ...state.loginErrors, password: action.passwordData.error, form: null },
          loginResponse: null,
        };
      }
      return {
        ...state,
        newSignup: { ...state.newSignup, password: action.passwordData.password },
        signupErrors: { ...state.signupErrors, password: action.passwordData.error, form: null },
        signupResponse: null,
      };

    case 'HANDLE_FIRSTNAME':
      return {
        ...state,
        newSignup: { ...state.newSignup, firstName: action.firstNameData.firstName },
        signupErrors: { ...state.signupErrors, firstName: action.firstNameData.error, form: null },
        signupResponse: null,
      };

    case 'HANDLE_LASTNAME':
      return {
        ...state,
        newSignup: { ...state.newSignup, lastName: action.lastNameData.lastName },
        signupErrors: { ...state.signupErrors, lastName: action.lastNameData.error, form: null },
        signupResponse: null,
      };

    case 'HANDLE_FORM':
      if (action.formData.login) {
        return {
          ...state,
          loginErrors: {
            ...state.loginErrors,
            form: action.formData.message,
          },
        };
      }
      return {
        ...state,
        signupErrors: {
          ...state.signupErrors,
          form: action.formData.message,
        },
      };

    case 'RESET_AUTH':
      return {
        ...state, ...initialState,
      };
    case 'LOGIN_USER':
      return {
        ...state,
        user: action.login.data,
        loginResponse: action.login.message,
      };
    case 'SIGNUP_USER':
      return {
        ...state,
        user: action.signup.data,
        signupResponse: action.signup.message,
      };
    default:
      return state;
  }
};

export default authReducer;
