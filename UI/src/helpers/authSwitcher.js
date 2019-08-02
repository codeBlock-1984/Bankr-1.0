import _ from 'lodash';

import LoginPage from '../pages/LoginPage';
import ForbiddenPage from '../pages/ForbiddenPage';


const authSwitcher = (user, role, actualComponent) => {
  if (!_.isEmpty(user)) {
    const { type } = user;
    if (type === role) {
      return actualComponent;
    }
    return ForbiddenPage;
  }
  return LoginPage;
};

export default authSwitcher;
