import React from 'react';
import { connect } from 'react-redux';

import MainTemplate from '../containers/MainTemplate';
import TransactionTable from '../components/TransactionTable';
import { getUserTransactions } from '../actions/transaction.actions';
import TransactionsPlaceholder from '../components/TransactionsPlaceholder';

export class UserTransactions extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getUserTransactions: getTransactions, token } = this.props;
    const userAcc = localStorage.getItem('userAccount');

    getTransactions(userAcc, token);
  }

  render() {
    const { transactions } = this.props;
    let content;

    if (transactions.length === 0) {
      content = (
        <TransactionsPlaceholder
          body="No transaction records to display"
        />
      );
    } else {
      content = (
        <TransactionTable
          data={transactions}
        />
      );
    }

    return (
      <MainTemplate>
        <section className="box-wrapper account-form-container l-flex l-flex-col">
          <h2 className="section-heading">My Transactions</h2>
          <div className="account-form-wrapper l-flex l-flex-row transaction-table-wrapper">
            {content}
          </div>
        </section>
      </MainTemplate>
    );
  }
}

export const mapStateToProps = (state) => {
  const { userTransactions } = state.transaction;
  const { token } = state.auth.user;

  return (
    {
      transactions: userTransactions,
      token,
    }
  );
};

export default connect(mapStateToProps, { getUserTransactions })(UserTransactions);
