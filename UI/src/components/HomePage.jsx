import React from 'react'
import PropTypes from 'prop-types'


import './HomePage.css'

class HomePage extends React.Component {

  render(){
    return (
      <div className="page-wrapper page-wrapper--bg l-flex-col">
        <nav className="landing-page-nav l-flex">
          <a className="landing-page-nav__link" href="sign-in.html">login</a>
          <a className="landing-page-nav__link" href="sign-up.html">sign up</a>
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
