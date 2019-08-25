import modalReducer from '../src/reducers/modal.reducer';

import {
  TOGGLE_USER_PANEL,
  SHOW_SETTINGS_BOX,
  HIDE_SETTINGS_BOX,
} from '../src/actions/actionTypes';

const initialState = {
  styles: {
    userPanelStyle: '',
    settingsBoxStyle: '',
  },
};

describe('Modal reducer', () => {
  it('returns the initial state', () => {
    expect(modalReducer(undefined, {})).toEqual(initialState);
  });


  it('handles TOGGLE_USER_PANEL', () => {
    expect(modalReducer(undefined, {
      type: TOGGLE_USER_PANEL,
      style: 'active',
    })).toEqual({
      ...initialState,
      styles: {
        ...initialState.styles,
        userPanelStyle: 'active',
      },
    });
  });

  it('handles SHOW_SETTINGS_BOX', () => {
    expect(modalReducer(undefined, {
      type: SHOW_SETTINGS_BOX,
      style: 'active',
    })).toEqual({
      ...initialState,
      styles: {
        ...initialState.styles,
        settingsBoxStyle: 'active',
      },
    });
  });

  it('handles HIDE_SETTINGS_BOX', () => {
    expect(modalReducer(undefined, {
      type: HIDE_SETTINGS_BOX,
    })).toEqual({
      ...initialState,
      styles: {
        ...initialState.styles,
        settingsBoxStyle: '',
      },
    });
  });
});
