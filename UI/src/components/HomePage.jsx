import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom';

import './HomePage.css';
import '../index.css';
import SignupPage from './SignupPage';

class HomePage extends React.Component {

  render(){
    return (
      <div className="page-wrapper page-wrapper--bg l-flex-col">
        <nav className="landing-page-nav l-flex">
          <Link to="/signin" className="landing-page-nav__link" >login</Link>
          <Link to="/signup" className="landing-page-nav__link" >sign up</Link>
        </nav>
        <main className="landing-page-main l-flex">
          <div className="landing-page-main__title-box">
            <h1 className="landing-page-main__title h-100">Bankr</h1>
            <p className="landing-page-main__description h-40">Secure online banking application.</p>
            <p className="landing-page-main__description h-30">Easy to use, efficient, fast</p>
          </div>
        </main>
        <footer className="page-footer page-footer--small landing-page-footer">
          <p className="page-footer__text">Copyright © Bankr 2019</p>
        </footer>
      </div>
    );
  }
}



export default HomePage
