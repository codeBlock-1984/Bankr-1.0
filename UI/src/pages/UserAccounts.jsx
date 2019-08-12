import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import MainTemplate from '../containers/MainTemplate';
import AccountBigBoxList from '../components/AccountBigBoxList';
import getTrimmedList from '../helpers/getTrimmedList';
import { getUserAccounts } from '../actions/account.action';

class UserAccounts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    getUserAccounts();
  }

  render() {
    const { userAccounts, user } = this.props;
    const trimmedUserAccounts = getTrimmedList(userAccounts, 2);
    const {
      firstName,
      lastName,
      email,
    } = user;

    const userDetails = {
      firstName,
      lastName,
      email,
    };

    return (
      <MainTemplate>
        <section className="box-wrapper acc-box l-flex-col">
          <h2 className="section-heading">My Accounts</h2>
          <div className="column-wrapper">
            <Link className="action-btn create-new-link" to="/user-dashboard/create-account">create new</Link>
            <AccountBigBoxList
              accountArray={trimmedUserAccounts}
              userDetails={userDetails}
            />
          </div>
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

export default connect(mapStateToComponentProps)(UserAccounts);
