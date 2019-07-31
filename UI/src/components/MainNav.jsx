import React from 'react';
import { connect } from 'react-redux';

import Footer from '../components/Footer';
import MainNavHeader from './MainNavHeader';
import NavList from './NavList';

class MainNav extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { links } = this.props;
    return (
      <nav className="main-nav">
        <MainNavHeader />
        
        <NavList
          links={links}
          className={'main-nav__list top-list'}
          />

        <Footer 
          uniqueFooterClass={'page-footer--big'}
          uniqueFooterTextClass={'nav-footer__text'}
          /> 
      </nav>
    );
  }
}

export default connect()(MainNav);
