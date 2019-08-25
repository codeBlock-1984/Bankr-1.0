import axios from 'axios';

import {
  SET_USER_TRANSACTIONS,
  GET_USER_TRANSACTIONS,
} from './actionTypes';

import { getUserTransactionsUrl } from '../services/servicesUrls';

// export const setUserTransactions = (accountnumber, token) => (dispatch) => {
//   const url = getUserTransactionsUrl(accountnumber);
//   const config = { headers: { 'x-auth-token': token } };

//   return axios.get(url, config)
//     .then((response) => {
//       dispatch({
//         type: SET_USER_TRANSACTIONS,
//         data: response.data.data,
//       });
//     })
//     .catch((error) => {
//       dispatch({
//         type: GET_USER_TRANSACTIONS,
//         data: [],
//       });
//     });
// };


export const getUserTransactions = (accountnumber, token) => (dispatch) => {
  const url = getUserTransactionsUrl(accountnumber);
  const config = { headers: { 'x-auth-token': token } };

  return axios.get(url, config)
    .then((response) => {
      dispatch({
        type: GET_USER_TRANSACTIONS,
        data: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_USER_TRANSACTIONS,
        data: [],
      });
    });
};
// export const getUserTransactions = (accountnumber, token) => (dispatch) => ({
//   axios.get(url, config)
//     .then((response) => {
//       dispatch({
//         type: SET_USER_TRANSACTIONS,
//         data: response.data,
//       });
//     })
//     .catch((error) => {
//       dispatch({
//         type: GET_USER_TRANSACTIONS,
//       });
//     }),
// });
