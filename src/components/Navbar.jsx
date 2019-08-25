import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const { navClass, linkClass, data } = props;
  let key = 0;

  return (
    <nav className={navClass}>
      {
        data.map((link) => {
          const { linkUrl, linkTitle } = link;
          key += 1;

          return (
            <Link
              key={key}
              to={linkUrl}
              className={linkClass}
            >
              {linkTitle}
            </Link>
          );
        })
      }
    </nav>
  );
};

export default Navbar;
