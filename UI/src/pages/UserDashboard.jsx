import React from 'react';
import { connect } from 'react-redux';

import MainTemplate from '../containers/MainTemplate';
import TransactionList from '../components/TransactionList';
import getTrimmedList from '../helpers/getTrimmedList';
import AccountList from '../components/AccountList';
import { setUserAccounts, getUserAccounts } from '../actions/account.action';
import TopPlaceholder from '../components/TopPlaceholder';
import BottomPlaceholder from '../components/BottomPlaceholder';
// import { setUserTransactions } from '../actions/transaction.actions';

export class UserDashboard extends React.Component {
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
    let topContent;
    let bottomContent;
    if (userTransactions.length > 0 && userAccounts.length > 0) {
      localStorage.setItem('userAccounts1', JSON.stringify(trimmedUserAccounts[0]));
      localStorage.setItem('userAccounts2', JSON.stringify(trimmedUserAccounts[1]));

      topContent = (
        <TransactionList
          transArray={trimmedUserTransactions}
        />
      );
      bottomContent = (
        <AccountList
          accountArray={trimmedUserAccounts}
        />
      );
    } else {
      topContent = (
        <TopPlaceholder
          body="No recent transactions to display"
        />
      );
      bottomContent = (
        <BottomPlaceholder
          body="No accounts to display"
        />
      );
    }

    return (
      <MainTemplate>
        <section className="box-wrapper top-box l-flex l-flex-col">
          <h2 className="section-heading">Recent Transactions</h2>
          {topContent}
        </section>
        <section className="box-wrapper bot-box l-flex l-flex-col">
          <h2 className="section-heading">My Accounts</h2>
          {bottomContent}
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
