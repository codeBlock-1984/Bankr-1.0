import {
  toggleUserPanel,
  showSettingsBox,
  hideSettingsBox,
} from '../src/actions/modal.actions';
import {
  TOGGLE_USER_PANEL,
  SHOW_SETTINGS_BOX,
  HIDE_SETTINGS_BOX,
} from '../src/actions/actionTypes';

describe('Modal actions', () => {
  describe('toggleUserPanel', () => {
    it('returns toggle action creator', () => {
      expect(toggleUserPanel('active')).toEqual({ type: TOGGLE_USER_PANEL, style: 'active' });
    });
  });

  describe('showSettingsBox', () => {
    it('returns show action creator', () => {
      expect(showSettingsBox('active')).toEqual({ type: SHOW_SETTINGS_BOX, style: 'active' });
    });
  });

  describe('hideSettingsBox', () => {
    it('returns hide action creator', () => {
      expect(hideSettingsBox()).toEqual({ type: HIDE_SETTINGS_BOX });
    });
  });
});
