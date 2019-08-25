import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import mockAccountData from '../src/Utils/accountActionMockStore';
import { getAccounts, setUserAccounts } from '../src/actions/account.action';
import axios from '../src/config/axiosInstance';
import {
  SET_USER_ACCOUNTS,
  GET_USER_ACCOUNTS,
  SET_USER_TRANSACTIONS,
  GET_ALL_ACCOUNTS,
} from '../src/actions/actionTypes';

const mockStore = configureMockStore([thunk]);
let store = mockStore();
const {
  token, adminToken, userAccountsSuccess, userTransactionsSuccess, accountsSuccess,
} = mockAccountData;

describe('Account Actions', () => {
  beforeEach(() => {
    moxios.install(axios);
    store.clearActions();
  });

  afterEach(() => moxios.uninstall(axios));

  describe('SetUserAccounts', () => {
    it('Sets user accounts', (done) => {
      moxios.stubRequest('https://ah-nyati-backend-staging.herokuapp.com/api/v1/users/example@gmail.com/accounts', {
        status: 200,
        response: userAccountsSuccess,
      });
      moxios.stubRequest('https://ah-nyati-backend-staging.herokuapp.com/api/accounts/1012934423/transactions', {
        status: 200,
        response: userTransactionsSuccess,
      });

      const { data: accountsData } = userAccountsSuccess;
      const { data: transactionsData } = userTransactionsSuccess;

      const expectedActions = [
        {
          type: SET_USER_ACCOUNTS,
          data: accountsData,
        },
        {
          type: SET_USER_TRANSACTIONS,
          data: transactionsData,
        },
      ];
      store = mockStore({});
      store.dispatch(setUserAccounts('emmanuelroic@gmail.com', token))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });

    it('Returns an empty array if an error occurs', (done) => {
      moxios.stubRequest('https://ah-nyati-backend-staging.herokuapp.com/api/v1/users/example@gmail.com/accounts', {
        status: 400,
        response: 'djjfhh',
      });
      moxios.stubRequest('https://ah-nyati-backend-staging.herokuapp.com/api/accounts/1012934423/transactions', {
        status: 200,
        response: userTransactionsSuccess,
      });

      const expectedActions = [
        {
          type: GET_USER_ACCOUNTS,
          data: [],
        },
      ];
      store = mockStore({});
      store.dispatch(setUserAccounts('emmanuelroic@gmailcom', token))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });
  });

  describe('getAccounts', () => {
    it('Gets all accounts', (done) => {
      moxios.stubRequest('https://ah-nyati-backend-staging.herokuapp.com/api/v1/accounts', {
        status: 200,
        response: accountsSuccess,
      });
      const { data: allAccountsData } = accountsSuccess;

      const expectedActions = [
        {
          type: GET_ALL_ACCOUNTS,
          data: allAccountsData,
        },
      ];
      store = mockStore({});
      store.dispatch(getAccounts(adminToken))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });

    it('Returns an empty array if error occurs', (done) => {
      moxios.stubRequest('https://ah-nyati-backend-staging.herokuapp.com/api/v1/accounts', {
        status: 400,
        response: 'Invalid token',
      });

      const expectedActions = [
        {
          type: GET_ALL_ACCOUNTS,
          data: [],
        },
      ];
      store = mockStore({});
      store.dispatch(getAccounts('eyrhhsjjdkkdf.djoaououe'))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });
  });
});
