import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import '../index.css';
import authSwitcher from '../helpers/authSwitcher';

import HomePage from '../pages/HomePage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import UserPage from '../pages/UserPage';
import StaffPage from '../pages/StaffPage';
import AdminPage from '../pages/AdminPage';

const history = createBrowserHistory();

const AppRouter = ({ user }) => {
  const userPage = authSwitcher(user, 'client', UserPage);
  const staffPage = authSwitcher(user, 'cashier', StaffPage);
  const adminPage = authSwitcher(user, 'admin', AdminPage);

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/signin" component={LoginPage} />
        <Route path="/user-dashboard" component={userPage} />
        <Route path="/staff-dashboard" component={staffPage} />
        <Route path="/admin-dashboard" component={adminPage} />
      </Switch>
    </Router>
  );
};

const mapStateToComponentProps = state => (
  {
    user: state.auth.user,
  }
);

export default connect(mapStateToComponentProps)(AppRouter);
