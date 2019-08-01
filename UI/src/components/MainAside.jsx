import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import MainAsideHeader from './MainAsideHeader';
import UserPanelBox from './UserPanelBox';
import MobileMenu from './MobileMenu';
import SettingsModal from './SettingsModal';
import Loader from './Loader';
import PageSwitcher from './PageSwitcher';
import getMobileMenuLinks from '../helpers/getMobileMenuLinks';


class MainAside extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const mobileMenuLinks = getMobileMenuLinks(this.props.type);
    return (
      <section className="main-section">
          <MainAsideHeader
            title={'Dashboard'}
            userName={this.props.userName}
            imgUrl={this.props.imgUrl}
          />
          
          <UserPanelBox />

          <MobileMenu mobileMenuLinks={mobileMenuLinks}/>
          
          <SettingsModal />

          <Loader />

          <PageSwitcher type={this.props.type}/>
        </section>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    userName: `${state.auth.user.firstName} ${state.auth.user.lastName}`,
    imgUrl: state.auth.user.photourl
  }
};

export default connect(mapStateToProps)(MainAside);
