import {
  SET_USER_TRANSACTIONS,
} from './actionTypes';

export const setUserTransactions = data => (
  {
    type: SET_USER_TRANSACTIONS,
    data,
  }
);
