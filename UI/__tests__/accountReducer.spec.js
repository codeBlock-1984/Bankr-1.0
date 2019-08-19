import accounReducer from '../src/reducers/account.reducer';
import {
  ADD_ACCOUNT,
  GET_USER_ACCOUNTS,
  SET_USER_ACCOUNTS,
  GET_ALL_ACCOUNTS,
} from '../src/actions/actionTypes';

describe('Account Reducer', () => {
  it('returns the initial state', () => {
    expect(accounReducer(undefined, {})).toEqual({
      userAccounts: [],
      allAccounts: [],
    });
  });

  it('handles ADD_ACCOUNT', () => {
    expect(accounReducer(undefined, {
      type: ADD_ACCOUNT,
      newAccount: { type: 'savings' },
    })).toEqual({
      userAccounts: [],
      allAccounts: [
        { type: 'savings' },
      ],
    });
  });

  it('handles GET_USER_ACCOUNTS', () => {
    expect(accounReducer(undefined, {
      type: GET_USER_ACCOUNTS,
    })).toEqual({
      userAccounts: [],
      allAccounts: [],
    });
  });

  it('handles SET_USER_ACCOUNTS', () => {
    expect(accounReducer(undefined, {
      type: SET_USER_ACCOUNTS,
      data: [{ type: 'savings' }],
    })).toEqual({
      userAccounts: [{ type: 'savings' }],
      allAccounts: [],
    });
  });

  it('handles GET_ALL_ACCOUNTS', () => {
    expect(accounReducer(undefined, {
      type: GET_ALL_ACCOUNTS,
      data: [{ type: 'savings' }],
    })).toEqual({
      userAccounts: [],
      allAccounts: [{ type: 'savings' }],
    });
  });
});
