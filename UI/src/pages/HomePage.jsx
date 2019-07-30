import React from 'react';

import './HomePage.css';
import '../index.css';
import Navbar from '../components/Navbar';
import HomePageMain from '../components/HomePageMain';
import Footer from '../components/Footer';

class HomePage extends React.Component {

  render(){
    const links = [
      { linkUrl: '/signin', linkTitle: 'login' },
      { linkUrl: '/signup', linkTitle: 'sign up' }
    ]

    return (
      <div className="page-wrapper page-wrapper--bg l-flex-col">
        <Navbar 
         navClass={'landing-page-nav l-flex'}
         linkClass={'landing-page-nav__link'}
         data={links}
        />

        <HomePageMain />
        
        <Footer uniqueFooterClass='page-footer--small landing-page-footer' />
      </div>
    );
  }
}



export default HomePage
