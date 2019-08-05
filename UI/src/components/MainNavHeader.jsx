import React from 'react';

import { Link } from 'react-router-dom';

const MainNavHeader = () => (
  <header className="main-nav__header l-flex">
    <h1 className="main-nav__heading h-40">
      <Link className="home-link" to="/">Bankr</Link>
    </h1>
  </header>
);

export default MainNavHeader;
