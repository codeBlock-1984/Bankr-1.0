import React from 'react';
import { connect } from 'react-redux';

import { hideSettingsBox } from '../actions/modal.actions';

const SettingsModal = ({ settingsModalStyle, dispatch }) => {
  const handleModalCloseClick = () => {
    dispatch(hideSettingsBox());
  };

  return (
    <div className={`brand-modal ${settingsModalStyle}`}>
      <div className="brand-modal-inner settings-modal account-modal">
        <div className="brand-modal-header settings-modal-header">
          <h2 id="user-settings-modal__title" className="brand-modal-title">Profile Settings</h2>
          <span className="brand-modal-close">
            <button type="button" onClick={handleModalCloseClick}>
              x
            </button>
          </span>
        </div>
        <div id="user-settings-modal__main" className="brand-modal-main settings-modal-main">
          <div className="settings-tab">
            <button type="button" id="image-upload-link" className="tab-links active-tab">
              Upload avatar
            </button>
            <button type="button" id="change-password-link" className="tab-links">
              Change password
            </button>
          </div>
          <div className="settings-box image-upload">
            <p>
              <i>
                <b>*</b>
                Enter the url of the image you wish to upload.
                It can be a link to an image on an online image hosting service
                such as pravatar.cc or cloudinary
              </i>
            </p>
            <label className="reg-form__label" htmlFor="image-url">Photo Url</label>
            <input className="reg-form__input" type="text" name="imageUrl" id="image-url" />
            <input className="reg-form__button" type="button" defaultValue="Upload" id="upload-button" />
          </div>
          <div className="settings-box change-password">
            <label className="reg-form__label" htmlFor="old-password">Enter old password</label>
            <input className="reg-form__input" type="password" name="oldPassword" id="old-password" />
            <label className="reg-form__label" htmlFor="new-password">Enter new password</label>
            <input className="reg-form__input" type="password" name="newPassword" id="new-password" />
            <label className="reg-form__label" htmlFor="confirm-password">Confirm new password</label>
            <input className="reg-form__input" type="password" name="confirmPassword" id="confirm-password" />
            <input className="reg-form__button" type="button" defaultValue="Change password" id="change-password-button" />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToComponentProps = (state) => {
  const { settingsBoxStyle } = state.modal.styles;
  return ({
    settingsModalStyle: settingsBoxStyle,
  });
};

export default connect(mapStateToComponentProps)(SettingsModal);
