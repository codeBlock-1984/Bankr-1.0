import transactionReducer from '../src/reducers/transaction.reducer';
import {
  ADD_TRANSACTION,
  GET_USER_TRANSACTIONS,
  SET_USER_TRANSACTIONS,
} from '../src/actions/actionTypes';

const initialState = {
  userTransactions: [],
  allTransactions: [],
};

describe('Transaction Reducer', () => {
  it('returns the initial state', () => {
    expect(transactionReducer(undefined, {})).toEqual(initialState);
  });

  it('handles ADD_TRANSACTION', () => {
    expect(transactionReducer(undefined, {
      type: ADD_TRANSACTION,
      newTransaction: { type: 'debit' },
    })).toEqual({
      ...initialState,
      allTransactions: [
        ...initialState.allTransactions,
        { type: 'debit' },
      ],
    });
  });

  it('handles GET_USER_TRANSACTIONS', () => {
    expect(transactionReducer(undefined, {
      type: GET_USER_TRANSACTIONS,
      data: [{ type: 'debit' }],
    })).toEqual({
      ...initialState,
      userTransactions: [
        { type: 'debit' },
      ],
    });
  });

  it('handles SET_USER_TRANSACTIONS', () => {
    expect(transactionReducer(undefined, {
      type: SET_USER_TRANSACTIONS,
      data: [{ type: 'debit' }],
    })).toEqual({
      ...initialState,
      userTransactions: [
        { type: 'debit' },
      ],
    });
  });
});
