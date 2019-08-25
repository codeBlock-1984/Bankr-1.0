import React from 'react';
import { connect } from 'react-redux';

import MainTemplate from '../containers/MainTemplate';
import AccountsTable from '../components/AccountsTable';
import { getAccounts } from '../actions/account.action';

class StaffAccounts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getAccounts: getAllAccounts, token } = this.props;
    getAllAccounts(token);
  }

  render() {
    const { accounts } = this.props;

    return (
      <MainTemplate>
        <section className="box-wrapper account-form-container l-flex l-flex-col">
          <h2 className="section-heading">All Accounts</h2>
          <div className="account-form-wrapper l-flex l-flex-row">
            <AccountsTable
              data={accounts}
            />
          </div>
        </section>
      </MainTemplate>
    );
  }
}

const mapStateToProps = (state) => {
  const { allAccounts } = state.account;
  const { token } = state.auth.user;
  return (
    {
      accounts: allAccounts,
      token,
    }
  );
};

export default connect(mapStateToProps, { getAccounts })(StaffAccounts);
