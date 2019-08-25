import LoginPage from '../src/pages/LoginPage';
import UserDashboard from '../src/pages/UserDashboard';
import ForbiddenPage from '../src/pages/ForbiddenPage';
import authSwitcher from '../src/helpers/authSwitcher';

describe('AuthSwitcher', () => {
  it('returns the actual component', () => {
    expect(authSwitcher({ type: 'client' }, 'client', UserDashboard)).toEqual(UserDashboard);
  });

  it('returns the login page', () => {
    expect(authSwitcher({}, 'client', UserDashboard)).toEqual(LoginPage);
  });
});
