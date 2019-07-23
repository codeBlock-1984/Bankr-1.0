import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import SignupPage from './components/SignupPage';
import './index.css';


const App = () =>
{
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/signup" component={SignupPage}/>
    </Switch>
  );      
}

export default App;
