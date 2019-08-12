import axios from 'axios';

import {
  SET_USER_ACCOUNTS,
  GET_USER_ACCOUNTS,
  SET_USER_TRANSACTIONS,
  GET_USER_TRANSACTIONS,
} from './actionTypes';

import { getUserAccountsUrl, getUserTransactionsUrl } from '../services/servicesUrls';
import serverCall from '../services/serverCall';

export const getUserAccounts = (email, token) => (dispatch) => {
  const url = getUserAccountsUrl(email);
  const config = { headers: { 'x-auth-token': token } };

  axios.get(url, config)
    .then((response) => {
      console.log(response.data.data);
      dispatch({
        type: GET_USER_TRANSACTIONS,
        data: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_USER_TRANSACTIONS,
      });
    });
};

export const setUserAccounts = (email, token) => (dispatch) => {
  const getUserAccountsPayload = {
    url: getUserAccountsUrl(email),
    method: 'GET',
    token,
  };

  serverCall(getUserAccountsPayload)
    .then((response) => {
      const { data } = response;
      if (data) {
        dispatch({
          type: SET_USER_ACCOUNTS,
          data,
        });

        const { accountnumber } = data[0];
        localStorage.setItem('userAccount', accountnumber);
        const url = getUserTransactionsUrl(accountnumber);

        const config = { headers: { 'x-auth-token': token } };

        axios.get(url, config)
          .then((res) => {
            dispatch({
              type: SET_USER_TRANSACTIONS,
              data: res.data.data,
            });
          })
          .catch((error) => {
            dispatch({
              type: GET_USER_TRANSACTIONS,
            });
          });
      } else {
        dispatch({
          type: GET_USER_ACCOUNTS,
        });
      }
    });
};
