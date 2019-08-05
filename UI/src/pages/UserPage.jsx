import React from 'react';

import { userNavLinks } from '../components/componentsData';
import MainNav from '../components/MainNav';
import MainAside from '../components/MainAside';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-wrapper page-wrapper--bg--plain main-wrapper">
        <MainNav links={userNavLinks} />
        <MainAside type={'user'} />
      </div>
    );
  }
}

export default UserPage;
