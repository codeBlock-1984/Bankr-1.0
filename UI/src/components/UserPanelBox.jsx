import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { showSettingsBox } from '../actions/modal.actions';

const UserPanelBox = ({ style, dispatch }) => {
  const userPanelStyle = style;

  const handleSettingsClick = () => {
    dispatch(showSettingsBox('active--brand-modal'));
  };

  return (
    <div id="user-panel" className={`user-panel-box ${userPanelStyle}`}>
      <ul className="main-nav__list bot-list">
        <li className="main-nav__li-item">
          <button type="button" className="main-nav__link settings" onClick={handleSettingsClick}>
            <i className="fas fa-cog main-nav__icon" />
            <span className="main-nav__link-desc user-panel__desc">Settings</span>
          </button>
        </li>
        <li className="main-nav__li-item">
          <Link to="/signin" className="main-nav__link logout">
            <i className="fas fa-sign-out-alt main-nav__icon" />
            <span className="main-nav__link-desc user-panel__desc">Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

const mapStateToComponentProps = (state) => {
  const { userPanelStyle } = state.modal.styles;
  return (
    {
      style: userPanelStyle,
    }
  );
};

export default connect(mapStateToComponentProps)(UserPanelBox);
