import React from 'react';
import { connect } from 'react-redux';

import MainTemplate from '../containers/MainTemplate';

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <MainTemplate>
        <section class="box-wrapper top-box l-flex">
          <h2 class="section-heading">Recent Actions</h2>
          <div class="box trans-box l-flex l-flex-row">
          
          </div>
        </section>
        <section class="box-wrapper bot-box l-flex-col">
            <h2 class="section-heading">My Profile</h2>
          <div class="account-wrapper l-flex l-flex-row">
            
          </div>
        </section>
      </MainTemplate>
    );
  }
}

export default connect()(AdminDashboard);
