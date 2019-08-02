import {
  SIGNUP_USER,
  LOGIN_USER,
  HANDLE_EMAIL,
  HANDLE_PASSWORD,
  HANDLE_FIRSTNAME,
  HANDLE_LASTNAME,
  RESET_AUTH,
} from './actionTypes';


export const handleEmail = emailData => ({
  type: HANDLE_EMAIL,
  emailData,
});

export const handlePassword = passwordData => ({
  type: HANDLE_PASSWORD,
  passwordData,
});

export const handleFirstname = firstNameData => ({
  type: HANDLE_FIRSTNAME,
  firstNameData,
});

export const handleLastname = lastNameData => ({
  type: HANDLE_LASTNAME,
  lastNameData,
});

export const resetAuth = () => ({
  type: RESET_AUTH,
});

export const loginUser = login => ({
  type: LOGIN_USER,
  login,
});

export const signupUser = signup => ({
  type: SIGNUP_USER,
  signup,
});
