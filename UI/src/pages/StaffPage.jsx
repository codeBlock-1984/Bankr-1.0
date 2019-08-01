import React from 'react';

import { staffNavLinks } from '../components/componentsData';
import MainNav from '../components/MainNav';
import MainAside from '../components/MainAside';

class StaffPage extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="page-wrapper page-wrapper--bg--plain main-wrapper">
        <MainNav links={staffNavLinks}/>
        <MainAside type={'staff'}/>
      </div>
    );
  }
}

export default StaffPage;
