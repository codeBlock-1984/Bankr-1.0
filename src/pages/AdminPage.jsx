import React from 'react';

import { adminNavLinks } from '../components/componentsData';
import MainNav from '../components/MainNav';
import MainAside from '../components/MainAside';

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-wrapper page-wrapper--bg--plain main-wrapper">
        <MainNav links={adminNavLinks} />
        <MainAside type={'admin'} />
      </div>
    );
  }
}

export default AdminPage;
