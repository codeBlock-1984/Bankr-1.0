import React from 'react';
import { Link } from 'react-router-dom';

const NavListItem = (props) => {
  const {
    page,
    listClass,
    linkClass,
    spanClass,
    iconClass,
    title,
  } = props;
  // const handleClick = (e) => {

  // }

  return (
    <li className={listClass}>
      <Link to={page} className={linkClass}>
        <i className={iconClass} />
        <span className={spanClass}>{title}</span>
      </Link>
    </li>
  );
};

export default NavListItem;
