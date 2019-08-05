import React from 'react';
import { connect } from 'react-redux';

import MainTemplate from '../containers/MainTemplate';
import TransactionList from '../components/TransactionList';
import getTrimmedList from '../helpers/getTrimmedList';
import AccountList from '../components/AccountList';
import serverCall from '../services/serverCall';
import { getUserTransactionsUrl, getUserAccountsUrl } from '../services/servicesUrls';
import { setUserAccounts } from '../actions/account.action';
import { setUserTransactions } from '../actions/transaction.actions';

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { user, dispatch } = this.props;
    const { email, token } = user;
    let accountNumber;
    const getUserAccountsPayload = {
      url: getUserAccountsUrl(email),
      method: 'GET',
      token,
    };

    serverCall(getUserAccountsPayload)
      .then((res) => {
        if (!res.error) {
          const { data } = res;
          dispatch(setUserAccounts(data));

          const { accountnumber } = data[0];
          accountNumber = accountnumber;

          const getUserTransactionsPayload = {
            url: getUserTransactionsUrl(accountNumber),
            method: 'GET',
            token,
          };

          serverCall(getUserTransactionsPayload)
            .then((response) => {
              if (!response.error) {
                const { data: transactionsData } = response;
                dispatch(setUserTransactions(transactionsData));
              } else {
                console.log(response.error);
              }
            });
        } else {
          console.log(res.error);
        }
      });
  }

  render() {
    const { userTransactions, userAccounts } = this.props;
    const trimmedUserTransactions = getTrimmedList(userTransactions, 4);
    // console.log(userTransactions);
    // console.log(userAccounts);
    const trimmedUserAccounts = getTrimmedList(userAccounts, 2);

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

export default connect(mapStateToComponentProps)(UserDashboard);
