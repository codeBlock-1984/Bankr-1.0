export const redirectToDashboard = (type, history) => {
  let dashboard;

  switch(type) {
    case 'cashier':
      dashboard = '/staff-dashboard';
      break;
    case 'admin':
      dashboard = '/admin-dashboard';
      break;
    case 'client':
    default:
      dashboard = '/user-dashboard';
  }
  history.push(dashboard);
};
