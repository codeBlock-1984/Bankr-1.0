import React from 'react';

const UserPanelBox = (props) => {
  return (
    <div id="user-panel" className="user-panel-box">
      <ul className="main-nav__list bot-list">
        <li className="main-nav__li-item">
          <a href className="main-nav__link settings">
            <i className="fas fa-cog main-nav__icon" />
            <span className="main-nav__link-desc user-panel__desc">Settings</span>
          </a>
        </li>  
        <li className="main-nav__li-item">
          <a href className="main-nav__link logout">
            <i className="fas fa-sign-out-alt main-nav__icon" />
            <span className="main-nav__link-desc user-panel__desc">Logout</span>
          </a>
        </li>  
      </ul>
    </div>
  );
};

export default UserPanelBox;
