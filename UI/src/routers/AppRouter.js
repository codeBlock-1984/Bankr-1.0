import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomePage from '../pages/HomePage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';

const history = createBrowserHistory();

const AppRouter = () =>
{
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/signup" component={SignupPage}/>
        <Route path="/signin" component={LoginPage}/>
      </Switch>
    </Router>
  );      
}

export default AppRouter;
