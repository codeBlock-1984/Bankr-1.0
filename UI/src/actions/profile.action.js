import axios from 'axios';
import { GET_USER_PROFILE } from './actionTypes';
import serverCall from '../services/serverCall';
import { getUserProfileUrl } from '../services/servicesUrls';

export const setUserProfile = (id, token) => (dispatch) => {
  const getUserAccountsPayload = {
    url: getUserProfileUrl(id),
    method: 'GET',
    token,
  };

  serverCall(getUserAccountsPayload)
    .then((response) => {
      const { data } = response;
      if (data) {
        dispatch({
          type: GET_USER_PROFILE,
          data,
        });

        // const { accountnumber } = data[0];
        // localStorage.setItem('userAccount', accountnumber);
        // const url = getUserTransactionsUrl(accountnumber);

        // const config = { headers: { 'x-auth-token': token } };

        // axios.get(url, config)
        //   .then((res) => {
        //     dispatch({
        //       type: SET_USER_TRANSACTIONS,
        //       data: res.data.data,
        //     });
        //   })
        //   .catch((error) => {
        //     dispatch({
        //       type: GET_USER_TRANSACTIONS,
        //     });
        //   });
      } else {
        // dispatch({
        //   type: GET_USER_ACCOUNTS,
        // });
      }
    });
};
