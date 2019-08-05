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
        <div>
          <section className="box-wrapper top-box l-flex">
            <h2 className="section-heading">Recent Actions</h2>
            <div className="box trans-box l-flex l-flex-row" />
          </section>
          <section className="box-wrapper bot-box l-flex-col">
            <h2 className="section-heading">My Profile</h2>
            <div className="account-wrapper l-flex l-flex-row" />
          </section>
        </div>

      </MainTemplate>
    );
  }
}

export default connect()(AdminDashboard);
