import React from 'react';
import { connect } from 'react-redux';

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
    const { userName, imgUrl, type } = this.props;
    const mobileMenuLinks = getMobileMenuLinks(type);
    return (
      <section className="main-section">
        <MainAsideHeader
          title={'Dashboard'}
          userName={userName}
          imgUrl={imgUrl}
        />

        <UserPanelBox />

        <MobileMenu mobileMenuLinks={mobileMenuLinks} />

        <SettingsModal />

        <Loader />

        <PageSwitcher type={type} />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  userName: `${state.auth.user.firstName} ${state.auth.user.lastName}`,
  imgUrl: state.auth.user.photourl,
});

export default connect(mapStateToProps)(MainAside);
