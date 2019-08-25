import {
  TOGGLE_USER_PANEL,
  SHOW_SETTINGS_BOX,
  HIDE_SETTINGS_BOX,
} from './actionTypes';

export const toggleUserPanel = style => ({
  type: TOGGLE_USER_PANEL,
  style,
});

export const showSettingsBox = style => ({
  type: SHOW_SETTINGS_BOX,
  style,
});

export const hideSettingsBox = () => ({
  type: HIDE_SETTINGS_BOX,
});
