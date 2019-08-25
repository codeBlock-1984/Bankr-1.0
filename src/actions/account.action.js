import axios from 'axios';

import {
  SET_USER_ACCOUNTS,
  GET_USER_ACCOUNTS,
  SET_USER_TRANSACTIONS,
  GET_USER_TRANSACTIONS,
  GET_ALL_ACCOUNTS,
} from './actionTypes';

import { getUserAccountsUrl, getUserTransactionsUrl, getAccountsUrl } from '../services/servicesUrls';

export const setUserAccounts = (email, token) => (dispatch) => {
  const url = getUserAccountsUrl(email);
  const config = { headers: { 'x-auth-token': token } };

  return axios.get(url, config)
    .then((response) => {
      const { data } = response.data;

      dispatch({
        type: SET_USER_ACCOUNTS,
        data,
      });

      const { accountnumber } = data[0];
      localStorage.setItem('userAccount', accountnumber);
      const accountsUrl = getUserTransactionsUrl(accountnumber);

      const accountConfig = { headers: { 'x-auth-token': token } };

      return axios.get(accountsUrl, accountConfig)
        .then((res) => {
          dispatch({
            type: SET_USER_TRANSACTIONS,
            data: res.data.data,
          });
        })
        .catch((error) => {
          dispatch({
            type: GET_USER_TRANSACTIONS,
            data: [],
          });
        });
    })
    .catch(error => dispatch({
      type: GET_USER_ACCOUNTS,
      data: [],
    }));
};

export const getAccounts = token => (dispatch) => {
  const config = { headers: { 'x-auth-token': token } };
  return axios.get(getAccountsUrl, config)
    .then((res) => {
      dispatch({
        type: GET_ALL_ACCOUNTS,
        data: res.data.data,
      });
    })
    .catch(error => dispatch({
      type: GET_ALL_ACCOUNTS,
      data: [],
    }));
};
