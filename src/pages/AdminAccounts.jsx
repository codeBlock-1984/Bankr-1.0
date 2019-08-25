import React from 'react';
import { connect } from 'react-redux';

import MainTemplate from '../containers/MainTemplate';

class AdminAccounts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainTemplate>
        <section className="box-wrapper account-form-container l-flex l-flex-col">
          <h2 className="section-heading">All Accounts</h2>
          <div className="account-form-wrapper l-flex l-flex-row">
            <div className="detail-table all-accounts-table">
              <div className="detail-table__row">
                <div className="detail-table__head">S/N</div>
                <div className="detail-table__head">Account Name</div>
                <div className="detail-table__head">Account Type</div>
                <div className="detail-table__head">Account Number</div>
                <div className="detail-table__head">Balance</div>
                <div className="detail-table__head">Status</div>
                <div className="detail-table__head action-head" />
              </div>
            </div>
          </div>
        </section>
      </MainTemplate>
    );
  }
}

export default connect()(AdminAccounts);
