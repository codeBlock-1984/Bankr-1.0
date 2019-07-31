import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import MainTemplate from '../containers/MainTemplate';

class UserAccounts extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <MainTemplate>
        <section className="box-wrapper acc-box l-flex-col">
          <h2 className="section-heading">My Accounts</h2>
          <div className="column-wrapper">
            <Link className="action-btn create-new-link" to="/user-dashboard/create-account">create new</Link>
            <div className="account-wrapper big-wrapper l-flex l-flex-col">
              <div className="account-box big-box">
                <span className="account-detail__title">Account name</span>
                <p className="account-detail account-name">Aisha Wole</p>
                <span className="account-detail__title">Email</span>
                <p className="account-detail account-email">aishamaw@yahoo.com</p>
                <span className="account-detail__title">Account type</span>
                <p className="account-detail account-type">Savings Account</p>
                <span className="account-detail__title">Account number</span>
                <p className="account-detail account-number">A/C &nbsp;&nbsp; 0019302312</p>
                <span className="account-detail__title">Status</span>
                <p className="account-detail account-status">Active</p>
                <span className="account-detail__title">Date created</span>
                <p className="account-detail account-created-on">10th March, 2019</p>
                <span className="account-detail account-card"><img src="/UI/src/imgs/verve-logo.png" className="card-logo" alt="verve logo" /> &nbsp;&nbsp;&nbsp;&nbsp;** 4355 8603</span>
                <p className="account-detail account-balance account-red">- 23.00 &nbsp;ngn</p>
                <p className="account-detail account-balance-desc">(Current balance)</p>
                <a className="action-btn view-transactions-link" href="pages/transactions/1/transactions.html">view transactions</a>
              </div>
              <div className="account-box big-box">
                <span className="account-detail__title">Account name</span>
                <p className="account-detail account-name">Aisha Amaka Wole</p>
                <span className="account-detail__title">Email</span>
                <p className="account-detail account-email">aisha@company.com</p>
                <span className="account-detail__title">Account type</span>
                <p className="account-detail account-type">Current Account</p>
                <span className="account-detail__title">Account number</span>
                <p className="account-detail account-number">A/C &nbsp;&nbsp; 0027668401</p>
                <span className="account-detail__title">Status</span>
                <p className="account-detail account-status">Active</p>
                <span className="account-detail__title">Date created</span>
                <p className="account-detail account-created-on">10th March, 2019</p>
                <span className="account-detail account-card"><img src="/UI/src/imgs/mastercard-logo.png" className="card-logo" alt="mastercard logo" /> &nbsp;&nbsp;&nbsp;&nbsp;** 7406 2129</span>
                <p className="account-detail account-balance account-green">408,874.00 &nbsp;ngn</p>
                <p className="account-detail account-balance-desc">(Current balance)</p>
                <a className="action-btn view-transactions-link" href="pages/transactions/2/transactions.html">view transactions</a>
              </div>
            </div>
          </div>
        </section>
      </MainTemplate>
    );
  }
}

export default connect()(UserAccounts);
