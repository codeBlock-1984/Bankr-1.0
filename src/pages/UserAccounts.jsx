import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import MainTemplate from '../containers/MainTemplate';
import AccountBigBoxList from '../components/AccountBigBoxList';
import UserAccountPlaceholder from '../components/UserAccountPlaceholder';
import NewAccountModal from '../components/NewAccountModal';

class UserAccounts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalClass: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleClick() {
    this.setState({
      modalClass: 'active--brand-modal',
    });
  }

  handleModalClose() {
    this.setState({
      modalClass: '',
    });
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
    } else if (_.isEmpty(trimmed[1])) {
      accountContent = (
        <AccountBigBoxList
          accountArray={[trimmed[0]]}
          userDetails={userDetails}
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

    const { modalClass } = this.state;

    return (
      <MainTemplate>
        <NewAccountModal active={modalClass} closeModal={this.handleModalClose} />
        <section className="box-wrapper acc-box l-flex-col">
          <h2 className="section-heading">My Accounts</h2>
          <div className="column-wrapper">
            <button
              type="button"
              className="action-btn create-new-link"
              onClick={this.handleClick}
            >
              create new
            </button>
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
