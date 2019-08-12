import React from 'react';
import { connect } from 'react-redux';

import MainTemplate from '../containers/MainTemplate';
import TransactionTable from '../components/TransactionTable';
import { getUserTransactions } from '../actions/transaction.actions';

class UserTransactions extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getUserTransactions: getTransactions, token } = this.props;
    const userAcc = localStorage.getItem('userAccount');
    console.log(userAcc);

    getTransactions(userAcc, token);
  }

  render() {
    const { transactions } = this.props;
    console.log(transactions);
    return (
      <MainTemplate>
        <section className="box-wrapper account-form-container l-flex l-flex-col">
          <h2 className="section-heading">My Transactions</h2>
          <div className="account-form-wrapper l-flex l-flex-row">
            <TransactionTable
              data={transactions}
            />
          </div>
        </section>
      </MainTemplate>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const { userTransactions } = state.transaction;
  const { token } = state.auth.user;
  console.log(userTransactions);
  return (
    {
      transactions: userTransactions,
      token,
    }
  );
};

export default connect(mapStateToProps, { getUserTransactions })(UserTransactions);
