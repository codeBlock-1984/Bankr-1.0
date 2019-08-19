import Axios from 'axios';
import { GET_USER_ACTIONS } from './actionTypes';
import serverCall from '../services/serverCall';
import { getUserActionsUrl } from '../services/servicesUrls';

export const getUserActions = token => (dispatch) => {
  const url = getUserActionsUrl;
  const config = { headers: { 'x-auth-token': token } };

  return Axios.get(url, config)
    .then((response) => {
      const { data } = response.data;
      dispatch({
        type: GET_USER_ACTIONS,
        data,
      });
    })
    .catch(error => dispatch({
      type: GET_USER_ACTIONS,
      data: [],
    }));
};
