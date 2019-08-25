import moxios from 'moxios';
import makeMockStore from './Utils/makeMockStore';
import mockTransactionsData from '../src/Utils/transactionActionMockStore';

import { setUserTransactions, getUserTransactions } from '../src/actions/transaction.actions';
import {
  GET_USER_TRANSACTIONS,
  SET_USER_TRANSACTIONS,
} from '../src/actions/actionTypes';

const store = makeMockStore({
  transaction: {
    allTransactions: [],
    userTransactions: [],
  },
});

const { success, token } = mockTransactionsData;

describe('Transaction Actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('Gets the users transactions', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: success });
    });

    const expectedActions = [
      { type: GET_USER_TRANSACTIONS, data: success.data },
    ];

    return store.dispatch(getUserTransactions(token))
      .then(() => {
        const actionsCalled = store.getActions();
        expect(actionsCalled).toEqual(expectedActions);
      });
  });
});
