import React from 'react';

import { mobileMenuLinks } from './componentsData';
import NavList from './NavList';

const MobileMenu = (props) => {
  return (
    <div id="mobile-menu" className="mobile-nav">
      <NavList
        links={mobileMenuLinks}
        className={'mobile-nav__list'}
        />
    </div>
  );
};

export default MobileMenu;
