import moxios from 'moxios';
import makeMockStore from './Utils/makeMockStore';
import mockActionsData from '../src/Utils/actionActionMockStore';

import { getUserActions } from '../src/actions/action.action';
import {
  GET_USER_ACTIONS,
} from '../src/actions/actionTypes';

const store = makeMockStore({
  action: {
    allActions: [],
    userActions: [],
  },
});

const { success, token } = mockActionsData;

describe('Action Actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('Gets the users actions', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: success });
    });

    const expectedActions = [
      { type: GET_USER_ACTIONS, data: success.data },
    ];

    return store.dispatch(getUserActions(token))
      .then(() => {
        const actionsCalled = store.getActions();
        expect(actionsCalled).toEqual(expectedActions);
      });
  });
});
