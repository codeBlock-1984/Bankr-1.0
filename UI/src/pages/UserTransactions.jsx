import React from 'react';
import { connect } from 'react-redux';

import MainTemplate from '../containers/MainTemplate';

class UserTransactions extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <MainTemplate>
        <section className="box-wrapper account-form-container l-flex l-flex-col">
          <h2 className="section-heading">My Transactions</h2>
          <div className="account-form-wrapper l-flex l-flex-row">
            <div className="detail-table">
              <div className="detail-table__row">
                <div className="detail-table__head trans-tb-date-head">Date</div>
                <div className="detail-table__head trans-tb-desc-head">Description</div>
                <div className="detail-table__head trans-tb-type-head">Type</div>
                <div className="detail-table__head trans-tb-amount-head">Amount</div>
                <div className="detail-table__head trans-tb-balance-head">Balance</div>
                <div className="detail-table__head trans-tb-icon-head" />
              </div>
            </div>
          </div>
        </section>
      </MainTemplate>
    );
  }
}

export default connect()(UserTransactions);
