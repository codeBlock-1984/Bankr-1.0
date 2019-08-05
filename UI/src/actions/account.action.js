import {
  SET_USER_ACCOUNTS,
} from './actionTypes';

export const setUserAccounts = data => (
  {
    type: SET_USER_ACCOUNTS,
    data,
  }
);
