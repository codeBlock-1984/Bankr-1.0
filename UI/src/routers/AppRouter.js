import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import '../index.css';

import HomePage from '../pages/HomePage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import UserPage from '../pages/UserPage';
import StaffPage from '../pages/StaffPage';

const history = createBrowserHistory();

const AppRouter = () =>
{
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/signup' component={SignupPage}/>
        <Route path='/signin' component={LoginPage}/>
        <Route path='/user-dashboard' component={UserPage}/>
        <Route path='/staff-dashboard' component={StaffPage}/>
      </Switch>
    </Router>
  );      
}

export default AppRouter;
