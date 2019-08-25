import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import MainTemplate from '../containers/MainTemplate';
import AccountBigBoxList from '../components/AccountBigBoxList';
import UserAccountPlaceholder from '../components/UserAccountPlaceholder';

class UserAccounts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;
    const trimmed = [];
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

    let accountContent;
    trimmed[0] = JSON.parse(localStorage.getItem('userAccounts1'));
    trimmed[1] = JSON.parse(localStorage.getItem('userAccounts2'));

    if (trimmed.length === 0 || !trimmed[0]) {
      accountContent = (
        <UserAccountPlaceholder
          body="You do not have any accounts"
        />
      );
    } else {
      accountContent = (
        <AccountBigBoxList
          accountArray={trimmed}
          userDetails={userDetails}
        />
      );
    }

    return (
      <MainTemplate>
        <section className="box-wrapper acc-box l-flex-col">
          <h2 className="section-heading">My Accounts</h2>
          <div className="column-wrapper">
            <Link className="action-btn create-new-link" to="/user-dashboard/create-account">create new</Link>
            {accountContent}
          </div>
        </section>
      </MainTemplate>
    );
  }
}

const mapStateToComponentProps = (state) => {
  const { user } = state.auth;

  return {
    user,
  };
};

export default connect(mapStateToComponentProps)(UserAccounts);
