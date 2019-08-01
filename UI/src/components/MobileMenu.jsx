import React from 'react';

import NavList from './NavList';

const MobileMenu = (props) => {
  const { mobileMenuLinks } = props;
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
