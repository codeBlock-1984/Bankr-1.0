import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import MainAsideHeader from './MainAsideHeader';
import UserPanelBox from './UserPanelBox';
import MobileMenu from './MobileMenu';
import SettingsModal from './SettingsModal';
import Loader from './Loader';
import UserDashboard from '../pages/UserDashboard';
import UserAccounts from '../pages/UserAccounts';
import UserTransactions from '../pages/UserTransactions';

class MainAside extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log(this.props.userName);
    return (
      <section className="main-section">
          <MainAsideHeader
            title={'Dashboard'}
            userName={this.props.userName}
            imgUrl={this.props.imgUrl}
          />
          
          <UserPanelBox />

          <MobileMenu />
          
          <SettingsModal />

          <Loader />

          <Switch>
            <Route exact path='/user-dashboard' component={UserDashboard}/>
            <Route path='/user-dashboard/accounts' component={UserAccounts}/>
            <Route path='/user-dashboard/transactions' component={UserTransactions}/>
          </Switch>
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
