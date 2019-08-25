import reducer from '../src/reducers/reducer';
import { HIDE_SETTINGS_BOX } from '../src/actions/actionTypes';

const initialState = {
  auth: {
    user: {},
    newLogin: {
      email: '',
      password: '',
    },
    newSignup: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    loginErrors: {
      email: '',
      password: '',
      form: null,
    },
    signupErrors: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      form: null,
    },
    signupResponse: null,
    loginResponse: null,
  },
  account: {
    userAccounts: [],
    allAccounts: [],
  },
  transaction: {
    userTransactions: [],
    allTransactions: [],
  },
  modal: {
    styles: {
      userPanelStyle: '',
      settingsBoxStyle: '',
    },
  },
  action: {
    userActions: [],
    allActions: [],
  },
};

describe('Reducer', () => {
  it('returns undefined', () => {
    expect(reducer({}, {
      type: '',
    })).toEqual(initialState);
  });

  it('handles HIDE_SETTINGS_BOX', () => {
    expect(reducer(undefined, {
      type: HIDE_SETTINGS_BOX,
    })).toEqual({
      ...initialState,
      modal: {
        ...initialState.modal,
        styles: {
          ...initialState.modal.styles,
          settingsBoxStyle: '',
        },
      },
    });
  });
});
