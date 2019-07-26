import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import './index.css';


const App = () =>
{
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/signup" component={SignupPage}/>
      <Route path="/signin" component={LoginPage}/>
    </Switch>
  );      
}

export default App;
