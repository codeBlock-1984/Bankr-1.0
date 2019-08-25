import React from 'react';
import { connect } from 'react-redux';
import { toggleUserPanel } from '../actions/modal.actions';

export const MainAsideHeader = (props) => {
  const {
    title,
    userName,
    imgUrl,
    dispatch,
    userPanelStyle,
  } = props;

  const handleImageClick = () => {
    const currentStyle = userPanelStyle;
    let newStyle;
    if (currentStyle) {
      newStyle = '';
    } else {
      newStyle = 'active--user-panel';
    }
    dispatch(toggleUserPanel(newStyle));
  };

  return (
    <header className="main-header l-flex l-flex-row">
      <div className="search">
        <form action className="search__form">
          <input type="text" className="search__input" placeholder="type to search..." />
          <button type="submit" className="search__button">
            <i className="fas fa-search search__icon" />
          </button>
        </form>
      </div>
      <div className="mobile-nav-icon-box">
        <span id="mobile-menu-link" className="mobile-nav-icon-link">
          <i className="fas fa-bars mobile-nav-icon" />
        </span>
      </div>
      <div className="mobile-heading">
        <h1 className="mobile-heading__text">{title}</h1>
      </div>
      <div className="profile">
        <p className="profile__title">{userName}</p>
        <img
          id="user-panel-link"
          src={imgUrl || '/UI/src/imgs/avatar.png'}
          alt="userimage"
          className="avatar"
          onClick={handleImageClick}
        />
      </div>
    </header>
  );
};

const mapStateToComponentProps = (state) => {
  const { userPanelStyle } = state.modal.styles;
  return {
    userPanelStyle,
  };
};

export default connect(mapStateToComponentProps)(MainAsideHeader);
