import React from 'react';

import NavListItem from './NavListItem';

const NavList = (props) => {
  const { links, className } = props;
  let key = 0;

  return (
    <ul className={className}>
      {
        links.map((link) => {
          key += 1;
          return (
            <NavListItem
              page={link.page}
              listClass={link.listClass}
              iconClass={link.iconClass}
              linkClass={link.linkClass}
              spanClass={link.spanClass}
              title={link.title}
              key={key}
            />
          );
        })
      }
    </ul>
  );
};

export default NavList;
