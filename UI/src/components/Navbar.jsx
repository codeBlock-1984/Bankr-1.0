import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const { navClass, linkClass, data } = props;

  return (
    <nav className={navClass}>
      {
        data.map((link, index) => {
          const { linkUrl, linkTitle } = link;

          return (  
            <Link
              key={index}
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
