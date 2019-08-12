import React from 'react';
import { connect } from 'react-redux';

import MainTemplate from '../containers/MainTemplate';
import TransactionList from '../components/TransactionList';
import getTrimmedList from '../helpers/getTrimmedList';
import AccountList from '../components/AccountList';
import { setUserAccounts, getUserAccounts } from '../actions/account.action';
// import { setUserTransactions } from '../actions/transaction.actions';

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { user, setUserAccounts: setAccounts } = this.props;
    const { email, token } = user;
    setAccounts(email, token);
  }

  render() {
    const { userTransactions, userAccounts } = this.props;
    const trimmedUserTransactions = getTrimmedList(userTransactions, 4);
    const trimmedUserAccounts = getTrimmedList(userAccounts, 2);

    if (userTransactions.length === 0 || userAccounts.length === 0) {
      return <h3>Loading...</h3>;
    }
    return (
      <MainTemplate>
        <section className="box-wrapper top-box l-flex l-flex-col">
          <h2 className="section-heading">Recent Transactions</h2>
          <TransactionList
            transArray={trimmedUserTransactions}
          />
        </section>
        <section className="box-wrapper bot-box l-flex l-flex-col">
          <h2 className="section-heading">My Accounts</h2>
          <AccountList
            accountArray={trimmedUserAccounts}
          />
        </section>
      </MainTemplate>
    );
  }
}

const mapStateToComponentProps = (state) => {
  const { userTransactions } = state.transaction;
  const { userAccounts } = state.account;
  const { user } = state.auth;

  return {
    userTransactions,
    userAccounts,
    user,
  };
};

export default connect(mapStateToComponentProps, { getUserAccounts, setUserAccounts })(UserDashboard);
