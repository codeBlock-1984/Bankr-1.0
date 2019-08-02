import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import UserDashboard from '../pages/UserDashboard';
import UserAccounts from '../pages/UserAccounts';
import UserTransactions from '../pages/UserTransactions';
import StaffDashboard from '../pages/StaffDashboard';
import StaffAccounts from '../pages/StaffAccounts';
import CreditDebit from '../pages/CreditDebit';
import AdminDashboard from '../pages/AdminDashboard';
import AdminAccounts from '../pages/AdminAccounts';
import Users from '../pages/Users';
import authSwitcher from '../helpers/authSwitcher';

let userDashboard;
let userAccounts;
let userTransactions;

const PageSwitcher = ({ user, type }) => {
  switch (type) {
    case 'user':
    default:
      userDashboard = authSwitcher(user, 'client', UserDashboard);
      userAccounts = authSwitcher(user, 'client', UserAccounts);
      userTransactions = authSwitcher(user, 'client', UserTransactions);
      return (
        <Switch>
          <Route exact path="/user-dashboard" component={userDashboard} />
          <Route path="/user-dashboard/accounts" component={userAccounts} />
          <Route path="/user-dashboard/transactions" component={userTransactions} />
        </Switch>
      );
    case 'staff':
      return (
        <Switch>
          <Route exact path="/staff-dashboard" component={StaffDashboard} />
          <Route path="/staff-dashboard/accounts" component={StaffAccounts} />
          <Route path="/staff-dashboard/credit-debit" component={CreditDebit} />
        </Switch>
      );
    case 'admin':
      return (
        <Switch>
          <Route exact path="/admin-dashboard" component={AdminDashboard} />
          <Route path="/admin-dashboard/accounts" component={AdminAccounts} />
          <Route path="/admin-dashboard/users" component={Users} />
        </Switch>
      );
  }
};

const mapStateToComponentProps = state => (
  {
    user: state.auth.user,
  }
);

export default connect(mapStateToComponentProps)(PageSwitcher);
