import React from 'react';
import { connect } from 'react-redux';

import MainTemplate from '../containers/MainTemplate';

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <MainTemplate>
        <section className="box-wrapper top-box l-flex l-flex-col">
          <h2 className="section-heading">Recent Transactions</h2>
          <div className="box trans-box l-flex l-flex-row">
            <p>No recent transactions to display</p>
          </div>
        </section>
        <section className="box-wrapper bot-box l-flex l-flex-col">
          <h2 className="section-heading">My Accounts</h2>
          <div className="account-wrapper l-flex l-flex-row">
            <p>You don't have any accounts yet. Want to quickly <a href="create-account.html">create one</a>?</p>
          </div>
        </section>
      </MainTemplate>
    );
  }
}

export default connect()(UserDashboard);
