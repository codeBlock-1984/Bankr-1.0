import actionReducer from '../src/reducers/actionReducer';
import { GET_USER_ACTIONS } from '../src/actions/actionTypes';

describe('Action Reducer', () => {
  it('returns the initial state', () => {
    expect(actionReducer(undefined, {})).toEqual({
      userActions: [],
      allActions: [],
    });
  });


  it('handles GET_USER_ACTIONS', () => {
    expect(actionReducer(undefined, {
      type: GET_USER_ACTIONS,
      data: [{ type: 'savings' }],
    })).toEqual({
      userActions: [{ type: 'savings' }],
      allActions: [],
    });
  });
});
