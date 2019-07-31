import {
  SIGNUP_USER,
  LOGIN_USER,
  HANDLE_EMAIL,
  HANDLE_PASSWORD,
  HANDLE_FIRSTNAME,
  HANDLE_LASTNAME,
  RESET_AUTH
} from './actionTypes';


export const handleEmail = (emailData) => {
  return {
    type: HANDLE_EMAIL,
    emailData
  }
};

export const handlePassword = (passwordData) => {
  return {
    type: HANDLE_PASSWORD,
    passwordData
  }
};

export const handleFirstname = (firstNameData) => {
  return {
    type: HANDLE_FIRSTNAME,
    firstNameData
  }
};

export const handleLastname = (lastNameData) => {
  return {
    type: HANDLE_LASTNAME,
    lastNameData
  }
};

export const resetAuth = () => {
  return {
    type: RESET_AUTH
  }
}

export const loginUser = (login) => {
  return {
    type: LOGIN_USER,
    login
  }
};

export const signupUser = (signup) => {
  return {
    type: SIGNUP_USER,
    signup
  }
};
