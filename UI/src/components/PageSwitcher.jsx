import React from 'react';
import { Switch, Route } from 'react-router-dom';

import UserDashboard from '../pages/UserDashboard';
import UserAccounts from '../pages/UserAccounts';
import UserTransactions from '../pages/UserTransactions';
import StaffDashboard from '../pages/StaffDashboard';
import StaffAccounts from '../pages/StaffAccounts';
import CreditDebit from '../pages/CreditDebit';


const PageSwitcher = (props) => {
  switch(props.type) {
    case 'user':
      default:
      return (
        <Switch>
          <Route exact path='/user-dashboard' component={UserDashboard}/>
          <Route path='/user-dashboard/accounts' component={UserAccounts}/>
          <Route path='/user-dashboard/transactions' component={UserTransactions}/>
        </Switch>
      );
    case 'staff':
      return (
        <Switch>
          <Route exact path='/staff-dashboard' component={StaffDashboard}/>
          <Route path='/staff-dashboard/accounts' component={StaffAccounts}/>
          <Route path='/staff-dashboard/credit-debit' component={CreditDebit}/>
        </Switch>
      );
  }
    
};

export default PageSwitcher;
