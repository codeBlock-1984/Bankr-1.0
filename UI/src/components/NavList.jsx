import React from 'react';

import NavListItem from './NavListItem';

const NavList = (props) => {
  const { links, className } = props;

  return (
    <ul className={className}>
      {
        links.map((link, index) => (
          <NavListItem
            page={link.page}
            listClass={link.listClass}
            iconClass={link.iconClass}
            linkClass={link.linkClass}
            spanClass={link.spanClass}
            title={link.title}
            key={index}
          />
        ))
      }
    </ul>
  );
};

export default NavList;
