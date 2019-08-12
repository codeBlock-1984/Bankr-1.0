import { GET_USER_ACTIONS } from './actionTypes';
import serverCall from '../services/serverCall';
import { getUserActionsUrl } from '../services/servicesUrls';

export const getUserActions = token => (dispatch) => {
  const getUserActionsPayload = {
    url: getUserActionsUrl,
    method: 'GET',
    token,
  };

  serverCall(getUserActionsPayload)
    .then((response) => {
      const { data } = response;
      if (data) {
        dispatch({
          type: GET_USER_ACTIONS,
          data,
        });
      } else {
        dispatch({
          type: GET_USER_ACTIONS,
          data: [],
        });
      }
    });
};
