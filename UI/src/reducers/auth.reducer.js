const initialState = {
  user: {},
  newLogin: {
    email: '',
    password: ''
  },
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

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'HANDLE_EMAIL':
      if (action.emailData.login) {
        return {
          ...state,
          newLogin: { ...state.newLogin, email: action.emailData.email },
          errors: { ...state.errors, email: action.emailData.error }
        }
      }
      return {
        ...state,
        newSignup: { ...state.newSignup, email: action.emailData.email },
        errors: { ...state.errors, email: action.emailData.error }
      }

    case 'HANDLE_PASSWORD':
        if (action.passwordData.login) {
          return {
            ...state,
            newLogin: { ...state.newLogin, password: action.passwordData.password },
            errors: { ...state.errors, password: action.passwordData.error }
          }
        }
        return {
          ...state,
          newSignup: { ...state.newSignup, password: action.passwordData.password },
          errors: { ...state.errors, password: action.passwordData.error }
        }
    
    case 'HANDLE_FIRSTNAME':
      return {
        ...state,
        newSignup: { ...state.newSignup, firstName: action.firstNameData.firstName },
        errors: { ...state.errors, firstName: action.firstNameData.error }
      }

    case 'HANDLE_LASTNAME':
      return {
        ...state,
        newSignup: { ...state.newSignup, lastName: action.lastNameData.lastName },
        errors: { ...state.errors, lastName: action.lastNameData.error }
      }

    case 'RESET_AUTH':
      return {
        ...state, ...initialState
      }
    case 'LOGIN_USER':
      return {
        ...state, user: action.login
      }
    case 'SIGNUP_USER':
      return {
        ...state, user: action.signup
      }
    default:
      return state;
  }

};

export default authReducer;
