import {
  handleEmail,
  handlePassword,
  handleFirstname,
  handleLastname,
  handleForm,
  resetAuth,
  loginUser,
  signupUser,
} from '../src/actions/auth.actions';
import {
  HANDLE_PASSWORD,
  HANDLE_EMAIL,
  HANDLE_FIRSTNAME,
  HANDLE_LASTNAME,
  HANDLE_FORM,
  SIGNUP_USER,
  LOGIN_USER,
  RESET_AUTH,
} from '../src/actions/actionTypes';

describe('Auth actions', () => {
  describe('handleEmail', () => {
    it('returns email action creator', () => {
      expect(handleEmail(
        { email: 'glenn@example.com', error: '', login: 'login' },
      )).toEqual({ type: HANDLE_EMAIL, emailData: { email: 'glenn@example.com', error: '', login: 'login' } });
    });
  });

  describe('handlePassword', () => {
    it('returns password action creator', () => {
      expect(handlePassword(
        { password: 'd4o4rjd', error: '', login: 'login' },
      )).toEqual({ type: HANDLE_PASSWORD, passwordData: { password: 'd4o4rjd', error: '', login: 'login' } });
    });
  });

  describe('handleFirstname', () => {
    it('returns firstname action creator', () => {
      expect(handleFirstname({ firstName: 'd4o4rjd', error: '' })).toEqual({ type: HANDLE_FIRSTNAME, firstNameData: { firstName: 'd4o4rjd', error: '' } });
    });
  });

  describe('handleLastname', () => {
    it('returns lastname action creator', () => {
      expect(handleLastname({ lastName: 'd4o4rjd', error: '' })).toEqual({ type: HANDLE_LASTNAME, lastNameData: { lastName: 'd4o4rjd', error: '' } });
    });
  });

  describe('handleForm', () => {
    it('returns form action creator', () => {
      expect(handleForm({ message: 'error' })).toEqual({ type: HANDLE_FORM, formData: { message: 'error' } });
    });
  });

  describe('resetAuth', () => {
    it('returns resetAuth action creator', () => {
      expect(resetAuth()).toEqual({ type: RESET_AUTH });
    });
  });

  describe('loginUser', () => {
    it('returns login action creator', () => {
      expect(loginUser({ data: [], message: 'success' })).toEqual({ type: LOGIN_USER, login: { data: [], message: 'success' } });
    });
  });

  describe('signupUser', () => {
    it('returns signup action creator', () => {
      expect(signupUser({ data: [], message: 'success' })).toEqual({ type: SIGNUP_USER, signup: { data: [], message: 'success' } });
    });
  });
});
