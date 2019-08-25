const initialState = {
  styles: {
    userPanelStyle: '',
    settingsBoxStyle: '',
  },
};

const modalReducer = (state = initialState, action) => {
  const { type, style } = action;
  switch (type) {
    case 'TOGGLE_USER_PANEL':
      return {
        ...state,
        styles: {
          ...state.styles,
          userPanelStyle: style,
        },
      };

    case 'SHOW_SETTINGS_BOX':
      return {
        ...state,
        styles: {
          ...state.styles,
          settingsBoxStyle: style,
        },
      };

    case 'HIDE_SETTINGS_BOX':
      return {
        ...state,
        styles: {
          ...state.styles,
          settingsBoxStyle: '',
        },
      };

    default:
      return state;
  }
};

export default modalReducer;
